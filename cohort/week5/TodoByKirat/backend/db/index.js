import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://admin:passme@cluster0.t6rr9na.mongodb.net/Todo-App').then(res=>{
  console.log("Connected to db")
}).catch(err=>{
  console.log(err.message)
})

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema)

export default todo
