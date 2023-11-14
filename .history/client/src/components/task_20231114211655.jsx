import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

const Task = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        const fetchAllTask = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/tasks")
                setTasks(res.data)
                console.log(res)
            } catch (error) {
                
            }
        }
        fetchAllTask()
    }, [])

  return (
    <div>
        <h1>Tasks</h1>
        <div className="tasks">
            {tasks.map(task=>(
                <div className="task" key={task.id}>
                    <h2>{task.title}</h2>
                </div>
            ))}
        </div>
        <button><Link to="/add">Add new task</Link></button>
    </div>
  )
}

export default Task