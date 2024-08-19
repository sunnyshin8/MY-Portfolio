import React from "react";
import { Container } from "react-bootstrap";

function Experience() {
  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <h1 className="experience-heading">
          MY <span className="purple"> EXPERIENCE </span>
        </h1>
        <p className="experience-description">
        These are the pivotal experiences that have shaped my journey:
        </p>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-item-content">
              <h2>Data Analsyt Intern </h2>
              <h4>VMSK Retails</h4>
              <p>January 2024 - June 2024</p>
            </div>
            <div className="timeline-item-marker"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-marker"></div>
            <div className="timeline-item-content">
              <h2>President </h2>
              <h4>Cyber Warriors Club </h4>
              <p>September 2023 - July 2024</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <h2>Techincal Lead Intern </h2>
              <h4>RD Sals</h4>
              <p>June 2023 - December 2023</p>
            </div>
            <div className="timeline-item-marker"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-marker"></div>
            <div className="timeline-item-content">
              <h2>Managed Nework Expert</h2>
              <h4>Chegg Inc.</h4>
              <p>March 2023 - July 2023</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-item-content">
              <h2>Human Resource Specialist Intern </h2>
              <h4>Metvy </h4>
              <p>Jan 2023 - March 2023</p>
            </div>
            <div className="timeline-item-marker"></div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
