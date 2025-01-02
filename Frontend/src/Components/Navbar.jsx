import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Drop } from '../pages/construct'

function Navbar(){
   const [Show,setShow] = useState(false)

   function Menu(){
      setShow(!Show)
   }
   function HandleMenu(){
      setShow(false)
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
                <NavLink to="/" onClick={HandleMenu}>Home</NavLink>
                
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
    
    { Show? <Drop />: null  }
  
        </>
    )
}


export default Navbar