import React, { useState } from 'react';
import '../styles/Blog.css';

const Blog = ({ onPostClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const blogPosts = [
    {
      id: 1,
      image: '/image/1.png',
      title: 'Building Scalable Microservices Architecture',
      date: 'January 2024',
      excerpt: 'Exploring the journey of transforming a monolithic application into a robust microservices ecosystem.',
      content: `After years of working with monolithic architectures, I embarked on a transformative project that would reshape how our team approached software development. The challenge was clear: our legacy system was becoming increasingly difficult to maintain and scale.

We implemented a microservices architecture using Node.js and Docker, creating independent services that could be deployed and scaled individually. The transition wasn't without its challenges – we had to rethink our data management strategies, implement robust service discovery, and establish clear communication patterns between services.

The results exceeded our expectations: deployment times decreased by 70%, and we could now scale individual components based on demand rather than the entire application. This experience reinforced my belief that architectural decisions should always prioritize long-term maintainability over short-term convenience.`
    },
    {
      id: 2,
      image: '/image/2.jpg',
      title: 'The Art of Clean Code: Lessons from Production',
      date: 'March 2024',
      excerpt: 'Real-world insights on writing maintainable code that stands the test of time and team changes.',
      content: `Clean code isn't just about following style guides – it's about empathy for future developers, including your future self. Over the past year, I've had the privilege of mentoring junior developers while simultaneously refactoring critical production systems.

One particular project stands out: a payment processing system that had accumulated years of technical debt. Through careful analysis and methodical refactoring, we reduced the codebase by 40% while improving test coverage to 95%. The key was applying SOLID principles consistently and documenting our decisions thoroughly.

The most valuable lesson? Code reviews aren't just about catching bugs – they're opportunities for knowledge sharing and establishing team coding standards. We implemented weekly code review sessions that transformed our team's collective expertise.`
    },
    {
      id: 3,
      image: '/image/3.png',
      title: 'React Performance Optimization Deep Dive',
      date: 'May 2024',
      excerpt: 'Advanced techniques for optimizing React applications, from memo to code splitting strategies.',
      content: `Performance optimization in React applications requires a deep understanding of how React's reconciliation algorithm works. In a recent e-commerce project, we faced significant performance challenges as the product catalog grew to over 100,000 items.

Our optimization journey included implementing virtualization for long lists, strategic use of React.memo and useMemo, lazy loading components, and optimizing re-renders through careful state management. We also leveraged React's Profiler API to identify bottlenecks.

The result was a 60% improvement in initial load time and butter-smooth scrolling even on mobile devices. But perhaps more importantly, we established performance budgets and automated testing to prevent regression. Performance isn't a one-time fix – it's an ongoing commitment.`
    },
    {
      id: 4,
      image: '/image/4.png',
      title: 'Building Real-Time Features with WebSockets',
      date: 'July 2024',
      excerpt: 'Implementing robust real-time functionality in modern web applications.',
      content: `Real-time features have become an expectation in modern applications. From live notifications to collaborative editing, users expect immediate feedback. This year, I led the implementation of a real-time collaboration platform that required handling thousands of concurrent connections.

We chose Socket.io for its reliability and fallback mechanisms, combined with Redis for pub/sub messaging across multiple server instances. The architecture had to handle connection drops gracefully, implement proper authentication, and scale horizontally.

Key lessons learned: always implement heartbeat mechanisms, plan for eventual consistency, and design your message protocol carefully from the start. The satisfaction of seeing multiple users collaborate in real-time, seeing each other's changes instantly, made all the architectural challenges worthwhile.`
    },
    {
      id: 5,
      image: '/image/5.jpg',
      title: 'DevOps Culture: Beyond the Tools',
      date: 'August 2024',
      excerpt: 'Fostering a DevOps mindset across development and operations teams.',
      content: `DevOps is often misunderstood as merely a set of tools – Docker, Kubernetes, CI/CD pipelines. But the true essence of DevOps lies in cultural transformation. This year marked a significant milestone in our organization's DevOps journey.

We implemented GitOps practices, established infrastructure as code using Terraform, and created comprehensive monitoring dashboards. But the real breakthrough came when developers started taking ownership of their deployments and operations teams began contributing to application design discussions.

The metrics speak for themselves: deployment frequency increased from weekly to multiple times daily, mean time to recovery dropped from hours to minutes, and team satisfaction scores improved significantly. DevOps isn't a role – it's a shared responsibility and mindset.`
    },
    {
      id: 6,
      image: '/image/6.jpg',
      title: 'Database Design for Scale',
      date: 'September 2024',
      excerpt: 'Strategies for designing databases that can handle millions of records efficiently.',
      content: `As applications grow, database design becomes increasingly critical. This year, I worked on optimizing a database that had grown to over 500 million records, with query times that had become unacceptable for user experience.

Our approach involved careful indexing strategies, query optimization, implementing read replicas, and eventually sharding the database. We also explored PostgreSQL's advanced features like table partitioning and materialized views for complex analytical queries.

The journey taught me that database optimization is as much about understanding your access patterns as it is about technical implementation. Monitoring, query analysis, and continuous optimization became part of our regular development cycle. The result: query times dropped from seconds to milliseconds.`
    },
    {
      id: 7,
      image: '/image/7.png',
      title: 'Security Best Practices in Modern Web Development',
      date: 'November 2024',
      excerpt: 'Implementing robust security measures throughout the development lifecycle.',
      content: `Security isn't a feature to be added later – it must be woven into every aspect of development. After a security audit revealed vulnerabilities in one of our legacy systems, we embarked on a comprehensive security improvement initiative.

We implemented OWASP guidelines, added security headers, established proper authentication with JWT and refresh tokens, and created secure coding guidelines for the team. Automated security scanning became part of our CI/CD pipeline, catching vulnerabilities before they reached production.

The most important lesson was making security everyone's responsibility. Regular security training sessions, threat modeling exercises, and bug bounty programs transformed our team's security awareness. A secure application isn't just about preventing breaches – it's about maintaining user trust.`
    },
    {
      id: 8,
      image: '/image/8.png',
      title: 'The Future of Full-Stack Development',
      date: 'December 2024',
      excerpt: 'Reflecting on industry trends and preparing for the next wave of technological evolution.',
      content: `As we approach a new year, I find myself reflecting on how dramatically full-stack development has evolved. From the rise of edge computing to AI-assisted coding, the landscape continues to shift at an unprecedented pace.

This year, I've experimented with various emerging technologies: server components in React, edge functions, AI coding assistants, and new runtime environments. Each brings unique opportunities and challenges. The key is distinguishing hype from genuinely transformative technology.

Looking ahead, I believe the most successful developers will be those who embrace continuous learning while maintaining strong fundamentals. Frameworks and tools will continue to evolve, but understanding core principles – data structures, algorithms, system design – remains timeless. Here's to another year of growth, learning, and building impactful solutions.`
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= blogPosts.length - itemsPerView + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? blogPosts.length - itemsPerView : prev - 1
    );
  };

  return (
      <section id="blog" className="card blog-section">
        <div className="card-content">
          <div className="section-header">
            <h2 className="section-title">Blog</h2>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={prevSlide} aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <button className="carousel-btn" onClick={nextSlide} aria-label="Next">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="blog-carousel-container">
            <div
              className="blog-carousel"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {blogPosts.map(post => (
                <article key={post.id} className="blog-post" onClick={() => onPostClick(post)}>
                  <div className="blog-image-wrapper">
                    <img src={post.image} alt={post.title} className="blog-image" />
                  </div>
                  <div className="blog-content">
                    <span className="blog-date">{post.date}</span>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>

                    <button className="blog-read-more">
                      Read more
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {Array.from({ length: blogPosts.length - itemsPerView + 1 }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Blog;
