const fs = require('fs')
//file system module 
//
function susheelRead(cb){
  fs.readFile('a.txt','utf-8', function(err,data){
      cb(data)
  })  
}
function printData(data){
  console.log('Reading from cb and async calls!')
  console.log(data)
}

susheelRead(printData)
