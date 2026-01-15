import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <nav className="header-nav">
        <div className="logo-wrap">
          <img src="/logo.png" alt="CharityNet" className="pixel-blend-logo" />
        </div>
        <div className="auth-links">
          <span>Contact Us</span>
          <span className="login-text">Login</span>
        </div>
      </nav>

      <main className="main-content">
        <h1 className="main-title">
          Share What You Have<br />
          Share When It's Needed
        </h1>
        <button className="pill-button">DONATE</button>
      </main>

      <div className="scenery">
        {/* The Towers */}
        <div className="pole p-left"></div>
        <div className="pole p-right"></div>
        
        {/* Physics-based Sagging Wires using SVG Paths */}
        <svg className="sagging-wires" viewBox="0 0 1000 100" preserveAspectRatio="none">
          {/* M = Start point
              Q = Control point (the "dip" coordinate) 
              The Q point is placed exactly in the horizontal center of the span 
              with a lower Y value to create the gravitational sag.
          */}
          
          {/* WIRE SET 1 (Top) */}
          <path className="wire-path" d="
            M 0,10 Q 110,40 220,10 
            M 220,10 Q 500,50 780,10 
            M 780,10 Q 890,40 1000,10" 
          />
          
          {/* WIRE SET 2 (Middle) */}
          <path className="wire-path" d="
            M 0,35 Q 110,65 220,35 
            M 220,35 Q 500,75 780,35 
            M 780,35 Q 890,65 1000,35" 
          />

          {/* WIRE SET 3 (Bottom) */}
          <path className="wire-path" d="
            M 0,60 Q 110,90 220,60 
            M 220,60 Q 500,100 780,60 
            M 780,60 Q 890,90 1000,60" 
          />
        </svg>
      </div>
    </div>
  );
}

export default App;