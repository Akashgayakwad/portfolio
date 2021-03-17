import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Gayakwad </span>
            from <span className="purple"> Raipur, Chhattisgarh, India</span>
            <br />I am a final year undergraduate pursuing B.Tech. in Computer Science and Engineering from NIT Raipur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Games
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Cooking
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Football
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
