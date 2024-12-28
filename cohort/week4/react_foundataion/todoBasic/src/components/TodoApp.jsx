import React, { useState } from 'react';

const TodoApp = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Todos, setTodo] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Todos.length + 1,
            title: title,
            description: description,
        };
        setTodo([...Todos, newTodo]); // Add the new todo to the list
        setTitle(""); // Clear the title input
        setDescription(""); // Clear the description input
    };

    const handleDone = (id) => {
        const updatedTodos = Todos.filter((todo, index) => index !== id); // Filter out the todo by index
        setTodo(updatedTodos); // Update the state with the new list
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                />
                <input
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={handleClick}>Add todo</button>
            </form>
            <div>
                {Todos.length > 0 &&
                    Todos.map((todo, index) => (
                        <div key={todo.id}>
                            <p>{todo.title}</p>
                            <p>{todo.description}</p>
                            <button onClick={() => handleDone(index)}>Mark Done</button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TodoApp;
