import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import "../../src/App.css"

const Task = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        const fetchAllTasks = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/tasks")
                setTasks(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllTasks()
    }, [])

    const handleClick = async (id) =>{
        try {
            await axios.delete("http://localhost:8800/tasks/"+id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='task-form'>
        <h1>Your tasks</h1>
        <div className="tasks">
            {tasks.map(task=>(
                <div className="task" key={task.id}>
                    {task.title}
                    <button onClick={()=>handleClick(task.id)}>Delete</button>
                </div>
            ))}
        </div>
        <button className="btn">
            <Link to="/add">Add new task</Link>
        </button>
    </div>
  )
}

export default Task