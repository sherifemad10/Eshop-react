import React from 'react'
import './about.css'
import imgLeft from './a6.jpg'
import videoapp from './1.mp4'
import shopimg from './service-icon-1.svg'
import easyimg from './service-icon-2.svg'
import payimg from './service-icon-3.svg'
import supportimg from './service-icon-4.svg'


const About = () => {
  return (
    <div className='about'>
      <>
      <div className='pagetitle'>
      <h2>#About Us</h2>
      </div>


    <div className="abouinfo">
            <div className='aboutimg'>
            <img src={imgLeft} alt=''/>
            </div>
             
             <div className='detail'>
             <h2>Who We Are?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora modi voluptas beatae in labore alias error,
             possimus sint saepe harum, aspernatur ut repudiandae magni laboriosam consectetur totam! Laudantium, doloribus?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quae beatae quo consequatur, accusantium voluptatem assumenda,
             voluptas ducimus eius necessitatibus tempore dignissimos molestiae explicabo laboriosam, neque quas repellendus. Recusandae, unde.</p>

             </div>
            
        </div>
   <div className='videobox'>
     <h2>Download Our App</h2>
  <div className="video container">
    <video autoPlay muted>
      <source src={videoapp} type="video/mp4"/>
    </video>
   </div>
 

  </div>

    <div className='services'>
    <div className="feature">
       <img src={shopimg} alt="" />
       <h3>Free Shipping</h3>
       <p>On All Order Over $599</p>
    </div>
    <div className="feature">
        <img src={easyimg} alt="" />
        <h3>Easy Returns</h3>
        <p>30 Day Returns Policy</p>
 
     </div>
     <div className="feature">
        <img src={payimg} alt="" />
        <h3>Secure Payment</h3>
        <p>100% Secure Gaurantee</p>
     </div>
     <div className="feature">
        <img src={supportimg} alt="" />
        <h3>Special Support</h3>
        <p>24/7 Dedicated Support</p>
     </div>
     </div>
     </>
     </div>

    
  )
}

export default About
