import React, { useContext,useEffect, useState } from "react";
import AddProject from "./AddProject";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userProjectAPI } from "../Services/allAPI";
import { addProjectResponseContext } from "../Context/ContextShare";
import EditProject from "./EditProject";

function MyProject() {

  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)

  const [userProjects, setUserProjects] = useState([]);

  const getUserProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };

      const result = await userProjectAPI(reqHeader);
      if (result.status === 200) {
        setUserProjects(result.data);
      } else { 
        toast.warning(result.response.data);
      }
    }
  };

  useEffect(() => {
    getUserProjects();
  }, [addProjectResponse]);
  console.log(addProjectResponse);

  return (
    <>
      <div className="card shadow p-3 mt-3">
        <div className="d-flex">
          <h3>My Projects</h3>
          <div className="ms-auto">
            <AddProject />
          </div>
        </div>

        <div className="mt-4">
          {userProjects?.length > 0 ? (
            userProjects.map((project) => (
              <div className="border d-flex align-items-center rounded p-3 mt-3">
                <h5>{project.title}</h5>
                <div className="icon  ms-auto d-flex justify-content-center align-items-center">
                  <EditProject project={project} />
                  <a href={`${project.github}`} target="_blank" className="btn btn-light border ms-2">
                    <i class="fa-brands fa-github fa-1x"></i>
                  </a>
                  <button className="btn btn-light border ms-2">
                    <i class="fa-solid fa-trash fa-1x"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-danger fw-bolder fs-5 mt-2">
              No Projects Uploaded Yet!!
            </p>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default MyProject;
