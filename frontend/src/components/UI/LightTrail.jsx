// src/components/EnhancedLightTrail.js

import React, { useEffect, useRef } from 'react';
import '../../assets/css/LightTrail.css';

const EnhancedLightTrail = () => {
  const trailCount = 10; // Number of trail particles
  const trailRefs = useRef(Array.from({ length: trailCount }, () => React.createRef()));

  useEffect(() => {
    const handleMouseMove = (e) => {
      trailRefs.current.forEach((trail, index) => {
        if (trail.current) {
          const delay = index * 100;
          setTimeout(() => {
            trail.current.style.left = `${e.pageX}px`;
            trail.current.style.top = `${e.pageY}px`;
            trail.current.style.opacity = 1;
          }, delay);
        }
      });
    };

    const handleMouseLeave = () => {
      trailRefs.current.forEach((trail) => {
        if (trail.current) {
          trail.current.style.opacity = 0;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="trail-container">
      {trailRefs.current.map((ref, index) => (
        <div key={index} ref={ref} className="trail"></div>
      ))}
    </div>
  );
};

export default EnhancedLightTrail;
