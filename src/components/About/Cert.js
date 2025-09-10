import React from "react";
import { Col, Row } from "react-bootstrap";
import aws from "../../Assets/Certification/awsCLF02.png"
import gada from "../../Assets/Certification/gada.png"

function Certbadge() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img 
            src={aws}
            alt="AWS Certified Cloud Practitioner"
            className="tech-icon-images"
        >
        </img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img 
            src={gada}
            alt="Google Advanced Data Analytics"
            className="tech-icon-images"
        ></img>
      </Col>
      
    </Row>
  );
}

export default Certbadge;
