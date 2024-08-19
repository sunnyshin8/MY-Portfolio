import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../style.css"; 
import Particle from "../Particle";
import houseImage from "../../Assets/Projects/Object_tracking.png";
import videoSource from "../../Assets/Projects/Object_Tracking.mp4";


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
          <strong className="purple">Object Tracking</strong>
        </h1>

        <Button
          variant="primary"
          onClick={openVideo}
          style={{ marginTop: "10px" ,marginBottom:"10px"}}
        >
         <i class="fas fa-tv"></i>
        </Button>
        <Button variant="primary purple" href="https://github.com/PAVIT0512/Object_Tracking" target="_blank" style={{ marginTop: "10px" ,marginLeft:"10px" ,marginBottom:"10px"}}>
        <i class="fab fa-github project_github_icon"></i>
        </Button>

<p style={{ color: "white", textAlign: "left" }}>
This code performs real-time object detection and tracking on video. 🚗👀 It uses background subtraction to detect moving objects and a Euclidean distance-based tracker to follow their movement, assigning unique IDs to each object. 📹🔍 The results, including bounding boxes and IDs, are displayed in real-time. 🎯
  <br></br>
  <br></br>
  <h2 className="purple">📁 Files</h2>

  <ul>
    <li><code>highway.mp4</code>: Input video file for object detection 🎥</li>
    <li><code>tracker.py</code>: Contains the EuclideanDistTracker class for object tracking 🔄</li>
    <li><code>main.py</code>: Main script for object detection and tracking 🚀</li>
  </ul>
  <br></br>

  <h2 className="purple">📜 How It Works</h2>
  
  <br></br>
  <h3 className="purple">Object Detection:</h3>
<li>Uses a background subtraction method <span className="purple">(cv2.createBackgroundSubtractorMOG2)</span> to detect moving objects. 🕵️‍♂️</li>
<li>Applies a binary threshold and finds contours to identify objects. 📊</li>
<br></br>
<h3 className="purple">Object Tracking:</h3>

<li>Utilizes the <span className="purple">EuclideanDistTracker</span> class to assign and update unique IDs for each detected object. 🆔</li>
<li>Tracks objects based on their center points and Euclidean distance. 📍</li>
<br></br>
<h3 className="purple">Visualization:</h3>
<li>Displays the region of interest (ROI), the original video frame, and the binary mask. 📺</li>
<li>Draws bounding boxes and IDs around detected objects in the ROI. ✏️</li>
<br></br>
<br></br>
  Install the required packages with:
  <pre><code>pip install opencv-python </code></pre>
  <br></br>
  <strong className="purple">🚀 Usage</strong>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/PAVIT0512/Object_Tracking.git</code></pre>
    </li>
    <li>Run the script:
      <pre><code>python main.py</code></pre>
      The script will start to detect objects in the highway.mp4 video, and display the results in the form of Object Tracking Contours 🎬
    </li>
    <li>Exit the program:
      Press <code>Esc</code> in the video window to stop the program 🚪
    </li>
  </ol>
  <br></br>
  <strong className="purple">⚠️ Notes</strong>
  <ul>
    <li>Ensure you have the required model files (<code>highway.mp4, tracker.py </code> and <code>main.py</code>) in the same directory as the script 📂</li>
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
