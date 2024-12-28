import express from 'express'
import {createTodo, updateTodo} from './types.js'
import './db/index.js'
import todo from './db/index.js'
import cors from 'cors'


const app = express()
const port = 3000

app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(express.json())

app.get('/todos', async(req,res)=>{
  //get todos
  try{
    const todos = await todo.find({})
    if(todos.length>0){
      res.status(200).json({
        todos
      })
    }
  }catch(err){
    res.status(401).json({
      msg: err.message
    })
  }
})

app.post('/todo',async (req,res)=>{
  // post a todo
  const payload = req.body
  const parsePayload = createTodo.safeParse(payload)
  if(!parsePayload.success){
    res.status(411).json({
      msg: "You sent the wrong inputs"
    })
  }else{
    await todo.create({
      title: payload.title,
      description: payload.description,
      completed: false

    })
    res.json({
      msg: "Todo created"
    })
  }

})
app.put('/completed', async (req,res)=>{
    const id = req.body
    const parsePayload = updateTodo.safeParse(id)
    if(!parsePayload.success){
      res.status(400).json({
        msg: 'Wrong inputs!'
    })
      return
  }
  await todo.updateOne({
    _id: req.body.id
  },{
    completed:  true
  })
  res.json({
    msg: "Todo updated!"
  })
})

app.listen(port, ()=>{
  console.log(`Server is listening at http://localhost:${port}`)
})
