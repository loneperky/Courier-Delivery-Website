import React, { useState } from 'react'
import { NavLink,Link} from 'react-router-dom'
import { Drop } from '../pages/construct'

function Navbar(){
   const [Show,setShow] = useState(false)

   function Menu(){
      setShow(!Show)
   }

    return(
      
   <>
    <nav>
      <div className="logo">
         <div className="logosvg">
       </div>

            <h1>OTAXY</h1>

        </div>
         <ul className='menu-items'>
            <li>
                <NavLink to="/" target="__blank">Home</NavLink>
                
             </li>
             <li>
                <NavLink to="/about-us">About</NavLink>
             </li>
             <li>
                <NavLink to="/tracking">Tracking</NavLink>
             </li> 

             <li>
                <NavLink to="/pricing-plans">Pricing</NavLink>
             </li>
             <li>
                <NavLink to="/contact">Contact Us</NavLink>
             </li>
             <li>
             <NavLink to="/signup">Sign In</NavLink>
             </li>
             
          </ul>
        
          <div className="menu" onClick={Menu}>
          
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>  
             
    </nav> 
    
    { Show && ( <div className="dropdown">
            <ul>
              <li>
                <Link  to="/" onClick={Menu}>Home</Link>
              </li>
              
              <li>
                <Link  to="/about-us" onClick={Menu}>About</Link>
              </li>
              <li>
                <Link  to="/tracking" onClick={Menu}>Tracking</Link>
              </li>
              <li>
                <Link  to="/pricing-plans" onClick={Menu}>Pricing</Link>
              </li>
              <li>
                <Link to="/contact"  onClick={Menu}>Contact Us</Link>
              </li>
              <li>
                <Link  to="/signup" onClick={Menu}>Sign Up</Link>
              </li>
            </ul>
          </div>
         ) }
  
        </>
    )
}


export default Navbar