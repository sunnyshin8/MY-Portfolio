import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Certificates from "./components/Certificates/Certificates";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
// import HousePricePrediction from "./components/Projects/HousePricePrediction";
// import SAM from "./components/Projects/SAM";
// import UniversalPowerSupply from "./components/Projects/UniversalPowerSupply";
// import TrafficRobot from "./components/Projects/TrafficRobot";
// import CHARM from "./components/Projects/CHARM";
// import FaceRecognition from "./components/Projects/FaceRecognition";
// import Turtlebot from "./components/Projects/Turtlebot_Stop";
// import ObjectDetection from "./components/Projects/Object_detection";
// import ObjectTracking from "./components/Projects/Object_tracking";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project/house-price-prediction" element={<HousePricePrediction />} />
          <Route path="/project/sam" element={<SAM />} />
          <Route path="/project/universal-power-supply" element={<UniversalPowerSupply />} />
          <Route path="/project/traffic-robot" element={<TrafficRobot />} />
          <Route path="/project/charm" element={<CHARM />} />
          <Route path="/project/face-recognition" element={<FaceRecognition />} />
          <Route path="/project/Turtlebot-Stop" element={<Turtlebot />} />
          <Route path="/project/object-detection" element={<ObjectDetection />} />
          <Route path="/project/object-tracking" element={<ObjectTracking />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
