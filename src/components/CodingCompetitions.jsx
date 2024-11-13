import React from 'react';

const CodingCompetitions = () => {
  return (
    <div style={{ 
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px'
    }}>
      <img 
        src="/ICPC_Foundation_logo.svg.png" 
        alt="ICPC Logo" 
        style={{
          maxWidth: '400px',
          height: 'auto',
          marginBottom: '20px'
        }}
      />
      
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '15px',
        color: 'white',
        maxWidth: '800px'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          color: '#61dafb',
          textAlign: 'center'
        }}>
          ICPC Taiwan Contest
        </h2>
        
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          marginBottom: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '10px'
        }}>
          Participated in the prestigious International Collegiate Programming Contest (ICPC) 
          Taiwan regional competition. The contest challenges teams to solve complex 
          algorithmic problems within a strict time limit, testing not only programming 
          skills but also teamwork and problem-solving abilities under pressure.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#61dafb', marginBottom: '10px' }}>Contest Format</h3>
            <p>5-hour intensive programming competition</p>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#61dafb', marginBottom: '10px' }}>Skills Tested</h3>
            <p>Algorithms, Data Structures, Problem Solving</p>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#61dafb', marginBottom: '10px' }}>Team Size</h3>
            <p>3 Members per Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingCompetitions; 