import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import "../App.css";
import "./Projects.css";
import "animate.css";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import { useEffect, useState } from "react";
import img1url from "../assets/img/project-img1.png";
import img2url from "../assets/img/project-img2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Mapping Data Centers",
      description: "Design and Development",
      imgURL: img1url,
      type: "Software",
    },
    {
      title: "Computational Human Vision",
      description: "Data Science and Experimental Design",
      imgURL: img2url,
      type: "Data Science",
    },
  ];

  const types = ["Data Science", "Software", "Research"];
  const eventKeys = ["first", "second", "third"];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are some of my projects!!!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Software</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Research</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Data Science</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {types.map((type, idx) => {
                        const subProj = projects.filter(
                          (project) => project.type === type
                        );
                        const key = eventKeys[idx];
                        return (
                          <Tab.Pane eventKey={key}>
                            <Row>
                              {subProj.map((project) => {
                                return (
                                  <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    imgUrl={project.imgURL}
                                  />
                                );
                              })}
                            </Row>
                          </Tab.Pane>
                        );
                      })}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bcgrnd img"
      ></img>
    </section>
  );
};
