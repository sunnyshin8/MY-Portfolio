import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  "Turtlebot-Stop": {
    title: "Turtlebot3 Stop Node",
    description: "Details about the Turtlebot3 Stop Node project.",
    // Add more details
  },
  "house-price-prediction": {
    title: "House Price Prediction",
    description: "A detailed page about the House Price Prediction project.",
    // Add more details if necessary
  },
  "sam": {
    title: "SAM",
    description: "Details about the SAM project.",
    // Add more details
  },
  "universal-power-supply": {
    title: "Universal Power Supply",
    description: "Details about the Universal Power Supply project.",
    // Add more details
  },
  "traffic-robot": {
    title: "Traffic Robot",
    description: "Details about the Traffic Robot project.",
    // Add more details
  },
  "charm": {
    title: "CHARM",
    description: "Details about the CHARM project.",
    // Add more details
  },
  "object-detection": {
    title: "Real Time Object Detection",
    description: "Details about the Turtlebot3 Stop Node project.",
    // Add more details
  },
  "object-tracking": {
    title: "Real Time Object Detection",
    description: "Details about the Turtlebot3 Stop Node project.",
    // Add more details
  },
  "face-recognition": {
    title: "Face Recognition and Emotion Detection",
    description: "Details about the Face Recognition and Emotion Detection project.",
    // Add more details
  },
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ProjectDetail;
