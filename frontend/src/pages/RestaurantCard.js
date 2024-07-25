import React from 'react'
import '../styles/RestaurantCard.css'
import { Link } from 'react-router-dom'

export default function RestaurantCard() {
    return(
   
        <div className="rest-container">
            <img src="https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM="
            alt='...' className='rest-img'/>
        <div className="rest-header">
            <h1>Hotels</h1>
            <p>Discover great hotels around the world</p>
        </div>

        <Link to="/card1">

        <div className="Restcard-container">
       
            <div className="separate-card">
                <img src="https://b.zmtcdn.com/data/pictures/1/18902811/02542ffc7f72fc80dcfbcc2364a9e373.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="..." />
                <div className="info">
                    <h2>Legends Of Punjab - By Pepperazi</h2>
                    <p>North Indian, Fast Food, Chinese, Ice Cream, Desserts</p>
                    <div className="rating">Rating: 4.7</div>
                </div>
            </div>
        {/* </Link> */}

        {/* <Link to="/card2"> */}
            <div className="separate-card">
            <img src="https://b.zmtcdn.com/data/pictures/5/18454925/d2d5146c9da812db81a1c1d8e3e19fd2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="..." />
              
                <div className="info">
                    <h2>Massala Theoryy</h2>
                    <p>North Indian, Mughlai, Chinese, Mexican, Biryani, Italian, Beverages</p>
                    <div className="rating">Rating: 4.2</div>
                </div>
            </div>
            {/* </Link>  */}

          {/* <Link to="/card3"> */}
            <div className="separate-card">
              <img src="https://b.zmtcdn.com/data/pictures/5/18454925/d2d5146c9da812db81a1c1d8e3e19fd2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="..." />
                <div className="info">
                    <h2>Unlocked</h2>
                    <p>Cafe, Fast Food, North Indian, Chinese, Desserts, Beverages, Italian</p>
                    <div className="rating">Rating: 3.8</div>
                </div>
            </div>
            {/* </Link> */}

            {/* <Link to="/card4"> */}
            <div className="separate-card">
                <img src="https://b.zmtcdn.com/data/pictures/7/20422577/2e7b44722bbc8906509623a8433c1b91.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="..." />
                <div className="info">
                    <h2>Amritsar Haveli</h2>
                    <p>North Indian, Chinese, Street Food, Biryani, Desserts, Beverages</p>
                    <div className="rating">Rating: 4.9</div>
                </div>
            </div>
            

            {/* <Link to="/card5"> */}
            <div className="separate-card">
                <img src="https://b.zmtcdn.com/data/pictures/0/20443880/7c0cbffdfdbd3aa25cdfcd4d1d82c54e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="..." />
                <div className="info">
                    <h2>Kaffa Coffee Roasters</h2>
                    <p>Continental, Fast Food, Pizza, Coffee, Desserts Shake, Beverages</p>
                    <div className="rating">Rating: 3.5</div>
                </div>
            </div>
            {/* </Link> */}

           {/* <Link to="/card6"> */}
            <div className="separate-card">
                <img src="https://b.zmtcdn.com/data/pictures/9/19441879/17697462b9614ed9d0b6ab7dd820ac59.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="..." />
                <div className="info">
                    <h2>Veranda Rooftop Restro Cafe</h2>
                    <p>North Indian, Continental, Fast Food, Italian, Street Food, Shake, Beverages</p>
                    <div className="rating">Rating: 4.0</div>
                </div>
            </div>
            

        </div>
        </Link>
        
    </div>
   
   
    )
}
