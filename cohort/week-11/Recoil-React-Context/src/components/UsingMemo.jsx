import React, { useEffect, useState,memo } from 'react'

const UsingMemo = () => {
  return (
        <Counter />
  )
}

function Counter(){
    const [count, setCount] = useState(0)


    return <div>
        <CurrentCount count={count}
        />
        <Increase setCount={setCount}/>
        <Decrease setCount={setCount}/>
    </div>
}


//memoizing the functions

const  CurrentCount = memo(({count}) =>{
    return <div>
        {count}
        {count%2 == 0?<h2>
            Even
        </h2>: <h2>Odd</h2>}
    </div>
})

const Decrease = memo(({setCount})=>{
    function decrease(){
        setCount(count =>count-1)
    }
    return <div>
        <button onClick={decrease}>Decrease</button>
    </div>
})
const Increase = memo(({setCount})=>{
    function increase(){
        setCount(count => count + 1)
    }
    return <div>
        <button onClick={increase}>Increase</button>
    </div>
})


export default UsingMemo
