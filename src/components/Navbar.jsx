import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {


  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  return (
    <section className='navsection'>
        <div className="inner-container">
            <button className='logo' onClick={()=>{routeChange("/")}}>Sharan's portfolio</button>
            <button className='contact-btn' onClick={()=>{routeChange("/contact")}} >
              Contact Me
            </button>
        </div>
    </section>
  )
}

export default Navbar