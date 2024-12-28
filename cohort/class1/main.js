// console.log('Hello world!')
// console.log(a);// code here will partially run in js as it is interpreted language but will show error for 2nd statemnet as no a variable have been defined

// -------variables in js

// let a  = 5
// a = 23
// console.log(a)

// let name = 'susheel'

// let age = 18
// let isMarrried = false
// console.log(`my name is ${name} age is ${age} and am i married ${isMarrried}`)

// let allUsers = [{
//     firstName: 'Raman',
//     gender : 'male'
// },
// {
//     firstName: 'Suresh',
//     gender : 'male'
// },
// {
//     firstName: 'lavanya',
//     gender : 'female'
// },
// ]
// for(let i = 0; i<allUsers.length; i++){
//     if(allUsers[i]['gender'] == 'male') console.log(allUsers[i]['firstName'])
// }


//write a function that finds the fum o ftwo numbers
// callback
// function add(a,b,fnToCall){
//     res = a+b
//     fnToCall(res,passive)
// }
// function pretify(a,fnToCall){
//     console.log('The result of sum of two numbers is ' + a)
//     fnToCall(a)
// }
// function  passive(a) {
//     console.log('Sum of two num are' + a)
// }
// let a = add(2,5,pretify)

//here the calculatearithemtic funtion is higher order function
function calculateArithmetic(a,b, arithemticFinalFunction){
    const ans = arithemticFinalFunction(a,b)
    return ans
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value = calculateArithmetic(4,6,sub)
console.log(value)



// console.log(sum)


// var a = prompt("What is your first name")
// var b = prompt("What is your last name")

// function greet(a,b){
//     console.log('Good moring '+ a+ " "+b)
// }

// greet(a,b)


// -------set timeout

// setTimeout(() => {
//     console.log('called after 3 sec')
// }, 3000);

function greet(){
    console.log('hellow')
}
// setTimeout(greet, 3400)

//  setInterval(() => {
//     console.log('hellow')
// }, 1999)
