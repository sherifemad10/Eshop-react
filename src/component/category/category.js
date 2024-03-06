import React from 'react'
import './category.css'
import Earphone from './earphone.png'
import Watch from './watch.png'
import laptop from './macbook.png'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='category animate__animated animate__fadeInDown'>


      
      <div className='earphone'>
      <div className='info'>
        <h5>Enjoy</h5>
        <p>with</p>
        </div>
        
        
      <div className='title'>
      <h2>EARPHONE</h2>
      </div>
      <div className='btnshop'>
      <Link to='/shop'><button className='shopbtn'>Browse</button></Link> 

      </div>
      <img src={Earphone} alt="Earphone"/>
      </div>


      <div className='watch'>
      <div className='info'>
        <h5>Enjoy</h5>
        <p>with</p>
        
        </div>
      <div className='title'>
      <h2>Watch</h2>
      </div>
      <div className='btnwat'>
      <Link to='/shop'><button className='shopbtn'>Browse</button></Link> 
      </div>
      <img src={Watch} alt="Watch"/>
      </div>



      <div className='laptop'>
      <div className='info'>
        <h5>Enjoy</h5>
        <p>with</p>
        
        </div>
      <div className='title'>
      <h2>Laptop</h2>
      </div>
      <div className='btnlap'>
      <Link to='/shop'><button className='shopbtn'>Browse</button></Link> 
      </div>
      <img src={laptop} alt="Laptop"/>
      </div>




    </div>
  )
}

export default Category
