import express from 'express'

const app = express()
const port = 3000;

app.use(express.json())


app.post('/health-checkup', (req,res)=>{

  //kidneys = [1,2]
  const kidneys = req.body.kidneys
  const kidLen = req.body.kidLen

  if(kidLen > 2) {
    res.send("You have abnormal kidney len")
  }else{
    res.send("You have " +kidLen + " kidneys")
  }
})

/// we need to hide the error that shows if user sends different body so that enduser cannot manipulate the body according to backend so this middleware is introduced at the end of all the middlewares --> Global cathes
app.use((err,req,res,next)=>{
   
  res.json("Sorry something is up with our server!")
})


app.listen(port, ()=>{
  console.log(`Server is lisntening at http://localhost:${port}`)
})
