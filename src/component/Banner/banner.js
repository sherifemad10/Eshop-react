import React from 'react'
import 'animate.css';
import './banner.css'
import banner from './laptop1.png'
import { Link } from 'react-router-dom';



const Banner = () => {
  return (
    <div class='banner animate__animated animate__fadeIn' >

     <div className='info'>
      <h3>Beats Solo</h3>
      <p>Shop Now</p>
      </div>

      <div className='tittle'>
      <h2>Laptop</h2>
      <Link to='/shop'><button>Shop By Category</button></Link> 
      </div>

      <img src={banner} alt="Laptop" />
  
    </div>
  )
}

export default Banner
