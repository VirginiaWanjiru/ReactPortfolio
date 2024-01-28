// App.js
import React from 'react';
import './styles.css'; // Import your CSS file

import Header from './components/Header';
import Navigation from './components/Navigation';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Section id="introduction" title="PROFESSIONAL SUMMARY">
        {/* Your typing effect script goes here */}
      </Section>
      <Section id="skills" title="Programming Languages and IDES">
        {/* Skills list goes here */}
      </Section>
      <Section id="frameworks" title="Frameworks">
        {/* Frameworks list goes here */}
      </Section>
      <Section id="work_experience" title="WORK EXPERIENCE">
        {/* Work experience list goes here */}
      </Section>
      <Section id="Learning" title="LEARNING TIMELINE">
        {/* Learning timeline goes here */}
      </Section>
      <Section id="Hobbies" title="Hobbies">
        {/* Hobbies list goes here */}
      </Section>
      <Footer />
    </div>
  );
}

export default App;
