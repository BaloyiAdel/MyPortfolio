import React, { useState } from 'react';
import './App.css';

function App() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [hoveredSkillDescription, setHoveredSkillDescription] = useState('Hover over a skill to see its description');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setContact({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      setStatus('Network error. Please try again later.');
      console.error('Fetch error:', error); // Log the error for debugging
    }
  };

  // Skill descriptions
  const skillDescriptions = {
    "React": "A JavaScript library for building user interfaces, particularly single-page applications.",
    "React Native": "A framework for building native mobile apps using React.",
    "Node.js": "A JavaScript runtime built on Chrome's V8 JavaScript engine for building server-side applications.",
    "Java": "A high-level, class-based, object-oriented programming language.",
    "JavaScript": "A programming language that enables interactive web pages and is essential for web development.",
    "SQL": "A domain-specific language used in programming for managing data held in a relational database management system.",
    "HTML & CSS": "HTML is the standard markup language for documents designed to be displayed in a web browser, while CSS is used for describing the presentation of a document written in HTML.",
    "Linux": "A family of open-source Unix-like operating systems based on the Linux kernel."
  };

  const handleSkillMouseEnter = (skill) => {
    setHoveredSkillDescription(skillDescriptions[skill]);
  };

  const handleSkillMouseLeave = () => {
    setHoveredSkillDescription('Hover over a skill to see its description');
  };

  // Certificate descriptions
  const certDescriptions = {
    "Responsive Web Design": "Validates foundational web development skills, demonstrating proficiency in HTML for structuring content, CSS for styling, and responsive design principles. Confirms the ability to create websites that adapt seamlessly to various screen sizes and devices using techniques like CSS Flexbox and Grid.",
    "Front End Development Libraries": "Shows competency in using popular JavaScript libraries essential for building modern user interfaces. Typically covers libraries like Bootstrap for rapid styling and responsive components, jQuery for simplifying DOM manipulation, and React (or similar) for building dynamic, component-based web applications.",
    "Back End Development and APIs": "Demonstrates knowledge of server-side development concepts. Covers building server applications (often using Node.js and Express), creating and managing Application Programming Interfaces (APIs), handling data using databases (like MongoDB), and implementing authentication and security best practices.",
    "Relational Database": "Confirms understanding of relational database management systems (RDBMS). Involves skills in database design, creating and managing tables, and writing complex queries using SQL to store, retrieve, update, and delete data effectively.",
    "SQL (Advanced)": "Tests and validates advanced proficiency in the SQL language from HackerRank. Covers complex querying techniques, including joins, subqueries, aggregations, window functions, and performance optimization, demonstrating strong analytical and database manipulation skills."
  };

  return (
    <div className="App">
      <header className="hero">
        <img 
          src="Adel.jpeg" // Ensure Adel.jpeg is in the public folder
          alt="Hlukani Adel Baloyi" 
          className="profile-pic"
        />
        <h1>Hlukani Adel Baloyi</h1>
        <p className="title">Computer Science Student & Full Stack Developer</p>
        
        {/* Styled About Me Section */}
        <div className="about-me">
          <p>
            I'm a final-year Computer Science student at Tshwane University of Technology, passionate about turning ideas into impactful software. I thrive on collaboration and make friends easily, whether I'm working on a React project, debugging with classmates, or just chatting about tech over coffee. My enthusiasm for learning extends beyond code—I genuinely enjoy connecting with people, sharing knowledge, and building solutions together. I bring both technical skill and a warm, team-oriented spirit to every project I tackle.
          </p>
        </div>
        
        {/* Social Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/hlukani-adel-baloyi-1411a02a9/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/BaloyiAdel" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </header>

      <section className="education">
        <h2>Education</h2>
        <div className="item">
          <h3>Tshwane University of Technology</h3>
          <p>Diploma in Information Communication Technology | 2024 Average: 70%</p>
        </div>
        <div className="item">
          <h3>Khatisa High School</h3>
          <p>Grade 12 | 2022 (60%)</p>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skill-tags">
          {Object.keys(skillDescriptions).map(skill => (
            <span 
              key={skill} 
              className="tag" 
              onMouseEnter={() => handleSkillMouseEnter(skill)}
              onMouseLeave={handleSkillMouseLeave}
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="skill-description">
          {hoveredSkillDescription}
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>SmartEvent App</h3>
          <p>React Native mobile application for TUT event organizers to book venues and manage events efficiently. Streamlines the booking process and reduces scheduling conflicts across campus.</p>
        </div>
        <div className="project-item">
          <h3>Medicare Booking App</h3>
          <p>Web-based consultation booking application built using React and Node.js with a focus on usability and responsive design.</p>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <div className="cert-item">
          <div className="cert-header">
            <h3>Responsive Web Design</h3>
            <span className="cert-org">freeCodeCamp</span>
          </div>
          <p>Issued Jul 2025 | Credential ID: hlukaniadel-rwd</p>
          <p className="cert-desc">{certDescriptions["Responsive Web Design"]}</p>
        </div>
        <div className="cert-item">
          <div className="cert-header">
            <h3>Front End Development Libraries</h3>
            <span className="cert-org">freeCodeCamp</span>
          </div>
          <p>Issued Jul 2025 | Credential ID: hlukaniadel-fedl</p>
          <p className="cert-desc">{certDescriptions["Front End Development Libraries"]}</p>
        </div>
        <div className="cert-item">
          <div className="cert-header">
            <h3>Back End Development and APIs</h3>
            <span className="cert-org">freeCodeCamp</span>
          </div>
          <p>Issued Jul 2025 | Expires Dec 2035</p>
          <p className="cert-desc">{certDescriptions["Back End Development and APIs"]}</p>
        </div>
        <div className="cert-item">
          <div className="cert-header">
            <h3>Relational Database</h3>
            <span className="cert-org">freeCodeCamp</span>
          </div>
          <p>Issued Aug 2025 | Credential ID: hlukaniadel-rd</p>
          <p className="cert-desc">{certDescriptions["Relational Database"]}</p>
        </div>
        <div className="cert-item">
          <div className="cert-header">
            <h3>SQL (Advanced)</h3>
            <span className="cert-org">HackerRank</span>
          </div>
          <p>Issued Aug 2025 | Credential ID: 982fa8d1f3eb</p>
          <p className="cert-desc">{certDescriptions["SQL (Advanced)"]}</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
       
        
        {status && <p className="status">{status}</p>}
        <p className="contact-info">
          Email: <a href="mailto:hlukaniadel@gmail.com">hlukaniadel@gmail.com</a><br/>
          Phone: <a href="tel:0736646237">073 664 6237</a><br/>
          Location: 1131 Malamulele, 0982
        </p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Hlukani Adel Baloyi</p>
      </footer>
    </div>
  );
}

export default App;