import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    const [task, setTask] = useState({
        title: ''
    })

    const navigate = useNavigate()
    const location = useLocation()

    const taskId = location.pathname.split("/")[2]

    const handleChange = (e) =>{
        setTask(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/tasks/" + taskId, task)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div className='form'>
        <h1>Update new task</h1>
        <input type="text" placeholder='add task...' onChange={handleChange} name='title'/>
        <button className='btn-add' onClick={handleClick}><Link to="/update">Update</Link></button>
    </div>
  )
}

export default Update