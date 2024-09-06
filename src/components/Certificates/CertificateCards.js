import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";

function CertificateCards(props) {
  return (
    <Card className="cert-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="cert-card-body">
        <Card.Title>{props.title}</Card.Title>
        <div className="cert-button-wrapper">
          <Button variant="primary" href={props.imgPath} download target="_blank">
            Download Certificate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificateCards;
