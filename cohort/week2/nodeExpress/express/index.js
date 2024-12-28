import express from 'express'

const app = express()
const port = 3000


var users = [{
  name: 'Susheel',
  kidneys: [{
    healthy: false
  },{
    healthy: true
  }]
}]


app.use(express.json())


//functios
const isAnyUnhealthyKidney = ()=>{
  let un = false;
  for(let i = 0 ; i < users[0].kidneys.length; i++){
    if(users[0].kidneys.healthy){
      un = true;
    }
  }
  return un;
}


// Get method will going to consultation to get a checkup
app.get('/',(req,res)=>{
  //write logic
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberofHealthyKidneys = 0;
  for(let i = 0; i< johnKidneys.length; i++){
    if(johnKidneys[i].healthy){
      numberofHealthyKidneys += 1
    }
  }
  console.log(johnKidneys)
  const numberOfUnhealthyKidneys = numberOfKidneys-numberofHealthyKidneys
  res.json({
    numberOfKidneys,
    numberofHealthyKidneys,
    numberOfUnhealthyKidneys
  })
})

// post method will patient going to get a kidney
app.post('/', (req,res)=>{
  //for post request you send data in body
  const isHealthy = req.body.isHealthy
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: 'Done!'
  })
})

// put method will be used to replace kidney
app.put('/', (req,res)=>{
  if(isAnyUnhealthyKidney()){
      for(let i  = 0 ; i< users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
        }
      res.json({msg: 'Kidneys replaced!'})
  }else{
    res.status(411).json({msg: 'No unhealthy kidney to replace!'})
  }
})

// delete method will be used to remove unhealthy kidney
app.delete('/', (req,res)=>{
  if(isAnyUnhealthyKidney()){
    const newKidneys = []
    for(let i = 0; i < users[0].kidneys.length; i++){
      if(users[0].kidneys[i].healthy){
        newKidneys.push({
          healthy: true
        })
      }
    }
    users[0].kidneys=newKidneys
    res.json({msg: 'done!'})
  }else{
    res.status(411).json({msg: 'No unhealthy kidney to fix!'});
  }
 })


app.listen(port, (req,res)=>{
  console.log(`Server is listening on http://localhost:${port}`)
})
