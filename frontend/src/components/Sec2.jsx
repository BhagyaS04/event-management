import * as React from 'react';
import { Typography, Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import LikeButton from './LikeButton';
import Popup from './Popup';
import { useState, useEffect } from 'react';
import axios from 'axios';


const FloatingCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.5s ease',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(10%) scale(1.2)',
    boxShadow: theme.shadows[8],
    zIndex: 0,
    '& .regButton': {
      opacity: 1,
    },
  },
  '& .regButton': {
    opacity: 0,
    transition: 'opacity 0.5s ease',
  },
}));
const cardStyle = {
  width: '20vw',
  height: 300,
  margin: '0 10px',
  backgroundColor : 'black',
  borderRadius : 5,
  zIndex: 0,
};

const Container = styled(Box)({
    display: 'flex',
    paddingLeft: 10,
    width: '100%',
    height : 370,
    overflow: 'hidden',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
});

const Sec2 = () => {
  
  const navigate = useNavigate ()
  const onRegClick = () => {
    // navigate ('/')
    
  }
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)20%, rgba(0, 0, 0, 1))',
    width: '100%',
    height: '170px',
  };

      const handleCardClick = (item) => {
        setSelectedItem(item);
        setButtonPopup (true)
      }
      const handleButtonClick = () => {
        setButtonPopup (true)
      }
      const [buttonPopup, setButtonPopup] = useState(false)
      const [selectedItem, setSelectedItem] = useState([]);
      const [eventNames, setEventNames] = useState ([])
      const [allEvents, setAllEvents ] = useState ([])
      const [eventDate, setEventDate] = useState ([])
      const [eventDescs, setEventDescs] = useState ([])
      const [eventLike, setEventLike] = useState ([])
      const [eventPoster, setEventPoster] = useState ([])

      useEffect (() => {
        const fetchEventDetails = async () => {
          try {
            const res = await axios.get ('http://localhost:4000/events')
            // console.log ("response data: ", res.data)
            if (res.data) {
              const mappedEvents = res.data.map(event => ({
                id: event._id,
                eventName: event.eventName,
                eventDates : event.eventDates,
                eventDesc : event.eventDesc,
                eventLikes : event.eventLikes,
                eventComments : event.eventComments,
                eventPoster : event.eventPoster
              }));
              setAllEvents(mappedEvents);
              console.log('Entered into eventNames:', mappedEvents);
            } else {
              console.error('Unexpected response data format:', res.data);
            }
          } catch (error) {
            console.error('Error fetching event names:', error);
          }
        };
        fetchEventDetails();
      }, []);
  
   return (
    <Box sx={{ paddingBottom: 0, borderBottom: '1px solid #71797E' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: 2,
          width: '100vw',
          paddingLeft: 20,
        }}
      >
        <Typography variant="h5" color="white">
          Popular events
        </Typography>
      </Box>
      <Container>
        {allEvents.map(event => (
          <Box key={event.eventName} onClick={() => handleCardClick(event)}>
            <FloatingCard sx={cardStyle}>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image= {event.eventPoster}
                alt={`Event ${event.eventName}`}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent
                sx={{
                  position: 'absolute',
                  top: 70,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                }}
              >
                <div style={gradientStyle}>
                  <Typography variant="h4" component="div" style={{ color: 'rgba(238, 238, 238, 0.5)' }}>
                    {event.eventName}
                  </Typography>
                  <Typography variant="h7" sx={{ color: 'gray', fontSize: 'small' }}>{event.eventDesc}</Typography>
                  <br />
                  <Typography variant="h7" sx={{ color: 'gray', fontSize: 'small' }}>Happening on: {event.eventDates}</Typography>
                  <Box sx={{ marginTop: 2 }}>
                    <Button className="regButton" onClick={handleButtonClick}>
                      Register+
                    </Button>
                  </Box>
                </div>
              </CardContent>
            </FloatingCard>
          </Box>
        ))}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} eventId = {selectedItem.id}>
          {selectedItem && (
            <>
            <Typography className='eventHeader' variant="h3" component="div" style={{ color: 'rgba(238, 238, 238, 0.5)' }}>
              {selectedItem.eventName}
            </Typography>
            <Typography className='eventDate' variant = 'h6' style = {{color : 'white', textAlign : 'left'}}>
            <br></br>Happening on: {selectedItem.eventDates}
            </Typography>
            <Typography variant = 'h6' style = {{color : 'white', textAlign : 'left', fontSize : 'large'}}>
             <br></br> {selectedItem.eventDesc}
            </Typography>
            </>
          )}
        </Popup>
      </Container>
    </Box>
  );
};
export default Sec2;