import React, { Fragment } from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Cart from './pages/Cart'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import OrderSummry from './pages/OrderSummry'
import OrderDetails from './pages/OrderDetails'
import AllOrders from './pages/AllOrders'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Wishlist from './pages/Wishlist'
import CustomPizza from './pages/CustomPizza'
import Address from './pages/Address'
import Admin from './pages/Admin'
import AdminOrders from './pages/AdminOrders'
import AddProduct from './pages/AddProduct'
import Restaurants from './pages/Restaurants'
import DiningOut from './pages/DiningOut'
import Card1 from './pages/Card1'
import BookingForm from './pages/BookingForm'
import Specific_Rest from './pages/Specific_Rest'
import Card2 from './pages/Card2'
import Card3 from './pages/Card3'
import Card4 from './pages/Card4'
import Card5 from './pages/Card5'
import Card6 from './pages/Card6'
const App = () => {
    return (
        
        <Router>
            <Fragment>
            <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/signin" element={<Signin/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/shipping" element={<Shipping/>}/>
              <Route path="/payment" element={<Payment/>}/>
              <Route path="/order" element={<OrderSummry/>}/>
              <Route path="/order/:id" element={<OrderDetails/>}/>
              <Route path="/orders" element={<AllOrders/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/wishlist" element={<Wishlist/>}/>
              <Route path='/custom-pizza' element={<CustomPizza/>}/>
              <Route path="/your-address" element={<Address/>}/>
              <Route path='/admin-side' element={<Admin/>}/>
              <Route path='/admin-orders' element={<AdminOrders/>}/>
              <Route path='/add-product' element={<AddProduct/>}/>
              <Route path='/restaurants' element={<Restaurants />}/>
              <Route path='/diningout' element={<DiningOut />}/>
              <Route path='/card1' element={<Card1 />}/>
              <Route path='/card2' element={<Card2 />}/>
              <Route path='/card3' element={<Card3 />}/>
              <Route path='/card4' element={<Card4 />}/>
              <Route path='/card5' element={<Card5 />}/>
              <Route path='/card6' element={<Card6 />}/>
              <Route path='/bookingForm' element={<BookingForm />}/>
              <Route path='/specific_rest' element={<Specific_Rest />}/>
              

            </Routes>
             </main>
            </Fragment>
        </Router>
         
        
    )
}

export default App
