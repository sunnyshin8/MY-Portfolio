import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../style.css"; 
import Particle from "../Particle";
import houseImage from "../../Assets/Projects/home.jpg";
import videoSource from "../../Assets/Projects/home_video.mp4";


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
        <div className="image-container" >
          <img src={houseImage} alt="House" className="responsive-image"  />
        </div>
        <h1 className="project-heading">
          <strong className="purple">House Price Prediction</strong>
        </h1>

        <Button
          variant="primary"
          onClick={openVideo}
          style={{ marginTop: "10px" ,marginBottom:"10px"}}
        >
         <i class="fas fa-tv"></i>
        </Button>
        <Button variant="primary purple" href="https://github.com/PAVIT0512/Home-Price-Predictor" target="_blank" style={{ marginTop: "10px" ,marginLeft:"10px" ,marginBottom:"10px"}}>
        <i class="fab fa-github project_github_icon"></i>
        </Button>

        <p style={{ color: "white", textAlign:"left" }}>
        Welcome to the Home Price Predictor project! This project aims to predict home prices using various regression techniques. It includes steps for data preprocessing, feature engineering, and model training to forecast home prices effectively. <br></br><br></br>
        <h3 className="purple">Features ✨</h3>

Data Preprocessing: Clean and preprocess the dataset for accurate predictions. 🧹<br></br>
Feature Engineering: Create and select relevant features to enhance model performance. 🛠️<br></br>
Multiple Regression Techniques: Utilize various regression methods for price prediction. 📊<br></br>
Evaluation: Assess model performance and make improvements based on metrics. 📈<br></br>
        </p>

        <p style={{ color: "white", textAlign:"left" }}>
        
        <h3 className="purple">Project Structure 📁</h3>

        Contains datasets used for training and testing. 📂<br></br>
        Jupyter notebooks for exploratory data analysis and model building. 📒<br></br>
        Python Scripts for data preprocessing, feature engineering, and model training. 🐍<br></br>
        Trained models and saved artifacts. 🗃️<br></br>
        </p>
        <p style={{ color: "white", textAlign:"left" }}>
        
        <h3 className="purple">How It Works 🔍</h3>

Data Preprocessing: The dataset is cleaned and prepared for training. 🧼<br></br>
Feature Engineering: Relevant features are created to improve model accuracy. 🧠<br></br>
Model Training: Various regression models are trained using the prepared data. 🏋️‍♂️<br></br>
Evaluation: The models are evaluated based on performance metrics. 🏆<br></br>
Prediction: The trained model is used to predict home prices. 🏠<br></br>
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
