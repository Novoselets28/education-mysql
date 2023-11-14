import React, { useEffect, useState } from 'react';
import axios from "axios"

const Task = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        const fetchAllTask = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/books")
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
            {tasks.map((task)=>{
                <div className="task">
                    {task.cover && <img src={task.cover} alt=''/>}
                    <h2>{task.title}</h2>
                    <p>{task.descr}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Task