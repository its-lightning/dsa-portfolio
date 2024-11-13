import React from 'react';

const HotsQuestions = () => {
  const hotsImages = [
    "/hots-2.jpg",
    "/hots-3.jpg",
    "/hots-4.jpg",
    "/hots-5.jpg",
    "/hots-6.jpg",
    "/hots-7.jpg"
  ];    

  return (
    <div style={{ 
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px'
    }}>
      <img 
        src="/hackerrank.png" 
        alt="HackerRank" 
        style={{
          maxWidth: '500px',
          height: 'auto',
          borderRadius: '8px'
        }}
      />
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {hotsImages.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`HOTS Question ${index + 2}`}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HotsQuestions; 