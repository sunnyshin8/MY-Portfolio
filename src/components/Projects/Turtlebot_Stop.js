import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../../style.css"; 
import Particle from "../Particle";
import houseImage from "../../Assets/Projects/turtlebot3.png";
import videoSource from "../../Assets/Projects/RVIZ2 Simulation.webm";


function Turtlebot_Stop(props) {
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
          <img src={houseImage} alt="Turtlebot3" className="responsive-image"/>
        </div>
         {/* Button to open video */}
         <Button
          variant="primary"
          onClick={openVideo}
          style={{ marginTop: "10px" }}
        >
         <i class="fas fa-tv"></i>
        </Button>
        <Button variant="primary purple" href="https://github.com/PAVIT0512/Turtlebot_Stop_Command" target="_blank" style={{ marginTop: "10px" ,marginLeft:"10px" }}>
        <i class="fab fa-github project_github_icon"></i>
        </Button>
        <h1 className="project-heading">
  <strong className="purple">Turtlebot3 Stop Node</strong>
</h1>
<p style={{ color: "white", textAlign: "left" }}>
  This repository contains all the related files for the project, where I utilized TurtleBot3 running with the Gazebo simulator 🏎️ and RViz2 📊, synchronized with a map in RViz2.
  <br></br>
  <br></br>
  The robot employs <span className="purple">LiDAR sensors</span> 📡 to perceive the environment, providing feedback that ensures synchronization with the maps in RViz2. To stop the robot 🛑, an action client node was created, allowing for halting the robot when running with RViz2.
  <br></br>
  <br></br>
  The map has been configured in RViz2 to accurately represent the environment 🗺️.
  <br></br>
  <br></br>
  To run RViz2 with the map, use the following command:
  <pre><code>ros2 launch turtlebot3_navigation2 navigation2.launch.py use_sim_time:=True map:=maps/my_maps.yaml</code></pre>
  Ensure to check the paths and directories of the files 🗂️.
  <br></br>
  <br></br>
  To start the TurtleBot3 Waffle in the turtlebot3_world environment inside the Gazebo simulator, use this command:
  <pre><code>ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py</code></pre>
  
  To run the action client node, use the command:
  <pre><code>ros2 run action_tutorials_cpp navigate_to_pose_action_client</code></pre>
  The executable has been built in the <span className="purple">build</span> folder with the name <span className="purple">navigate_to_pose_action_client</span> ⚙️.
  <br></br>
  <br></br>
  The primary resources consulted for this creation are:
  <ul>
    <li><a href="https://docs.ros.org/en/humble/Tutorials/Intermediate/Writing-an-Action-Server-Client/Cpp.html" className="purple">Writing an Action Server/Client in C++</a></li>
    <li><a href="https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Service-And-Client.html" className="purple">Writing a Simple C++ Service and Client</a></li>
    <li><a href="https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Publisher-And-Subscriber.html" className="purple">Writing a Simple C++ Publisher and Subscriber</a></li>
    <li><a href="https://navigation.ros.org/" className="purple">ROS Navigation</a></li>
    <li><a href="https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html" className="purple">Writing a Simple Python Publisher and Subscriber</a></li>
  </ul>
  Feel free to explore the repository and enjoy the experience!
</p>

       

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

export default Turtlebot_Stop;
