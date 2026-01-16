import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Background3D.css';

const Background3D = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Theme-aware color
    const getPlanetColor = (opacity) => {
      if (isDark) {
        // Golden color for dark theme
        return `rgba(255, 200, 50, ${opacity})`;
      } else {
        // LinkedIn blue for light theme
        return `rgba(10, 102, 194, ${opacity})`;
      }
    };

    // Planet class - simulates galaxy planets
    class Planet {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 25 + 15;  // 15-40px radius
        this.rotationAngle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;

        // Fast movement
        this.velocityX = (Math.random() - 0.5) * 3;
        this.velocityY = (Math.random() - 0.5) * 3;

        this.opacity = Math.random() * 0.2 + 0.1;

        // Planet ring (like Saturn) - random chance
        this.hasRing = Math.random() > 0.6;
        this.ringTilt = Math.random() * 0.5 + 0.2;
      }

      update() {
        // Update rotation
        this.rotationAngle += this.rotationSpeed;

        // Update position with fast movement
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Bounce off edges
        if (this.x < -50 || this.x > canvas.width + 50) {
          this.velocityX *= -1;
          this.x = Math.max(-50, Math.min(canvas.width + 50, this.x));
        }
        if (this.y < -50 || this.y > canvas.height + 50) {
          this.velocityY *= -1;
          this.y = Math.max(-50, Math.min(canvas.height + 50, this.y));
        }

        // Slight velocity dampening
        this.velocityX *= 0.9995;
        this.velocityY *= 0.9995;

        // Add small random drift to keep movement interesting
        if (Math.random() < 0.01) {
          this.velocityX += (Math.random() - 0.5) * 0.5;
          this.velocityY += (Math.random() - 0.5) * 0.5;
        }

        // Clamp velocities
        const maxSpeed = 4;
        this.velocityX = Math.max(-maxSpeed, Math.min(maxSpeed, this.velocityX));
        this.velocityY = Math.max(-maxSpeed, Math.min(maxSpeed, this.velocityY));
      }

      draw(ctx) {
        ctx.save();

        const color = getPlanetColor(this.opacity);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;

        // Draw planet body (circle with longitude/latitude lines for 3D effect)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();

        // Inner circle for depth
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.7, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity * 0.5;
        ctx.stroke();

        // Horizontal line (equator) with 3D tilt
        ctx.globalAlpha = this.opacity * 0.7;
        ctx.beginPath();
        ctx.ellipse(
          this.x,
          this.y,
          this.size,
          this.size * Math.abs(Math.sin(this.rotationAngle)) * 0.3 + 0.1,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();

        // Vertical meridian line
        ctx.beginPath();
        ctx.ellipse(
          this.x,
          this.y,
          this.size * Math.abs(Math.cos(this.rotationAngle)) * 0.3 + 0.1,
          this.size,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();

        // Draw ring if planet has one (Saturn-like)
        if (this.hasRing) {
          ctx.globalAlpha = this.opacity * 0.6;
          ctx.beginPath();
          ctx.ellipse(
            this.x,
            this.y,
            this.size * 1.6,
            this.size * this.ringTilt,
            this.rotationAngle * 0.2,
            0,
            Math.PI * 2
          );
          ctx.stroke();

          // Inner ring
          ctx.beginPath();
          ctx.ellipse(
            this.x,
            this.y,
            this.size * 1.3,
            this.size * this.ringTilt * 0.8,
            this.rotationAngle * 0.2,
            0,
            Math.PI * 2
          );
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // Create planets
    const planetCount = Math.min(Math.floor((canvas.width * canvas.height) / 100000), 12);
    const planets = [];

    for (let i = 0; i < planetCount; i++) {
      planets.push(new Planet());
    }

    // Collision detection and gentle push
    const COLLISION_DISTANCE_FACTOR = 2.2;  // Multiplier for combined radii
    const PUSH_STRENGTH = 0.3;  // Gentle push

    const applyCollisions = () => {
      for (let i = 0; i < planets.length; i++) {
        for (let j = i + 1; j < planets.length; j++) {
          const p1 = planets[i];
          const p2 = planets[j];

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Collision distance based on planet sizes
          const minDistance = (p1.size + p2.size) * COLLISION_DISTANCE_FACTOR;

          if (distance < minDistance && distance > 1) {
            // Normalize direction
            const nx = dx / distance;
            const ny = dy / distance;

            // Gentle push - closer = slightly stronger
            const overlap = minDistance - distance;
            const force = (overlap / minDistance) * PUSH_STRENGTH;

            // Push planets apart gently
            p1.velocityX -= nx * force;
            p1.velocityY -= ny * force;
            p2.velocityX += nx * force;
            p2.velocityY += ny * force;
          }
        }
      }
    };

    // Draw connection lines between nearby planets (like gravitational fields)
    const drawConnections = () => {
      const maxLineDistance = 250;

      for (let i = 0; i < planets.length; i++) {
        for (let j = i + 1; j < planets.length; j++) {
          const p1 = planets[i];
          const p2 = planets[j];

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxLineDistance) {
            const opacity = (1 - distance / maxLineDistance) * 0.15;

            ctx.beginPath();
            ctx.strokeStyle = getPlanetColor(opacity);
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Apply collision forces
      applyCollisions();

      // Draw connections first (behind planets)
      drawConnections();

      // Update and draw planets
      planets.forEach(planet => {
        planet.update();
        planet.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="background-3d-canvas"
    />
  );
};

export default Background3D;
