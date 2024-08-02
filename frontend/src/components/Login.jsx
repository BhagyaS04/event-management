
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, TextField, Button, InputAdornment, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Link } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Login.css';
import {motion} from 'framer-motion'
import axios from 'axios';

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [loginDialogMessage, setloginDialogMessage] = useState ('')
  const [dialogType, setDialogType] = useState('');

// const checkDB = () => {

// }

  // const handleLogin = () => {
  //   if (username === 'admin' && password === 'password') {
  //     setAuthenticated(true);
  //     navigate('/admin-dashboard');
  //   } else if (username === 'user' && password === 'password') {
  //     setAuthenticated(true);
  //     navigate('/user-dashboard');
  //   } else {
  //     setOpen(true);
  //   }
  // };

  // const handleLogin = () => {
  //   axios.get('http://localhost:4000/users', {
  //     email,
  //     password
  //   })
  //   .then((res) => {
  //     if (res.data && email != 'admin') {

  //       console.log("\ninside handleLogin fn in login.jsx\nprinting res.data.user\n")

  //       console.log(res.data.user); // assuming the server returns the user object

  //       //add login validation using db
  //       setloginDialogMessage('Logged in successfully!');
  //       setOpen(true);
  //       navigate('/user-dashboard');


  //     } else if (email === 'admin'){
  //       setloginDialogMessage('Admin logged in successfully!');
  //       setOpen(true);
  //       navigate('/admin-dashboard');
  //     } 
  //     else {
  //       setloginDialogMessage('Invalid email or password!');
  //       setOpen(true);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     setloginDialogMessage('Error occurred!');
  //     setOpen(true);
  //   });
  // };

  // const handleLogin = () => {
  //   axios.get('http://localhost:4000/users', {
  //     params: { email }
  //   })
  //   .then((res) => {
  //     console.log("printing value of res: ", res)
  //     const user = res.data.user;
  //     console.log("printing val of res.data.user:\n")
  //     if (user) {
  //       // Email exists, now check password
  //       if (user.password === password) {
  //         setloginDialogMessage('Logged in successfully!');
  //         setOpen(true);
  //         if (email === 'admin') {
  //           navigate('/admin-dashboard');
  //         } else {
  //           navigate('/user-dashboard');
  //         }
  //       } else {
  //         setloginDialogMessage('Invalid password!');
  //         setOpen(true);
  //       }
  //     } else {
  //       setloginDialogMessage('Email does not exist!');
  //       setOpen(true);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     setloginDialogMessage('Error occurred!');
  //     setOpen(true);
  //   });
  // };
  
  // const handleLogin = () => {
  //   console.log(`Attempting to login with email: ${email}`);
  //   axios.get('http://localhost:4000/users', {
  //     params: { email }
  //   })
  //   .then((res) => {
  //     // const user = res.data.user;
  //    const users = res.data;
     

  //     // console.log("printing value of res.data : ", res.data)
  //     console.log('Response from server (res.data value):', res.data);

  //     const user = users.find(user => user.email === email);
  //     // const adminEmailPattern = /admin.@.\.(com|in)$/i;

      
  //     //to avoid users whose name has 'admin' in it to login to admin portal
  //     const adminEmailPattern = /^admin\..+@.+\.(com|in)$/i; //better version of admin mail pattern 


  //     if (user) {
  //       console.log('User found:', user);
  //       // Email exists, now check password
  //       if (user.password === password ) {
  //         setloginDialogMessage('Logged in successfully!');
  //         setOpen(true);

  //         // if (email === 'admin@example.com') {
  //         //   setDialogType('admin');
  //         //   navigate('/admin-dashboard');
  //         // } 
  //         if (adminEmailPattern.test(email)){
  //           setloginDialogMessage('Admin logged in successfully!');
  //           setDialogType('admin');
  //           navigate('/admin-dashboard');
  //         }
  //         else {
  //           setDialogType('user');
  //           navigate('/user-dashboard');
  //         }
  //       } else {
  //         setloginDialogMessage('Invalid password!');
  //         setDialogType('error');
  //         setOpen(true);
  //       }
  //     } else {
  //       setloginDialogMessage('Email does not exist!');
  //       setDialogType('error');
  //       setOpen(true);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error during login request:', error);
  //     setloginDialogMessage('Error occurred!');
  //     setDialogType('error');
  //     setOpen(true);
  //   });
  // };

  const handleLogin = () => {
    console.log(`Attempting to login with email: ${email}`);
    axios.get('http://localhost:4000/users', {
      params: { email }
    })
    .then((res) => {
      // const user = res.data.user;
     const users = res.data;
     

      // console.log("printing value of res.data : ", res.data)
      console.log('Response from server (res.data value):', res.data);

      const user = users.find(user => user.email === email);
      // const adminEmailPattern = /admin.*@.*\.(com|in)$/i;

      
      //to avoid users whose name has 'admin' in it to login to admin portal
      const adminEmailPattern = /^admin\..+@.+\.(com|in)$/i; //better version of admin mail pattern 


      if (user) {
        console.log('User found:', user);
        // Email exists, now check password
        if (user.password === password ) {
          if (user.blocked) {
            setloginDialogMessage('Access Denied! Your account has been blocked by admin!');
            setDialogType('error');
            setOpen(true);
            return
          } else {
          setloginDialogMessage('Logged in successfully!');
          setOpen(true);}

          // if (email === 'admin@example.com') {
          //   setDialogType('admin');
          //   navigate('/admin-dashboard');
          // } 
          if (adminEmailPattern.test(email)){
            setloginDialogMessage('Admin logged in successfully!');
            setDialogType('admin');
            navigate('/admin-dashboard');
          }
          else {
            setDialogType('user');
            navigate('/user-dashboard');
          }
        } else {
          setloginDialogMessage('Invalid password!');
          setDialogType('error');
          setOpen(true);
        }
      } else {
        setloginDialogMessage('Email does not exist!');
        setDialogType('error');
        setOpen(true);
      }
    })
    .catch((error) => {
      console.error('Error during login request:', error);
      setloginDialogMessage('Error occurred!');
      setDialogType('error');
      setOpen(true);
    });
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <DialogTitle>
            {dialogType === 'admin' ? 'Admin Login' : dialogType === 'user' ? 'User Login' : 'Error'}
          </DialogTitle>

          {/* <DialogTitle>{loginDialogMessage === 'Admin logged in successfully!' ? 'Success' : 'Error'}</DialogTitle> */}
          <DialogContent>
            <DialogContentText>
              {loginDialogMessage}
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