const express = require('express')
const api  = require('./api/api');


const port = 3000
const app=express()

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/api/', api);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })