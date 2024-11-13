import React from 'react';

const RealWorldSolutions = () => {
  return (
    <div style={{ 
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '60px'
    }}>
      {/* Teacher Review System Project */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '15px',
        color: 'white'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          color: '#61dafb'
        }}>Teacher Review System</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <img src="/image-1.png" alt="Review System 1" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="/image-2.png" alt="Review System 2" style={{ width: '100%', borderRadius: '8px' }} />
          <img src="/image-3.png" alt="Review System 3" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          A comprehensive teacher review system designed to facilitate feedback and improvement in educational environments.
        </p>
      </div>

      {/* Teaching Experience */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '15px',
        color: 'white'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          color: '#61dafb'
        }}>Teaching Experience</h2>
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '10px'
        }}>
          Dedicated to nurturing the next generation of programmers by teaching Python and C++ to aspiring students. 
          My teaching approach focuses on practical applications and problem-solving skills, helping students build 
          a strong foundation in programming concepts while fostering creativity and analytical thinking.
        </p>
      </div>

      {/* COA Smart Lightning Project */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '15px',
        color: 'white'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          color: '#61dafb'
        }}>Smart Lightning System</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '20px'
        }}>
          <img src="/coa.jpg" alt="COA Project 1" style={{ 
            width: '100%', 
            borderRadius: '8px',
            height: '100%',
            objectFit: 'cover'
          }} />
          <img src="/coa2.png" alt="COA Project 2" style={{ 
            width: '100%', 
            borderRadius: '8px',
            height: '100%',
            objectFit: 'cover'
          }} />
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Developed an innovative smart lighting system with customizable profiles as part of the Computer Organization 
          and Architecture project. The system offers intelligent control and energy-efficient lighting solutions.
        </p>
      </div>
    </div>
  );
};

export default RealWorldSolutions; 