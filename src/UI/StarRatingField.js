import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

const StarRatingField = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleStarHover = (index) => {
    setHoveredStar(index);
  };

  const handleStarHoverLeave = () => {
    setHoveredStar(0);
  };
  const fraction = `${rating}/${5}`;

  return (
    <div style={{ display: 'flex', gap:10,justifyContent: 'center', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((index) => (
        <StarIcon
          key={index}
          style={{
            cursor: 'pointer',
            transition: 'color 0.3s',
            color: index <= hoveredStar ? 'yellow' : 'green',
            fontSize:'2vw'
          }}
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={handleStarHoverLeave}
          onClick={() => handleStarClick(index)}
        />
      ))}
      <p style={{backgroundColor:'#B9B7CA',borderRadius:'15px',color:'white',padding:'0.3%'}}><strong>{fraction}</strong> </p>
    </div>
  );
};

export default StarRatingField;