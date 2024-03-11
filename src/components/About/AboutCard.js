import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raju Kilaram </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            Accomplished software developer with expertise in developing and scaling distributed applications using Java, Spring (MVC/Boot), and microservices architecture.
            Proficient in cloud deployments on AWS and Openshift, with extensive experience in UI development using Angular and React.
            Skilled in Test-Driven Development (TDD) and working within Fast-Paced CI/CD environments. 
            <br />

            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
