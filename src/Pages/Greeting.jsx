import React from 'react';
import { useNavigate } from 'react-router-dom';

function Greeting() {

    let navigate = useNavigate(); 
  const routeChange = (route) =>{ 
    let path = `/` + route; 
    navigate(path);
  }

  return (
    <div className="greet-section">
          <div className="first-text">Hey,I'm <span>Sharan Sampath Kumar</span></div>
          <div className='sub-text-container'>
            <p className="sub-text second">I'm a Frontend ReactJs Developer currently based in Chennai, India.</p>
            <p className="sub-text">Hit me up, let's create somthing special!</p>
          </div>
          <div className="call-to-action-container">
            <button onClick={() => routeChange("projects")}>Projects</button>
            <button onClick={() => routeChange("projects")}>Resume</button>
          </div>
    </div>
  )
}

export default Greeting;