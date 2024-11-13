import React from 'react';

const StarryBackground = () => {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 15}s`,
    animationDuration: `${Math.random() * 10 + 15}s`,
    opacity: Math.random() * 0.5 + 0.2
  }));

  return (
    <div className="starry-background">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
            opacity: star.opacity
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground; 