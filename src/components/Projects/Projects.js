import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blood from "../../Assets/Blood-Donation.jpg";
import atm from "../../Assets/Atm.png";
import school from "../../Assets/school.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood}
              isBlog={false}
              title="Blood Buddy"
              description="Developed a comprehensive blood donation system using Java(JSP) as backend, Html, CSS, Javascript for
              Fontend, Mysql for Databse to facilitate blood donation processes and efficiently manage donors."
              ghLink="https://github.com/Palak4620/Blood_Buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atm}
              isBlog={false}
              title="ATM Management System"
              description="Developed an ATM management system using Java (JSP) to simulate the functionality of anAutomated Teller Machine (ATM), enabling users to perform banking transactions."
              ghLink="https://github.com/Palak4620/ATM_Management_System/tree/sub_branch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School Management and Information Portal"
              description="Developed a School Management and Information Portal using HTML, CSS, JavaScript and Bootstrap on a CMS platform. The website features intuitive navigation, a modern design, and interactive elements to enhance user experience for students, parents, and staff."
              demoLink="https://gurukulacademydewas.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
