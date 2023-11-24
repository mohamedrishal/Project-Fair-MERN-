import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addProjectAPI } from "../Services/allAPI";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProjectResponseContext } from "../Context/ContextShare";

function AddProject() {

  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)

  const [projectDetails, SetProjectDetails] = useState({
    title: "",
    languages: "",
    overview: "",
    github: "",
    website: "",
    projectImage: "",
  });

  const [preview, setPreview] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    SetProjectDetails({
      title: "",
      languages: "",
      overview: "",
      github: "",
      website: "",
      projectImage: "",
    });
    setPreview("");
  };

  const handleShow = () => setShow(true);

  console.log(projectDetails);

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);

  const [token, setToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, languages, overview, github, website, projectImage } =
      projectDetails;
    if (
      !title ||
      !languages ||
      !overview ||
      !github ||
      !website ||
      !projectImage
    ) {
      toast.info("Please Fill the Form");
    } else {
      
      const reqBody = new FormData();

      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("projectImage", projectImage);

      if (token) {

        const reqHeader = {
          "Content-type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };
        
        const result = await addProjectAPI(reqBody, reqHeader);
        if (result.status === 200) {
          console.log(result.data);
          handleClose()
          alert("Project Added")
          setAddProjectResponse(result.data)
        } else {
          console.log(result);
          console.log(result.response.data);
        }
        
      }
    }
  };

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
          <Button>
            <div className="row">
              <div className="col-lg-6">
                <label>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        projectImage: e.target.files[0],
                      })
                    }
                  />
                  <img
                    width={"100%"}
                    className="img-fluid"
                    src={
                      preview
                        ? preview
                        : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                    }
                    alt=""
                  />
                </label>
              </div>

              <div className="col-lg-6 p-3">
                <div className="mb-3 ">
                  <input
                    value={projectDetails.title}
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        title: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control"
                    placeholder="Project Title"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={projectDetails.languages}
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        languages: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control"
                    placeholder="Language Used"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={projectDetails.github}
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        github: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control"
                    placeholder="GitHub Link"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={projectDetails.website}
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        website: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control"
                    placeholder="Website Link"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={projectDetails.overview}
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        overview: e.target.value,
                      })
                    }
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
          <Button onClick={handleAdd} className="w-25" variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default AddProject;
