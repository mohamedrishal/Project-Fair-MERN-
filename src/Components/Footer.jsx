import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{ width: "100%", height: "300px" }}
      className="d-flex  flex-column 
    justify-content-center align-items-center border bg-success mt-5"
    >
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website " style={{ width: "400px" }}>
          <h4 className="fw-bolder">
            <i class="fa-solid fa-blog "></i> Project Fair
          </h4>
          <h6>
            Designed and built with all the love in the world by the luminr team
            with the help of our contributors.
          </h6>
          <h6>Code licensed luminar, docs CC BY 3.0.</h6>
          <p className="text-dark">Currently v1.0.0.</p>
        </div>
        <div className="links d-flex  flex-column ">
          <h4>Links</h4>
          <Link
            className="text-dark"
            to={"/"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            Home
          </Link>
          <Link
            className="text-dark"
            to={"/login"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            Login
          </Link>

          <Link
            className="text-dark"
            to={"/register"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            Register
          </Link>
        </div>
        <div className="guides d-flex  flex-column ">
          <h4>guides</h4>
          <Link
            className="text-dark"
            to={"https://getbootstrap.com/"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            React
          </Link>
          <Link
            className="text-dark"
            to={"https://react-bootstrap.netlify.app/"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            React bootstrap
          </Link>

          <Link
            className="text-dark"
            to={"/watch-history"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            Routing
          </Link>
        </div>
        <div className="contacts">
          <h4>Contact Us</h4>
          <div className="sub d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary ms-3 bg-dark">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons fs-4 d-flex justify-content-evenly mt-4">
            <Link
              className="text-dark"
              to={"https://mail.google.com/"}
              style={{ textDecoration: "none" }}
            >
              <i class="fa-solid fa-envelope"></i>{" "}
            </Link>

            <Link
              className="text-dark"
              to={"https://getbootstrap.com/"}
              style={{ textDecoration: "none" }}
            >
              <i className="fa-brands fa-facebook"></i>{" "}
            </Link>

            <Link
              className="text-dark"
              to={"https://react-bootstrap.netlify.app/"}
              style={{ textDecoration: "none" }}
            >
              <i className="fa-brands fa-twitter"></i>{" "}
            </Link>

            <Link
              className="text-dark"
              to={"/watch-history"}
              style={{ textDecoration: "none" }}
            >
              <i className="fa-brands fa-github"></i>{" "}
            </Link>

            <Link
              className="text-dark"
              to={"/watch-history"}
              style={{ textDecoration: "none" }}
            >
              <i className="fa-brands fa-linkedin-in"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
      <p className="text-dark">
        copyright @ 2023 Project Fair. buit with React.
      </p>
    </div>
  );
}

export default Footer;
