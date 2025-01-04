// // function outerFunction(){
// //   let counter = 0;
// //   return function innerFunction(){
// //     counter ++;
// //     console.log(counter)
// //   };
// // }

// // const counter = outerFunction()
// // counter()


// // counter()
// // counter()

// function calculateRectangleArea(width, length){
//   return width * length;
// }

// console.log(calculateRectangleArea(10, 20))


// function youSayGoodBye(){
//     console.log("hello from outer function")
//     return function(){
//     console.log('Good Bye')
//   }
// }

// const sayGoodBye = youSayGoodBye()
// sayGoodBye()

// function stopWatch(){
//     var startTime = Date.now();
//     function getDelay(){
//         var elapsedTime = Date.now();
//         console.log("Delayed time is ", elapsedTime - startTime)
//     }
//     return getDelay;
// }

// const timer = stopWatch();
// timer()
// timer()

// // So closure is a function that is returned from another function and it has access to the outer scope of the function that returned it.
// console.log(bar);
// var bar = 100;
// v

// console.log(bar)
// console.log(foo())
// function foo(){
//     return "Hey sushee!"
// }
// var bar = 100;

// console.log(foo())

// const foo = ()=> "Hey sushee!"
// function foo() {
//    return "Hey sushee!"
// }
class Person{
    constructor(name){
        this.name = name;
    }
}

const sushee = new Person("Sushee")
console.log(sushee)
