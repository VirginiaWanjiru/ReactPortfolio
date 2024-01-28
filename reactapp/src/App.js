import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const [typedText, setTypedText] = useState('');
  const text = `
    I am a dedicated and detail-oriented recent IT undergraduate specializing in Software Engineering, eager to
    leverage academic excellence and hands-on experience to enhance organizational efficiency through IT solutions.
    Proficient in analytical thinking and problem-solving, with a track record of successfully executing IT projects.
    Demonstrates a strong ability to apply theoretical knowledge to practical situations, showcasing a proactive
    attitude and a collaborative team spirit. Seeking an opportunity in software engineering to contribute to projects
    and continue professional development to grow in my career while contributing to company goals and
    objectives.`;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prevText) => prevText + text[index]);
      index++;
      if (index === text.length) clearInterval(typingInterval);
    }, 20);

    return () => clearInterval(typingInterval);
  },[] );

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Section id="introduction" title="PROFESSIONAL SUMMARY">
        <div>{typedText}</div>
      </Section>



      <Section id="skills" title="Programming Languages and IDES">

        <ul className="creative-skills-list">
          <li><img src="images/python.svg" alt="Python Logo" style={{ width: '100px', height: '100px' }} /></li>
          <li><img src="R.svg" alt="R Logo" style={{ width: '100px', height: '100px' }} /></li>
          {/* Add more skills here */}
        </ul>
      </Section>
      <Section id="frameworks" title="Frameworks">
        <ul className="skills-list">
          <li><img src="images/codeigniter.svg" alt="CodeIgnitor" style={{ width: '100px', height: '100px' }} /></li>
          <li><img src="images/flask.svg" alt="Flask" style={{ width: '100px', height: '100px' }} /></li>
          {/* Add more frameworks here */}
        </ul>
      </Section>
      <Section id="work_experience" title="WORK EXPERIENCE">
        <ul>
          <li>April 2023 – August 2023: Assistant Junior Data Specialist. </li>
          {/* Add more work experiences here */}
        </ul>
      </Section>
      <Section id="Learning" title="LEARNING TIMELINE">
        <div className="timeline">
          {/* Add your timeline content here */}
        </div>
      </Section>
      <Section id="Hobbies" title="Hobbies">
        <ul>
          <li>Meditation</li>
          <li>Gardening</li>
          {/* Add more hobbies here */}
        </ul>
      </Section>
      <Footer />
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
