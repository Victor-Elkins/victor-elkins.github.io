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
      <ul>
        <li>•Collaborated with a team of interns to develop a large-scale decision tree linter using Python, integrating it into the CI/CD pipeline in GitLab, the decision tree service frontend using Angular, and a VScode extension using Java.</li>
        <li>•Led and managed a team of software development interns, utilizing GitLab for version control, collaboration, and CI/CD integration, while effectively overseeing appointment management with experienced developers, conducting code reviews, and leveraging strong people skills to ensure a productive and collaborative team environment.</li>
        <li>•Contributed to the overall improvement of decision tree quality, saving Dycom Industries potentially hundreds of hours of development time and valuable resources.</li>
      </ul>
    </div>

    <div>
      <h3>Vertical Automation & Information Technology - Software Engineering Intern</h3>
      <p>Feb 2023 – June 2023</p>
      <ul>
        <li>•Collaborated with a team of developers on the design and implementation of internal tools including dotnet, jQuery, Bootstrap, and Azure DevOps.</li>
        <li>•Managed the coordination and task assignments among the intern team, ensuring efficient collaboration and timely completion of project milestones.</li>
        <li>•Integrated a backend image modeling system with a UI for use in an industrial setting, ensuring seamless performance saving companies over 40 hours a week.</li>
      </ul>
    </div>

    <hr />
  </section>
);



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
