require('dotenv').config()

const express = require('express');
const cors=require('cors')
const app = express();
const userModel = require('./model/userData');

require('./connection');

app.use(cors())
app.use(express.json())

app.get('/users', async(req, res)=>{
    console.log('inside')
    try{
        const data = await userModel.find();
        console.log(data);
        res.send(data);
    }
    catch(error){
        console.log("error")
    }
})

app.post('/users', (req, res) => {
    const { email, password } = req.body;

    //fetch data from database
    const users = res.data; // assume this is an array of user objects from the database
    console.log (users)
  
    const user = users.find((user) => user.email === email && user.password === password);
    console.log (user)
    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: true, message: 'hehe' });
    }
    console.log(req.data)
  });

// app.post ('/users', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await user.findOne({ email: email });
//         if (user && user.password === password) {
//           res.status(200).json({ message: 'Login successful' });//, role: user.email === 'admin' ? 'admin' : 'user'

//         } else {
//           res.status(401).json({ message: 'Invalid credentials' });
//         }
//       } catch (error) {
//         res.status(500).json({ message: 'Internal server error' });
//       }
//     });

// app.post('/user-new', async (req, res) => {
//     try{
//         // console.log(req.body)
//         const {email} = req.body;
//         const userExists = await userModel.findOne({email});
//         console.log ("printing val of userExists var:\n",userExists)
//         if(userExists){
//             console.log("Email already under use!");
//             return res.status(400).json({message:"Email already under use!"});
            
//         } else {
//             const data = req.body;
//             const newUser = new userModel(data);
//             const savedUser = await newUser.save();
//             res.status(201).json({message: "User created successfully!"});
//             // console.log({savedUser});
//         }
//     }catch(error){
//         console.log(error)
//     }
// })

app.post('/check-email', async (req, res) => {
    try {
        const { email } = req.body;
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(200).json({ isAvailable: false });
        }
        return res.status(200).json({ isAvailable: true });
    } catch (error) {
        console.error('Error while checking email availability:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/user-new', async (req, res) => {
    try {
        // console.log(req.body) 
        const { email } = req.body;
        const userExists = await userModel.findOne({ email });
        console.log("printing val of userExists var:\n", userExists);
        // if (userExists) {
        //     console.log("Email already under use!");
        //     return res.status(400).json({ message: "Email already under use!" });
        // } else {
            const data = req.body;
            const newUser = new userModel(data);
            const savedUser = await newUser.save();
            res.status(201).json({ message: "User created successfully!" });
            // console.log({ savedUser });
        // }
    } catch (error) {
        if (error.code === 11000) {
            // Handle duplicate key error
            const duplicateField = Object.keys(error.keyValue)[0];
            res.status(400).json({ message: `${duplicateField} already in use` });
        }

        else {
            
        console.log("error while creating user after valid email availability\n",error);
        res.status(500).json({ message: "Internal server error" });
        }
    }
});


app.listen(process.env.PORT, ()=>{
    console.log('Server is running on PORT',process.env.PORT);
})

// app.post ('/events', async (req, res) => {
//     const 
// })