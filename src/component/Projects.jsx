import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import proImg1 from "../assets/img/proImg1.jpg"

export default function Projects() {
  const projects = [
    {
      title: "Typing Game",
      description: "Based on JS",
      imgURL: proImg1,
    },
    {
      title: "Typing Game",
      description: "Based on JS",
      imgURL: proImg1,
    },
    {
      title: "Typing Game",
      description: "Based on JS",
      imgURL: proImg1,
    },
    {
      title: "Typing Game",
      description: "Based on JS",
      imgURL: proImg1,
    },
    {
      title: "Typing Game",
      description: "Based on JS",
      imgURL: proImg1,
    },
    {
      title: "Typing Game",
      description: "Based on JS",
      imgURL: proImg1,
    },
  ];
  return (
    <div>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias aperiam eveniet ducimus sit dicta, ipsum qui officiis
                aspernatur beatae accusamus dolore omnis modi inventore
                eligendi. Officiis nemo alias quas aut!
              </p>
              <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index) =>{
                                    return (
                                        <ProjectCard key={index}{...project}/>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur dicta hic officiis impedit explicabo repudiandae qui culpa alias cumque vitae est ducimus nemo, obcaecati eos consequatur excepturi adipisci mollitia magnam!
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium natus unde? Voluptatem vero voluptates eum ab numquam! Dicta officiis eveniet illum incidunt cumque, dolorum odit excepturi dolorem neque odio!
                    </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        {/* <img className="background-image-right" src="" alt="" /> */}
      </section>
    </div>
  );
}
