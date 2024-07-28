import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeComponent = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prevCount => isLiked ? prevCount - 1 : prevCount + 1);
  };

  return (
    <div className="like-wrapper">
      <input className="check" type="checkbox" id="like-toggle" checked={isLiked} readOnly />
      <label className="container" htmlFor="like-toggle" onClick={handleLike}>
        {isLiked ? (
          <FavoriteIcon className="icon active" />
        ) : (
          <FavoriteBorderIcon className="icon" />
        )}
        <span className="like-text">{likeCount} Likes</span>
      </label>
    </div>
  );
};

export default LikeComponent;
