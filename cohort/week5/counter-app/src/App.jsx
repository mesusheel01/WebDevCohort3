import { useState } from 'react'
import Todo from './componenets/Todo.jsx'


const App = ()=>{
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [todos, setTodos] = useState([])
  return <>
      <Todo 
      title={title}
      setTitle={setTitle}
      description={description}  
      setDescription={setDescription}
      todos={todos}
      setTodos={setTodos}
    />
    {
      todos.length>0 && (
        <div>
          {
            todos.map((todo, id)=>(
              <div key={id}>
                <p>{todo.title}</p>
                <p>{todo.description}</p>
              </div>
            ))
          }

        </div>
      ) 
    }
    </> 
}


export default App
