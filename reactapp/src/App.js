import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Introduction from './components/Intro';
import Skills from './components/Skills';
import Framework from './components/Framework';
import WorkExperience from './components/WorkExperience';
import LearningTimeline from './components/LearningTimeline';
import Hobbies from './components/Hobbies';


  

function App() {
   return (
    <div className="App">

      <Navigation></Navigation>
      <Header></Header>
      <Introduction ></Introduction>
      <Skills></Skills>

      <Framework ></Framework>
      <WorkExperience></WorkExperience>
      <LearningTimeline ></LearningTimeline>
      <Hobbies></Hobbies>
        
    

     
      <footer>
        <p>Contact me:</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/virginia-wanjiru-0852641b0/" target="_blank" title="LinkedIn">
            <img src="linkedin.svg" alt="LinkedIn Icon" style={{ width: '30px', height: '50px' }} />
          </a>
          <a href="https://github.com/VirginiaWanjiru" target="_blank" title="GitHub">
            <img src="github.svg" alt="GitHub Icon" style={{ width: '30px', height: '50px' }} />
          </a>
          <div>
            <img src="gmail.svg" alt="Gmail Icon" style={{ width: '30px', height: '50px' }} />
            <h3>virginiachristine55@gmail.com</h3>
          </div>
        </div>
        <p>&copy; 2024 Virginia's Wang'ang'a</p>
      </footer>
    </div>
    
  );
}

export default App;
