import mongoose from 'mongoose'
import express from 'express'

const app = express()
const port = 3000;


mongoose.connect('mongodb+srv://admin:passme@cluster0.t6rr9na.mongodb.net/userappnew')

const User = mongoose.model('Users', {name: String, email: String, password: String})

app.use(express.json())

app.post('/signup', async (req,res)=>{
  const username = req.body.username
  const password = req.body.password
  const name = req.body.name

  const userExist = await User.findOne({email:username})
  if(userExist){
    return res.status(400).send("User already exist in the db!");
  } 
  const user = new User ({
    name: name, 
    email: username, 
    password: password
})  

user.save();
  res.json({
    msg: "user created with details:",
    user
  })
})


app.listen(port, ()=>{
  console.log(`Server is running at http://localhost;${port}`)
})
