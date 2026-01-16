import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const fullText = `Senior Full Stack Developer with 7+ years of experience building end-to-end web applications, SaaS platforms, and innovative AI/ML and blockchain solutions. My favorite language is JavaScript, and I'm strong in backend development, API integration, and DevOps on AWS and Docker. Throughout my development journey, I've cultivated an artistic eye and the capability of creating beautiful, responsive UX/UI with creative ideas. I enjoy daily coding and am always open to new opportunities and challenges! I specialize in modern web technologies including React, Next.js, Vue.js, and Node.js. On the blockchain side, I have extensive experience with Ethereum, Solidity smart contracts, XRP Ledger, and Web3 integrations. I'm passionate about building scalable, maintainable systems that deliver real value.`;

  const shortText = fullText.slice(0, 370);

  return (
    <section id="about" className="card">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-text">
          <p>{expanded ? fullText : `${shortText}...`}</p>
        </div>

        <button
          className="show-more-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              Show less
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </>
          ) : (
            <>
              ...show more
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default About;
