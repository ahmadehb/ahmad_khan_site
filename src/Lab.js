import React from 'react';
import './Lab.css';

function Lab() {
  return (
    <section id="lab" className="lab-section">
      <h2>Research Experience</h2>

      <div className="lab-item">
        <h3>Visual Intelligence Lab - Research Assistant</h3>
        <p>Date: Aug 2024 - Present</p>
        <p>Explore topics in computer vision and neural networks.</p>
        <a href="http://www.stat.ucla.edu/~taogao/" target="_blank" rel="noopener noreferrer">Lab Website</a>
      </div>

      <div className="lab-item">
        <h3>Dong Lab - Research Assistant</h3>
        <p>Date: June 2024 - Present</p>
        <p>Conduct data analysis using microbiome data.</p>
        <a href="https://www.uclahealth.org/departments/medicine/gastro/research/labs-and-programs/dong-laboratory" target="_blank" rel="noopener noreferrer">Lab Website</a>
      </div>
    </section>
  );
}

export default Lab;
