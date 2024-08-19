import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../style.css"; 
import Particle from "../Particle";
import houseImage from "../../Assets/Projects/Object_Detection_image.jpg";
import videoSource from "../../Assets/Projects/Real_time_object_detection.mp4";


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
          <img src={houseImage} alt="House" className="responsive-image"  />
        </div>
        <h1 className="project-heading">
          <strong className="purple">Real Time Object Detection</strong>
        </h1>

        <Button
          variant="primary"
          onClick={openVideo}
          style={{ marginTop: "10px" ,marginBottom:"10px"}}
        >
         <i class="fas fa-tv"></i>
        </Button>
        <Button variant="primary purple" href="https://github.com/PAVIT0512/Object_Detection" target="_blank" style={{ marginTop: "10px" ,marginLeft:"10px" ,marginBottom:"10px"}}>
        <i class="fab fa-github project_github_icon"></i>
        </Button>

<p style={{ color: "white", textAlign: "left" }}>
  This project demonstrates real-time object detection using the MobileNetSSD model with OpenCV and a webcam 🎥. 
  It detects and classifies objects in video frames captured by the webcam 📸, drawing bounding boxes and labels 🏷️ around detected objects with confidence scores 📊.
  <br></br>
  <br></br>
  <strong className="purple">📁 Files</strong>
  <ul>
    <li><code>MobileNetSSD_deploy.prototxt.txt</code>: Model architecture file 📄</li>
    <li><code>MobileNetSSD_deploy.caffemodel</code>: Pre-trained model weights file 🏋️</li>
    <li><code>object_detection.py</code>: Python script for real-time object detection 🚀</li>
  </ul>
  <br></br>

  Install the required packages with:
  <pre><code>pip install opencv-python imutils numpy</code></pre>
  <br></br>
  <strong className="purple">🚀 Usage</strong>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/PAVIT0512/Object_Detection.git</code></pre>
    </li>
    <li>Run the script:
      <pre><code>python object_detection.py</code></pre>
      The script will start a video stream from your webcam, detect objects in real-time, and display the results with bounding boxes and labels 🎬
    </li>
    <li>Exit the program:
      Press <code>q</code> in the video window to stop the program 🚪
    </li>
  </ol>
  <br></br>
  <strong className="purple">⚠️ Notes</strong>
  <ul>
    <li>Ensure you have the required model files (<code>MobileNetSSD_deploy.prototxt.txt</code> and <code>MobileNetSSD_deploy.caffemodel</code>) in the same directory as the script 📂</li>
    <li>The detection confidence threshold is set to 0.4. Adjust this value in the code to fine-tune detection sensitivity 🎯</li>
  </ul>
  <br></br>
</p>

        
        {/* Button to open video */}
        

        {/* Video popup */}
        {showVideo && (
          <div className="video-popup" style={{ position: "fixed", zIndex: 9999, top: "50px", left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="video-container" style={{ maxWidth: "800px", maxHeight: "600px", position: "relative" ,boxShadow: "0px 0px 100px rgba(128, 0, 128, 0.9)", paddingTop: "0px", borderRadius:"10px"}}>
              <video controls autoPlay loop style={{ maxWidth: "100%", maxHeight: "100%" , objectFit: "cover"}}>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="close-btn purple" onClick={closeVideo} style={{ position: "absolute", top: 10, right: 10, backgroundColor: "transparent", border: "none", color: "#fff", fontSize: 30, cursor: "pointer" }}>
              <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default HousePricePrediction;
