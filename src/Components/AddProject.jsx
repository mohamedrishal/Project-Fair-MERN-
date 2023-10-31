import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Porject Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button onClick={handleClose}>
            <div className="row">
              <div className="col-lg-6">
                <label>
                  <input style={{ display: "none" }} type="file" />
                  <img
                    width={"100%"}
                    className="img-fluid"
                    src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                    alt=""
                  />
                </label>
              </div>

              <div className="col-lg-6 p-3">
                <div className="mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Project Title"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Language Used"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="GitHub Link"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Website Link"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Project Overview"
                  />
                </div>
              </div>
            </div>
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button className="w-25" variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;
