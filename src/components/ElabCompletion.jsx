import React from 'react';

const ElabCompletion = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '40px',
      padding: '40px',
      maxWidth: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img 
          src="/elab.png" 
          alt="Completion Badge" 
          style={{
            maxWidth: '500px',  // Increased from 400px to 500px
            height: 'auto',
            borderRadius: '8px'
          }}
        />
      </div>
      <div style={{
        flex: '1',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Done!</h1>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'rgba(255, 255, 255, 0.9)' }}>
          Completed the eLab
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6',
          marginBottom: '30px',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '20px',
          borderRadius: '10px',
          backdropFilter: 'blur(10px)'
        }}>
          Programs Completed: 30/30 (100%)<br />
          Status: All programs completed successfully
        </p>
        <div className="stats" style={{ gap: '20px', display: 'flex' }}>
          <div className="stat-item" style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#61dafb', display: 'block' }}>
              30/30
            </span>
            <span style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '8px', display: 'block' }}>
              Programs Completed
            </span>
          </div>
          <div className="stat-item" style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#61dafb', display: 'block' }}>
              100%
            </span>
            <span style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '8px', display: 'block' }}>
              Success Rate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElabCompletion; 