// function greet(name: string): string {
//     return `hello gm ${name}`
// }

// console.log(greet('susheel'))

// let user : User= {
//     name: 'Susheel',
//     age:   23,
//     address :{
//         city: 'Khalilabad',
//         country: "India",
//         pin_code: 272175
//     }
// }

// let user2: User = {
//     name:"Srijan",
//     age: 23
// }
// // we will create a interface that can define the structure of complex inpout
// interface User{
//     name:string;
//     age:    number,
//     address?:{
//         city: string,
//         country: string,
//         pin_code: number
//     }
// }
// interface Office{
//     address:{
//         city: string,
//         country: string,
//         pin_code: number
//     }
// }
// function canVote(user: User): string{
//     return user.age > 18? `${user.name} can vote`: `${user.name} cannot vote`
// }

// console.log(canVote(user))


// ---implementing intgerfaces

// interface People{
//     name: string,
//     age: number,
//     greet :()=>string
// }

// let people: People ={
//     name:"susheel",
//     age: 23,
//     greet:()=> {
//         // return `hello gm ${people.name}` -> this cannot be written means name of a person cannot be used within object as in this function
//         return "Hi"

//     }
// }
// let greetingPeople = people.greet
// console.log(greetingPeople)


// -------- Classes in typescript that implements interfaces

// interface People{
//     name:string;
//     age:number;
//     greet(): void;
// }

// class Manager implements People{
//     name: string;
//     age: number;
//     gender: string;// we can add extra property but the variables that people interface defines should be declared and initialized in constructor as if not then will raise error

//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//         this.gender = 'Male'
//     }
//     greet(){
//         console.log(`Good morning ${this.name.toUpperCase()} `)
//     }
//     getter(){
//         console.log(this.name)
//         console.log(this.age)
//     }
// }
// let user = new Manager('susheel', 23)
// user.greet()


// // working of extends
// class Shape{

//     area(){
//         console.log("hi i am area")
//     }
// }
// class Reactange extends Shape{
//     width: number;
//     height: number;

//     constructor(width: number, height: number){
//         super()// will call the constructor of the super class from where this class extends
//         this.width = width;
//         this.height = height
//     }
// }

// const newReactangle = new Reactange(234,3234)
// console.log(newReactangle.height)


// ------------Abstract classes

abstract class  User {
    name:string
    constructor(name:string) {
        this.name =name
    }
    abstract greet(): string
    // in case of abstract class you can give the default implementation
    hello(){
        console.log("hi there " + this.name)
    }
}

class susheel extends  User {
    name:string
    constructor(name:string) {
        this.name =name
    }

    // in case of abstract class you can give the default implementation
}
