import express from "express";
import jwt from 'jsonwebtoken'
import { contentValidator, signinValidator, signupValidator } from "./inputValidator";
import { Content, User } from "./db";
import bcrypt from 'bcrypt'
import userAuthenticator from "./middlware";

const JWT_SECRET= 'passBeta'
const app = express()


app.use(express.json())
// signup for user
app.post("/api/v1/singup" , async (req,res)=>{
    const bodyToValidate = req.body
    const {success} = signupValidator.safeParse(bodyToValidate)
    if(!success){
        return res.status(400).json({
            msg: "Provide right inputs!"
        })
    }
    const {username, password} =  bodyToValidate
    try{
        const existingUser = await User.findOne({username})
        if(existingUser){
           return res.status(409).json({
                msg: "User exists with same username! "
            })
        }
        const saltRounds = 8
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
            username,
            password: hashedPassword
        })
        const token = jwt.sign({username, userId: newUser._id}, JWT_SECRET)
        res.status(201).json({
            msg: "User created with provided credentials!",
            token
        })
    }catch(err){
        res.status(500).json({
            msg: "Server Error",
            error: err instanceof Error ? err.message: 'Unknown error!'
        })
    }
})

// signin for user
app.post("/api/v1/singin" , async(req,res)=>{
    const bodyToValidate = req.body
    const {success} = signinValidator.safeParse(bodyToValidate)
    if(!success){
        return res.status(400).json({
            msg: "Provide right inputs!"
        })
    }
    const {username, password} =  bodyToValidate
    try{
        const existingUser = await User.findOne({username})
        if(!existingUser){
           return res.status(409).json({
                msg: "User does not exist! "
            })
        }
        const token = jwt.sign({username, userId: existingUser._id}, JWT_SECRET)
        res.status(201).json({
            msg: "User signed in successfully!",
            token
        })
    }catch(err){
        res.status(500).json({
            msg: "Server Error",
            error: err instanceof Error ? err.message: 'Unknown error!'
        })
    }
})


// post a content
app.post("/api/v1/content" , userAuthenticator, async (req,res)=>{
    const bodyToValidate = req.body
    const {success} = contentValidator.safeParse(bodyToValidate)

    if(!success){
        return res.status(400).json({
            msg: "Provide right input body!"
        })
    }
    const {link, type, title, tags}  = bodyToValidate
    const CurrUserId = req.userId
    try {
        const existingContent = await Content.findOne({title})
        if(existingContent){
            return res.status(409).json({
                msg: "Content with provided title already exist!"
            })
        }
        const newContent = await Content.create({
            link,
            type,
            title,
            tags,
            userId: CurrUserId
        })
        res.status(201).json({
            msg: "New content created",
            newContent
        })
    } catch (error) {
        res.json({
            msg: "Server error!",
            error: error instanceof Error? error.message : "Unknown Error!"
        })
    }
})


// get all the user posted content
app.get("/api/v1/content" ,userAuthenticator, async (req,res) => {
    const userId = req.userId
    try{
        const contents = await Content.find({userId})
        if(!contents){
            res.status(404).json({
                msg: "No content avalable for the user!"
            })
        }
        res.status(201).json({
            contents
        })
    }catch(err){
        res.status(500).json({
            msg: "Server error!"
        })
    }
})



// delete content
app.delete("/api/v1/content/:id" , (req,res)=>{
    const id = req.params.id
    try{
        await Content.findByIdAndDelete({_id: id})
        res.status(202).json({
            msg: "Content deleted successfully!"
        })
    }catch(err){
        res.status(500).json({
            msg: "Server Error!"
        })
    }
})

// create a shareable link
app.post('/api/v1/brain/share', (req,res)=>{

})


//listen
app.listen(3000, ()=>{
    console.log(`Server is running at http://localhost:${3000}`)
})
