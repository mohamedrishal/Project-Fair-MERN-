import React from "react";
import Card from "react-bootstrap/Card";
import projectPic from "../Assets/pic.png";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { BASE_URL } from "../Services/baseURL";

function ProjectCard({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(project);
  return (
    <>
    
      { project && <Card className="shadow mb-5 btn" onClick={handleShow}>
        <Card.Img variant="top" height={"250px"} src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectPic} />
        <Card.Body>
          <Card.Title className="text-dark">{project.title}</Card.Title>
        </Card.Body>
      </Card>}

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img
                style={{ height: "250px" }}
                className="img-fluid"
                src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectPic}
                alt="Project image"
              />
            </Col>
            <Col md={6}>
              <h2>{project.title}</h2>
              <p>
              Project Overview : <br/>
              {project.overview}
              </p>
              <p>
                Language Used :{" "}
                <span className="fw-bolder">{project.languages}</span>
              </p>
            </Col>
          </Row>
          <div className="mt-3">
            <a
              href={project.github}
              target="_blank"
              className="btn me-3"
            >
              <i class="fa-brands fa-github fa-2x text-dark"></i>
            </a>
            <a
              href={project.website}
              target="_blank"
              className="btn me-3"
            >
              <i class="fa-solid fa-link fa-2x text-dark"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
