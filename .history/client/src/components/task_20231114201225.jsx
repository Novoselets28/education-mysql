import React, { useEffect, useState } from 'react';
import axios from "axios"

const Task = () => {
    const [task, setTask] = useState([])

    useEffect(()=>{
        const fetchAllTask = async ()=>{
            try {
                const res = axios
            } catch (error) {
                
            }
        }
    })
  return (
    <div>Task</div>
  )
}

export default Task