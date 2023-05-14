const express = require('express');
const app = express();
const PORT = 4000;

let todo = []


app.get('/', (req, res)=>{
    // console.log(req);
    res.send("This is our first server!")
})

app.get('/login/:name', (req, res)=>{
    res.send(`Welcome to Login Page ${req.params.name}`)
})

// app.get('/login', (req, res)=>{
//     res.send(`Welcome to Login Page ${req.query.name}`)
// })

app.get('/todo', (req, res)=>{
    res.send(todo);
})

app.listen(PORT, ()=>{
    console.log('Server is up at PORT: ', PORT)
})