import React, { useRef } from 'react'

const UseRef1 = () => {
    const inputRef = useRef()
    const focusOnInput = ()=>{
        inputRef.current.focus();
    }
  return (
    <div>
       SignUp page<br/><br/>
        <input ref={inputRef} id='name' type='text' /><br/><br/>
        <input id='pass' type='password' /><br/><br/>
        <button onClick={focusOnInput}>Signup</button>
    </div>
  )
}

export default UseRef1
