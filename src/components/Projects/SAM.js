import React, { useState } from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import "../../style.css";
import Particle from "../Particle";
import carouselImage1 from "../../Assets/Projects/carousel1.jpg";
import carouselImage2 from "../../Assets/Projects/carousel5.jpg";
import carouselImage3 from "../../Assets/Projects/carousel6.jpg";
import carouselImage4 from "../../Assets/Projects/carousel4.jpg";

// Use your Google Drive file ID here
const videoFileId = "1IGIlmIYJtITlGkt2Z1o3WrVlHd6LjuBo";
const videoSource = `https://drive.google.com/file/d/${videoFileId}/preview`;

function SAM(props) {
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
        {/* Carousel */}
        <Carousel
          prevIcon={<i className="fas fa-arrow-circle-left custom-carousel-icon"></i>}
          nextIcon={<i className="fas fa-arrow-circle-right custom-carousel-icon"></i>}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 responsive-image-carousel"
              src={carouselImage1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 responsive-image-carousel"
              src={carouselImage2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 responsive-image-carousel"
              src={carouselImage3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 responsive-image-carousel"
              src={carouselImage4}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>

        <h1 className="project-heading">
          <strong className="purple">Singulation Automation Machine (SAM)</strong>
        </h1>

        <Button
          variant="primary"
          onClick={openVideo}
          style={{ marginTop: "10px", marginBottom: "20px" }}
        >
          <i className="fas fa-tv"></i>
        </Button>
        <Button
          variant="primary purple"
          href="https://github.com/PAVIT0512/SAM"
          target="_blank"
          style={{ marginTop: "10px", marginLeft: "10px", marginBottom: "20px" }}
        >
          <i className="fab fa-github project_github_icon"></i>
        </Button>

        <p style={{ color: "white", textAlign: "left" }}>
          I am thrilled to share my remarkable journey during the Flipkart Grid Robotics Challenge 5.0. 🚀 As the Team Leader, Product Designer, and Product Tester, I led a team of six enthusiastic students from diverse departments, including four final-year students.
        </p>
        <p style={{ color: "white", textAlign: "left" }}>
          Our journey commenced with the initial round—a challenging quiz on robotics, automation, and Flipkart. 📚 With perseverance and dedication, we not only participated but excelled, clearing the first hurdle with flying colors. 🌟
        </p>
        <p style={{ color: "white", textAlign: "left" }}>
          As we progressed to the subsequent round, tasked with designing an innovative automation machine for box picking, our collaborative efforts surged. We delved into prototyping and 3D printing, conceptualizing a sophisticated model. 🛠️ The core idea revolved around a dynamic 3D motor-controlled CNC mechanism, featuring a rotating arm and a suction cup at the bottom of the z-axis, enabling precise box manipulation. Additionally, our design incorporated a second module facilitating the seamless flipping of boxes, ensuring labels were positioned on top before dispensing. 📦 Triumphantly, we conquered the second round, earning the esteemed spot as finalists at IIT Madras. 🏆 Special thanks for which goes to the EV Research Center, where we diligently worked on our project, utilizing the available facilities. I extend my heartfelt appreciation to Mr. Imran Baig and Mr. Shahid Khan for their invaluable contributions, cooperation, and technical support during the prototype-building phase. 🙏 Additionally, I acknowledge the pivotal role played by Idea Labs and the Mechatronics Lab in converting our ideas into a tangible prototype.
        </p>
        <p style={{ color: "white", textAlign: "left" }}>
          From August 1st, 2023, until the final showdown at IIT Madras on January 5th, 2024, we dedicated our efforts, refining our models and preparing diligently. 📅 Competing among 19 teams from prestigious institutions such as IIT Bombay, IIT Roorkee, and more, we secured the honorable position of second runner-up, proudly representing our college and achieving significant acclaim. 🥈
        </p>
        <p style={{ color: "white", textAlign: "left" }}>
          Participating in this challenge has been an enriching experience, fostering learning, teamwork, and innovation. 🌟 I owe a debt of gratitude to our college for providing us with the support and resources necessary to thrive in such endeavors. The environment here has been a nurturing shield, encouraging us to push boundaries and excel. 🎓
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

export default SAM;
