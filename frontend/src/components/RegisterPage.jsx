import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, FormControl, Button, FormLabel, FormControlLabel, Radio, Select, MenuItem, InputLabel, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion } from 'framer-motion';
import './RegisterPage.css';
import axios from 'axios';

const RegisterPage = ({ open, onClose }) => {
  const [eventName, setEventName] = useState ('')
  const [selectedOption, setSelectedOption] = useState('');
  const [radioValue, setRadioValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const variants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  useEffect (() => {
    const fetchEventName = async () => {
      try {
        const res = await axios.get ('http://localhost:4000/events')
        // console.log ("response data: ", res.data)
        if (res.data) {
          const mappedEvents = res.data.map(event => ({
            // id: event.id,
            eventName: event.eventName,
          }));
          setEventName(mappedEvents);
          console.log('Entered into eventNames:', eventName);
        } else {
          console.error('Unexpected response data format:', res.data);
        }
      } catch (error) {
        console.error('Error fetching event names:', error);
      }
    };
    fetchEventName();
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="popup-overlay">
          <motion.div
            className="popup-content"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Typography variant = 'h4' style = {{color : 'white'}}>Register</Typography>
            <IconButton className="close-button" onClick={onClose}>
              <CloseIcon />
            </IconButton>
            <Stack spacing={2}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                mt: 2,
              }}
            >
              {['option1', 'option2', 'option3'].map((option) => (
                <Box
                  key={option}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 600,
                    border: `2px solid ${selectedOption === option ? 'blue' : 'gray'}`,
                    borderRadius: 2,
                    p: 2,
                    bgcolor: selectedOption === option ? 'lightblue' : 'white',
                    transition: 'background-color 0.3s, border-color 0.3s',
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        mb: 0.5,
                      }}
                    >
                      {option === 'option1' && 'GA Phase-1 (General Audience)'}
                      {option === 'option2' && 'VIP Family Zone'}
                      {option === 'option3' && 'VIP Phase-1'}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: 'gray',
                      }}
                    >
                      {option === 'option1' && '₹900'}
                      {option === 'option2' && '₹1500'}
                      {option === 'option3' && '₹1900'}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx = {{color : 'white', backgroundColor : 'skyblue'}}
                    onClick={() => handleButtonClick(option)}
                  >
                    Add
                  </Button>
                </Box>
              ))}
            </Box>
            <FormControl fullWidth>
              {/* <InputLabel id="dropdown-label">Select your mode of payment</InputLabel> */}
              <Select
                labelId="dropdown-label"
                value={selectedOption}
                onChange={handleSelectChange}
                displayEmpty
                sx = {{backgroundColor : 'gray'}}
              >
                <MenuItem value="" disabled>Select your mode of payment</MenuItem>
                <MenuItem value="VISA Card">VISA Card</MenuItem>
                <MenuItem value="MasterCard">MasterCard</MenuItem>
                <MenuItem value="UPI">UPI</MenuItem>
              </Select>
              </FormControl>
              <Button
                sx={{
                  color: 'black',
                  backgroundColor: 'cyan',
                  '&:hover': {
                    backgroundColor: 'lightblue',
                  },
                }}
              >
                Register
              </Button>
            </Stack>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegisterPage;
