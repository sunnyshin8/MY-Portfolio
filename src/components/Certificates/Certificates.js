import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCards from "./CertificateCards";
import cert1 from "../../Assets/Certificates/Certificate.jpg";
import cert2 from "../../Assets/Certificates/Google Cloud.jpg";
import cert3 from "../../Assets/Certificates/Coursera Certificate.jpg";
import cert4 from "../../Assets/Certificates/Flipkart Certificate.jpg";
import cert5 from "../../Assets/Certificates/AI Skillup.jpg";
import cert6 from "../../Assets/Certificates/Opencv Certificate.jpg";
import cert7 from "../../Assets/Certificates/Python Language Certificate.jpg";
import cert8 from "../../Assets/Certificates/Robotics and embedded systems Certificate.jpg";
import cert9 from "../../Assets/Certificates/Robotics and embedded systems Training Certificate.jpg";
import cert10 from "../../Assets/Certificates/ROS with arduino.jpg";
import cert11 from "../../Assets/Certificates/IIC certificate.png";


function Certificates() {
  return (
    <Container fluid className="cert-section">
      <Particle />
      <Container>
        <h1 className="cert-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
        Presented below are a curated collection of the Certificates I've attained
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert1}
              title="AWS Cloud Practitioner"
              certLink="https://linktocert1.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert2}
              title="Google Cloud Digital Leader Certificate"
              certLink="https://linktocert2.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert3}
              title="Sensors Study Certificate by University of Colorado"
              certLink="https://linktocert3.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert4}
              title="Flipkart Grid 5.0 Finalist Certificate"
              certLink="https://linktocert4.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert5}
              title="Artificial Intelligence Certificate by SkillUP"
              certLink="https://linktocert5.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert6}
              title="OpenCV Certificate by SkillUP"
              certLink="https://linktocert6.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert7}
              title="Python Language Certificate By Udemy"
              certLink="https://linktocert7.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert8}
              title="Robotics Internship Certificate by InMovidu Tech"
              certLink="https://linktocert8.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert9}
              title="Robotics Internship Training Certificate by APSIS Solutions"
              certLink="https://linktocert9.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert10}
              title="ROS With Arduino By Udemy"
              certLink="https://linktocert10.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert11}
              title="IIC Regional Meet Certificate"
              certLink="https://linktocert11.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
