const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

let todos = [];

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/style.css',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'style.css'));
// })

// app.get('/script.js',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'script.js'));
// })

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/addtodo', (req, res)=>{
    let {newTask} = req.body;
    todos.push(newTask);
    res.send(todos);
})

app.get('/getdata', (req,res)=>{
    res.send(todos);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+ PORT);
});