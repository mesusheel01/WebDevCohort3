// //basic variable declaration in type script
// // let firstname: string = 'susheel'

// // let age: number = 21
// // console.log(firstname + age)

// // Interfaces in typescript
// // An interface lets you define the structure of an object e.g:
// interface Usertype{
//     firstname: string,
//     lastname: string,
//     age: number,
// }
// // creating an object
// // you can create object based on interface:
// let user: Usertype = {
//     firstname: "Susheel",
//     lastname: "Rai",
//     age: 23
// }

// // function with interfaces
// function greet(user: Usertype){
//     console.log(`Hello , ${user.firstname} ${user.lastname} your age is ${user.age}`)
// }
// greet(user)


// // // in react the function will be written like this
// // // 1 type define kra
// interface TodoType {
//     title: string;
//     description: string;
//     done: boolean;
// }
// // 2 structure define kra
// interface TodoInput{
//     todo: TodoType;
// }
// const Todo : TodoType = {
//     title: "Go to sleep at 11",
//     description: "Sleeping is very essential for good health!",
//     done: false
// }
// function TodoPrint(todo: TodoInput){
//     console.log(`Title - ${todo.todo.title},\nDescription - ${todo.todo.description}\nDone - ${todo.todo.done} `)
// }
// TodoPrint({todo:Todo})
// //now we used both the things
// function Todo (props: TodoInput){
//     return (
//         <div>
//             <h3>{props.title}</h3>
//             <h4>{props.description}</h4>
//             <h5>{props.done}</h5>
//         </div>
//     )
// }
// // now we can use this like passing props to components

// <Todo todo={{
    // title: "Go to sleep at 11",
    // description: "Workout session at 5 pm",
    // done: false
// }}/>

// // types aliases
// // Type alsiases using type allow you to create custom types that can represent multipel types.
// // this type alias means that sum input can be both string or a number
type SumInput = number | string

function sum( a: SumInput, b: SumInput){
    console.log(a+b)
}
sum(3,5)
// // we can also take unionn and intersectionn of two or more interfaces like
// interface Manager{
//     name: string,
//     age: number
// }
// interface Employee{
//     name: string,
//     department: string
// }
// // here we toook type based on two interfaces and their interasection
// type TeamLead = Manager & Employee

// let t: TeamLead ={
//     name: "Susheel",
//     age: 32,
//     department: "dev"
// }

// console.log(t)

// // key takeaways from above learings:

// /*
//     --> Type annotations help with better tyep-checking and error detection.
//     --> Interfaces define the structure of an object and ensure objects adhere to a contract
//     --> Type Aliases (type) are used for creating union types and other type combinations
//     --> intersection types (*) allow you combine properties from multiple interfaces.
// */
