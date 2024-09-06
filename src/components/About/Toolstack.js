import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiKaggle,
  SiVisualstudiocode,
  SiGithub
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKaggle />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
      <SiRaspberrypi />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMqtt />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
