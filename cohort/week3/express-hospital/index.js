import express from 'express'

const app = express()
const port = 3000

const date = new Date()


let numberOfReq = 0;
const rateLimits = (req,res,next)=>{
  numberOfReq += 1;
  console.log(numberOfReq)
  next()

}
//why body needs middleware to get input in req but headers and query doesn't its because body can come in any format but we want json so we spacify through app.use(express.json()) we dont want any kind of input from the client
app.use(rateLimits)
app.use(express.json())

//hanldling user request and sending response
const userMiddleware = (req,res,next) =>{
  const seconds = date.getSeconds 
  const username = req.headers.username
  const pass = req.headers.pass 

  if(username != "susheel" || pass != "passme"){
    res.status(403).json({
      "msg": "User does not exist!"
    })
  }else{
    next()
  }
}

const kidneyMiddleware = (req,res,next) =>{
 const kidneyId = req.query.kidneyId
 
  if(kidneyId != 1 && kidneyId != 2){
    res.status(403).json({
      "msg": "Input is not valid for humans!"
    })
  }else{
    next()
  } 
}

app.get('/health-checkup',userMiddleware, kidneyMiddleware,rateLimits, (req,res)=>{
    res.json({
    msg: "Your kidney is fine!"
  })
})

app.listen(port, ()=>{
  console.log(`Server is listening at http://localhost:${port}`)
})
