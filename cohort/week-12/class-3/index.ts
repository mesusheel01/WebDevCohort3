// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// }
// //what if i want to use some types from the User interface
// //rather than creating we can use pick
// //pick allows you to create a new types by selectin a set of properties from an existing type(Type)
// type updatedProps = Pick< User, "name"| "age" | "email" >

// const displayUserProfile = (updatedProps: updatedProps)=>{

// }

// /// -- Partial -> ?

// // firstly pick the prop
// // and then make it partial
// type updatedPartialProp = Partial<updatedProps>


// // --- ReadOnly ---

// const user = {
//     name: "Susheel",
//     age: 22
// }

// user.name = 'assdfhsdf'

// console.log(user.name)

// // what if we dont want to update the user at all we can use readonly api to making is unchangable during the runtime

// type User = {
//      name: string;
//      age: number;
// }

// const user : Readonly<User> ={
//     name: "Susheel",
//     age: 21
// }

// user.name = "asdfasdfasdf"

// //  Record and map

// type User = {
//     id: string;
//     username: string;
// }
// type users = {
//     [Key: string]: User
// }

// const users = {
//     "12jdfs":{
//         id: "12jdfs",
//         username:'Srijan'
//     },
//     "radasdf12":{
//         id: "radasdf12",
//         username: 'raman'
//     },
// }


// type Users = Record<string, {age:number; name:string}>


// ///////map -> another syntax to just create a key value pairs

// const users = new Map()
// users.set(
//     "12jdfs":{
//         id: "12jdfs",
//         username:'Srijan'
//     },
//     "radasdf12":{
//         id: "radasdf12",
//         username: 'raman'
//     },)
// users.set("12":{
//         id: "12jdfs",
//         username:'Srijan'
//     },
//     "sdrf2":{
//         id: "radasdf12",
//         username: 'raman'
//     },)

// const firstUserName = users.get('12jdfs')

// ----Exclude

type EventType = 'click' | "scroll" | "mouseover"

type ExcludeEvent = Exclude<EventType, 'scroll'> // 'click'|mouseover

const handleEvent = (event:ExcludeEvent)=>{
    console.log(`Handling event :${event}`)
}

handleEvent('click')
