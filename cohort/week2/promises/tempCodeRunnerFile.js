 function logMessages(msg, delay){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log(msg)
            resolve()
        },delay)
    })
 }
