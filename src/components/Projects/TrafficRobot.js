import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../style.css";
import Particle from "../Particle";
import houseImage from "../../Assets/Projects/trafficrobot1.jpg";
import mayorImage from "../../Assets/Projects/trafficrobot2.jpg";

const videoFileId = "1OU2ZBXce5_pUFi_zhFMtJicyKZn2-z6r";
const videoSource = `https://drive.google.com/file/d/${videoFileId}/preview`;
function TrafficRobot(props) {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <Container fluid className="project-section">
      <Particle style={{ position: "absolute", zIndex: 1 }} />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="image-container">
          <img src={houseImage} alt="Traffic Robot" className="responsive-image" />
        </div>
        <h1 className="project-heading">
          <strong className="purple">Traffic Robot (Traffic Mitra)</strong>
        </h1>
        {/* Button to open video */}
        <Button
          variant="primary"
          onClick={openVideo}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <i className="fas fa-tv"></i>
        </Button>
        <p style={{ color: "white", textAlign: "left" }}>
          Indore's Acropolis Institute has engineered a weather-proof robot that closely resembles a regular traffic police personnel, both in appearance and functionality. This innovative robot, capable of managing traffic efficiently, showcases advanced motoring abilities, including changing its direction to control traffic flow. Designed for year-round operation, the robot is waterproof and requires 6 kilowatts of electricity, which can be conveniently supplied by a solar panel.
        </p>
        <p style={{ color: "white", textAlign: "left" }}>
          The robot mimics the appearance and abilities of a traffic police officer. It can manage traffic at intersections, stopping vehicles and allowing pedestrians to cross as per traffic rules. This level of functionality ensures that the robot can effectively replace human traffic police in various scenarios, improving safety and efficiency at busy intersections.
        </p>
        <p style={{ color: "white", textAlign: "left" }}>
          One of the standout features of this robot is its power requirement. Operating on <span className="purple">6 kilowatts</span> of electricity, it can be powered by solar panels, making it environmentally friendly and cost-effective. This not only reduces operational costs but also aligns with sustainable energy practices, showcasing the potential of solar-powered robotics in urban settings.
        </p>
        <p style={{ color: "white", textAlign: "left" }}>
          The robot's development was spearheaded by a team of 4 Engineering students of <span className="purple">Electronics and Communication</span> from Acropolis Institute including <span className="purple">me</span>, who designed and constructed it within one month. The project was completed at a cost of Rs 4 lakhs. Currently, the robot is installed at the Sica School intersection behind the Brilliant Convention Centre, the venue of the <span className="purple">Pravasi Bharatiya Conference</span> in Indore.
        </p>
        
        {/* Image of Mayor Pushyamitra Bhargava */}
        <div className="mayor-image-container">
          <img src={mayorImage} alt="Mayor Pushyamitra Bhargava" className="responsive-image" />
        </div>
        
        <p style={{ color: "white", textAlign: "left", marginTop: "20px" }}>
          <span className="purple">Mayor Pushyamitra Bhargava</span> inaugurated the autonomous Traffic Mitra robot. The police commissioner reviewed and appreciated the robot, which is currently on a trial basis. There are plans to collaborate with the Municipal Corporation to install similar robots at various intersections throughout the city, enhancing the overall traffic management system. Udhay Bhanu Singh, HOD of Acropolis Institute, mentioned, "The police commissioner also has reviewed the robot and appreciated it. For now, it's on a trial basis, but in future, we will work with the Municipal Corporation to install similar robots at various intersections of the city."
        </p>
        <p style={{ color: "white", textAlign: "left" }}>
          This innovative approach not only enhances traffic management efficiency but also represents a significant leap towards integrating renewable energy sources into urban infrastructure. By leveraging solar-powered robotics, the project highlights the intersection of technology, sustainability, and urban planning, paving the way for smarter cities.
        </p>

        {/* Video popup */}
        {showVideo && (
          <div
            className="video-popup"
            style={{
              position: "fixed",
              zIndex: 9999,
              top: "50px",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="video-container"
              style={{
                width: "640px",
                height: "360px",
                position: "relative",
                boxShadow: "0px 0px 100px rgba(128, 0, 128, 0.9)",
                paddingTop: "0px",
                borderRadius: "10px",
              }}
            >
              <iframe
                width="640"
                height="360"
                src={videoSource}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video"
                style={{ borderRadius: "10px" }}
              ></iframe>
              <button
                className="close-btn purple"
                onClick={closeVideo}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: 30,
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default TrafficRobot;
