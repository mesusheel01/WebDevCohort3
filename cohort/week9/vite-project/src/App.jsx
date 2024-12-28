import React, { useEffect, useState } from 'react'

const App = () => {
    const [counterVisible, setCounterVisible] = useState(true)
  return (
    <div>
        {
            counterVisible && <Counter counterVisible={counterVisible}
                setCounterVisible ={setCounterVisible}
            />
        }
    </div>
  )
}
const Counter = ({counterVisible, setCounterVisible})=>{
    const [count, setCount ] = useState(0)

    console.log('counter')
//mounting, re-rednering, unmountin g
    useEffect(()=>{

        const clearthisone = setInterval(() => {
            setCounterVisible(!counterVisible)
        }, 1000);

        return ()=>{
            clearInterval(clearthisone)//cleanup function
        }
    },[])

    const increaseCount = ()=>{
        setCount(count+1)
    }

    return <div>
        <h1 id='text'>{count}</h1>
        <button onClick={increaseCount}>Increase count</button>
    </div>
}


export default App
