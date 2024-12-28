import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000



app.use(express.json())



app.post('/' , (req,res)=>{
  // let a = 0;
  console.log(req.body)
  console.log('Request has been reached!')
  // for(let i = 0;  i < 1000000000000000000 ; i++){
  //   a += i;
  // } 
  
  // res.send('Hi this is a express server')
  res.send('Hi this is a express server')
})
// Express, by default, does not read the body of a POST request (or any request for that matter). So, you have to install some software (usually middleware) that recognizes the particular content-type of the incoming request body, reads the body from the incoming stream, parses it and places the result where you expect it (usually req.body).


app.get('/b' , (req,res)=>{
  res.send('<b>Hi there</b>')
})

app.listen(port, ()=>{
  console.log(`server is listening on http://localhost:${port}`)
})

// Create a simple http server in c from scratch
// Create a todo application where u store data in a file
// Create a rust/goland/java http server

