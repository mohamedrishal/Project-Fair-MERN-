import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BASE_URL } from "../Services/baseURL";

function EditProject({ project }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [projectDetails, SetProjectDetails] = useState({
    title: project.title,
    languages: project.languages,
    overview: project.overview,
    github: project.github,
    website: project.website,
    projectImage: "",
  });

//   to hold url images
  const [preview,setPreview] = useState("")

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);


  return (
    <>
      <button onClick={handleShow} className="btn btn-light border ms-2">
        <i class="fa-solid fa-pen-to-square fa-1x"></i>
      </button>
      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Porject Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button>
            <div className="row">
              <div className="col-lg-6">
                <label>
                  <input
                    style={{ display: "none" }}
                    type="file"
                  />
                  <img
                    width={"100%"}
                    className="img-fluid"
                    src={`${BASE_URL}/uploads/${project.projectImage}`}
                    alt=""
                  />
                </label>
              </div>

              <div className="col-lg-6 p-3">
                <div className="mb-3 ">
                  <input
                    value={project.title}
                    type="text"
                    className="form-control"
                    placeholder="Project Title"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={project.languages}
                    type="text"
                    className="form-control"
                    placeholder="Language Used"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={project.github}
                    type="text"
                    className="form-control"
                    placeholder="GitHub Link"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={project.website}
                    type="text"
                    className="form-control"
                    placeholder="Website Link"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={project.overview}
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
          <Button
            onClick={handleClose}
            className="w-25 bg-secondary"
            variant="primary"
          >
            Cancel
          </Button>
          <Button onClick={handleClose} className="w-25" variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProject;
