// import React, { useState } from 'react'
import '../pages/shop.css'
import imgLeft from './shop_left.avif'
import { FaEye, FaHeart } from "react-icons/fa";
// import HomeProdects from '../Homeprodect/homprodect';


const Shop = ({shop, Filter, allproduct, addtocart}) => {
 
  return (
    <div className='shop'>
       <div className='container'>
        <div className='leftbox'>
            <div className='catagory'>
                <div className='header'>
                    <h2>all catagory</h2>
                </div>
                <div className='box'>
                    <ul>
                        <li onClick={() => allproduct ()}># All Product</li>
                        <li onClick={() => Filter ('Apple')}># Apple</li>
                        <li onClick={() => Filter ('ASUS')}># ASUS</li>
                        <li onClick={() => Filter ('Lenovo')}># Lenovo</li>
                        <li onClick={() => Filter ('HP')}># HP</li>
                        <li onClick={() => Filter ('SAMSUNG')}># SAMSUNG</li>
                        <li onClick={() => Filter ('Dell')}># Dell</li>
                        <li onClick={() => Filter ('Acer')}># Acer</li>
                    </ul>
                </div>
            </div>
            <div className='banner1'>
                <div className='imgleft'>
                    <img src={imgLeft} alt='imgleft'/>
                </div>
            </div>

        </div>
        {/*  right box */}
        <div className="rightbox">
            <div className="product-list">
                <h2>Shop Product</h2>
                <div className='productcontianer'>
                    {
                        shop.map((ele) =>{
                            return (
                                <>
                                <div className='box'>
                                    <div className='img-box'>
                                        <img src={ele.image} alt='img'/>

                                        <div className='icon'>
                                            <div className='icon-box'>
                                            <FaEye />
                                            </div>

                                            <div className='icon-box'>
                                            <FaHeart />


                                            </div>

                                        </div>

                                    </div>

                                    <div className='info'>

                                    <h3>{ele.name}</h3>
                                    <p>${ele.price}</p>
                                    <button className='btn' onClick={() => addtocart(ele)}>Add To Cart</button>

                                    </div>
                                    
                                </div>
                                </>

                            )

                        })
                    }
                   

                   

                </div>


            </div>



        </div>

       </div>
    </div>
  )
}

export default Shop
