import React, { useRef, useState } from 'react'

const UseRef2 = () => {
    const [currentCount, setCurrentCount] = useState(1)
    const timerRef = useRef()

    function startClock(){
      const timer=   setInterval(() => {
            setCurrentCount(currentCount => currentCount+1)
        }, 1000);
        timerRef.current=timer
    }
    function stopClock(){
        clearInterval(timerRef.current)
    }


  return (
     <div>
        { currentCount }<br/>
        <button onClick={startClock}>StartClock</button>
        <button onClick={stopClock}>StopClock</button>
    </div>
  )
}

export default UseRef2
