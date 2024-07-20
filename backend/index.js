const express = require('express');
const cors=require('cors')
const app = new express;
const PORT = 4000;
const eventModel = require('./model/eventData');

require('./connection');

app.use(cors())
app.use(express.json())

app.get('/events', async(req, res)=>{
    console.log('inside')
    try{
        const data = await eventModel.find();
        console.log(data)
        res.send(data);
        
    }
    catch(error){
        console.log("error")
    }
})

app.listen(PORT, ()=>{
    console.log('Server is running on PORT 4000');
})