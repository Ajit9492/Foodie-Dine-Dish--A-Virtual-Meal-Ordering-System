import React from 'react'
import '../styles/restaurant.css'
import SideBar from '../components/SideBar'
import NavbarSec from '../pages/NavbarSec'
import { GiWorld } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { IoRestaurantSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Restaurants() {
    return (

        <div className='parent'>
        <div className='restaurant-cont'>
            {/* <SideBar></SideBar> */}
            <img src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D'
                alt='...' className='image'></img>
            <div className='Rest-text'>
                <div className='Nav'>
                    <NavbarSec />
                </div>
                <div class="content">
                    <h1>
                        Partner with Foodie
                        at 0% commission for the 1st month!
                    </h1>
                    <p>And get ads worth INR 1500. Valid for new restaurant partners in select cities.</p>
                    <div class="btn-group">
                        <button>Register Your restaurant</button>
                        <Link to='/specific_rest'><button>Login to view your existing Restaurant</button></Link>
                    </div>
                    <p>Need help? Contact +91 9370890127 </p>
                </div>
            </div>
          

        </div>
        
       <div class="banner">
    <h1>Why partner with us?</h1>
    <p>To enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
    <div class="stats">
      <div class="stat">
        <h3>1000+ cities</h3>
        <span>in India</span>
      </div>
      <div class="stat">
        <h3>3 lakh+</h3>
        <span> restaurant listings</span>
      </div>
      <div class="stat">
        <h3>5.0 crore+</h3>
        <span> monthly orders</span>
      </div>
    </div>
  </div>

</div>

    )
}
