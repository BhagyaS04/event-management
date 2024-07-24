require('dotenv').config()

const express = require('express');
const cors=require('cors')
const app = new express;
const userModel = require('./model/userData');

require('./connection');

app.use(cors())
app.use(express.json())

app.get('/users', async(req, res)=>{
    console.log('inside')
    try{
        const data = await userModel.find();
        console.log(data)
        res.send(data);
        
    }
    catch(error){
        console.log("error")
    }
})

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on PORT',process.env.PORT);
})
