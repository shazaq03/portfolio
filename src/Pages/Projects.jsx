import React from 'react';
import {BsCodeSlash, BsEyeFill} from 'react-icons/bs';


import { ProjectData } from '../ProjectData';


function Projects() {
  return(
    <div className='project-section'>
      {ProjectData.map((project) =>{
        return(
          <div className='project-card' key={project.index}>
            <div className='image-container'>
              <img src={process.env.PUBLIC_URL + project.image} alt={project.name} />
            </div>
            <p className='project-title-text'>{project.name}</p>
            <div className='btn-container'>
              <a href={project.glink} target="_blank" rel="noreferrer" ><span><div><BsCodeSlash fontSize="1em" color='#f5f5dc'/></div><div>view code</div></span></a>
              <a href={project.Llink} target="_blank" rel="noreferrer"><span><div><BsEyeFill fontSize="1em" color='#f5f5dc'/></div> <div>view demo</div></span></a>
            </div>
          </div>
        );
      })
      }
    </div>
  );
}

export default Projects