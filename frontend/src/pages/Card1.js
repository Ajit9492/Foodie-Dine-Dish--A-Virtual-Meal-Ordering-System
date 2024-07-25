import React, { useState } from 'react'
import NavbarSec from './NavbarSec'
import '../styles/Card1.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BookingForm from './BookingForm';
import MenuCard from './MenuCard';
import Restaurant_photos from './Restaurant_photos';


export default function Card1() {

  const [activeContent, setActiveContent] = useState(null);

  const handleNavClick = (content) => {
    setActiveContent(content);
  };


  return (
//     <>
    
// <div className="container">
//  <NavbarSec></NavbarSec> 

// <div className="image-container">
//     <img src="https://b.zmtcdn.com/data/pictures/9/19359199/13a407ee8e897b9310f504e7e7fb653e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="Image 1" 
//     className='img-1'/>
//     <img src="https://b.zmtcdn.com/data/pictures/chains/9/19359199/6b15cc92183c1bbd4c06e8a908302d78.jpg?fit=around|300:273&crop=300:273;*,*" alt="Image 2" 
//     className='img-2'/>
//     <img src="https://b.zmtcdn.com/data/pictures/9/19359199/4c600f56a8a7a7b269146035aac283b1.jpg?fit=around|300:273&crop=300:273;*,*" alt="Image 3"
//     className='img-1' />
// </div>

// <h1>Unplugged Courtyard</h1>


// <p>Mediterranean, North Indian, Continental, Chinese, Mexican, Thai, Italian, Coffee</p>
// <p>Open now -
// 12midnight – 1am, 1pm – 12midnight (Today)</p>


// <div className="button-container">
//     <button>Direction</button>
//     <button>BookMark</button>
//     <button>Share</button>
// </div>

// <nav>
//         <a href="#">Overview</a>
//         <a href="#">Menu</a>
//         <Link to='/bookingForm'><a href="#">Book a table</a></Link>
//         <a href="#">Photos</a>
//         <a href="#">Review</a>
//     </nav>
//     <hr></hr>
// </div>
// </> 
<>
<div className="container">
        <NavbarSec />
        
        <div className="content-display">
          

          {/* Your existing content */}
          <div className="image-container">
          <img src="https://b.zmtcdn.com/data/pictures/9/19359199/13a407ee8e897b9310f504e7e7fb653e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="Image 1" 
          className='img-1'/>
          <img src="https://b.zmtcdn.com/data/pictures/chains/9/19359199/6b15cc92183c1bbd4c06e8a908302d78.jpg?fit=around|300:273&crop=300:273;*,*" alt="Image 2" 
          className='img-2'/>
          <img src="https://b.zmtcdn.com/data/pictures/9/19359199/4c600f56a8a7a7b269146035aac283b1.jpg?fit=around|300:273&crop=300:273;*,*" alt="Image 3"
          className='img-1' />
          </div>
          <h1>Unplugged Courtyard</h1>
          <p>Mediterranean, North Indian, Continental, Chinese, Mexican, Thai, Italian, Coffee</p>
          <p>Open now - 12midnight – 1am, 1pm – 12midnight (Today)</p>

          <div className="button-container">
            <button onClick={() => handleNavClick('direction')}>Direction</button>
            <button onClick={() => handleNavClick('bookmark')}>BookMark</button>
            <button onClick={() => handleNavClick('share')}>Share</button>
          </div>

          <nav>
            <a href="#" onClick={() => handleNavClick('overview')}>Overview</a>
            <a href="#" onClick={() => handleNavClick('menu')}>Menu</a>
            <a href="#" onClick={() => handleNavClick('bookTable')}>Book a table</a>
            <a href="#" onClick={() => handleNavClick('photos')}>Photos</a>
            <a href="#" onClick={() => handleNavClick('review')}>Review</a>
          </nav>
          <hr />
          {activeContent === 'menu' && <MenuCard />} {/* Render MenuCard if 'menu' is active */}
          {activeContent === 'bookTable' && <BookingForm />} {/* Render BookingForm if 'bookTable' is active */}
          {activeContent === 'photos' && <Restaurant_photos />}
        </div>
      </div>
    </>
  );
};
