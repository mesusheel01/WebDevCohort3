import React, { useState } from 'react'

const CreateTodo = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  return (
    <div>
      <input
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      style={{
        padding:10,
        margin:10
      }} type='text' placeholder='title' />

        <br/><br/>
      <input
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      style={{
        padding:10,
        margin:10
      }} type='text' placeholder='description' /><br/><br/>
     <button
        style={{
        padding:10,
        margin:10
      }}
      onClick={()=>{
        fetch('http://localhost:3000/todo',{
            method:"POST",
            body: JSON.stringify({
                title:title,
                description: description
            }),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(async (res)=>{
            const json = await res.json()
            alert(json.msg)
        })
     }} >Add Todo</button>
    </div>
  )
}

export default CreateTodo
