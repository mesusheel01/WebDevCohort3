import react from 'react'

const Todo = (props)=>{
  const {title, setTitle, description, setDescription,todos, setTodos} = props;
    
  const handleTodo = (e)=>{
    e.preventDefault()
    if(title.length && description.length){
      setTodos([...todos,{
          title,
          description
        }])
        console.log(todos)
        setTitle("")
        setDescription("")

        }
      }

  return <>
      <form style={{
        background: 'Black',
        color:"white",
        border: 2,    
      }}>
      <input 
        type="text"
        value={title}
        placeholder="Enter title"
        onChange={(e)=> setTitle(e.target.value)}
    /><br/><br/>
      <input 
        type="text"
        value={description}
        placeholder="Enter description"
        onChange={(e)=> setDescription(e.target.value)}
    /><br/><br/>
      <button onClick = {handleTodo}>Add Todo</button>
    </form>
        
    </>
}

export default Todo
