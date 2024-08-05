import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, IconButton } from '@mui/material';
import './ManageEvent.css';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageEvent = () => {
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDates, setEventDates] = useState('');
  const [eventDesc, setEventDesc] = useState('');
  const [eventPoster, setEventPoster] = useState ('')
  const [allEvents, setAllEvents] = useState([]);
  const [editEventId, setEditEventId] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState (null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState (false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleAddEvent = () => {
    const newEvent = {
      eventName: eventName,
      eventDates: eventDates,
      eventDesc: eventDesc,
      eventPoster : eventPoster

    };
    axios.post('http://localhost:4000/event-new', newEvent)
    .then(response => {
        setAllEvents([...allEvents, response.data.newEvent]);
        setOpen(false);
        setEventName('');
        setEventDates('');
        setEventDesc('');
        setEventPoster('');

        console.log('Event added and email sending triggered.');
    })
    .catch(error => {
        console.error("Error adding event:", error);
    });
};

  const fetchAllEvents = async () => {
    try {
      const res = await axios.get('http://localhost:4000/events');
      if (res.data) {
        setAllEvents(res.data);
      } else {
        console.error('Unexpected response data format:', res.data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const handleDeleteEvent = (eventId) => {
    axios.delete(`http://localhost:4000/events/${eventId}`)
      .then(() => {
        setAllEvents(allEvents.filter(event => event._id !== eventId));
      })
      .catch(error => {
        console.error("Error deleting event:", error);
      });
  };
  const DeleteDialog = (eventId) => {
    setSelectedEventId (eventId)
    setDeleteDialogOpen (true)
  }
  const handleEditEvent = () => {
    const updatedEvent = {
      eventName,
      eventDates,
      eventDesc,
    };

    axios.put(`http://localhost:4000/events/${editEventId}`, updatedEvent)
      .then(response => {
        const updatedEvents = allEvents.map(event =>
          event._id === editEventId ? response.data : event
        );
        setAllEvents(updatedEvents);
        setEditOpen(false);
        setEventName('');
        setEventDates('');
        setEventDesc('');
      })
      .catch(error => {
        console.error("Error updating event:", error);
      });
  };

  const handleOpenEditDialog = (event) => {
    setEditEventId(event._id);
    setEventName(event.eventName);
    setEventDates(event.eventDates);
    setEventDesc(event.eventDesc);
    setEditOpen(true);
  };

  return (
    <div className="manage-event-container">
      <div className="background-image" /> {/* Add background image */}
      <div className="content"> {/* Wrap content in a div for styling */}
        <h1>Manage Events</h1>
        <div className="manage-event-buttons">
          <button className="manage-event-button" onClick={handleClickOpen}>Add Event +</button>
        </div>
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
              value={eventDates}
              onChange={(e) => setEventDates(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={4}
              className="text-field"
              value={eventDesc}
              onChange={(e) => setEventDesc(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Event poster"
              type="text"
              fullWidth
              className="text-field"
              value={eventPoster}
              onChange={(e) => setEventPoster(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddEvent}>Add</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={editOpen} onClose={handleEditClose} className="custom-dialog">
          <DialogTitle className="dialog-title">Edit Event</DialogTitle>
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
              value={eventDates}
              onChange={(e) => setEventDates(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={4}
              className="text-field"
              value={eventDesc}
              onChange={(e) => setEventDesc(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Event poster"
              type="text"
              fullWidth
              className="text-field"
              value={eventPoster}
              onChange={(e) => setEventPoster(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button onClick={handleEditEvent}>Edit</Button>
          </DialogActions>
        </Dialog>
        <div className="event-list">
          <h2>Event List</h2>
          {allEvents.length === 0 ? (
            <p>No events added yet.</p>
          ) : (
            <div className="event-items">
              {allEvents.map(event => (
                <div className="event-item" key={event._id} style={{
                  backgroundColor: 'skyblue',
                  marginBottom: '10px',
                  padding: '16px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}>
                  <h3>{event.eventName}</h3>
                  <p><strong>Date:</strong> {event.eventDates}</p>
                  <p><strong>Description:</strong> {event.eventDesc}</p>
                  <div className="event-actions">
                    <IconButton onClick={() => handleOpenEditDialog(event)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteEvent(event._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageEvent;
