require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/insta', (req, res)=>{
    res.send('Instagram')
})

app.get('/login', (req, res)=>{
    res.send('<h2> Abhi login page ni bna, kahi aur ja ke login kr le :(')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${port}`)
})