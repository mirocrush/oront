import React, { useState, useEffect } from 'react';
import '../styles/ProfileCard.css';

// 100+ Unsplash images for banner - tech, code, abstract, nature themed
const bannerImages = [
  // Technology & Code
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1200&h=400&fit=crop',
  // Data & Networks
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=1200&h=400&fit=crop',
  // Abstract & Gradients
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1557682260-96773eb01377?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=400&fit=crop',
  // Space & Universe
  'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1484589065579-248aad0d628b?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1200&h=400&fit=crop',
  // City & Architecture
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=400&fit=crop',
  // Nature & Landscapes
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1518173946687-a4c036bc9d9f?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=400&fit=crop',
  // Ocean & Water
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=1200&h=400&fit=crop',
  // Mountains & Sky
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=1200&h=400&fit=crop',
  // Minimal & Clean
  'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1550684849-75c79c9b9a6e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1557409518-691ebcd96038?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1557682268-e3955ed5d83f?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&h=400&fit=crop',
  // Dark & Moody
  'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1505506145022-f4566b89231e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1492112007959-c35ae067c37b?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&h=400&fit=crop',
];

// Transition effect types
const transitionEffects = [
  'fade-zoom',      // Fade with zoom in
  'slide-left',     // Slide from right to left
  'slide-right',    // Slide from left to right
  'slide-up',       // Slide from bottom to top
  'blur-fade',      // Blur then fade
  'flip',           // 3D flip effect
  'zoom-rotate',    // Zoom out with rotation
  'kenburns',       // Ken Burns zoom pan
  'swipe',          // Diagonal swipe
  'cube',           // 3D cube rotation
];

const ProfileCard = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [prevBanner, setPrevBanner] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionEffect, setTransitionEffect] = useState('fade-zoom');

  useEffect(() => {
    // Set random initial banner on load
    const initial = Math.floor(Math.random() * bannerImages.length);
    setCurrentBanner(initial);
    setPrevBanner(initial);

    // Change banner every 10 seconds
    const interval = setInterval(() => {
      // Pick random transition effect
      const randomEffect = transitionEffects[Math.floor(Math.random() * transitionEffects.length)];
      setTransitionEffect(randomEffect);
      setIsTransitioning(true);

      // Store current as previous before changing
      setCurrentBanner((prev) => {
        setPrevBanner(prev);
        return (prev + 1) % bannerImages.length;
      });

      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="profile-card card">
      {/* Cover/Banner Image - Dynamic with creative transitions */}
      <div className="profile-banner">
        {/* Previous image (stays visible during transition) */}
        <div
          className="banner-image banner-prev"
          style={{ backgroundImage: `url(${bannerImages[prevBanner]})` }}
        />
        {/* Current image with transition effect */}
        <div
          className={`banner-image banner-current ${isTransitioning ? `transitioning ${transitionEffect}` : 'visible'}`}
          style={{ backgroundImage: `url(${bannerImages[currentBanner]})` }}
        />
        <div className="banner-overlay"></div>
      </div>

      {/* Profile Photo */}
      <div className="profile-photo-wrapper">
        <div className="profile-photo">
          <img src="/image/profile.png" alt="Vahram Oront" />
        </div>
      </div>

      {/* Profile Content */}
      <div className="profile-content">
        <div className="profile-main">
          <div className="profile-info">
            <h1 className="profile-name">Vahram Oront</h1>
            <p className="profile-headline">
              Senior Full Stack Developer | React | Node.js | Blockchain | AI/ML | 7+ Years Experience
            </p>
            <p className="profile-location">
              Abovyan, Kotayk Province, Armenia
              <span className="separator">·</span>
              <a href="#contact" className="contact-info-link">Contact info</a>
            </p>
          </div>

          <div className="profile-company">
            <div className="company-item">
              <div className="company-logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <span className="company-name">ResCode</span>
            </div>
            <div className="company-item">
              <div className="company-logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="company-name">National Polytechnic University of Armenia</span>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <a href="#contact" className="btn btn-primary">
            <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
              <path d="M8 1a5 5 0 00-5 5v1H2a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1h-1V6a5 5 0 00-5-5zm3 6H5V6a3 3 0 116 0v1z" />
            </svg>
            Open to
          </a>
          <a href="mailto:vahramoront@proton.me" className="btn btn-outline">
            Message
          </a>
          <a
            href="https://www.linkedin.com/in/vahram-oront-7003973a6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            More
          </a>
        </div>

        <div className="profile-highlights">
          <div className="highlight-box">
            <span className="highlight-text">Open to work</span>
            <p className="highlight-detail">Full Stack Developer, Blockchain Engineer, and AI/ML roles</p>
            <a href="#contact" className="highlight-link">Show details</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
