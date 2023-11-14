import React, { useState } from 'react'
import axios from "axios"

const AddTask = () => {
    const [task, setTask] =useState({
        title: "",
        descr: "",
        cover: ""
    })

    const handleChange = (e) =>{
        setTask((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.post('')
        } catch (error) {
            
        }
    }

  return (
    <div>
        <h1>Add task</h1>
        <input type='text' placeholder='title' onChange={handleChange} name='title'/>
        <input type='text' placeholder='descr' onChange={handleChange} name='descr'/>
        <input type='text' placeholder='cover' onChange={handleChange} name='coveronChange={handleChange} '/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddTask