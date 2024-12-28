import React, { useEffect, useState } from 'react'

const CustomRouter = () => {
    const [currentTab, setCurrentTab] = useState(1)

    useEffect(()=>{
        console.log(currentTab)
    },[currentTab])
    function handleClick(key)
    {
        setCurrentTab(key)
    }
  return (
    <div>()
        <button key={1} onClick={()=>handleClick(1)}>Home</button>
        <button key={2} onClick={()=>handleClick(2)}>About</button>
        <button key={3} onClick={()=>handleClick(3)}>Contact</button>
        <button key={4} onClick={()=>handleClick(4)}>Courses</button>
    </div>
  )
}

export default CustomRouter
