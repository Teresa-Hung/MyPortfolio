import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my-avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’ve always been curious about the stories hidden in data, and programming gave me the tools to uncover them.
              <br />
              <br />I work mainly with
              <b className="purple"> Python </b>
              and libraries like
              <b className="purple"> PyTorch, TensorFlow, and scikit-learn</b>
              , along with 
              <b className="purple"> SQL </b>
              for managing data.
              <br />
              <br />
              What excites me most is finding patterns in data and turning them into useful insights, 
              whether that’s through 
              <b className="purple"> data analytics </b>
              or building
              <b className="purple"> machine learning </b>
              models.
              <br />
              <br />
              I’m working toward a career as a
              <b className="purple"> Data Analyst</b> or <b className="purple">Machine Learning Engineer</b>
              , where I can keep learning and solving real-world problems with data.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Teresa-Hung"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/teresa-hung-b78b73192/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/teresa__hung/#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
