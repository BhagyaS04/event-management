import React from 'react'
import './Popup.css'
import { Box, Typography } from '@mui/material';
import './InputComponent.css'
import SendIcon from '@mui/icons-material/Send';
import LikeComponent from './LikeComponent';
import RegisterButton from './RegisterButton';
import { Image } from 'antd';
import {motion} from 'framer-motion'


const Popup = (props) => {
    const handleSendClick = () => {

    }
    const variants = {
        initial: {
          scale: 0,
          opacity: 0,
        },
        animate: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        },
      };
  return (props.trigger) ? (
    <div className='popup'>
        <motion.div className="popup-inner"
        variants={variants}
        initial="initial"
        animate="animate">
            <button className="button" onClick = {() => props.setTrigger (false)}>
                <span className="X"></span>
                <span className="Y"></span>
                <motion.div className="close">Close</motion.div>
            </button>
            {/* <button className="close-btn" onClick = {() => props.setTrigger (false)}>Close</button> */}
            { props.children }
            <Box className="commentBox">
                <div className='commentHeader'>
                    <Typography variant = 'h6' style = {{color : 'white'}}>Comments</Typography>
                </div>
                <div className="input-container">
                  <input
                    placeholder="Comment your thoughts..."
                    className="input"
                    name="text"
                    autoComplete="off"
                    type="text"
                  />
                  <button className="send-button" onClick={handleSendClick}>
                    <SendIcon className="send-icon"  />
                  </button>
                </div>
            </Box>
            <LikeComponent/>
            <RegisterButton/>
        </motion.div>
    </div>
  ) : "";
}

export default Popup