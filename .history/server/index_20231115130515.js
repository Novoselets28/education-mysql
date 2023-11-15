import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20111999",
    database: "test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.json("hello")
})

app.get("/tasks", (req, res)=>{
    const q = "SELECT * FROM tasks"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/tasks", (req, res)=>{
    const q = "INSERT INTO tasks (`title`) VALUES (?)"
    const values = [
        req.body.title,
    ]
    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("task created")
    })
})

app.delete("/tasks/:id", (req, res)=>{
    const taskId = req.params.id;
    const q = "DELETE FROM tasks WHERE id = ?"

    db.query(q,[taskId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("task deleted")
    })
})

app.put("/tasks/:id", (req, res)=>{
    const taskId = req.params.id;
    const q = "UPDATE tasks SET `title` = ? WHERE id = ?";
    const values = [
        req.body.title,
    ]

    db.query(q,[...values, taskId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("task updated")
    })
})

app.listen(8800, ()=>{
    console.log('Connected to server')
})