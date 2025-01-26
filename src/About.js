import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        {/* Interests Section */}
        <div className="about-item">
          <h3>Interests</h3>
          <p>
            I am interested in data analysis and data science. I enjoy uncovering insights and creating models and visualizations to do so.
          </p>
        </div>

        {/* Education Section */}
        <div className="about-item">
          <h3>Education</h3>
          <p>
            Pursuing a double major in Statistics and Computational Biology <br />
            Minor in Data Science.
          </p>
        </div>

        {/* Skills Section */}
        <div className="about-item">
          <h3>Skills</h3>
          <p>
            I use Python, R, and SQL for my data science projects. I have used Tableau for data visualization and Excel for data analysis and organization. I use GitHub for version control and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
