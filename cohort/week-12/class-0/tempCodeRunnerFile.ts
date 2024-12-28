// Interfaces in typescript
// An interface lets you define the structure of an object e.g:
interface Usertype{
    firstname: string,
    lastname: string,
    age: number,
}

// function with interfaces
function greet(user: Usertype){
    console.log(`Hello , ${user.firstname} ${user.lastname}`)
}
