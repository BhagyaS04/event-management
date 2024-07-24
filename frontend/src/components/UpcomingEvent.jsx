import React from 'react';
import { useState } from 'react';
import './UpcomingEvent.css'
import { useNavigate } from 'react-router-dom';
import { Modal, Box, Typography, Link, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


function EventCard(props) {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="event-info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="event-details">
          <span>Hosted by: {props.hostedBy}</span>
          <span>{props.date}</span>
        </div>
        <div className="event-actions">
          <span>{props.going} going</span>
          <span>Free</span>
        </div>
      </div>
    </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function UpcomingEvents() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const events = [
    {
      title: 'Sri Lankan Microsoft BizApps Monthly Meetup - July 2024',
      description: 'Discover how to Win, and Deploy, more Successful and Profitable Dynamics 365 Projects using GYDE365 by Sam Dharmasiri',
      image: 'https://secure.meetupstatic.com/photos/event/8/5/7/9/event_522274169.webp?w=640',
      hostedBy: 'Sri Lankan Microsoft BizApps User Group',
      date: 'FRI, JUL 19 - 1:30 PM IST',
      going: 14,
    },
    {
      title: 'AL Coding Carnival: Factorial of a Number in AL Programming | Coding Challenge',
      description: 'Master Intermediate AL Skills with Fun and Practical Programs',
      image: 'https://secure.meetupstatic.com/photos/event/8/8/6/event_522362182.webp?w=640',
      hostedBy: 'Learn with Goms',
      date: 'SUN, JUL 21 - 11:00 AM IST',
      going: 5,
    },
    {
      title: 'Sri Lanka Sunday Beginners Free Online Guided Meditation and Follow-Up',
      description: 'Take your right hand and hold it a few inches above your head and see if you can feel any coolness or heat coming out of your head',
      image: 'https://secure.meetupstatic.com/photos/event/6/c/e/f/event_495147887.webp?w=640',
      hostedBy: 'Sahaja Yoga Meditation, Colombo, Sri Lanka',
      date: 'SUN, JUL 21 - 7:15 PM IST',
      going: 6,
    },
    {
      title: 'Coimbtore - The Answer of "Why We Live?" in Buddhism',
      description: 'Move your hand around and try and feel any sensation and hold your hand in that position.',
      image: 'https://secure.meetupstatic.com/photos/event/1/f/0/7/event_514867943.webp?w=640',
      hostedBy: 'Coimbtore - The purpose of life in Buddhism Meetup',
      date: 'SUN, JUL 21 - 9:00 PM IST',
      going: 3,
    },
  ];

  const handleNavigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="upcoming-events">
      <h2>Upcoming online events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            image={event.image}
            hostedBy={event.hostedBy}
            date={event.date}
            going={event.going}
            onClick={handleOpen}
          />
        ))}
      </div>
      <button onClick={handleOpen}>See all events</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-title" variant="h6" component="h2">
            Sign in to view more
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Please <Link href="/signup" onClick={handleNavigateToSignup}>sign up</Link> to view more details about the event.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default UpcomingEvents;