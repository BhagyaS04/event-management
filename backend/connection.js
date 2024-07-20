const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.d05tceu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB is not connected')
})
