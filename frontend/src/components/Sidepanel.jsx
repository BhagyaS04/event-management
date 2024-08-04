import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';
import EmailIcon from '@mui/icons-material/Email';
import LoopIcon from '@mui/icons-material/Loop';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from './ConfirmationDialog';
import './Sidepanel.css'; // Import CSS file

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
    navigate('/'); 
    setOpen(false);
  };

  return (
    <div className="sidepanel" > 
      <Stack spacing={2} direction="column" justifyContent="center" style={{ marginTop: '60px',paddingTop:'20px' }}>
        <Button variant="text" startIcon={<FaceIcon />} className="sidepanel-button">Edit Profile</Button>
        <Button variant="text" startIcon={<EmailIcon />} className="sidepanel-button">Send Email</Button>
        <Button variant="text" startIcon={<LoopIcon />} className="sidepanel-button">Update T&C</Button>

      </Stack>
      <Button
        variant="text"
        onClick={handleLogoutClick}
        style={{ color: 'primary', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }} // Centered horizontally at the bottom
        startIcon={<LogoutIcon />}
        className="sidepanel-button"
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