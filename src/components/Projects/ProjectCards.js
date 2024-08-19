import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> 
          </Button>

          
          <Link to={`/project/${props.id}`} style={{ marginLeft: "10px"}}>
            <Button variant="primary">
            <i class="fas fa-info project_info_button"></i>
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
