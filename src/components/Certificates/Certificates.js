import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCards from "./CertificateCards";
import cert1 from "../../Assets/Certificates/Certificate.jpg";
import cert2 from "../../Assets/Certificates/Google Cloud.jpg";
import cert3 from "../../Assets/Certificates/applied ML.JPG";
import cert4 from "../../Assets/Certificates/ieee.JPG";
import cert5 from "../../Assets/Certificates/Uipath.JPG";
import cert6 from "../../Assets/Certificates/cv.jpg";
import cert7 from "../../Assets/Certificates/girlscript.JPG";
import cert8 from "../../Assets/Certificates/NPTEL.JPG";
import cert9 from "../../Assets/Certificates/robotics-SPACE.JPG";
import cert10 from "../../Assets/Certificates/cwc.JPG";
import cert11 from "../../Assets/Certificates/Software-training.JPG";


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
              title="Applied Machine Learning using Python by University of Michigan"
              certLink="https://linktocert3.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert4}
              title="IEEE Explore Certificate"
              certLink="https://linktocert4.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert5}
              title="RPADC Certificate by UIPath Community"
              certLink="https://linktocert5.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert6}
              title="OpenCV Certificate by VITyarthi"
              certLink="https://linktocert6.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert7}
              title="GGSOC Certificate by GirlScript Foundation"
              certLink="https://linktocert7.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert8}
              title="Privacy and Security in Online Social Media Certificate"
              certLink="https://linktocert8.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert9}
              title="Robotics Internship Training Certificate by SPACE"
              certLink="https://linktocert9.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert10}
              title="Code Crafters Achievement Certificate"
              certLink="https://linktocert10.com"
            />
          </Col>

          <Col md={4} className="cert-card">
            <CertificateCards
              imgPath={cert11}
              title="Software Testing Training Certificate"
              certLink="https://linktocert11.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
