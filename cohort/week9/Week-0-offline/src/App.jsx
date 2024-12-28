import React, { useEffect, useState } from 'react'


const App = () => {
    const [count, setCount] = useState(0)

    const handleCount = ()=>{
        console.log("incrase count called ",count)
        setCount(count => count + 1)
    }

    useEffect(()=>{
        console.log("Set interval called!")
        setInterval(handleCount, 1000);
    },[])


    return <div>
        Count is {count}
    </div>
}

export default App
