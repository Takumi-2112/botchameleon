import React from 'react';
import '../styles/ContentWarning.css'; 

function ContentWarning({ onAccept, onDecline }) {
  return (
    <div className="content-warning-overlay">
      <div className="content-warning-modal">
        <div className="content-warning-header">
          <h2>⚠️ Content Warning</h2>
        </div>
        
        <div className="content-warning-body">
          <p>
            This application contains AI characters that may generate mature, offensive, 
            or inappropriate content including:
          </p>
          
          <ul>
            <li>Strong language and profanity</li>
            <li>Adult humor and references</li>
            <li>Controversial or sensitive topics</li>
            <li>Satirical and potentially offensive character portrayals</li>
          </ul>
          
          <div className="content-warning-disclaimer">
            <strong>By continuing, you acknowledge that:</strong>
            <ul>
              <li>You are 18+ years of age</li>
              <li>You understand this is AI-generated content for entertainment</li>
              <li>You will use this responsibly</li>
            </ul>
          </div>
        </div>
        
        <div className="content-warning-actions">
          <button 
            className="btn-accept" 
            onClick={onAccept}
          >
            I Understand & Accept
          </button>
          <button 
            className="btn-decline" 
            onClick={onDecline}
          >
            No Thanks
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentWarning;