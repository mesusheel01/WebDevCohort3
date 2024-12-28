// 1--- exercise 1
// res  = 30;

// function counter(){
//     if(res > 0){
//         console.log(res)
//         res -= 1
//     }
// }

// setInterval(()=>{
//     if(res > 0) counter()
// }, 1000);



// --- exercise 2  find the time between setimeout and calling a function

// setTimeout(func, 1000)
// function func(){
//     const date = new Date()

//     const seconds = date.getSeconds()
//     console.log('Diffrece bertween reaching to a function and calling it from settimeout it takes ' + seconds)
// }


// ----exercise 3 terminal for clock

function giveCurrentTime(){
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if(hours%10 == 0)hours = '0'+hours
    if(minutes%10 == 0)minutes = '0'+minutes
    if(seconds%10 == 0)seconds = '0'+seconds
    console.log(`${hours}:${minutes}:${seconds}`)
}

giveCurrentTime()





const user = {
    name: "Susheel",
    age : 23,
    gender: 'male'
}

console.log(JSON.stringify(user))

const users = '{"name":"Susheel","age":23,"gender":"male"}'

console.log(JSON.parse(users))
