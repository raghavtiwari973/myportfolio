import React, { useEffect, useState } from 'react';

const MouseTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };

      setTrail(prev => {
        const updatedTrail = [...prev, newTrail];
        return updatedTrail.slice(-10); // Keep only last 10 trail points
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-70 animate-ping"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.7,
            transform: `scale(${(index + 1) / trail.length})`
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;