const input = [ 1,3,45,3,4,6]


// const ans = input.map((val)=> val*2)
//
// console.log(ans)


//---------filter


// const ans = input.filter(val => val!==45)


// const ans = input.filter(val => val%2 === 0)

const square = i => i*i



const map = (arr,fn)=>{

  const tranformedArr =[]
  for(let i = 0 ; i< arr.length;i++){
    tranformedArr.push(fn(arr[i]))
  }
  return tranformedArr
}

const ans = map(input,square)




console.log(ans)
