import React from 'react'
import '../styles/DiningOut.css'

import RestaurantCard from './RestaurantCard'
import Header from '../components/Header'
import NavbarSec from './NavbarSec'
import {Link} from 'react-router-dom'

export default function DiningOut() {
    return (
        <>
        
        <div className='parent-cont'>
          <NavbarSec className='navBar'></NavbarSec> 
          {/* <Header className='diningheader'></Header>  */}
          <div className="container"> 
        <header>
            <h1>Collections</h1>
            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends</p>
        </header>

        <div className='cards'>
            <div className="collec-card">
              <img src="https://images.unsplash.com/photo-1522327646852-4e28586a40dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzYXVyYW50JTIwbGl2ZSUyMHNjcnJlbnN8ZW58MHx8MHx8fDA%3D" alt="..." />
                <h6>New In Town</h6>
                <h6>11 Places</h6>
            </div>
            <div className="collec-card">
            <img src="https://images.unsplash.com/photo-1522327646852-4e28586a40dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzYXVyYW50JTIwbGl2ZSUyMHNjcnJlbnN8ZW58MHx8MHx8fDA%3D" alt="..." />
                <h6>Best of live screenings</h6>
                <h6>26 Places</h6>
            </div>
           
            <div className="collec-card">
            <img src="https://media.istockphoto.com/id/1198743919/photo/rooftop-restaurant.webp?b=1&s=170667a&w=0&k=20&c=tY23ZJjIUAFnQyGBlcsGlYSW9IfyHCSe0fUmNWTaWgU=" alt="..." />
                <h6>What a new</h6>
                <h6>23 Places</h6>
            </div>
            <div className="collec-card">
            <img src="https://media.istockphoto.com/id/2090634273/photo/traditional-indian-thali-meal.webp?b=1&s=170667a&w=0&k=20&c=5xVWK5pMH12jhHVAb1AGhDfA3xSIoV3JglO6-6rfrng=" alt="..." />
                <h6>Gujrati Thali</h6>
                <h6>8 Places</h6>
            </div>
        </div>
        </div>
  
    <RestaurantCard />
            </div>
            

        </>

    )
}
