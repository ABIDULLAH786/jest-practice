const express = require("express")
const app = express();
app.use(express.json());

const users = []
app.get('/users',(req,res)=>{
    res.send(users);
})

app.post('/create-user',(req,res)=>{
    const {name,password} = req.body;
    users.push(req.body)
    res.send(req.body);
})

module.exports = app;