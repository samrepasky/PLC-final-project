import React, { Component, useRef, useState } from 'react';
import './project1.css'
import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import Hero from './components1/heroBackground'



function Project1() {
  const navigate = useNavigate();
  const BackToProject = () => {
    navigate('/Projects');
  };
  return (
    <>
    <div className = 'Project1'>
    <Hero />
    </div>
      </>
    
  )
}

export default Project1;