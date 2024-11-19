import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
        <div className="profile-section">
          <p>Hi, I'm [Your Name]</p>
          <p>I'm a passionate developer interested in web development and technology.</p>
        </div>
        <nav className="nav-links">
          <a href="#about" className="App-link">About Me</a>
          <a href="#projects" className="App-link">Projects</a>
          <a href="#contact" className="App-link">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I love creating beautiful and functional web applications.</p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <p>Here are some of my recent projects...</p>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Get in touch: [your@email.com]</p>
        </section>
      </main>
    </div>
  );
}

export default App;
