const express = require('express');
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.end("Hello World!")
})
app.get('/about', (req,res)=>{
    res.end("I am shivakumar, Passionate software-developer")
})

app.listen(port,()=>{
    console.log(`Example app listening ar http://localhost:${port}`)
})