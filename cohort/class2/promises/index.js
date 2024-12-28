// const fs = require('fs')
//
//
//   function susheelRead(){
//     return new Promise(function(resolve){
//       fs.readFile('../a.txt','utf-8',(err,data)=>{
//         resolve(data)
//       })
//     })
//   }
//
//
//   function onDone(data){
//     console.log(data)
//   }
//
//   susheelRead().then(onDone)


// var d = new Promise((resolve)=>{
//
//   setTimeout(()=>{
//     resolve('foo')
//   },1000)
// })
//
// function cb(){
//   console.log(d)
// }
//
// d.then(cb)
// //.then is called when promise is resolved

function susheelAsyncFunction(){
  let p = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Hi there!')
      },1000)
  })
  return p
}

async function main(){
  const value = await susheelAsyncFunction()
  console.log('Hithere') 
  console.log(value)
}

main()


 
