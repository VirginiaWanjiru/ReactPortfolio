// LearningTimeline.js
import React from 'react';

function LearningTimeline() {
  return (
    <section id="Learning" className="timeline"
    >
      <div className="container left">
      <h1>Learning Timeline</h1>
        <div className="content">
          
          <h2>2020 the beginning</h2>
          <p>
            January: Introduced to the world of programming through online articles and videos. Decided to explore further.
            February - March: Started with the basics of HTML and CSS. Created simple web pages to grasp the fundamentals of web development.
            April - May: Delved into JavaScript to add interactivity to the web pages. Learned about variables, functions, and basic DOM manipulation.
            June - July: Explored version control with Git and GitHub. Started collaborating on small projects with online communities to gain practical experience.
          </p>
        </div>
      </div>

      <div className="container right">
        <div className="content">
          <h2>2021: Expanding Horizons</h2>
          <p>
            January - February: Introduced to Python for its versatility. Completed introductory courses to understand its syntax and basic programming concepts.
            March - April: Focused on problem-solving and algorithmic thinking. Solved coding challenges on platforms like LeetCode and HackerRank to improve logical reasoning.
            May - June: Ventured into backend development using Node.js. Built simple server-side applications and learned about Express.js for web development.
            July - August: Explored databases, learning both SQL and NoSQL concepts. Developed a basic understanding of database design and management.
            September - October: Dived into front-end frameworks, particularly React.js. Built dynamic and responsive user interfaces, understanding the component-based architecture.
          </p>
        </div>
      </div>

      <div className="container left">
        <div className="content">
          <h2>2022: Mastering Skills</h2>
          <p>
            January - February: Consolidated knowledge in full-stack development by integrating the frontend (React) with the backend (Node.js). Developed a few small-scale web applications.
            March - April: Learned about cloud computing and deployed applications on platforms like AWS and Heroku. Gained an understanding of server deployment and maintenance.
            May - June: Introduced to mobile app development using React Native. Created a simple cross-platform mobile app to broaden skill set.
            July - August: Dabbled in data science and machine learning with Python libraries such as NumPy, Pandas, and Scikit-Learn. Completed introductory courses to grasp the basics.
          </p>
        </div>
      </div>

      <div className="container right">
        <div className="content">
          <h2>2023: Real-world Projects and Specialization</h2>
          <p>
            January - February: Collaborated on open-source projects on GitHub to contribute to real-world applications. Gained experience in teamwork, code review, and best practices.
            March - April: Specialized in a particular field of interest, focusing on, for example, data engineering, DevOps, or cybersecurity. Acquired deeper knowledge and skills in the chosen domain.
            May - June: Participated in coding competitions and hackathons to challenge skills under time constraints. Improved problem-solving abilities and gained exposure to different technologies.
          </p>
        </div>
      </div>

      <div className="container left">
        <div className="content">
          <h2>2024: Career Development</h2>
          <p>
            January - February: Prepared a strong portfolio showcasing various projects and skills. Updated LinkedIn and other professional profiles.
            March - April: Applied for internships or entry-level positions to gain practical work experience. Attended networking events and engaged with the tech community.
            May - June: Secured an internship or entry-level position in a tech-related field. Continued learning on the job and contributed to real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LearningTimeline;
