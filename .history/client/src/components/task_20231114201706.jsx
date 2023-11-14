import React, { useEffect, useState } from 'react';
import axios from "axios"

const Task = () => {
    const [task, setTask] = useState([])

    useEffect(()=>{
        const fetchAllTask = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/books")
                console.log(res)
            } catch (error) {
                
            }
        }
        fetchAllTask()
    }, [])

  return (
    <div>Task</div>
  )
}

export default Task