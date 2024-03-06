import { Link } from 'react-router-dom'
import './login.css'
import { useRef } from 'react'

const Login = () => {
  
const user = localStorage.getItem("name")
const pass = localStorage.getItem("password")


const inputRef = useRef()
const inputRef1 = useRef()

const lofin = (e) =>{
  e.preventDefault()
  if( inputRef.current.value === ""|| inputRef1.current.value ==="" ){
    document.getElementById("error").style.display="flex"
  }else {
     if(inputRef.current.value === user && inputRef1.current.value === pass ){
      setTimeout(()=>{
        window.location.href="/"
      },1000)
     }else{
      document.getElementById("warning").style.display ="flex"
     }
  }

}

const close = () =>{
  document.getElementById("error").style.display="none"

 }

 const close2 = () =>{
  document.getElementById("warning").style.display="none"

 }





  return (
    <div className='login'>
       <div className="error" id="error">
  <div className="error__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
  </div>
  <div className="error__title">please fill data</div>
  <div className="error__close" id="error__close" onClick={close}><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20"><path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path></svg></div>
</div>

<div class="warning" id="warning">
    <div class="warning__icon">
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 14h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z" fill="#393a37"></path></svg>
    </div>
        <div class="warning__title">username or password is wrong</div>
    <div class="warning__close" id="warning__close" onClick={close2}><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
</div>

       <div class="form-container">
        <div class="logo-container">
          Welcome Back!
        </div>
  
        <div class="social-buttons">
          <button class="social-button facebook">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
            </svg>
                      <span>Sign in with Facebook</span>
  
          </button>
          <button class="social-button apple">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6734 7.2221C10.7974 7.2221 9.44138 6.2261 8.01338 6.2621C6.12938 6.2861 4.40138 7.3541 3.42938 9.0461C1.47338 12.4421 2.92538 17.4581 4.83338 20.2181C5.76938 21.5621 6.87338 23.0741 8.33738 23.0261C9.74138 22.9661 10.2694 22.1141 11.9734 22.1141C13.6654 22.1141 14.1454 23.0261 15.6334 22.9901C17.1454 22.9661 18.1054 21.6221 19.0294 20.2661C20.0974 18.7061 20.5414 17.1941 20.5654 17.1101C20.5294 17.0981 17.6254 15.9821 17.5894 12.6221C17.5654 9.8141 19.8814 8.4701 19.9894 8.4101C18.6694 6.4781 16.6414 6.2621 15.9334 6.2141C14.0854 6.0701 12.5374 7.2221 11.6734 7.2221ZM14.7934 4.3901C15.5734 3.4541 16.0894 2.1461 15.9454 0.850098C14.8294 0.898098 13.4854 1.5941 12.6814 2.5301C11.9614 3.3581 11.3374 4.6901 11.5054 5.9621C12.7414 6.0581 14.0134 5.3261 14.7934 4.3901Z"></path>
            </svg>
            <span>Sign in with Apple</span>
          </button>
        </div>
        <div class="line"></div>
        <form class="form">
          <div class="form-group">
            <label for="username">username</label>
            <input ref={inputRef} required="" placeholder="Enter your username" name="username" id="email" type="text"/>
          </div>
  
          <div class="form-group">
            <label for="password">Password</label>
            <input ref={inputRef1} required="" name="password" placeholder="Enter your password" id="password" type="password"/>
          </div>
  
          <button type="submit" class="form-submit-btn" id="btn" onClick={lofin}>Sign In</button>
        </form>
  
        <a class="forgot-password-link link" href="#">Forgot Password</a>
  
        <p class="signup-link">
          Don't have an account?
          <Link to='/register'>Sign up now</Link> 
        </p>
      </div>
    </div>
  )
}

export default Login