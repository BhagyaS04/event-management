import React, {useState, useEffect} from 'react'
import './Popup.css'
import { Box, Typography } from '@mui/material';
import './InputComponent.css'
import SendIcon from '@mui/icons-material/Send';
import LikeComponent from './LikeComponent';
import RegisterButton from './RegisterButton';
// import { Image } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';



const Popup = (props) => {

  // const [eventName, setEventName] = useState ([])
  // useEffect (() => {
  //   const fetchEventName = async () => {
  //     try {
  //       const res = await axios.get ('http://localhost:4000/events')
  //       // console.log ("response data: ", res.data)
  //       if (res.data) {
  //         const mappedEvents = res.data.map(event => ({
  //           // id: event.id,
  //           eventName: event.eventName,
  //         }));
  //         setAllEvents(mappedEvents);
  //         console.log('Entered into eventNames:', allEvents);
  //       } else {
  //         console.error('Unexpected response data format:', res.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching event names:', error);
  //     }
  //   };
  //   fetchEventName();
  // }, []);
  const {eventId, trigger, setTrigger, children} = props;
  const [eventName, setEventName] = useState ('')
  useEffect(() => {
    if (trigger) {
      console.log('Popup opened for event ID:', eventId);
    }
  }, [trigger, eventId]);
  useEffect(() => {
    if (eventId) {
      setEventName(eventId);
      console.log('Using eventId directly:', eventId);
    }
  }, [eventId]);
    const handleSendClick = () => {

    }
    const variants = {
        initial: {
          scale: 0,
          opacity: 0,
        },
        animate: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        },
        exit: {
          scale: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        },
      };
      return trigger ? (
        <AnimatePresence>
          {trigger && (
            <div className='popup'>
              <motion.div
                className="popup-inner"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit">
                <button className="button" onClick={() => setTrigger(false)}>
                  <span className="X"></span>
                  <span className="Y"></span>
                  <div className="close">Close</div>
                </button>
                {children}
                <Box className="commentBox">
                  <div className='commentHeader'>
                    <Typography variant='h6' style={{ color: 'rgba(238, 238, 238, 0.5)' }}>Comments</Typography>
                  </div>
                  <div className="input-container">
                    <input
                      placeholder="Comment your thoughts..."
                      className="input"
                      name="text"
                      autoComplete="off"
                      type="text"
                    />
                    <button className="send-button" onClick={handleSendClick}>
                      <SendIcon className="send-icon" />
                    </button>
                  </div>
                </Box>
                <LikeComponent eventId={eventId} isOpen={trigger} />
                <RegisterButton />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      ) : null;
    };

export default Popup