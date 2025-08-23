import React, { useEffect, useRef } from 'react';
import styles from '../styles/NetworkAnimation.module.css';

const NetworkAnimation = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth * 0.04); // Responsive particle count
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
          color: `rgba(0, 255, 255, ${Math.random() * 0.5 + 0.1})`,
          connections: []
        });
      }
    };
    
    // Draw the animation
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particle positions and draw them
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.connections = [];
        
        // Move particles
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
        
        // Draw the particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Find connections to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect particles that are close enough
          const maxDistance = canvas.width * 0.05;
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(138, 43, 226, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            
            p.connections.push(j);
            p2.connections.push(i);
          }
        }
      }
      
      // Request next frame
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    // Initialize
    setCanvasDimensions();
    createParticles();
    render();
    
    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions();
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <canvas ref={canvasRef} className={styles.networkCanvas} />;
};

export default NetworkAnimation;
