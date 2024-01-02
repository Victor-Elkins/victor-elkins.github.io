// Import necessary React components and modules
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

// Functional component for Contact Information
<nav className="navbar navbar-light bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <a className="nav-link" href="#Resume-section">Resume</a>
    <a className="nav-link" href="#Projects-section">Projects</a>
    <a className="nav-link" href="#Contact-me-section">Contact me</a>
  </div>
</nav>

const ContactInformation = () => (
  <section id="personal-section" className="container-fluid" style={{ backgroundColor: 'rgb(255, 255, 255)', margin: '10px 0' }}>
    <h2>Contact Information</h2>
    <p>
      (281)-323-5559 | <a href="mailto:vrelkins@cougarnet.uh.edu">vrelkins@cougarnet.uh.edu</a> | <a
        href="https://www.linkedin.com/in/victor-elkins-ab5058198/">LinkedIn</a>
    </p>
    <hr />
  </section>
);


// Functional component for Education
const Education = () => (
  <section id="education-section" className="container-fluid">
    <h2>Education</h2>
    <p>University of Houston - Expected Graduation: Dec 2024<br />
      Bachelors Of Science in Computer Science</p>
    <p>Houston Community College - Graduated: Dec 2022<br />
      Associates of Science in Computer Science</p>
      <hr></hr>
  </section>
);

// Functional component for Work Experience
const WorkExperience = () => (
  <section id="experience-section" className="container-fluid">
    <h2>Work Experience</h2>

    <div>
      <h3>ExxonMobil – Incoming Software Engineer Intern</h3>
      <p>May 2024 – August 2024</p>
    </div>

    <div>
      <h3>Dycom Industries - Software Engineering Intern</h3>
      <p>June 2023 – August 2023</p>
    </div>

    <div>
      <h3>Vertical Automation & Information Technology - Software Engineering Intern</h3>
      <p>Feb 2023 – June 2023</p>
    </div>

    <hr />
  </section>
);
const Projects = () => (
  <section id = "Project-Section" className = "container-fluid">
    <h2>Projects</h2>
    <div>
      <h3>Web Development Committee – Cougar CS Revamp</h3><br></br>
      <h3>Student Planner API</h3><br></br>
      <h3>Book Recommendation Machine</h3><br></br>
      <h3>Multithreaded Web Server</h3><br></br>
      <h3>Medical Bill Uploading Service</h3><br></br>
    </div>
  </section>
)



// Functional component for the main App
const App = () => (
  <div>
  <Navbar bg="dark" variant="dark" expand="md">
    <Nav className="mr-auto">
          <Nav.Link href="/Resume.pdf" download="Victor_Elkins_Resume.pdf">Resume</Nav.Link>
          <Nav.Link href="https://github.com/Victor-Elkins" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
          <Nav.Link href="#Contact-me-section">Contact me</Nav.Link>
    </Nav>
  </Navbar>

    <section id="intro-section" className="intro-section">
      <h1>Hello, I am Victor Elkins</h1>
      <p className="font-weight-bold">A Software Engineer</p>
    </section>

    {/* Render individual components for each section */}
    <Education />
    <WorkExperience />
    <ContactInformation />

    <section id="Projects-section" className="Project-section">
      {/* Existing project cards go here */}
    </section>

    <ul id="Contact-me-section">
      {/* Your contact links go here */}
    </ul>

    {/* Optional JavaScript */}
    {/* jQuery, Popper.js, and Bootstrap JS scripts go here */}
  </div>
);

export default App;
