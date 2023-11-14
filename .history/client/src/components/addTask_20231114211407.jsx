import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const AddTask = () => {
    const [task, setTask] =useState({
        title: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setTask((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/tasks", task)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h1>Add task</h1>
        <input type='text' placeholder='title' onChange={handleChange} name='title'/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddTask