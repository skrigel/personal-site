import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import "./Footer.css";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={8} className="text-center text-sm-end">
            <div className="icon-container">
              <div className="social-icon">
                <a href="#projects">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="#home">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="#skills">
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
