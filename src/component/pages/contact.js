import './contact.css'
import { PiHeadsetFill } from "react-icons/pi";


const Contact = () => {
  return (
    <div className='contact'>

        <>
        <div className='contitle'>
            <PiHeadsetFill className='icons'/>
            <h2>Get In Touch</h2>
        </div>

        <div className='formbox'>
         
        <form class="form">
    <h2>Contact us</h2>
    <input type="text" placeholder="Your name" class="input"/>
    <input type="email" placeholder="Your email" class="input" required/>
    <input type="text" placeholder="Subject ..." class="input"/>
    <textarea placeholder="Your message"></textarea>
     
    <button className='button'>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
</form>

        </div>

       </>

    </div>
  )
}

export default Contact