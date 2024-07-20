import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';
import EmailIcon from '@mui/icons-material/Email';
import LoopIcon from '@mui/icons-material/Loop';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import { Loop } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidepanel = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/');
  }
  return (
    <div style = {{
        position : 'absolute',
        top : 70,
        right : 0,
        padding : '20px',
        backgroundColor : '#d3d3d3',
        height : '100%',
        width : 250,
        color : 'white'
    }}>
        <Stack spacing={2} direction="column" justifyContent="center" style = {{marginTop : '60px'}}>
            <Button variant="text" style = {{color : ''}}startIcon={<FaceIcon />}>edit profile</Button>
            <Button variant="text" style = {{color : ''}}startIcon={<EmailIcon />}>Send Email</Button>
            <Button variant="text" style = {{color : ''}}startIcon={<LoopIcon />}>Update t & c</Button>
        </Stack>
        <Button variant="text" onClick = {handleLoginClick} style={{ color: '', position : 'absolute', bottom : '20%', left : '100px' }} startIcon={<LogoutIcon />} >
        Logout
      </Button>
    </div>
  )
}

export default Sidepanel