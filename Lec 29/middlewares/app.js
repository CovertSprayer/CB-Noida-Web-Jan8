const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

let todos = [];

// middleware
app.use(express.json());
app.use(express.urlencoded());

// app.use((req, res, next)=>{
//     req.kuchBhi = {
//         a:'hello',
//         b:true
//     }
//     next();
// })

// app.use((req,res,next)=>{
//     console.log(req.kuchBhi);
//     next();
// })


app.get('/',(req,res)=>{
    // console.log(req.kuchBhi);
    res.send('Working Fine!');
})

app.get('/addtodo',(req,res)=>{
    todos.push(req.query.newTask);
    // console.log(req)
    res.redirect('/');
})

app.get('/gettodo',(req,res)=>{
    res.send(todos);
})

app.post('/addtodo', (req, res)=>{

    console.log(req);
    // console.log(req.body);
    let {newTask} = req.body;
    todos.push(newTask);
    res.send("Succefully added task!");
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+ PORT);
});