import React, { useState } from 'react';
import { FaFlask, FaClipboardCheck, FaLightbulb, FaQuestion, FaCode, FaUser } from 'react-icons/fa';
import Profile from './components/Profile';
import ElabCompletion from './components/ElabCompletion';
import LabStatus from './components/LabStatus';
import RealWorldSolutions from './components/RealWorldSolutions';
import HotsQuestions from './components/HotsQuestions';
import CodingCompetitions from './components/CodingCompetitions';
import StarryBackground from './components/StarryBackground';
import './App.css';

function App() {
  const [showProfile, setShowProfile] = useState(true);
  const [currentPage, setCurrentPage] = useState(null);

  const handleNavClick = (page) => {
    setShowProfile(false);
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <StarryBackground />
      <div className="nav-wrapper">
        <button 
          className="profile-button"
          onClick={() => {
            setShowProfile(!showProfile);
            setCurrentPage(null);
          }}
        >
          <FaUser className="icon" />
          <span className="button-text">Profile</span>
        </button>
        
        <nav className="nav-container">
          <button 
            className="icon-button"
            onClick={() => handleNavClick('elab')}
          >
            <FaClipboardCheck className="icon" />
            <span className="button-text">Elab Completion</span>
          </button>
          <button 
            className="icon-button"
            onClick={() => handleNavClick('lab')}
          >
            <FaFlask className="icon" />
            <span className="button-text">Lab Experiment Status</span>
          </button>
          <button 
            className="icon-button"
            onClick={() => handleNavClick('solutions')}
          >
            <FaLightbulb className="icon" />
            <span className="button-text">Real World Solutions</span>
          </button>
          <button 
            className="icon-button"
            onClick={() => handleNavClick('hots')}
          >
            <FaQuestion className="icon" />
            <span className="button-text">HOTS Questions</span>
          </button>
          <button 
            className="icon-button"
            onClick={() => handleNavClick('coding')}
          >
            <FaCode className="icon" />
            <span className="button-text">Coding Competitions</span>
          </button>
        </nav>
      </div>

      {showProfile && <Profile />}
      {currentPage === 'elab' && <ElabCompletion />}
      {currentPage === 'lab' && <LabStatus />}
      {currentPage === 'solutions' && <RealWorldSolutions />}
      {currentPage === 'hots' && <HotsQuestions />}
      {currentPage === 'coding' && <CodingCompetitions />}
    </div>
  );
}

export default App;
