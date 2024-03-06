import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Shop from './pages/shop'
import Cart from './pages/cart'
import About from './pages/about'
import Contact from './pages/contact'
import Register from '../register'
import Login from './login'
const Rout = ({shop, Filter, allproduct, addtocart, cart, setcart}) => {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Home addtocart ={addtocart}/>} />
        <Route  path="shop" element={<Shop shop={shop} Filter={Filter} allproduct={allproduct} addtocart={addtocart}/>} />
        <Route  path="cart" element={<Cart cart={cart} setcart={setcart}/>} />
        <Route  path="about" element={<About/>} />
        <Route  path="contact" element={<Contact/>} />
        <Route  path="register" element={<Register/>} />
        <Route  path="login" element={<Login/>} />

      </Routes>
    </div>
  )
}

export default Rout
