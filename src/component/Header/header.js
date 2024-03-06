import { useRef } from 'react';
import './header.css'
import { FaShippingFast } from "react-icons/fa";
import { PiUserSwitchFill } from "react-icons/pi";
import { Link } from 'react-router-dom';





const Header = ({Search, setSearch, searchproduct}) => {

    // const sersign = document.querySelector(".sersign")
    const moblienav = document.querySelector(".moblienav")
    // const checkboxtoggler = document.querySelector(".checkboxtoggler")

    const mobile = () =>{
      if(moblienav.style.display ==="block"){
        moblienav.style.display = "none"        

    }else {
      moblienav.style.display = "block";
    }
    }

    


    const user = useRef()
    const logout = useRef()
    const usericon = useRef()
    const signup = useRef()
    const signin = useRef()
     
    function checked() {
      if (localStorage.getItem("name")) {
        console.log(signup.current)
        // user.current.style.display ="block"
        // logout.current.style.display ="block"
        // usericon.current.innerHTML = localStorage.getItem("name")
        // signup.current.style.display ="none"
        // signin.current.style.display ="none"
      } else {
        // signup.current.style.display ="block"
        // signin.current.style.display ="block"
        // user.current.style.display ="none"
        // logout.current.style.display ="none"


      }
      
    }
    checked()

  
  
  return (
   <div className='header'>
    <div className='topheader'>
      <div className='icon'>
        <FaShippingFast />
      </div>
       
       {/* mobile */}

       
       <label class="hamburger">
  <input type="checkbox" onClick={mobile}/>
  <svg viewBox="0 0 32 32">
    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path className="line" d="M7 16 27 16"></path>
  </svg>
</label>

      <div className='info'>
      <marquee  direction="left" scrollamount="4">Free Shipping When Shopping upto $1500.</marquee>
      </div>

       
       {/* search */}
       {/* mobile */}
       <div className='moblienav'>
       <div class="search">
        <input value={Search} placeholder="Search..." type="text" onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" onClick={searchproduct}>Go</button>
      </div>
      <Link to='/register'><button className='signup' ref={signup}>
        Sign up
       <div className="arrow-wrapper">
        <div className="arrow"></div>

       </div>
    </button>
    </Link> 

    <Link to='/login'> <button className="btn-53 signup signin" ref={signin}>
  <div className="original">Sign in</div>
  <div className="letters">
    
    <span>S</span>
    <span>i</span>
    <span>g</span>
    <span>n</span>
    <span>i</span>
    <span>n</span>
  </div>
</button>
</Link>

<div className='user' ref={user}>
<PiUserSwitchFill className='usericon' />
<h3 className='username' ref={usericon}></h3>
</div>

<button className="Btn1 logout" ref={logout}>
  
  <div className="sign1"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className="text">Logout</div>
</button>

<ul>
          <li><Link to='/' className='link'>Home</Link></li>
          <li><Link to='/shop' className='link'>Shop</Link></li>
          <li><Link to='/cart' className='link'>Cart</Link></li>
          <li><Link to='/about' className='link'>About</Link></li>
          <li><Link to='/contact' className='link'>Contact</Link></li>
      </ul>



       </div>


       <div className='sersign'>
        

       <div class="search">
        <input value={Search} placeholder="Search..." type="text" onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" onClick={searchproduct}>Go</button>
      </div>



        <div className='sign'>

      <Link to='/register'><button className='signup' >
        Sign up
       <div className="arrow-wrapper">
        <div className="arrow"></div>

       </div>
    </button>
    </Link> 
  
    {/* //sign up */}

   <Link to='/login'> <button className="btn-53 signup">
  <div className="original">Sign in</div>
  <div className="letters">
    
    <span>S</span>
    <span>i</span>
    <span>g</span>
    <span>n</span>
    <span>i</span>
    <span>n</span>
  </div>
</button>
</Link>

<div className='user'>
<PiUserSwitchFill className='usericon' />
<h3 className='username'>sherifemad10</h3>
</div>

<button className="Btn1 logout" ref={logout}>
  
  <div className="sign1"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className="text">Logout</div>
</button>

</div>

</div>

{/* //sign in */}

      

    </div>




    <div className='mid-header'>


      <div className='logo'>
        <h1><a href='../../../public/index.html'>ESHOP</a></h1>
      </div>

      {/* mobile */}
      {/* <input id="toggleChecker" type="checkbox" onClick={mobile2}/>
        <label id="togglerLable" for="toggleChecker">
          <div className="checkboxtoggler">
           <div className="line-1"></div>
            <div className="line-2"></div>
              <div className="line-3"></div>
                </div>
                  </label> */}
      


      <div className='nav'>
      <ul>
          <li><Link to='/' className='link'>Home</Link></li>
          <li><Link to='/shop' className='link'>Shop</Link></li>
          <li><Link to='/cart' className='link'>Cart</Link></li>
          <li><Link to='/about' className='link'>About</Link></li>
          <li><Link to='/contact' className='link'>Contact</Link></li>
      </ul>
      <div className='info'>
        <p>flat 10% over all laptop</p>
      </div>
      </div>

      


     

    </div>



   </div>
  )
}

export default Header
