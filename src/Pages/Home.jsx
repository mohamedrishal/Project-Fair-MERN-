import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../Assets/projectfair.png";
import { Link } from "react-router-dom";
import ProjectCard from "../Components/ProjectCard";

function Home() {
  return (
    <>
      {/* Landing Section */}
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#f8f9fa" }}
        className="container-fluid rounded"
      >
        <Row className="align-items-center p-5">
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: "60px" }} className="fw-bolder">
              <i class="fa-solid fa-blog"></i> Project Fair
            </h1>
            <p>
              One stop Destination for all softwear Development Projects.Where
              User can add and manage their projects . As well as access all
              projects available in our Website.... What are you waiting for!!
            </p>
            <button className="btn btn-warning">
              Start to Explore{" "}
              <i class="fa-solid fa-right-long fa-beat ms-2"></i>
            </button>
          </Col>
          <Col sm={12} md={6}>
            <img
              style={{ marginTop: "100px" }}
              className="w-75"
              src={img}
              alt=""
            />
          </Col>
        </Row>
      </div>
      {/* all Projects */}
      <div className="all-projects mt-5">
        <h1 className="text-center mb-5">Explore Our Projects</h1>
        <marquee scrollAmount={19}>
          <Row>
            <Col sm={12} md={4}>
              <ProjectCard />
            </Col>{" "}
            <Col sm={12} md={4}>
              <ProjectCard />
            </Col>{" "}
            <Col sm={12} md={4}>
              <ProjectCard />
            </Col>
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
