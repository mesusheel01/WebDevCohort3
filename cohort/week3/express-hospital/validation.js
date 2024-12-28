import express from 'express'
import {z}  from 'zod'


const app = express()
const port = 3000;

const schema = z.array(z.number());

app.use(express.json())

app.use('/health-checkup', (req,res)=>{
  const kidneys = req.body.kidneys
  const response = schema.safeParse(kidneys)
  if(!response.success){
    res.send({
      msg: "Wrong input!"
    })
  }else{
    res.send({
      response
    })
  }
})
// app.use((err,req,res,next)=>{
//    
//   res.json("Sorry something is up with our server!")
// })


app.listen(port, ()=>{
  console.log(`Server is lisntening at http://localhost:${port}`)
})
