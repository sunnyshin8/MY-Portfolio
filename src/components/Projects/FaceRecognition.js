import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../style.css";
import Particle from "../Particle";
import houseImage from "../../Assets/Projects/emotion.png";

// Use your Google Drive file ID here
const videoFileId = "1MoRPzgczFvYnTK6EWHoqH-pw_ZCpfrRf"; // Replace with your actual file ID
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
          <img src={houseImage} alt="Emotion Detection" className="responsive-image" />
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
          href="https://github.com/PAVIT0512/Face_Recognition_and_Emotion" 
          target="_blank" 
          style={{ marginTop: "10px" ,marginLeft:"10px" }}
        >
          <i className="fab fa-github project_github_icon"></i>
        </Button>

        <h1 className="project-heading">
          <strong className="purple">Emotion Detection and Face Recognition System</strong>
        </h1>
        <p style={{ color: "white", textAlign: "left" }}>
          
          <br></br>
          <br></br>
          This is a trained CNN classifier using Keras with a TensorFlow backend, capable of successfully predicting various human emotions 😊😢😡😱. The classifier can distinguish between multiple emotional states such as happiness, sadness, anger, and fear. After training the model, I integrated it with OpenCV and the face_recognition library to detect faces in real-time video streams.
          <br></br>
          <br></br>
          Once a face is detected, it is passed to the classifier, which then predicts the person's emotion. This combination of deep learning and real-time face detection allows for an interactive and dynamic application, capable of understanding human emotions on the fly. The system can draw bounding boxes around detected faces and display the predicted emotions using text labels. This project demonstrates the powerful synergy between machine learning, computer vision, and real-time image processing technologies 🖥️📸🤖.
          <br></br>
          <br></br>
          <strong className="purple">🛠️ Installation</strong>
          <br></br>
          <br></br>
          To run the program in your local environment, install the necessary packages using the following command:
          <br></br>
          <pre><code style={{ padding: "5px", borderRadius: "5px" }}>pip install opencv-python face_recognition imutils matplotlib pandas tqdm tensorflow kaggle</code></pre>
          <br></br>
          <br></br>
          <strong className="purple">📁 Face Recognition</strong>
          <br></br>
          <br></br>
          To build your dataset for Face Recognition:
          <br></br>
          <br></br>
          1. Create a folder with your name inside the <strong>dataset</strong> folder.
          <br></br>
          2. Add your images to this folder, or use the provided Python script <strong>build_face_dataset.py</strong> to capture photos from your local system 📷.
          <br></br>
          <br></br>
          To use this script, open build_face_dataset.py and replace line 49:
          <br></br>
          <pre><code style={{  padding: "5px", borderRadius: "5px" }}>p = os.path.sep.join(["dataset/pavit", "{}.png".format(str(total).zfill(5))])</code></pre>
          <br></br>
          <br></br>
          with:
          <br></br>
          <pre><code style={{ padding: "5px", borderRadius: "5px" }}>p = os.path.sep.join(["dataset/Your_Name", "{}.png".format(str(total).zfill(5))])</code></pre>
          <br></br>
          <br></br>
          Run the script. Press "k" to capture images and "q" to quit. The photos will be saved in the folder you created 📁.
          <br></br>
          <br></br>
          3. After capturing images, encode them by running <strong>encode_faces.py</strong>. This will create an <strong>encodings.pickle</strong> file that stores the encodings of the images. Once done, run <strong>pi_face_recognition.py</strong> and enjoy the results 🎉.
          <br></br>
          <br></br>
          <strong className="purple">😊 Emotion Detection</strong>
          <br></br>
          <br></br>
          To start from scratch:
          <br></br>
          <br></br>
          1. To get a Kaggle API key, follow these steps:
          <br></br>
          - Go to your Kaggle account settings.
          <br></br>
          - Scroll down to the "API" section.
          <br></br>
          - Click the "Create New API Token" button.
          <br></br>
          - A file called `kaggle.json` will be downloaded to your computer. This file contains your API key.
          <br></br>
          - Place the `kaggle.json` file in the following directory:
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Windows: `C:\Users\Windows_username\.kaggle\kaggle.json`
          <br></br>
          <br></br>
          2. Prepare the dataset by running <strong>dataset_prepare.py</strong>.
          <br></br>
          <br></br>
          3. Generate the <strong>model.h5</strong> file by running <strong>emotion_model_builder.py</strong>.
          <br></br>
          <br></br>
          4. Run <strong>emotions.py</strong> to experience the emotion detection functionality 😊.
          <br></br>
          <br></br>
          <strong className="purple">🤖 Emotion + Face Recognition</strong>
          <br></br>
          <br></br>
          For a combined experience of emotion detection and face recognition, run the <strong>emotion+face_recognition.py</strong> script.
          <br></br>
          <br></br>
          Feel free to explore the repository and enjoy the experience!
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
