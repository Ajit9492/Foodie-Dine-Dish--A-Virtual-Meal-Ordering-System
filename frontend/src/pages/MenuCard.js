import React, { useState } from 'react';
import '../styles/MenuCard.css'

const ImageCard = ({ imageUrl }) => {
  const [expanded, setExpanded] = useState(false);

  const handleImageClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleImageClick}>
      <img src={imageUrl} alt="Card" />
    </div>
  );
};

const MenuCard = () => {
  return (
    <div className="menu-container">
      <ImageCard imageUrl="https://media.istockphoto.com/id/464523718/vector/menus-are-designed-exquisitely-beautiful-stylish-and-easy-to-use.jpg?s=612x612&w=0&k=20&c=2hLLfwjXqt1iqeHQ-NvW4ozU16_da12W1pefQ0445DE=" />
      <ImageCard imageUrl="https://media.istockphoto.com/id/464523720/vector/menus-are-designed-exquisitely-beautiful-stylish-and-easy-to-use.jpg?s=612x612&w=0&k=20&c=e2DsE0RKLODzYhiOm-TLgy6PibK1Ol7F2hH6ZdW2Kho=" />
    </div>
  );
};

export default MenuCard;



