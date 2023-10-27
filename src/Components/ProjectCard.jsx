import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectPic from "../Assets/pic.png";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="shadow mb-5 btn" onClick={handleShow}>
        <Card.Img variant="top" src={projectPic} />
        <Card.Body>
          <Card.Title className="text-dark">Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img
                style={{ height: "250px" }}
                className="img-fluid"
                src={projectPic}
                alt="Project image"
              />
            </Col>
            <Col md={6}>
              <h2>Project Title</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur illo adipisci cupiditate commodi provident sed,
                voluptatibus repudiandae enim, assumenda, recusandae in sequi
                temporibus animi atque quasi totam nisi voluptate nesciunt.
              </p>
              <p>
                Language Used :{" "}
                <span className="fw-bolder">HTML,CSS React</span>
              </p>
            </Col>
          </Row>
          <div className="mt-3">
            <a
              href="https://github.com/mohamedrishal/CRUD-Contact-list-app.git"
              target="_blank"
              className="btn me-3"
            >
              <i class="fa-brands fa-github fa-2x text-dark"></i>
            </a>
            <a
              href="https://crud-contact-list-app.vercel.app/"
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
