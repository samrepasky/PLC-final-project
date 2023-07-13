import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes,
Route} from 'react-router-dom';

import Project1 from './pages/project1';


function App() {
  return (
    <>
      <Router> 
        <Project1 />
        <Routes>

        </Routes>
      </Router>
      
    </>
  );
}

export default App;

