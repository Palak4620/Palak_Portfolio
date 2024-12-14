import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Palak Jaiswal </span>
            Pursuing <span className="purple"> B. Tech</span> in Computer Science Engineering (2025 batch) from <span className="purple"> IPS Academy, Indore</span>. 
            <br /><br/>
            Experienced through internships at <span className="purple">Edithtech Infrastructure</span> and <span className="purple">PERL ERP Systems</span>, working on CMS and Live projects.
            <br /><br />
            Core team member at <span className="purple">GDSC x IPSA</span>, promoting cloud technology and conducting workshops.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Attending Tech Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Anchoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
