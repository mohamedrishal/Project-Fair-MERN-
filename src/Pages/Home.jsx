import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import img from "../Assets/projectfair.png";
import { Link } from "react-router-dom";
import ProjectCard from "../Components/ProjectCard";
import {homeProjectAPI } from "../Services/allAPI";

function Home() {
  const [loggedin, setLoggedin] = useState(false);
  const [homeProjects, setHomeProjects] = useState([]);

  const getHomeProjects = async () => {
    const result = await homeProjectAPI();
    if (result.status === 200) {
      setHomeProjects(result.data);
    } else {
      console.log(result);
      console.log(result.response.data);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }

    // gethomeProjects
    getHomeProjects();
  }, []);

  return (
    <>
      {/* Landing Section */}
      <div
        style={{ width: "100%", height: "100vh" }}
        className="container-fluid rounded bg-success d-flex align-items-center justify-content-center"
      >
        <Row className="align-items-center p-5 ">
          <Col sm={12} md={6} className="container">
            <h1  className="fw-bolder">
              <i class="fa-solid fa-blog"></i> Project Fair
            </h1>
            <p className="text-light mt-4">
              One stop Destination for all softwear Development Projects.Where
              User can add and manage their projects . As well as access all
              projects available in our Website.... What are you waiting for!!
            </p>
            {loggedin ? (
              <Link to={"/dashboard"} className="btn btn-warning p-3 ">
                Manage Your Projects{" "}
                <i class="fa-solid fa-right-long fa-beat ms-2"></i>
              </Link>
            ) : (
              <Link to={"/login"} className="btn btn-warning p-3 ">
                Start to Explore{" "}
                <i class="fa-solid fa-right-long fa-beat ms-2"></i>
              </Link>
            )}
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center align-items-center">
            <img
              // style={{ marginTop: "100px" }}
              className="w-50 img-fluid"
              src={img}
              alt=""
            />
          </Col>
        </Row>
      </div>
      {/* all Projects */}
      <div className="all-projects mt-5">
        <h1 className="text-center mb-5">Explore Our Projects</h1>
        <marquee scrollAmount={15}>
          <Row>
            {homeProjects?.length > 0
              ? homeProjects.map((project) => (
                  <Col sm={12} md={4}>
                    <ProjectCard project={project} />
                  </Col>
                ))
              : null}
          </Row>
        </marquee>
        <div className="text-center mt-5">
          <Link to={"/projects"}>View More Projects</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
