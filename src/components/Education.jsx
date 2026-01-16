import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="card">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-item">
          <div className="education-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="education-content">
            <h3 className="education-school">National Polytechnic University of Armenia</h3>
            <p className="education-degree">Bachelor of Science - BS, Artificial Intelligence</p>
            <p className="education-period">May 2013 - Nov 2017</p>
            <p className="education-description">
              Completed a comprehensive program covering algorithms, data structures, databases,
              web technologies, discrete mathematics, probability and logic. Study track oriented
              toward Software and Data Engineering with experience in full stack web application design,
              big data processing and cloud/distributed solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Languages as separate card */}
      <div className="card-content languages-section">
        <div className="section-header">
          <h2 className="section-title">Languages</h2>
        </div>

        <div className="languages-list">
          <div className="language-item">
            <span className="language-name">Armenian</span>
            <span className="language-level">Native or bilingual proficiency</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="language-level">Professional working proficiency</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
