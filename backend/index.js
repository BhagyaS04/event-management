
require('dotenv').config()

const express = require('express');
const cors=require('cors')
const app = express();
const eventModel = require ('./model/eventData');
const userModel = require('./model/userData');
const {sendEmail} = require('./model/emailController')
const expressAsyncHandler = require('express-async-handler');

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
    const users = res.data; 
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
            res.status(400).json({ message: `${duplicateField} already in use`});
        }

        else {
            
        console.log("error while creating user after valid email availability\n",error);
        res.status(500).json({ message: "Internal server error" });
        }
    }
});

app.get ('/events', async (req, res) => {
    try {
        // const event = await eventModel.find({},'eventName eventDates eventDesc  eventPoster eventLikes eventComments');        
        const event = await eventModel.find();
        console.log (event);
        res.send (event)
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'An error occurred while fetching events' });
    }
})

app.post ('/event-new', async (req, res) => {
  try {
    const data = req.body;
    const newEvent = new eventModel(data);
    const savedEvent = await newEvent.save();
    
    const emailSubject = 'We are thrilled to announce an exciting new event: ' + newEvent.eventName;
    const emailMessage = 'About the event: ' + newEvent.eventDesc;

    // Send email to all users
    await sendEmail({ subject: emailSubject, message: emailMessage });

    res.status(201).json({ newEvent, message: "Event created successfully!" });
} catch (error) {
    console.log("Error while creating event or sending email:", error);
    res.status(500).json({ message: "Internal server error" });
}
});

app.get('/events/:eventId', async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await eventModel.findById(eventId);

    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }

    res.send({
      eventName: event.eventName, // Assuming your event model has an eventName field
      eventLikes: event.eventLikes,
    });
  } catch (error) {
    console.error('Error fetching event details:', error);
    res.status(500).send({ message: 'Error fetching event details' });
  }
});
app.post ('/events/:eventId', async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await eventModel.findById(eventId);

    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }

    res.send({
      eventName: event.eventName, // Assuming your event model has an eventName field
      eventLikes: event.eventLikes,
    });
  } catch (error) {
    console.error('Error fetching event details:', error);
    res.status(500).send({ message: 'Error fetching event details' });
  }
});


app.put ('/events/:eventName', async (req, res) => {
  const { eventName } = req.params;
  const { userId, like } = req.body;

  try {
    const event = await eventModel.findById(eventName);

    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }

    if (like) {
      // Add userId to likes array if not already present
      if (!event.eventLikes.includes(userId)) {
        event.eventLikes.push(userId);
      }
    } else {
      // Remove userId from likes array if present
      event.eventLikes = event.eventLikes.filter(id => id !== userId);
    }

    await event.save();
    res.send({ eventLikes: event.eventLikes });
  } catch (error) {
    console.error('Error updating event likes:', error);
    res.status(500).send({ message: 'Error updating event likes' });
  }
});

// deleting an event
app.delete('/events/:id', (req, res) => {
  const eventId = req.params.id;
  eventModel.findByIdAndDelete(eventId)
    .then(result => {
      if (!result) {
        return res.status(404).send("Event not found");
      }
      res.status(200).send("Event deleted");
    })
    .catch(error => {
      console.error("Error deleting event:", error);
      res.status(500).send("Error deleting event");
    });
});

app.put('/events/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedEvent = req.body;
    const event = await eventModel.findByIdAndUpdate(id, updatedEvent, { new: true });
    if (!event) {
      res.status(404).send({ message: 'Event not found' });
    } else {
      res.send(event);
    }
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).send({ message: 'Error updating event' });
  }
});

//deleting a user
app.delete('/users/:id', async (req, res) => {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      res.send('User deleted');
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).send('Server error');
    }
  });

// Blocking a user
app.patch('/users/:id/block', async (req, res) => {
    try {
      const user = await userModel.findByIdAndUpdate(
        req.params.id,
        { $set: { blocked: true } },
        { new: true } // Return updated document
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Error blocking user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Unblock a user
  app.patch('/users/:id/unblock', async (req, res) => {
    try {
      const user = await userModel.findByIdAndUpdate(
        req.params.id,
        { $set: { blocked: false } },
        { new: true } // Return the updated document
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Error unblocking user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

//sending email
app.post('/send-email', sendEmail);

// Fetch security question by email
app.post('/security-question', async (req, res) => {
  const { email } = req.body;
  
  try {
      const user = await userModel.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      
      // Return the security question
      // res.json({ securityQuestion: user.securityQuestion });
      console.log('securityQuestion: ', user.securityQuestion)

  } catch (error) {
      console.error('Error fetching security question:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Verify security answer
app.post('/verify-security-answer', async (req, res) => {
  const { email, answer } = req.body;

  try {
      const user = await userModel.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Check if the answer matches
      if (user.securityAnswer === answer) {
          // return res.json({ success: true, message: 'Answer is correct' });
          console.log('sec answer is correct')
      } else {
          // return res.json({ success: false, message: 'Answer is incorrect' });
          console.log('sec answer incorrect!')
      }
  } catch (error) {
      console.error('Error verifying security answer:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on PORT',process.env.PORT);
})