import express from 'express'
import userRouter from './routes/userRoute'
import contentRouter from './routes/contentRoute'
import dotenv from 'dotenv'
dotenv.config()

const port  = process.env.PORT
const app = express()
export const jwt_pass = process.env.JWT_SECRET

//to accept the req body
app.use(express.json())


app.get("/", (req,res)=>{
    res.send("Server is running!")
})
// api for user sign
app.use('/api/v1/user', userRouter)

//api for content
app.use('/api/v1/content', contentRouter)


//shareable link



app.listen(port, ()=>{
    console.log(`Server is hosted on http://localhost:${port}`)
})
