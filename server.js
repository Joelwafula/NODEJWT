const express = require('express')

const app = express()

app.use(express.json())

const jwt = require('jsonwebtoken')

const posts =[
    {
        username :"Kyle",
        title :"post 1"
    },
    {
     username :"Joel",
    title :"post 2 "

    },
]

app.get('/posts',(req,res)=>{
    res.json(posts)
})

app.post('/login',(req,res)=>{

    //Authenticate user
    

})

app.listen(3000)