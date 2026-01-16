import React from 'react';
import '../styles/Skills.css';

const skills = [
  'JavaScript', 'TypeScript', 'Python', 'React', 'Redux', 'Next.js',
  'Vue.js', 'Vuex', 'Pinia', 'Nuxt', 'Node.js', 'Express',
  'Flask', 'Django', 'REST APIs', 'Socket.io', 'MySQL', 'PostgreSQL',
  'Ethereum', 'Solidity', 'XRP Ledger', 'Web3.js', 'Ethers.js',
  'AWS EC2', 'AWS Lambda', 'Docker', 'Tailwind CSS', 'Material UI',
  'Stable Diffusion', 'Git', 'CI/CD'
];

const Skills = () => {
  return (
    <section id="skills" className="card">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
