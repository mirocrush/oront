import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'ResCode',
    companyUrl: '#',
    location: 'Yerevan, Armenia',
    type: 'On-site',
    period: 'Oct 2024 - Present',
    duration: '3 mos',
    description: 'Working with clients to design and build blockchain-enabled applications on Ethereum and XRP Ledger. Building responsive frontends with React, Next.js, Vue.js and scalable backend services with Node.js, Express, Flask, and Django.',
    skills: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'Next.js', 'Vue.js', 'Node.js', 'Tailwind CSS'],
    logoLetter: 'R',
    logoColor: '#6366f1',
  },
  {
    title: 'Full Stack & Blockchain Engineer',
    company: 'Xurge Digital Lab LLC',
    companyUrl: '#',
    location: 'Fayetteville, NC, United States',
    type: 'Remote',
    period: 'Feb 2023 - Jun 2024',
    duration: '1 yr 5 mos',
    description: 'Architected a federated Matrix/Synapse communication platform with integrated XRP Ledger wallets. Built XRPL wallet integration with XUMM, GEM Wallet, and CrossMark. Developed TypeScript/Node.js backend and Next.js frontend.',
    skills: ['XRP Ledger', 'AdonisJS', 'TypeScript', 'Next.js', 'Docker', 'AWS EC2', 'Redis', 'Socket.io'],
    logoLetter: 'X',
    logoColor: '#10b981',
  },
  {
    title: 'Full Stack Developer & DevOps Engineer',
    company: 'Miro AI',
    companyUrl: '#',
    location: 'Santa Monica, CA, United States',
    type: 'Remote',
    period: 'May 2020 - Oct 2022',
    duration: '2 yrs 6 mos',
    description: 'Built multi-tenant runnertag AI SaaS with Vue.js client and Node.js/Express/MySQL REST API. Deployed on AWS using EC2, RDS, S3, CloudFront. Integrated AI image generation services using Stable Diffusion.',
    skills: ['Vue.js', 'AWS', 'Cognito', 'Lambda', 'Docker', 'Stable Diffusion', 'Go', 'MySQL'],
    logoLetter: 'M',
    logoColor: '#f59e0b',
  },
  {
    title: 'Front End Developer & AI Engineer',
    company: 'SmartClick',
    companyUrl: '#',
    location: 'Yerevan, Armenia',
    type: 'Contract',
    period: 'Nov 2018 - Mar 2020',
    duration: '1 yr 5 mos',
    description: 'Developed responsive UI using Next.js and TypeScript. Integrated AI image generation services with Stable Diffusion. Implemented advanced search using ElasticSearch and MySQL.',
    skills: ['Next.js', 'TypeScript', 'Stable Diffusion', 'ElasticSearch', 'Redux', 'Docker', 'AWS'],
    logoLetter: 'S',
    logoColor: '#ec4899',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="card">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div
                className="experience-logo"
                style={{ backgroundColor: exp.logoColor }}
              >
                <span className="logo-letter">{exp.logoLetter}</span>
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">
                  {exp.company} · {exp.type}
                </p>
                <p className="experience-meta">
                  {exp.period} · {exp.duration}
                </p>
                <p className="experience-location">{exp.location}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  <span className="skills-label">Skills:</span>
                  <span className="skills-list">{exp.skills.join(' · ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
