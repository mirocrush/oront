import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ShootingStar from './components/ShootingStar';
import Background3D from './components/Background3D';
import ChatBot from './components/ChatBot';
import CustomCursor from './components/CustomCursor';
import './styles/App.css';

// Fade-in section wrapper component
const FadeInSection = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app">
      <CustomCursor />
      <Background3D />
      <ShootingStar />
      <Navbar />
      <main className="main-content">
        <div className="container">
          <div className="main-column">
            <div style={{marginTop: "20px"}}></div>
            <FadeInSection>
              <ProfileCard />
            </FadeInSection>
            <FadeInSection>
              <About />
            </FadeInSection>
            <FadeInSection>
              <Experience />
            </FadeInSection>
            <FadeInSection>
              <Skills />
            </FadeInSection>
            <FadeInSection>
              <Education />
            </FadeInSection>
            <FadeInSection>
              <Blog />
            </FadeInSection>
            <FadeInSection>
              <Contact />
            </FadeInSection>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
