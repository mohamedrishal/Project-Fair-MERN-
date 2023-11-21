import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";
import { allProjectcsAPI } from "../Services/allAPI";

function Projects() {
  const [allProjects, setAllProjects] = useState([]);

  const getAllProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await allProjectcsAPI(reqHeader);
      if (result.status === 200) {
        setAllProjects(result.data);
        console.log(allProjects);
        console.log(token);
      } else {
        console.log(result);
      }
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ marginTop: "100px" }} className="projects">
        <h1 className="text-center">All Projects</h1>
        <div className="d-flex justify-content-center align-itmes-center w-100">
          <div className="d-flex border w-50 rounded mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Projects by Technology Used"
            />
            <i
              style={{ marginLeft: "-50px" }}
              class="fa-solid fa-magnifying-glass fa-rotate-90"
            ></i>
          </div>
        </div>
      </div>
      <Row className="mt-5 container-fluid">
        {allProjects?.length > 0
          ? allProjects.map((project) => (
              <Col sm={12} md={6} lg={4}>
                <ProjectCard project={project} />
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
}

export default Projects;
