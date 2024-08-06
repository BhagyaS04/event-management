import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, IconButton, Backdrop, CircularProgress } from '@mui/material';
import './ManageEvent.css';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageEvent = () => {
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDates, setEventDates] = useState('');
  const [eventDesc, setEventDesc] = useState('');
  const [eventPoster, setEventPoster] = useState('');
  const [allEvents, setAllEvents] = useState([]);
  const [editEventId, setEditEventId] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [backdropOpen, setBackdropOpen] = useState(false); 
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const showAlert = (title, message) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const handleAddEvent = () => {
    const newEvent = {
      eventName,
      eventDates,
      eventDesc,
      eventPoster,
    };

    handleClose(); // Close the dialog
    setBackdropOpen(true); // Show backdrop

    axios.post('http://localhost:4000/event-new', newEvent)
      .then(response => {
        fetchAllEvents();

        setEventName('');
        setEventDates('');
        setEventDesc('');
        setEventPoster('');

        showAlert("Success", "Event has been successfully added."); 
        console.log('Event added and email sending triggered.');
      })
      .catch(error => {
        console.error("Error adding event:", error);
        showAlert("Error", "Error adding event. Please try again."); 
      })
      .finally(() => {
        setBackdropOpen(false); // Hide backdrop after request is complete
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

  const handleDeleteEvent = () => {
    axios.delete(`http://localhost:4000/events/${selectedEventId}`)
      .then(() => {
        setAllEvents(allEvents.filter(event => event._id !== selectedEventId));
        setDeleteDialogOpen(false);
      })
      .catch(error => {
        console.error("Error deleting event:", error);
      });
  };

  const openDeleteDialog = (eventId) => {
    setSelectedEventId(eventId);
    setDeleteDialogOpen(true);
  };

  const handleEditEvent = () => {
    const updatedEvent = {
      eventName,
      eventDates,
      eventDesc,
      eventPoster,
    };

    setUpdateDialogOpen(true);
  };

  const confirmUpdateEvent = () => {
    axios.put(`http://localhost:4000/events/${editEventId}`, {
      eventName,
      eventDates,
      eventDesc,
      eventPoster,
    })
      .then(response => {
        fetchAllEvents();
        setEditOpen(false);
        setUpdateDialogOpen(false);
        setEventName('');
        setEventDates('');
        setEventDesc('');
        setEventPoster('');
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
    setEventPoster(event.eventPoster);
    setEditOpen(true);
  };

  return (
    <div className="manage-event-container">
      <div className="background-image" />
      <div className="content">
        <h1 className="title">Manage Events</h1>
        <div className="manage-event-buttons">
          <button className="manage-event-button" onClick={handleClickOpen}>Add Event +</button>
        </div>

        {/* Add Event Dialog */}
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
              label="Event Poster"
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

        {/* Edit Event Dialog */}
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
              label="Event Poster"
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

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to delete this event? This action cannot be undone.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleDeleteEvent}>Delete</Button>
          </DialogActions>
        </Dialog>

        {/* Update Confirmation Dialog */}
        <Dialog open={updateDialogOpen} onClose={() => setUpdateDialogOpen(false)}>
          <DialogTitle>Confirm Update</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to update this event?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setUpdateDialogOpen(false)}>Cancel</Button>
            <Button onClick={confirmUpdateEvent}>Update</Button>
          </DialogActions>
        </Dialog>

        {/* Event List */}
        <div className="event-list">
          <h2 className="event-list-title">Event List</h2>
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
                    <IconButton onClick={() => openDeleteDialog(event._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Backdrop for loading */}
        <Backdrop open={backdropOpen} style={{ zIndex: 1000 }}>
          <CircularProgress size={70} sx={{ color: 'teal' }} />
        </Backdrop>

        {/* Custom Alert Dialog */}
        <Dialog open={alertOpen} onClose={() => setAlertOpen(false)}>
          <DialogTitle>{alertTitle}</DialogTitle>
          <DialogContent>
            <p>{alertMessage}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAlertOpen(false)}>OK</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default ManageEvent;
