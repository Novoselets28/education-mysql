import React, { useEffect, useState } from 'react'
import axios from "axios"

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
  return (
    <div>
        <h1>Tasks</h1>
        <div className="tasks">
            {tasks.map(task=>(
                <div className="task" key={task.id}>
                    {task.title}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Task