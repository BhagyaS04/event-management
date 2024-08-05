import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
const LikeComponent = ({eventId}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [eventLikes, setEventLikes] = useState ([]);
  const userId = sessionStorage.getItem ('userId')

  const handleLike = async () => {
    if (!userId) {
      console.error ("User ID not found in session storage")
      return;
    }
    try {
      // Toggle like status and update like count
      const newIsLiked = !isLiked;
      const res = await axios.post(`http://localhost:4000/events/${eventId}`, {
        userId : userId,
        like: newIsLiked,
      });

      if (res.data) {
        // Update state based on response
        const updatedLikesArray = res.data.eventLikes;
        setEventLikes(updatedLikesArray);
        setLikeCount(updatedLikesArray.length);
        setIsLiked(newIsLiked);
      } else {
        console.error('Unexpected response data format:', res.data);
      }
    } catch (error) {
      console.error('Error updating like status:', error);
    }
  };

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/events/${eventId}`);
        if (res.data) {
          const eventLikesArray = res.data.eventLikes || []; // Default to empty array if undefined
          setEventLikes(eventLikesArray);
          setLikeCount(eventLikesArray.length);
          console.log("EventName in like component:", eventId);
        } else {
          console.error('Unexpected response data format:', res.data);
        }
      } catch (error) {
        console.error('Error fetching event likes:', error);
      }
    };

    if (eventId) {
      fetchLikes();
    }
  }, [eventId]);


  return (
    <div className="like-wrapper">
      <input className="check" type="checkbox" id="like-toggle" checked={isLiked} readOnly />
      <label className="container" htmlFor="like-toggle" onClick={handleLike}>
        {isLiked ? (
          <FavoriteIcon className="icon active" />
        ) : (
          <FavoriteBorderIcon className="icon" />
        )}
        <span className="like-text">{likeCount}</span>
      </label>
    </div>
  );
};

export default LikeComponent;
