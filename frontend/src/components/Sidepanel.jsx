import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';
import EmailIcon from '@mui/icons-material/Email';
import LoopIcon from '@mui/icons-material/Loop';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from './ConfirmationDialog';

const Sidepanel = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLoginClick = () => {
    navigate('/');
  };

  const handleLogoutClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log('Confirmed!');
    navigate('/logout'); // You might want to handle actual logout logic here
    setOpen(false);
  };

  return (
    <div style={{
      position: 'absolute',
      top: 70,
      right: 0,
      padding: '20px',
      backgroundColor: '#d3d3d3',
      height: '100%',
      width: 250,
      color: 'black' // Adjusted to match button colors
    }}>
      <Stack spacing={2} direction="column" justifyContent="center" style={{ marginTop: '60px' }}>
        <Button variant="text" startIcon={<FaceIcon />}>Edit Profile</Button>
        <Button variant="text" startIcon={<EmailIcon />}>Send Email</Button>
        <Button variant="text" startIcon={<LoopIcon />}>Update T&C</Button>
      </Stack>
      <Button
        variant="text"
        onClick={handleLogoutClick}
        style={{ color: '', position : 'absolute', bottom : '20%', left : '100px' }}
        startIcon={<LogoutIcon />}
      >
        Logout
      </Button>
      <ConfirmationDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Confirmation"
        content="Are you sure you want to logout?"
      />
    </div>
  );
};

export default Sidepanel;