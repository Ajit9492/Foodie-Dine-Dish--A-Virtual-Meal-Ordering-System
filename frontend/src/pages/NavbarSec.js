import React from 'react'
import '../styles/NavbarSec.css'
import {HiMenuAlt1} from 'react-icons/hi'
import { GiFullPizza } from "react-icons/gi";
import {Link} from 'react-router-dom'

export default function NavbarSec() {
  return (
    <nav className="navbar">
            <div className="navbar-left">
            {/* <HiMenuAlt1/> */}
            {/* <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png" alt="logo" /></Link> */}
            <GiFullPizza />
            </div>
            <div className="navbar-right">
                <input type="text" placeholder="Search..." className="search-bar" />
            </div>
        </nav>
  )
}
