import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  TextField,
  InputAdornment,
  Stack,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Typography
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import './Signup.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';



const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phoneNumber: '', confirmPassword: '', wantMail: false });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [wantMail, setWantMail] = useState (false);
  // const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [emailExistsDialogOpen, setEmailExistsDialogOpen] = useState(false); // New state for email exists dialog


  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log ("isChecked:", isChecked)
    console.log ("event of isChecked: ", event.target.checked)
  };

  const handleWantMail = (event) => {
    setWantMail (event.target.checked)
    console.log (event.target.checked)
    console.log (wantMail)
  }
  useEffect(() => {
    console.log('Updated wantMail:', wantMail);
  }, [wantMail]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = () => {
    const { password, confirmPassword, email, phoneNumber, wantMail } = formData;

    if (!password || !confirmPassword || !email || !phoneNumber) {
      setDialogMessage('Please fill out all fields!');
      setDialogOpen(true);
      return false;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setDialogMessage('Phone number must contain exactly 10 digits.');
      setDialogOpen(true);
      return false;
    }

    if (!isValidEmail(email)) {
      setDialogMessage('Email is not valid.');
      setDialogOpen(true);
      return false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password) || !/\d/.test(password)) {
      setDialogMessage('Password must contain at least one special character and one number.');
      setDialogOpen(true);
      return false;
    }

    if (password !== confirmPassword) {
      setDialogMessage('Passwords do not match.');
      setDialogOpen(true);
      return false;
    }

    return true;
  };

  const checkEmailAvailability = async (email) => {
    try {
      const response = await axios.post('http://localhost:4000/check-email', { email });
      return response.data.isAvailable;
    } catch (error) {
      console.error('Error checking email availability:', error);
      return false;
    }
  };
  // const handleSubmit = () => {
    
  //   if( validateForm ) {
  //     axios.post('http://localhost:4000/user-new', formData)
  //     .then((res) => {
  //       setDialogMessage('Sign up successful!');
  //       setDialogOpen(true);
      
  //     }).catch((error) => {
  //       // setDialogMessage('Error occured!');
  //       // setDialogOpen (true)
  //       const errorMessage = error.response?.data?.message || error.message;
  //       if (errorMessage === "Email already under use!") {
  //         setDialogMessage('Email already under use! Please login..');
  //         // navigate('/login')
  //       } else {
  //         setDialogMessage(`Error occurred: ${errorMessage}`);
  //       }
  //       setDialogOpen(true);
  //     })
  //   } //if validateform close
  // };

  const handleSubmit = async () => {
    if (validateForm()) {
      const isEmailAvailable = await checkEmailAvailability(formData.email);
  
      if (!isEmailAvailable) {
        // setDialogMessage('Email already under use!');
        // setDialogOpen(true);
        setEmailExistsDialogOpen(true); // Open the email exists dialog
        // Uncomment the following line to navigate to the login page
        // navigate('/login');
        return;
      }
      formData.wantMail = wantMail;
      axios.post('http://localhost:4000/user-new', formData)
        .then((res) => {
          console.log (formData)
          setDialogMessage('Sign up successful!');
          // setRedirectToLogin(true);
          setDialogOpen(true);
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.message || error.message;
          setDialogMessage(`Error occurred: ${errorMessage}`);
          // setRedirectToLogin(false);
          setDialogOpen(true);
        });
    }
  };

  const handleDialogClose = () => {
    if (dialogMessage === 'Sign up successful!') {
      navigate('/login');
    } else {
      setDialogOpen(false);
    }
  };
  
  // const handleDialogClose = () => {
  //   setDialogOpen(false);
  // };

  // const handleOkClick = () => {
  //   setDialogOpen(false);
  //   navigate('/login');
  // };

  const handleEmailExistsDialogClose = () => {
    setEmailExistsDialogOpen(false);
  };

  const handleEmailExistsDialogLogin = () => {
    setEmailExistsDialogOpen(false);
    navigate('/login');
  };



  const showTermsModal = () => setTermsModalOpen(true);
  const hideTermsModal = () => setTermsModalOpen(false);

  const isValidPhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const curvyTextStyle2 = {
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
    fontSize: '2rem',
    color: 'white',
  };

  const onBackClick = () => {
    navigate('/');
  };

  return (
    <motion.div className = 'signupBackgroundimg'
    initial = {{width : 0}}
    animate = {{width : "100vw"}}
    exit = {{x : window.innerWidth}}
    transition = {{duration : 0.5}}>
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 10,
        height: '60px',
        backgroundColor: 'transparent',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1200
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
      {/* <Typography variant="h5" style = {curvyTextStyle2}>Event Manager</Typography> */}
    </Box>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'top',
          alignItems: 'center',
          height: 900
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4, mt : 1 }}>
          <Typography variant="h2" component="h1" color="white" style={{ fontFamily: '"Pacifico", cursive', fontSize: '2rem' }}>
            Stay in the loop! Sign up now!
          </Typography>
        </Box>
        <Box className = 'SignupBox'
          sx={{
            border: '1px solid black',
            borderRadius: 10,
            height: 'auto',
            width: 400,
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* <h2 style={{ color: 'white' }}>Sign up</h2> */}
          <Stack direction="column" spacing={2}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle sx={{ color: 'gray' }} />
                  </InputAdornment>
                ),
                style: { color: 'gray' }
              }}
              InputLabelProps={{ style: { color: 'gray' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'gray' }
              }}
              variant="standard"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: 'gray' }} />
                  </InputAdornment>
                ),
                style: { color: 'gray' }
              }}
              InputLabelProps={{ style: { color: 'gray' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'gray' }
              }}
              variant="standard"
            />
            <TextField
              label="Phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: 'gray' }} />
                  </InputAdornment>
                ),
                style: { color: 'gray' }
              }}
              InputLabelProps={{ style: { color: 'gray' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'gray' }
              }}
              variant="standard"
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: 'gray' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOffIcon sx={{ color: 'gray' }} /> : <VisibilityIcon sx={{ color: 'gray' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { color: 'gray' }
              }}
              InputLabelProps={{ style: { color: 'gray' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'gray' }
              }}
              variant="standard"
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: 'gray' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOffIcon sx={{ color: 'gray' }} /> : <VisibilityIcon sx={{ color: 'gray' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { color: 'gray' }
              }}
              InputLabelProps={{ style: { color: 'gray' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'gray' }
              }}
              variant="standard"
            />
            <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} style = {{color : 'gray'}}/>}
              label={
                <span style={{ fontSize: '0.75rem', color: 'gray' }}>
                  I agree to the{' '}
                  <Link href="#" onClick={showTermsModal} color="primary" underline="hover">
                    terms and conditions
                  </Link>
                </span>
              }
            />
          <Typography variant = 'h6' component = 'h6' color = 'gray' style = {{ fontSize : '0.75rem'}}>Agree to the terms to sign in</Typography>

            <FormControlLabel
              control={<Checkbox style = {{color : 'gray'}} checked = {wantMail} onChange = {handleWantMail}/>}
              label={<span style={{ fontSize: '0.75rem', color: 'gray' }}>Stay in the loop with email updates!</span>}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!isChecked}
            >
              Sign up
            </Button>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Link href="/login" color="primary" underline="hover">
                Already a member? Login here
              </Link>
            </Box>
          </Stack>
        </Box>
        <Dialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>{dialogMessage === 'Sign up successful!' ? 'Success' : 'Error'}</DialogTitle>
          <DialogContent>
            <DialogContentText>{dialogMessage}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={termsModalOpen} onClose={hideTermsModal}>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Here are the terms and conditions for using our service. Please read them carefully...
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={hideTermsModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        


        
        <Dialog open={emailExistsDialogOpen} onClose={handleEmailExistsDialogClose}>
          <DialogTitle>Email Already Exists</DialogTitle>
          <DialogContent>
            <DialogContentText>
              The email you entered is already registered. Do you want to log in instead?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEmailExistsDialogClose}>Cancel</Button>
            <Button onClick={handleEmailExistsDialogLogin}>OK</Button>
          </DialogActions>
        </Dialog>
        {/* <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{dialogMessage === 'Email already under use! Click ok to Login' ? 'Continue to Login?' : 'Error'}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOkClick} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog> */}


      </Box>
    </motion.div>
  );
};

export default Signup;
