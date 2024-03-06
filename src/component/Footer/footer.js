import './footer.css'
import { FaPiggyBank } from "react-icons/fa6";
import { FaShippingFast, FaHeadset, FaWallet, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";






const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='leftbox'>
          <div className='box'>
            <div className='iconbox'>
            <FaPiggyBank />
            </div>
            <div className='detail'>
              <h3>Great Saving</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>

          </div>

          <div className='box'>
            <div className='iconbox'>
            <FaShippingFast />
            </div>
            <div className='detail'>
              <h3>Free delivery</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>

          </div>

          <div className='box'>
            <div className='iconbox'>
            <FaHeadset />
            </div>
            <div className='detail'>
              <h3>24/7  Support</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>

          </div>

          <div className='box'>
            <div className='iconbox'>
            <FaWallet />
            </div>
            <div className='detail'>
              <h3>Money Back</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>

          </div>


        </div>
        <div className='rightbox'>
          <div className='header'>
            <h2>EShop</h2>
            <p>It is a laptop website at the cheapest price available and with high quality. We are here seeking to change the idea of online shopping and we are seeking to make it as simple as possible. Therefore, we are honored by your visit to our website and we hope that we will live up to your expectations.</p>
          </div>
          <div className='bottom'>
            <div className='links'>
              <h3>Your Account</h3>
              <ul>
                <li>About us</li>
                <li>Account</li>
                <li>Payment</li>
                <li>sales</li>
              </ul>
            </div>
            <div className='links'>
              <h3>Products</h3>
              <ul>
                <li>Delivery</li>
                <li>Trick Order</li>
                <li>New Prodects</li>
                <li>Old Products</li>
              </ul>
            </div>

            <div className='links'>
              <h3>Contact Us</h3>
              <ul>
                <li><IoLocationSharp className='icons' />4005, Silver Business USA</li>
                <li><FaPhoneAlt className='icons' />+1 000 000 0000</li>
                <li><MdEmail className='icons' />info@eshop.com</li>
              </ul>
            </div>


          </div>
        </div>


      </div>

      <div className='footer-copyright'>
        <p>© copyright 2024,<a href='https://github.com/sherifemad10'>sherif emad</a> </p>
      </div>

      
    </div>
  )
}

export default Footer
