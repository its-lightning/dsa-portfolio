import React from 'react';
import { FaTrophy, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const LabStatus = () => {
  const labs = [
    { name: "Lab 1: Implementation of Structures", score: 19.5, maxScore: 20 },
    { name: "Lab 2: Implementation of Structures using Pointers", score: 19.5, maxScore: 20 },
    { name: "Lab 3: Implementation of Matrix Multiplication", score: 19.5, maxScore: 20 },
    { name: "Lab 4: Array Implementation of List", score: 20, maxScore: 20 },
    { name: "Lab 5: Implementation of Linked List", score: 20, maxScore: 20 },
    { name: "Lab 6: Implementation of Doubly linked List", score: 20, maxScore: 20 },
    { name: "Lab 7: Implementation of Stack using array", score: 20, maxScore: 20 },
    { name: "Lab 8: Implementation of Queue using array", score: 19.5, maxScore: 20 },
    { name: "Lab 9: Applications of Stack, Queue", score: 19.5, maxScore: 20 },
    { name: "Lab 10: Implementation of Tree using array", score: 20, maxScore: 20 },
    { name: "Lab 11: Implementation of BST using linked list", score: 19.5, maxScore: 20 },
    { name: "Lab 12: Implementation of B-Trees", score: 20, maxScore: 20 }
  ];

  return (
    <div style={{ padding: '40px', width: '100%', boxSizing: 'border-box' }}>
      {/* Summary Cards */}
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        marginBottom: '50px',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '25px',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          width: '300px'
        }}>
          <FaTrophy style={{ fontSize: '2.5rem', color: '#61dafb' }} />
          <div>
            <h3 style={{ color: 'rgba(255, 255, 255, 0.7)', margin: '0' }}>Average Score</h3>
            <div style={{ fontSize: '1.8rem', color: '#61dafb', fontWeight: 'bold' }}>19.75/20</div>
          </div>
        </div>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '25px',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          width: '300px'
        }}>
          <FaChartLine style={{ fontSize: '2.5rem', color: '#61dafb' }} />
          <div>
            <h3 style={{ color: 'rgba(255, 255, 255, 0.7)', margin: '0' }}>Completion</h3>
            <div style={{ fontSize: '1.8rem', color: '#61dafb', fontWeight: 'bold' }}>100%</div>
          </div>
        </div>
      </div>

      {/* Lab Experiments */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '30px',
        padding: '20px'
      }}>
        {labs.map((lab, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '25px',
            borderRadius: '15px',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              marginBottom: '20px'
            }}>
              <FaCheckCircle style={{ color: '#4CAF50', fontSize: '1.2rem' }} />
              <span style={{ 
                color: 'white', 
                fontSize: '1.2rem',
                fontWeight: '500'
              }}>{lab.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                flex: 1,
                height: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '5px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(lab.score/lab.maxScore) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #61dafb, #4CAF50)',
                  borderRadius: '5px',
                  transition: 'width 1s ease-out'
                }} />
              </div>
              <span style={{ 
                color: '#61dafb',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                minWidth: '60px',
                textAlign: 'right'
              }}>{lab.score}/{lab.maxScore}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabStatus; 