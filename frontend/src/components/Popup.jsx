import React from 'react'
import './Popup.css'
import { Box, Typography } from '@mui/material';
import './InputComponent.css'
import SendIcon from '@mui/icons-material/Send';
import LikeComponent from './LikeComponent';
import RegisterButton from './RegisterButton';
import { Image } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';



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
        exit: {
          scale: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        },
      };
  return (props.trigger) ? (
    <AnimatePresence>
      {props.trigger && (
        <div className='popup'>
          <motion.div className="popup-inner"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit">
            <button className="button" onClick={() => props.setTrigger(false)}>
              <span className="X"></span>
              <span className="Y"></span>
              <div className="close">Close</div>
            </button>
            {props.children}
            <Box className="commentBox">
              <div className='commentHeader'>
                <Typography variant='h6' style={{ color: 'rgba(238, 238, 238, 0.5)' }}>Comments</Typography>
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
                  <SendIcon className="send-icon" />
                </button>
              </div>
            </Box>
            <LikeComponent />
            <RegisterButton />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  ) : "";
}

export default Popup