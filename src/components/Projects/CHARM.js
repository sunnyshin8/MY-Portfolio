import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../style.css";
import Particle from "../Particle";
import houseImage from "../../Assets/Projects/charm.png";

// Use your Google Drive file ID here
const videoFileId = "1gt8bP9NEITlEkUKfngceYr0-r1yExGzY"; // Replace with your actual file ID
const videoSource = `https://drive.google.com/file/d/${videoFileId}/preview`;

function HousePricePrediction(props) {
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
          <img src={houseImage} alt="House" className="responsive-image"/>
        </div>
        {/* Button to open video */}
        <Button
          variant="primary"
          onClick={openVideo}
          style={{ marginTop: "10px" }}
        >
          <i className="fas fa-tv"></i>
        </Button>
        <Button
          variant="primary purple"
          href="https://github.com/PAVIT0512/C.H.A.R.M"
          target="_blank"
          style={{ marginTop: "10px", marginLeft: "10px" }}
        >
          <i className="fab fa-github project_github_icon"></i>
        </Button>
        <h1 className="project-heading">
          <strong className="purple">C.H.A.R.M</strong>
        </h1>
        <p style={{ color: "white", textAlign:"left"  }}>
        In today's digital era, having an interactive website is crucial for colleges to provide 
students with essential information. However, relying solely on a website may not 
suffice as it may not cover all details or effectively address student queries. While a 
comment section is an option, it can be cumbersome and time-consuming, leading to 
delays in responses. With time being a valuable commodity, students expect quick 
answers, which can't always be provided by humans working round the clock. 
<br></br>
<br></br>
This is where <span className="purple">C.H.A.R.M (Computerized Hardware Automated Reception Manager) </span>
steps in, leveraging Artificial Intelligence (AI) technology. An AI-powered chatbot like 
C.H.A.R.M enables seamless interactions between humans and machines using natural 
language. It can provide varied responses based on the context of the conversation, 
enhancing user engagement and satisfaction. 
<br></br>
<br></br>
By utilizing C.H.A.R.M, colleges can overcome these challenges without relying on 
manual intervention. It can provide detailed information about the college, including a map overview, something a 
human receptionist might struggle to convey comprehensively. 
Moreover, building a data-driven system for chatbots can be challenging due to the vast 
amount of data required for development. C.H.A.R.M addresses this by efficiently 
analyzing data in a short period, offering accurate and relevant responses to user queries. 
This eliminates the need for heavy investments and long development periods, aligning 
with the fast-paced nature of modern technology. 
<br></br>
<br></br>
In essence, C.H.A.R.M serves as a sophisticated solution to streamline communication, 
enhance user experience, and efficiently manage data, ensuring that students receive 
prompt and accurate information about their college.
<br></br>
<br></br>
C.H.A.R.M can understand and convert 
human voice into text using the <span className="purple">Google Text to Speech (gtts) </span> library. Additionally, a 
robust NLP-based machine learning model optimizes responses for a more personalized 
and efficient user experience.
<br></br>
<br></br>
At its core, C.H.A.R.M is powered by <span className="purple">Raspberry Pi</span>, serving as the hardware base and 
facilitating seamless integration with <span className="purple">Arduino</span> for motion control. This setup enables 
precise movements and streamlined processing, enhancing C.H.A.R.M's capabilities in 
recognizing user queries and generating contextually relevant responses. The integration 
of an external microphone and camera further enhances its functionality by allowing for 
<span className="purple"> real-time input processing and image analysis </span>using the face recognition library.
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
                maxWidth: "640px",
                maxHeight: "480px",
                position: "relative",
                boxShadow: "0px 0px 100px rgba(128, 0, 128, 0.9)",
                paddingTop: "0px",
                borderRadius: "10px",
              }}
            >
              <iframe
                width="640px"
                height="480px"
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

export default HousePricePrediction;
