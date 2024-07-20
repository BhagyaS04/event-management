import * as React from 'react';
import { useState } from 'react';
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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phoneNumber: '', confirmPassword: '' });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = () => {
    const { password, confirmPassword, email, phoneNumber } = formData;

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

  const handleSubmit = () => {
    if (validateForm()) {
      setDialogMessage('Sign up successful!');
      setDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    if (dialogMessage === 'Sign up successful!') {
      navigate('/login');
    } else {
      setDialogOpen(false);
    }
  };

  const showTermsModal = () => setTermsModalOpen(true);
  const hideTermsModal = () => setTermsModalOpen(false);

  const isValidPhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const curvyTextStyle2 = {
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
    fontSize: '2rem',
    color: 'black',
  };

  return (
    <>
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
        zIndex: 1200 // Ensure it's above other content
      }}
    >
      <Typography variant="h5" style = {curvyTextStyle2}>Event Manager</Typography>
    </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4, mt: 7 }}>
          <Typography variant="h2" component="h1" color="black" style={{ fontFamily: '"Pacifico", cursive', fontSize: '2rem' }}>
            Stay in the loop! Sign up now!
          </Typography>
        </Box>
        <Box
          sx={{
            border: '2px solid blue',
            backgroundColor: '#d3d3d3',
            borderRadius: 10,
            height: 'auto',
            width: 400,
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h2 style={{ color: 'black' }}>Sign up</h2>
          <Stack direction="column" spacing={2}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle sx={{ color: 'black' }} />
                  </InputAdornment>
                ),
                style: { color: 'black' }
              }}
              InputLabelProps={{ style: { color: 'black' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'blue' }
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
                    <EmailIcon sx={{ color: 'black' }} />
                  </InputAdornment>
                ),
                style: { color: 'black' }
              }}
              InputLabelProps={{ style: { color: 'black' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'blue' }
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
                    <EmailIcon sx={{ color: 'black' }} />
                  </InputAdornment>
                ),
                style: { color: 'black' }
              }}
              InputLabelProps={{ style: { color: 'black' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'blue' }
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
                    <LockIcon sx={{ color: 'black' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOffIcon sx={{ color: 'black' }} /> : <VisibilityIcon sx={{ color: 'black' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { color: 'black' }
              }}
              InputLabelProps={{ style: { color: 'black' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'blue' }
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
                    <LockIcon sx={{ color: 'black' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOffIcon sx={{ color: 'black' }} /> : <VisibilityIcon sx={{ color: 'black' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { color: 'black' }
              }}
              InputLabelProps={{ style: { color: 'black' } }}
              sx={{
                width: 250,
                '& .MuiInput-underline:before': { borderBottomColor: 'black' },
                '& .MuiInput-underline:hover:before': { borderBottomColor: 'teal' },
                '& .MuiInput-underline:after': { borderBottomColor: 'blue' }
              }}
              variant="standard"
            />
            <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
              label={
                <span style={{ fontSize: '0.75rem', color: 'black' }}>
                  I agree to the{' '}
                  <Link href="#" onClick={showTermsModal} color="primary" underline="hover">
                    terms and conditions
                  </Link>
                </span>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: '0.75rem', color: 'black' }}>Stay in the loop with email updates!</span>}
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
              <Link href="/" color="primary" underline="hover">
                Back to login
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
      </Box>
    </>
  );
};

export default Signup;
