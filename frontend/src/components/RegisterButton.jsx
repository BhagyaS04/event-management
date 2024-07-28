import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './RegisterButton.css';

const RegisterButton = () => {
  return (
    <button className="RegButton">
      <p>Register now</p>
      <ArrowForwardIosIcon className="icon" />
    </button>
  );
};

export default RegisterButton;
