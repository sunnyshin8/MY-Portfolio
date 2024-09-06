import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="home-about-body">
            Hello there, I'm <b className="purple">Hemal Shingloo</b>, a
            full-time <b className="purple">Machine Learning Engineer</b> with a
            background in{" "}
            <b className="purple">Deep Learning and Business Analyst</b>.
            Whether for work or for leisure, I enjoy exploring{" "}
            <b className="purple">ideas</b> that enhance people's lives and
            broaden the realm of possibilities. I'm a{" "}
            <b className="purple">sports aficionado</b> and love to explore
            nature. I'll succesfully completing my {" "}
            <b className="purple">B.Tech in Computer Scinece and Engineering</b>{" "}
            from{" "}
            <b className="purple">
              VIT Bhopal University, Madhya Pradesh, India
            </b>
            . I've acquired{" "}
            <b className="purple">project and time management skills</b>, as
            well as the ability to <b className="purple">communicate</b> with
            teams and clients while effectively meeting{" "}
            <b className="purple">milestones and deadlines</b> during my
            graduation period. After my first year of graduation, I decided to
            explore the field of <b className="purple">Machine Learning</b> and
            started making small approaches to fulfill my goal by working on
            various projects. I've been learning about{" "}
            <b className="purple">Deep Learning and Machine Learning</b>. Most
            recently, I've had the pleasure of developing{" "}
            <b className="purple">Advance ML models</b>, and now, I am once
            again set loose upon the world in search of the next challenge.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming fanatic
            </li>
            <li className="about-activity">
              <ImPointRight /> Audiophile
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Enthusiast
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Celebrate today's technology's enchantment, because it provides the
            basis for tomorrow's innovation."{" "}
          </p>
          <footer className="blockquote-footer">Hemal Shingloo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
