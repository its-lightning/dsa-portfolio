import React from 'react';
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-content">
      <div className="profile-image-section">
        <img 
          src={process.env.PUBLIC_URL + '/img.jpg'} 
          alt="Manoj Srivatsava" 
          className="profile-image"
        />
      </div>

      <div className="profile-info-section">
        <h1 className="profile-name">Manoj Srivatsava</h1>
        
        <div className="profile-details">
          <div className="detail-item">
            <FaGraduationCap className="detail-icon" />
            <div className="detail-text">
              <span className="detail-label">Department:</span>
              <span className="detail-value">Computing Technology</span>
            </div>
          </div>

          <div className="detail-item">
            <FaGraduationCap className="detail-icon" />
            <div className="detail-text">
              <span className="detail-label">Year/Sem/Section:</span>
              <span className="detail-value">2024 / 3rd Sem / B2</span>
            </div>
          </div>

          <div className="detail-item">
            <FaEnvelope className="detail-icon" />
            <div className="detail-text">
              <span className="detail-label">Gmail:</span>
              <span className="detail-value">manoj.srivatsava@gmail.com</span>
            </div>
          </div>

          <div className="detail-item">
            <FaEnvelope className="detail-icon" />
            <div className="detail-text">
              <span className="detail-label">Alternate Gmail:</span>
              <span className="detail-value">yt.itslightning@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/its-lightning" 
             className="social-link github" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaGithub />
            <span>GitHub Profile</span>
          </a>
          
          <a href="https://www.linkedin.com/in/manoj-srivatsava-47b953215" 
             className="social-link linkedin" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaLinkedin />
            <span>LinkedIn Profile</span>
          </a>
          
          <a href="https://www.hackerrank.com/profile/manoj_srivatsava" 
             className="social-link hackerrank" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaHackerrank />
            <span>HackerRank Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile; 