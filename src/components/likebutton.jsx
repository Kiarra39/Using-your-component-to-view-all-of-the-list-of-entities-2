import React, { useState } from 'react';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        backgroundColor: isLiked ? 'red' : 'gray',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
      }}
    >
      {isLiked ? 'Liked ' : 'Like '}
    </button>
  );
};

export default LikeButton;
