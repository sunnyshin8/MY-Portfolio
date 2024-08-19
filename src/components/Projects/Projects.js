import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import traffic from "../../Assets/Projects/traffic.jpeg";
import emotion from "../../Assets/Projects/emotion.png";
import object_detection_image from "../../Assets/Projects/Object_Detection_image.jpg";
import object_tracking_image from "../../Assets/Projects/Object_tracking.png";
import universal from "../../Assets/Projects/Universal_Power_supply.png";
import sam from "../../Assets/Projects/sam.jpg";
import charm from "../../Assets/Projects/charm_main.png";
import home from "../../Assets/Projects/home.jpg";
import turtlebot from "../../Assets/Projects/turtlebot3.png";



function Projects() {
  const projects = [
    {
      id: "Turtlebot-Stop",
      imgPath: turtlebot,
      title: "Turtlebot3 Stop Node",
      description: "The robot employs LiDAR sensors 📡 to perceive the environment, providing detailed feedback that ensures precise synchronization with the maps in RViz2 🗺️. To enhance control, an action client node 🛠️ was created, which enables seamless stopping of the robot 🛑 when running with RViz2 🚦.",
      ghLink: "https://github.com/PAVIT0512/Turtlebot_Stop_Command",
    },
    {
      id: "house-price-prediction",
      imgPath: home,
      title: "House Price Prediction",
      description: "This Machine Learning project focuses on implementing Multiple Regression for Home Price Prediction 🏠📈. It involves performing data preprocessing 🔄, feature engineering 🛠️, and data cleansing 🧹 to prepare the dataset. Various regression techniques are then applied to accurately predict home prices. 🏡💡",
      ghLink: "https://github.com/PAVIT0512/Home-Price-Predictor",
    },
    {
      id: "sam",
      imgPath: sam,
      title: "SAM",
      description: "The Singulation Automation Machine was created for the Flipkart Grid 5.0 robotic challenge 🤖🏆. This CNC-based robotic arm employs a suction system and camera input for precision 📸🔧. It efficiently rotates cardboard boxes, ensuring that the label is consistently positioned on top 📦🔄.",
      ghLink: "https://github.com/PAVIT0512/SAM",
    },
    {
      id: "universal-power-supply",
      imgPath: universal,
      title: "Universal Power Supply",
      description: "A circuit which converts AC supply (220V) to DC (12V and 5V) ⚡🔌. A universal power supply is a device that steps 110 or 220-volt AC household current down and converts it to DC so it can power an electronic device, appliance, or some other electric equipment 💡🔋.",
      ghLink: "https://github.com/PAVIT0512/Universal-Power-Supply",
    },
    {
      id: "traffic-robot",
      imgPath: traffic,
      title: "Traffic Robot (Traffic Mirta)",
      description: "An all-weather robot 🌦️ that bears a striking resemblance to a conventional traffic officer 🚦 and possesses analogous traffic management skills. It employs advanced sensors 📡 to detect traffic patterns, boasts mobility 🚶‍♂️, and can adjust its path based on evolving traffic conditions at intersections 🚧.",
      ghLink: "https://github.com/PAVIT0512/",
    },
    {
      id: "charm",
      imgPath: charm,
      title: "CHARM",
      description: "The Computerized Hardware Automated Reception Machine 🤖 is an AI-driven robot that serves as a receptionist for a college 🏫. It interacts with visitors, provides information about the institution 🏛️, and offers responses to user queries using its hardware-based artificial intelligence 💡.",
      ghLink: "https://github.com/PAVIT0512/C.H.A.R.M",
    },

    {
      id: "face-recognition",
      imgPath: emotion,
      title: "Face Recognition and Emotion Detection",
      description: "This is a trained CNN classifier using Keras with a TensorFlow backend, capable of successfully predicting various human emotions 😊😢😡😱.Using OpenCV and face_recognition, I detect faces in real-time video, pass them to the classifier, and display the predicted emotion with text and emojis.",
      ghLink: "https://github.com/PAVIT0512/Face_Recognition_and_Emotion",
    },
    {
      id: "object-detection",
      imgPath: object_detection_image,
      title: "Real Time Object Detection",
      description: "Real-time object detection using the MobileNetSSD model with OpenCV and a webcam 🎥. It detects and classifies objects in video frames captured by the webcam 📸, drawing bounding boxes and labels 🏷️ around detected objects with a confidence score 📊.",
      ghLink: "https://github.com/PAVIT0512/Object_Detection",
    },
    {
      id: "object-tracking",
      imgPath: object_tracking_image,
      title: "Object Tracking",
      description: "This code performs real-time object detection and tracking on video. 🚗👀 It uses background subtraction to detect moving objects and a Euclidean distance-based tracker to follow their movement, assigning unique IDs to each object. 📹🔍 The results, including bounding boxes and IDs, are displayed in real-time. 🎯",
      ghLink: "https://github.com/PAVIT0512/Object_Tracking",
    },
    
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
