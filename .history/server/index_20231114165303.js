import express from "express";
import mysql from "mysql";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "20111999",
    database: "test"
})

app.use(express.json())

app.get("/", (req, res)=>{
    res.json("hello")
})

app.get("/books", (req, res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res)=>{
    const q = "INSERT INTO books (`title`, `descr`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.descr,
        req.body.cover,
    ]
    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("task created")
    })
})

app.listen(8800, ()=>{
    console.log('Connected to server')
})