import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";

const Cart = ({cart, setcart}) => {
//  incnum
 const incnum = (product) =>{
    const exist = cart.find ((x) =>{
        return x.id === product.id;
    })

    setcart(cart.map((ele) =>{
        return ele.id === product.id ?  {...exist , qty: exist.qty + 1} : ele

    }))

 }

 //  decnum
 const decnum = (product) =>{
    const exist = cart.find ((x) =>{
        return x.id === product.id;
    })

    setcart(cart.map((ele) =>{
        return ele.id === product.id ?  {...exist , qty: exist.qty - 1} : ele

    }))

 }

//  delete product
const remprudect = (product) =>{
    const exist = cart.find((x)=>{
        return x.id === product.id;
    })
    if (exist.qty > 0) {
        setcart(cart.filter((ele) => {
         return ele.id !==  product.id
        }))
    }

}

// total price

const total = cart.reduce((price ,item) => price + item.qty * item.price , 0)


// checkout
// const thankbox = document.querySelector(".thankbox")
  // const thank = document.querySelector(".thank")

const checkout = () =>{
  
  document.querySelector(".thankbox").style.display ="block"
  document.querySelector(".thank").style.display ="block"
}

const close = ()=>{
  document.querySelector(".thankbox").style.display ="none"
  document.querySelector(".thank").style.display ="none"
}


  return (
    <div className='cart'>
        <h3>#Cart</h3>
        <div className='thankbox'>
        <div className='thank'>
          <h2>Thank you</h2>
          <p>The flowers will arrive to you in 3 to 4 business days</p>
          <button onClick={close}>Close</button>
        </div>
        </div>
        

        {
            cart.length === 0 &&
            <>
             <div className='emptycart'>
                <h2>Your Shopping Cart is Empty</h2>
               <Link to='/shop'><button>Shopping Now</button></Link>
            </div>
            </>
        }
        <div className='container'>
            {
                cart.map((ele) =>{
                    return (
                        <div className='box'>
                            <div className='imgbox'>
                                <img src={ele.image} alt="product"/>
                                </div>
                                <div className='details'>
                                    <h4>{ele.cat}</h4>
                                    <div className='info'>
                                    <h3>{ele.name}</h3>
                                    <p>Price: ${ele.price}</p>
                                    </div>

                                    <div className='quantity'>
                                        <div className='qtybtn'>
                                        <button onClick={() => incnum (ele)}>+</button>
                                        <input type='number'value={ele.qty}/>
                                        <button onClick={() => decnum (ele)}>-</button>
                                        </div>
                                        <div className='dle'>
                                        <button className="bin-button" onClick={() => remprudect (ele)}>
                                           <svg
                                             className="bin-top"
                                             viewBox="0 0 39 7"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                           >
                                             <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
                                             <line
                                               x1="12"
                                               y1="1.5"
                                               x2="26.0357"
                                               y2="1.5"
                                               stroke="white"
                                               stroke-width="3"
                                             ></line>
                                           </svg>
                                           <svg
                                             className="bin-bottom"
                                             viewBox="0 0 33 39"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                           >
                                             <mask id="path-1-inside-1_8_19" fill="white">
                                               <path
                                                 d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                               ></path>
                                             </mask>
                                             <path
                                               d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                               fill="white"
                                               mask="url(#path-1-inside-1_8_19)"
                                             ></path>
                                                  <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
                                             <path d="M21 6V29" stroke="white" stroke-width="4"></path>
                                           </svg>
                                         </button>

                                        </div>
                                        </div>
                                        

                            </div>
                            </div>
                    )
                })
            }

        </div>

           <div className='bottom'>
            {
                cart.length > 0 && 
                <>
                <div className='total'>
                    <h4>Total:  ${total}</h4>
                </div>

                <button onClick={checkout}> Checkout</button>
                </>
            }
            
           </div>
      
    </div>
  )
}

export default Cart
