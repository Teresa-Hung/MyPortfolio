import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { BsChatSquareHeart } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Teresa Hung </span>
            — an <span className="purple">aspiring Data Analyst/Scientist </span> with a passion for
            turning data into meaningful insights that drive business success.
            <br />
            <br />
            I recently graduated with a <span className="purple">Bachelor’s (Honours) in Data Science and Artificial Intelligence </span>
            from <span className="purple">Nanyang Technological University, </span>
            where I developed strong foundations in data analysis, machine learning, and AI-driven solutions.
            <br />
            <br />
            When I'm not coding, you'll find me exploring
          </p>
          <ul>
            <li className="about-activity">
              <BsChatSquareHeart /> &nbsp; Travelling
            </li>
            <li className="about-activity">
              <BsChatSquareHeart /> &nbsp; Photography
            </li>
            <li className="about-activity">
              <BsChatSquareHeart /> &nbsp; Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(235 140 132)" }}>
            "On a journey to realize my full potentials!"{" "}
          </p>
          <footer className="blockquote-footer">Teresa Hung</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
