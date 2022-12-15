import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [menuState, setmenuState] = useState(false);

  const handlemenu = () =>{
    if(menuState === true){
      setmenuState(false);
    }else{
      setmenuState(true);
    }
  } 

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <section className='navsection'>
        <div className="inner-container">
            <button className='logo' onClick={routeChange}>Sharan's portfolio</button>
            <button onClick={handlemenu} className='hamburger-btn' aria-controls='main-menu' aria-expanded={menuState}>
              <svg fill='var(--button-color)' className='hamburger' viewBox='0 0 100 100' width="30">
                <rect 
                  className='line top'
                  width='80' height='10'
                  x='10' y='25' rx='5'
                  >
                </rect>
                <rect 
                  className='line middle'
                  width='80' height='10'
                  x='10' y='50' rx='5'
                  >
                </rect>
                <rect 
                  className='line bottom'
                  width='80' height='10'
                  x='10' y='75' rx='5'
                  >
                </rect>

              </svg>
            </button>
        </div>
        <div className='menu'>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Contact Me</li>
              <li>Resume</li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar