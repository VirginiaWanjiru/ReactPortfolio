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
      

      <Introduction id="introduction" title="PROFESSIONAL SUMMARY">
        <div>{typedText}</div>
      </Introduction>


      
      <Skills id="skills" title="Programming Languages and IDES">
      
        <ul className="creative-skills-list">
          <li><img src="images/python.svg" alt="Python Logo" style={{ width: '100px', height: '100px' }} /></li>
          <li><img src="R.svg" alt="R Logo" style={{ width: '100px', height: '100px' }} /></li>
          {/* Add more skills here */}
        </ul>
      </Skills>

      <Framework id="frameworks" title="Frameworks">
      
        <ul className="skills-list">
          <li><img src="images/codeigniter.svg" alt="CodeIgnitor" style={{ width: '100px', height: '100px' }} /></li>
          <li><img src="images/flask.svg" alt="Flask" style={{ width: '100px', height: '100px' }} /></li>
          {/* Add more frameworks here */}
        </ul>
      </Framework>

      <WorkExperience id="work_experience" title="WORK EXPERIENCE">
        <ul>
          <li>April 2023 – August 2023: Assistant Junior Data Specialist. </li>
          {/* Add more work experiences here */}
        </ul>
      </WorkExperience>

      <LearningTimeline id="Learning" title="LEARNING TIMELINE">
        <div className="timeline">
        <div className="container left">
          <div className="content">
            
            <p> Introduced to the world of programming through online articles and videos. Decided to explore further.

              February - March: Started with the basics of HTML and CSS. Created simple web pages to grasp the fundamentals of web development.
              
              April - May: Delved into JavaScript to add interactivity to the web pages. Learned about variables, functions, and basic DOM manipulation.
              
              June - July: Explored version control with Git and GitHub. Started collaborating on small projects with online communities to gain practical experience.</p>
          </div>
        </div>

        <div class="container right">
          <div class="content">
            <h2>2021: Expanding Horizons</h2>
            <p>January - February: Introduced to Python for its versatility. Completed introductory courses to understand its syntax and basic programming concepts.

              March - April: Focused on problem-solving and algorithmic thinking. Solved coding challenges on platforms like LeetCode and HackerRank to improve logical reasoning.
              
              May - June: Ventured into backend development using Node.js. Built simple server-side applications and learned about Express.js for web development.
              
              July - August: Explored databases, learning both SQL and NoSQL concepts. Developed a basic understanding of database design and management.
              
              September - October: Dived into front-end frameworks, particularly React.js. Built dynamic and responsive user interfaces, understanding the component-based architecture.</p>
          </div>
        </div>

        <div class="container left">
            <div class="content">
              <h2>2022: Mastering Skills</h2>
              <p>January - February: Consolidated knowledge in full-stack development by integrating the frontend (React) with the backend (Node.js). Developed a few small-scale web applications.

                March - April: Learned about cloud computing and deployed applications on platforms like AWS and Heroku. Gained an understanding of server deployment and maintenance.
                
                May - June: Introduced to mobile app development using React Native. Created a simple cross-platform mobile app to broaden skill set.
                
                July - August: Dabbled in data science and machine learning with Python libraries such as NumPy, Pandas, and Scikit-Learn. Completed introductory courses to grasp the basics.</p>
            </div>
          </div>

          <div class="container right">
            <div class="content">
              <h2>2023: Real-world Projects and Specialization</h2>
              <p>January - February: Collaborated on open-source projects on GitHub to contribute to real-world applications. Gained experience in teamwork, code review, and best practices.

                March - April: Specialized in a particular field of interest, focusing on, for example, data engineering, DevOps, or cybersecurity. Acquired deeper knowledge and skills in the chosen domain.
                
                May - June: Participated in coding competitions and hackathons to challenge skills under time constraints. Improved problem-solving abilities and gained exposure to different technologies.</p>
            </div>
          </div>

          <div class="container left">
            <div class="content">
              <h2>2024: Career Development</h2>
              <p>January - February: Prepared a strong portfolio showcasing various projects and skills. Updated LinkedIn and other professional profiles.

                March - April: Applied for internships or entry-level positions to gain practical work experience. Attended networking events and engaged with the tech community.
                
                May - June: Secured an internship or entry-level position in a tech-related field. Continued learning on the job and contributed to real-world projects.</p>
          </div>
          </div>

          
        </div>
      </LearningTimeline>
      <Hobbies id="Hobbies" title="Hobbies">
        <ul>
          <li>Meditation</li>
          <li>Gardening</li>
          <li>Reading </li>
          {}
        </ul>
        </Hobbies>
        
    

     
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
