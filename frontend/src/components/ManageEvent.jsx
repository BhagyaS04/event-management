import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import './ManageEvent.css';
// import { useState } from 'react';

// just trying out. incomplete code..
const ManageEvent = () => {
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [events, setEvents] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddEvent = () => {
    const newEvent = {
      name: eventName,
      date: eventDate,
      description: eventDescription,
    };
    setEvents([...events, newEvent]);
    setOpen(false);
    setEventName('');
    setEventDate('');
    setEventDescription('');
  };

  return (
    <div className="manage-event-container">
      <div className="background-image" /> {/* Add background image */}
      <div className="content"> {/* Wrap content in a div for styling */}
        <h1>Manage Events</h1>
        <div className="manage-event-buttons">
          <button className="manage-event-button" onClick={handleClickOpen}>Add Events</button>
          <button className="manage-event-button">Delete Events</button>
          <button className="manage-event-button">Edit Events</button>
        </div >
        <Dialog open={open} onClose={handleClose} className="custom-dialog">
        <DialogTitle className="dialog-title">Add Event</DialogTitle>
          <DialogContent className="dialog-content">
            <TextField
              autoFocus
              margin="dense"
              label="Event Name"
              type="text"
              fullWidth
              className="text-field"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Event Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              className="text-field"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={4}
              className="text-field"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddEvent}>Add</Button>
          </DialogActions>
        </Dialog>
        <div className="event-list">
          <h2>Event List</h2>
          {events.length === 0 ? (
            <p>No events added yet.</p>
          ) : (
            <ul>
              {events.map((event, index) => (
                <li key={index}>
                  <h3>{event.name}</h3>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Description:</strong> {event.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  // const [formData, setFormData] = useState({ eventName: '', eventdates: '', eventDesc: '', eventLikes: '' });

  // //dont remove this axios fn. if needed, comment it.
  // const handleAddEvent = async () => {
  //   axios.post('/event-new', formData)
  //   .then((res)=>{
  //     console.log("Event Added successfully")
  //   }).catch((error)=>{
  //     console.log("error adding event")
  //   })
  // }
  return (
    <div>
    Manage Events
    </div>
  )
}

export default ManageEvent;