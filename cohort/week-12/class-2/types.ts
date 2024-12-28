// ----> Types pdhenge
// ---> Types cannot be implemented by classes and types can do union and intersection these are the two diffrences between types and interface

// type User = {
//     name:string;
//     age: number
// }
// function isLegal(user:User){
//     console.log(`hello ${user.name}`)
// }

// // unions and intersections

// type Employee = {
//     name: string;
//     startDate: string;
// }
// type Manager = {
//     name: string;
//     department : string;
// }

// type TeamLead = Employee | Manager //(union)
// type TeamLead = Employee & Manager //(intersection)

// // 'union' - isme dono k properties hone jaruri hai saare common and uncommon values hone chahiye
// // 'intercection' - isme ek ki ho ya dusre ki ho ya dono ki ho skti h ek to atomic hai isme



// const user : TeamLead = {
//     name: "susheel",
//     startDate: "23/08/23" ,
//     department: "dev"
// }


/// Create two types called User and Admin,

// interface Admin {
//     name: string;
//     permissions: boolean;
// }
// interface User {
//     name: string;
//     age: number
// }

// type userOrAdmin = User | Admin

// function  greet(user:userOrAdmin) {
//     console.log(user.name)
// }

// type meraTypeAge = number | string
// interface User {
//     age: meraTypeAge
// }

// --->Arrays in Ts

const arr =[12,23,21,1,3,45]


function findMax(arr: number[]): number{
    let maxValue = 0;
    for(let i = 0; i< arr.length; i++){
        if(maxValue < arr[i] ){
            maxValue = arr[i]
        }
    }
    return maxValue
}

console.log("The max value from array is " + findMax(arr))

interface User {
    firstName: string,
    lastName: string,
    age: number;
}

let users= [{
    firstName: "Susheel",
    lastName: "rai",
    age: 23,
},{
    firstName: "srijan",
    lastName: "kumar",
    age: 23
},{
    firstName: "ashu",
    lastName: "chaubey",
    age: 20
}]

function whoAreTheLegalUsers(arr:User[]) {
    for(let i = 0; i< arr.length;i++){
        if(arr[i].age > 18){
            console.log("user " + arr[i].firstName+arr[i].lastName +" can vote")
        }
    }
}
whoAreTheLegalUsers(users)


//clasrifying union and interseciton
interface rect{
    width: number
    height: number

}

interface name{
    name: string
}

// when we do
type intersectionType = name & rect
//here any interface can have a set of values where it will have a name as a property which can also have in a interface as it is open so its intersection looks like union
