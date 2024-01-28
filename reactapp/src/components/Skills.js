// Skills.js
import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <h2>Programming Languages and IDES </h2>
      <ul className="creative-skills-list">
        
      <li><img src="python.svg" alt="Python Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src="R.svg" alt="R Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src="php.svg" alt="PHP Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src="CPlusPlus.svg" alt="C Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src="csharp.svg" alt="C# Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src="java.svg" alt="Java Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src="JS.svg" alt="JavaScript Logo" style={{ width: '100px', height: '100px' }} /></li>
      <li><img src="kotlin.svg" alt="Kotlin Logo" style={{ width: '100px', height: '75px' }} /></li>
      <li><img src="visual-studio-code.svg" alt="VS Logo" style={{ width: '100px', height: '100px' }} /></li>
      {/* Add more skills here */}
        
      </ul>
    </section>
  );
}

export default Skills;
