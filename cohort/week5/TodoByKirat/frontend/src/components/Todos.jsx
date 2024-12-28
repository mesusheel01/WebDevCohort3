import React from 'react'
// todos = [
//     {
//         title: asdfasdf,
//         description: adsfasdf
//     }
// ]
const Todos = ({todos}) => {
  return (
    <div>
        {todos.map((todo,index) => (
            <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true? "Completed" : "Mark as completed "} </button>
            </div>
        ))}
    </div>
  )
}

export default Todos
