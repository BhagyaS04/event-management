import * as React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, TextField, Button, InputAdornment, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Link } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    }else if (username === 'user' && password === 'password'){
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
    color: 'black',
  };
  const curvyTextStyle2 = {
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
    fontSize: '2rem',
    color: 'black',
  };
  const onBackClick = () => {
    navigate ('/')
  }
  
  return (
    <div>
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        backgroundColor: '#0096FF',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
        zIndex: 1200 
      }}
    >
      <IconButton
        onClick={onBackClick}
        sx={{ 
          position: 'absolute', 
          left: '10px', 
          color: 'white'
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h5" style={curvyTextStyle2}>
        Event Manager
      </Typography>
    </Box>
    <Box sx={{ textAlign: 'center', mb: 3, mt : 6 }}>
        <Typography variant="h2" component="h1" color="black" style={curvyTextStyle}>
          Welcome!
        </Typography>
      </Box>
    <Box sx = {{
      border : '2px solid #0096FF',
      backgroundColor : '#d3d3d3',
      borderRadius : 10,
      height : 500,
      width : 400}}>
      <h2 style = {{color : 'black'}}>Login</h2>
      <Stack direction = 'column' spacing = {4}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" 
      label="Username or Email"
       variant="standard" 
       value = {username}
       onChange = {(e) => setUsername (e.target.value)} InputProps={{
        style: { color: 'black' },
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
        width : '100%'
      }}
    />
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField
          id="standard-password-input"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          variant="standard"
          value = {password}
          onChange = {(e) => setPassword (e.target.value)}
          InputProps={{
            style: { color: 'black' },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              edge="end"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <VisibilityOffIcon sx={{ color: 'black' }} /> : <VisibilityIcon sx={{ color: 'black' }} />}
            </IconButton>
          </InputAdornment>
        ),
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
            width : '100%'
          }}
        />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button sx = {{width : 220}} variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </Box>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Link href="/signup" color="primary" underline="hover">
              Not a member? Sign up now!
            </Link>
        </Box>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
      >
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
    </div>
  )
}

export default Login