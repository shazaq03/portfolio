import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';

//import pages
import Greeting from './Greeting';
import Projects from './Projects';
import Contact from './Contact';


function FinalPage() {

    const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Greeting/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
    </Routes>
  )
}

export default FinalPage