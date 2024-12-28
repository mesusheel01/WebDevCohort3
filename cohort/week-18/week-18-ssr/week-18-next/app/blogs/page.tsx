import axios from 'axios'
import React from 'react'

async function getBlogs() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return res.data
}


const page = async () => {

    const blogs = await getBlogs()
    console.log(blogs)
  return (
    <div>
        LearnVerse the best platform to learn any skill!
        { blogs.length && blogs.map((blog:Todo)=><Todo title={blog.title} completed={blog.completed}/>) }
    </div>
  )
}

interface Todo{
    title:string;
    completed: boolean;
}


const Todo =(Todo:Todo)=>{
    return <div>
        {Todo.title}
        {Todo.completed? "Done" : "Not done"}
    </div>
}

export default page
