import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, TextField, Button, InputAdornment, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Link } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Login.css';
import {motion} from 'framer-motion'

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAuthenticated(true);
      navigate('/admin-dashboard');
    } else if (username === 'user' && password === 'password') {
      setAuthenticated(true);
      navigate('/user-dashboard');
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const curvyTextStyle = {
    fontFamily: '"Pacifico", cursive',
    fontSize: '2rem',
    color: 'white',
  };

  const curvyTextStyle2 = {
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
    fontSize: '2rem',
    color: 'white',
  };

  const onBackClick = () => {
    navigate('/');
  };

  return (
<motion.div
    className='backgroundimg'
    initial = {{width : 0}}
    animate = {{width : "100vw"}}
    exit = {{x : window.innerWidth}}
    transition = {{duration : 0.5}}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '60px',
          backgroundColor: 'None',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          onClick={onBackClick}
          sx={{
            position: 'absolute',
            left: '10px',
            color: 'white',
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" style={curvyTextStyle2}>
          Event Manager
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h2" component="h1" color="white" style={curvyTextStyle}>
          Welcome!
        </Typography>
      </Box>
      <Box className = 'loginBox'
        sx={{
          borderRadius: 20,
          height: 500,
          width: 400,
          p: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: '#0096FF', mb: 4 }}>Login</Typography>
        <Stack direction="column" spacing={5}>
          <TextField
            id="standard-basic"
            label="Username or Email"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              style: { color: 'white'},
            }}
            InputLabelProps={{
              style: { color: 'gray' },
            }}
            sx={{
              '& .MuiInput-underline:before': {
                borderBottomColor: 'black',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: 'teal',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'blue',
              },
              width: '100%',
            }}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { color: 'gray' },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <VisibilityOffIcon sx={{ color: 'gray' }} /> : <VisibilityIcon sx={{ color: 'gray' }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: { color: 'gray' },
            }}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              width: '100%',
            }}
          />
          <Button sx={{ width: '100%' }} variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="/signup" color="primary" underline="hover">
              Not a member? Sign up now!
            </Link>
          </Box>
        </Stack>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Login Error</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Incorrect credentials, please try again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

</motion.div>
  );
};

export default Login;
