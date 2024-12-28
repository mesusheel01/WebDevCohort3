//write a function that prints
// 1: hi after 1 seconds
//2: hello after 3 seconds after step 1
// 3: hi after 5 seconds after step 2

// let arr = ['hi', 'hello', 'hi there']
// i = 0;
// function call(){
//     console.log(arr[i])
//     i++;
// }
// setTimeout(call, 1000)
// setTimeout(call, 4000)
// setTimeout(call, 6000)

//callback hell
// setTimeout(()=>{
//     console.log('hi');
//     setTimeout(()=>{
//         console.log('hello');
//         setTimeout(()=>{
//             console.log('Hello there')
//         },5000)
//     },3000)
// },1000)



 /// how to use promisified version of this code or in async await fashion

 function logMessages(msg, delay){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log(msg)
            resolve()
        },delay)
    })
 }


//  logMessages('hi',1000)
//  .then(logMessages('hello'), 3000)
//  .then(logMessages('hello there',5000))

//check using async await syntax

async function printmsg(){
    await logMessages('hi', 1000)
    await logMessages('hello', 3000)
    await logMessages('hi there', 5000)
}
printmsg()
