import React, { useState } from 'react';
import UserNavbar from './UserNavbar'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Dialog, DialogContent, Box, Typography, Button, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {motion} from 'framer-motion'

const UserProfile = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }

    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onXclick = () => {
    setOpen (false)
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
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

  return (
    <motion.div 
        initial = {{width : 0}}
        animate = {{width : "100vw"}}
        exit = {{x : window.innerWidth}}
        transition = {{duration : 0.5}}
        style = {{ 
        width : '100vw',
        height : '100vh',
        backgroundColor : '#36454F'
    }}>
        <UserNavbar/>
        <Box
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            sx={{ 
            position: 'absolute', 
            left: 0, 
            top: 170, 
            bottom: 0, 
            width: 'calc(100vw - 535px)', 
            borderRight: '1px solid #71797E', 
            padding: 2
        }}>
            <Stack direction = 'column' alignItems="center" justifyContent="center" spacing = { 2 }>
              <Box sx = {{height : 20, width : '100vw'}}>
                <Typography variant = 'h5' sx = {{color : 'white'}}>
                  Edit Credentials  
                </Typography>
              </Box>
              <TextField
                sx={{
                  border: '1px solid white',
                  borderRadius: '5px',
                  width: 250,
                  '& .MuiInputLabel-root': {
                    color: 'gray', // change label color
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'white', // change input text color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'gray', // change outline border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'white', // change outline border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white', // change outline border color when focused
                    },
                  },
                }}
                id="standard-basic"
                label="Name"
                variant="outlined"
              />
              <TextField
                sx={{
                  border: '1px solid white',
                  borderRadius: '5px',
                  width: 250,
                  '& .MuiInputLabel-root': {
                    color: 'gray', // change label color
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'white', // change input text color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'gray', // change outline border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'white', // change outline border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white', // change outline border color when focused
                    },
                  },
                }}
                id="standard-basic"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                sx={{
                  border: '1px solid white',
                  borderRadius: '5px',
                  width: 250,
                  '& .MuiInputLabel-root': {
                    color: 'gray', // change label color
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'white', // change input text color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'gray', // change outline border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'white', // change outline border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white', // change outline border color when focused
                    },
                  },
                }}
                id="standard-basic"
                label="Mail ID"
                variant="outlined"
              />
            <FormControl sx={{ m: 1, width: 250 }} variant="outlined">
              <InputLabel 
                htmlFor="outlined-adornment-password" 
                sx={{ color: 'gray' }} // change label color
              >
                Current Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                sx={{
                  border: '1px solid gray',
                  height: '45px',
                  '& .MuiOutlinedInput-input': {
                    color: 'white', // change input text color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'lightgray', // change outline border color
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // change outline border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // change outline border color when focused
                  },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: 'white' }} // change icon button color
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Current Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: 250 }} variant="outlined">
              <InputLabel 
                htmlFor="outlined-adornment-password" 
                sx={{ color: 'gray' }} // change label color
              >
                New Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                sx={{
                  border: '1px solid gray',
                  height: '45px',
                  '& .MuiOutlinedInput-input': {
                    color: 'white', // change input text color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'lightgray', // change outline border color
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // change outline border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // change outline border color when focused
                  },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: 'white' }} // change icon button color
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="New Password"
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: 250 }} variant="outlined">
              <InputLabel 
                htmlFor="outlined-adornment-password" 
                sx={{ color: 'gray' }} // change label color
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                sx={{
                  border: '1px solid gray',
                  height: '45px',
                  '& .MuiOutlinedInput-input': {
                    color: 'white', // change input text color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'lightgray', // change outline border color
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // change outline border color on hover
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', // change outline border color when focused
                  },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ color: 'white' }} // change icon button color
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>
            <Button variant="contained" sx = {{width : 250}}>Submit changes</Button>
          </Stack>
          </Box>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 2,
            paddingLeft: 10,
            marginTop: -7,
            marginBottom: 1,
            borderBottom : '1px solid #71797E',
            }}>
            <Typography variant = 'h4' color = 'white'>
                Your Profile
            </Typography>
        </Box>
              <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
              paddingLeft: 0,
              marginTop: 21.4,
              marginBottom: 1,
              borderLeft: '1px solid #71797E',
              position: 'absolute',   // Stick the box to the right side
              right: 0,               // Align it to the right edge
              top: 0,                 // Align it to the top edge (if needed)
              bottom: 0,              // Extend it to the bottom edge (if needed)
              width: 'calc(100vw - 1000px)', // Fill the right side minus the padding
              boxSizing: 'border-box' // Include padding and border in the width
              }}>
        <Box style={{ paddingLeft: '40px', paddingBottom: '80px' }}>
            <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <IconButton
                sx={{
                border: '1px solid gray',
                width: 300,
                height: 300,
                overflow: 'hidden',
                backgroundColor: 'white',
                borderRadius: '50%',
                }}
                onClick={handleClickOpen}
            >
                <img
                src="data:image/png;base64,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" // ignored image link
                alt="icon"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.4)', // Zooms the image
                }}
                />
            </IconButton>
            <Button
               sx={{
                backgroundColor: 'gray',
                '&:hover': {
                    backgroundColor: 'lightgray',
                    color : 'black'
                },
            }}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                style={{ width: 250, height : 50 }}
                startIcon={<CloudUploadIcon />}
            >
                Change picture
                <VisuallyHiddenInput type="file" />
            </Button>
            </Stack>
        </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                <Button onClick={onXclick} sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1, borderRadius : 10 }}>
                    X
                </Button>
                <img
                    src="data:image/png;base64,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" // Replace with your image source
                    alt="popup"
                    style={{
                    width: '40vw',
                    height: '70vh',
                    }}
                />
                </DialogContent>
            </Dialog>
                </Box>
    </motion.div>
  )
}

export default UserProfile