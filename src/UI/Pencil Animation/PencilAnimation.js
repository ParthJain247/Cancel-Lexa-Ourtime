import React, { useState } from 'react';
import './HoverAnimation.css'; 
import pencilImage from '../../Assets/Images/signature-pencil.svg';
import boxImage from '../../Assets/Images/signature-box.svg';

const PencilAnimation = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div
        className={`box ${isHovering ? 'hover' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={boxImage} alt="Box" />
        <img src={pencilImage} alt="Pencil" className="pencil" />
      </div>
    </div>
  );
};

export default PencilAnimation;