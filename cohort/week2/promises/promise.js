//defining a promise is hard
//A promise in js is an object taht repesents the eventual completeion asynchronouse operation and its resulting value;

// function waitFor3sec(resolve){
//     setTimeout(resolve,3000)
// }

// function main(){
//     console.log("main is called after 3 sec")
// }

// waitFor3sec(main)


// function waitFor3sec(resolve){
//     setTimeout(resolve, 3000)
// }


// function setTimeoutPromisified(){
//     return new Promise(waitFor3sec)
// }//as this funciton is done calling it returns new promise which resolves a function waitfor3Sec taking .then argument as main

// function main(){
//     console.log("main is called")
// }

// setTimeoutPromisified().then(main) //promise based approach

// setTimeout(3000, main) //callback based approach

// function random(resolve){ //resolve is also a function
//     setTimeout(resolve, 3000)
// }


// function callback(){
//     console.log('promise completed')
// }


// let p =  new Promise(random)
// p.then(callback)
const fs = require('fs')
// function readTheFile(SendTheFinalValue){
//     //do ur thing, whenever urhavethe final value, call sendThefinalvalue('finalvalue)
//     fs.readFile('a.txt', 'utf-8',(err,data)=>{
//         SendTheFinalValue(data);
//     })
// }


// function readFile(fileName){
//     return new Promise(readTheFile);
// }

// const p = readFile()

// function callback(contents){
//     console.log(contents)
// }

// p.then(callback)


//the real operation that we want ot promisfy

// function setTimeoutPromisified(time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve, time)
//     })
// }

// function callback(){
//     console.log('time has passed')
// }

// const p = setTimeoutPromisified(5000)
// p.then(callback)

function promiseFn(resolve){
    let c = 0;
    for (let i = 0; i< 10000000; i++){
        c++
    }
    resolve('hi there susheel')
}
const p = new Promise(promiseFn)

function callback(str){
    console.log(str)
}

p.then(callback)
