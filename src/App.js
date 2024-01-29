import React from 'react';
import './styles.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Introduction from './components/Intro';
import Skills from './components/Skills';
import Framework from './components/Framework';
import WorkExperience from './components/WorkExperience';
import LearningTimeline from './components/LearningTimeline';
import Hobbies from './components/Hobbies';
import Footer from'./components/Footer';


  

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
      <Footer></Footer>
      </div>
       ) }
        
       

export default App;
