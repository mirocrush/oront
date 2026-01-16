import React, { useState, useEffect } from 'react';
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
import './styles/App.css';

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
      <Background3D />
      <ShootingStar />
      <Navbar />
      <main className="main-content">
        <div className="container">
          <div className="main-column">
            <ProfileCard />
            <About />
            <Experience />
            <Skills />
            <Education />
            <Blog />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
