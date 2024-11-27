import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkExCards from "./WorkExCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function WorkEx() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my past and current work experiences
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            
            <WorkExCards
              imgPath={leaf}
              isBlog={false}
              title="Open Source Contributer @IIITB Summer of Code"
              description="Worked on building a food ordering app for college canteen from scratch"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
          <WorkExCards
              imgPath={leaf}
              isBlog={false}
              title="Research Intern @CognitiveScienceLab IIIT Hyderabad"
              description="Worked on a data driven approach for prediction of depression in people using their music listening history.
              My work was in the NLP domain on analysing the lyrics."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WorkEx;
