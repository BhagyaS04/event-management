import React, { useState, useEffect, useRef } from 'react';
import './Popup.css'; // Import your CSS file
import { Box, Typography } from '@mui/material';
import './InputComponent.css';
import SendIcon from '@mui/icons-material/Send';
import LikeComponent from './LikeComponent';
import RegisterButton from './RegisterButton';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { styled } from '@mui/material/styles';

const Popup = (props) => {
  const { eventId, trigger, setTrigger, children } = props;
  const [commentText, setCommentText] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [userName, setUserName] = useState ('')
  const [userNames, setUserNames] = useState ([])

  useEffect(() => {
    if (trigger) {
      console.log('Popup opened for event ID:', eventId);
      fetchComments();
    }
  }, [trigger, eventId]);

  const fetchUserNames = async (userIds) => {
    try {
      const userRequests = userIds.map(userId =>
        axios.get(`http://localhost:4000/users/${userId}`)
      );
  
      const userResponses = await Promise.all(userRequests);
      const userNames = userResponses.map(response => response.data.name);
  
      // Set user names to state
      setUserNames(userNames);
      console.log('Fetched user names:', userNames);
    } catch (error) {
      console.error('Error fetching user names:', error);
      setUserNames([]); // Ensure userNames is set to an empty array in case of an error
    }
  };

  const fetchComments = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/events/${eventId}/eventComments/comment`);
      if (res.data) {
        const comments = res.data.eventComments || [];
        setAllComments(comments);
        console.log('Fetched comments:', comments);
  
        // Extract user IDs from comments
        const userIds = comments.map(comment => comment.userId);
  
        // Fetch user details for each user ID
        fetchUserNames(userIds);
      } else {
        console.error('Unexpected response data format:', res.data);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      setAllComments([]); // Ensure allComments is set to an empty array in case of an error
    }
  };
  
  const handleSendClick = async () => {
    if (!commentText.trim()) {
      return;
    }

    try {
      const user_id = sessionStorage.getItem('user_id');
      if (!user_id) {
        console.error('User ID not found in session storage');
        return;
      }
      console.log (user_id)
      console.log (userName)
      await axios.post(`http://localhost:4000/events/${eventId}/eventComments/comment`, {
        userId: user_id,
        comment: commentText,
      });

      setCommentText('');
      fetchComments();
    } catch (error) {
      console.error('Error sending comment:', error);
    }
  };

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch image URL from the database
    const fetchImageUrl = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/events/${eventId}`);
        setImageUrl(res.data.eventPoster); 
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImageUrl();
  }, [eventId]);
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

  const CommentsContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    overflowY: 'auto',
    padding : '5px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
});


  return trigger ? (
    <AnimatePresence>
      {trigger && (
        <div className='popup'>
          <motion.div
            className="popup-inner"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className = "background-img" style = {{backgroundImage: `url(${imageUrl})`}}></div>
            <button className="button" onClick={() => setTrigger(false)}>
              <span className="X"></span>
              <span className="Y"></span>
              <div className="close">Close</div>
            </button>
            {children}
            <Box className="commentBox">
              <div className='commentHeader'>
                <Typography variant='h6' style={{ color: 'rgba(238, 238, 238, 0.5)' }}>Comments</Typography>
              </div>
              <CommentsContainer className={`comment-box ${allComments.length === 0 ? 'no-comments' : ''}`}>
                {allComments && allComments.length > 0 ? (
                  allComments.map((comment, index) => (
                    <div key={index} className="comment" >
                      <strong>{userNames[index]}</strong><br />{comment.comment}
                    </div>
                  ))
                ) : (
                  <Typography>No comments yet.</Typography>
                )}
              </CommentsContainer>
              <div className="input-container">
                <input
                  placeholder="Comment your thoughts..."
                  className="input"
                  name="text"
                  autoComplete="off"
                  type="text"
                  value={commentText}
                  onChange={handleChange}
                />
                <button className="send-button" onClick={handleSendClick}>
                  <SendIcon className="send-icon" />
                </button>
              </div>
            </Box>
            <LikeComponent eventId={eventId} isOpen={trigger} />
            <RegisterButton eventId = {eventId} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  ) : null;
};

export default Popup;
