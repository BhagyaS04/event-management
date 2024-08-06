import React, {useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './RegisterButton.css';
import RegisterPage from './RegisterPage';
import { useNavigate } from 'react-router-dom';

const RegisterButton = ({eventId}) => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div>
      <button className="RegButton" onClick = {handleOpenPopup}>
        <p>Register now</p>
        <ArrowForwardIosIcon className="icon" />
      </button>
      <RegisterPage open={openPopup} onClose={handleClosePopup} eventId = {eventId} />
    </div>
  );
};

export default RegisterButton;
