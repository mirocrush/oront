import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  const loadingStages = [
    { progress: 20, text: 'Loading assets' },
    { progress: 40, text: 'Preparing components' },
    { progress: 60, text: 'Building interface' },
    { progress: 80, text: 'Almost there' },
    { progress: 100, text: 'Welcome' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stage = loadingStages.find(s => progress <= s.progress);
    if (stage) {
      setLoadingText(stage.text);
    }
  }, [progress]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-circle">
            <span className="logo-initials">VO</span>
          </div>
          <div className="logo-glow"></div>
        </div>

        <h1 className="loading-name">Vahram Oront</h1>
        <p className="loading-title">Senior Full Stack Developer</p>

        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-info">
            <span className="progress-text">{loadingText}</span>
            <span className="progress-percent">{progress}%</span>
          </div>
        </div>

        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="loading-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
