import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BASE_URL } from "../Services/baseURL";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editProjectAPI } from "../Services/allAPI";
import { EditProjectResponseContext } from "../Context/ContextShare";

function EditProject({ project }) {
  const [show, setShow] = useState(false);

  const {editProjectResponse,setEditProjectResponse} = useContext(EditProjectResponseContext)

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    SetProjectDetails({
      id: project._id,
      title: project.title,
      languages: project.languages,
      overview: project.overview,
      github: project.github,
      website: project.website,
      projectImage: "",
    });
    setPreview("")
  };

  const [projectDetails, SetProjectDetails] = useState({
    id: project._id,
    title: project.title,
    languages: project.languages,
    overview: project.overview,
    github: project.github,
    website: project.website,
    projectImage: "",
  });

  //   to hold url images
  const [preview, setPreview] = useState("");
  

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);

  const handleUpdate = async ()=>{
    const {id,title,languages,overview,github,website,projectImage} = projectDetails
    if( !id || !title || !languages || !overview || !github || !website){
      toast.info(`Please fill form Completely`)
    }else{
      const reqBody = new FormData();

      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("github", github);
      reqBody.append("website", website);
      preview?reqBody.append("projectImage", projectImage):reqBody.append("projectImage",project.projectImage)

      const token = sessionStorage.getItem("token")
      
      if(preview){
        const reqHeader = {
          "Content-type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        };
        console.log(id);
        // api call 
        const result = await editProjectAPI(id,reqBody,reqHeader)
        if(result.status===200){
          handleClose()
          // pass response to my projects
          setEditProjectResponse(result.data)
        }else{
          console.log(result);
          toast.error(result.response.data)
        }
      }else{
        const reqHeader = {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        };
        // api call 
        const result = await editProjectAPI(id,reqBody,reqHeader)
        if(result.status===200){
          handleClose()
          // pass response to my projects
          setEditProjectResponse(result.data)

        }else{
          console.log(result);
          toast.error(result.response.data)
        }
      }
    }

  }

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
                        : `${BASE_URL}/uploads/${project.projectImage}`
                    }
                    alt=""
                  />
                </label>
              </div>

              <div className="col-lg-6 p-3">
                <div className="mb-3 ">
                  <input
                    value={projectDetails.title}
                    type="text"
                    className="form-control"
                    placeholder="Project Title"
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={projectDetails.languages}
                    type="text"
                    className="form-control"
                    placeholder="Language Used"
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        languages: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={projectDetails.github}
                    type="text"
                    className="form-control"
                    placeholder="GitHub Link"
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        github: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={projectDetails.website}
                    type="text"
                    className="form-control"
                    placeholder="Website Link"
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        website: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={projectDetails.overview}
                    type="text"
                    className="form-control"
                    placeholder="Project Overview"
                    onChange={(e) =>
                      SetProjectDetails({
                        ...projectDetails,
                        overview: e.target.value,
                      })
                    }
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
          <Button onClick={handleUpdate} className="w-25" variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default EditProject;
