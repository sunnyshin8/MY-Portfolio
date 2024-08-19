import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../style.css"; 
import Particle from "../Particle";
import houseImage from "../../Assets/Projects/Universal_Power_supply.png";
// import videoSource from "../../Assets/Projects/home_video.mp4";


function UniversalPowerSupply(props) {
  const [showVideo, setShowVideo] = useState(false);

  // const openVideo = () => {
  //   setShowVideo(true);
  // };

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
        <h1 className="project-heading">
          <strong className="purple">Universal Power Supply</strong>
        </h1>

        {/* Button to open video */}
        {/* <Button
          variant="primary"
          onClick={openVideo}
          style={{ marginTop: "10px" }}
        >
         <i class="fas fa-tv"></i>
        </Button> */}
        <Button variant="primary purple" href="https://github.com/PAVIT0512/Universal-Power-Supply" target="_blank" style={{ marginTop: "10px" ,marginLeft:"10px" }}>
        <i class="fab fa-github project_github_icon"></i>
        </Button>

        {/* Video popup */}
        {showVideo && (
          <div className="video-popup" style={{ position: "fixed", zIndex: 9999, top: "50px", left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="video-container" style={{ maxWidth: "800px", maxHeight: "600px", position: "relative" ,boxShadow: "0px 0px 100px rgba(128, 0, 128, 0.9)", paddingTop: "0px", borderRadius:"10px"}}>
              <video controls autoPlay loop style={{ maxWidth: "100%", maxHeight: "100%" , objectFit: "cover"}}>
                {/* <source src={videoSource} type="video/mp4" /> */}
                Your browser does not support the video tag.
              </video>
              <button className="close-btn purple" onClick={closeVideo} style={{ position: "absolute", top: 10, right: 10, backgroundColor: "transparent", border: "none", color: "#fff", fontSize: 30, cursor: "pointer" }}>
              <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        )}
        <br></br>
        <br></br>
        <p style={{ color: "white" ,textAlign:"left" }}>
        Universal Power Supply is a crucial device in the realm of electronics, playing a vital role in converting alternating current (AC) from the mains into direct current (DC) that can be used by a variety of electronic devices and systems. In many applications, different DC voltage levels are required to power various components within a circuit. For instance, microcontrollers, sensors, and communication modules often need stable and precise DC voltages such as +5V, -5V, +12V, and -12V.
        
        </p>
        
        <p style={{ color: "white", textAlign:"left" }}>

Most electronic devices and circuits operate on DC power. However, the power available from wall outlets is AC, typically 230V AC or 110V AC depending on the region. Converting this high-voltage AC into usable low-voltage DC is essential for the safe and effective operation of electronic equipment. Moreover, having multiple DC voltage outputs from a single power supply simplifies the design and operation of complex electronic systems, reducing the need for multiple power sources.
</p>
<h3 className="purple" style={{ textAlign:"left" }}>Components</h3>
<br></br>
<h4 className="purple" style={{ textAlign:"left" }}>Transformer:</h4>
<p style={{ color: "white", textAlign:"left" }}>
The transformer steps down the high-voltage AC from the mains to a lower, more manageable AC voltage. It also provides electrical isolation between the high-voltage input and the low-voltage output, enhancing safety.
</p>
<h4 className="purple" style={{ textAlign:"left" }}>Rectifier:</h4>
<p style={{ color: "white", textAlign:"left" }}>
The rectifier converts the AC voltage from the transformer into pulsating DC. This process involves changing the alternating nature of AC to a unidirectional flow of current.The most common rectifier configuration is the bridge rectifier, which uses four diodes to provide full-wave rectification, making efficient use of the entire AC cycle.
</p>
<h4 className="purple" style={{ textAlign:"left" }}>Capacitors:</h4>

<p style={{ color: "white", textAlign:"left" }}>
After rectification, the DC voltage still contains ripples. Filter capacitors smooth out these ripples, resulting in a more stable DC voltage.
Large electrolytic capacitors are typically used for this purpose, with additional smaller ceramic capacitors to filter out high-frequency noise.
</p>
<h4 className="purple" style={{ textAlign:"left" }}>Voltage Regulators:</h4>
:
<p style={{ color: "white", textAlign:"left" }}>
Voltage regulators ensure the output DC voltages are stable and precise, irrespective of variations in the input voltage or load conditions.
<br></br>
Common Regulators are as follows:-
<br></br>
7805: Provides a stable +5V output.
<br></br>
7905: Provides a stable -5V output.
<br></br>
7812: Provides a stable +12V output.
<br></br>
7912: Provides a stable -12V output.
</p>
<h4 className="purple" style={{ textAlign:"left" }}>Thermal Management: </h4>

<p style={{ color: "white", textAlign:"left" }}>
Heat sinks are often attached to the regulators to dissipate excess heat and maintain safe operating temperatures.
</p>

        
      </Container>
    </Container>
  );
}

export default UniversalPowerSupply;
