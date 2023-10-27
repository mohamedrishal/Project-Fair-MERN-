import React from "react";
import { Link } from "react-router-dom";
import lock from "../Assets/lock.png";
import Form from 'react-bootstrap/Form';

function Auth({ register }) {
  const isRegisterForm = register ? true : false;
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="w-75 container">
        <Link to={"/"} style={{ color: "red", textDecoration: "none" }}>
          <i class="fa-solid fa-arrow-left me-1"></i>
          Back to Home
        </Link>
        <div className="card shadow p-5 bg-success mt-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={lock} alt="" className="rounded-start width-50" />
            </div>
            <div className="col-lg-6 p-5">
              <div className="d-flex align-itmes-center flex-column">
                <h1 className="fw-bolder text-dark mt-2">
                  <i class="fa-solid fa-blog"></i> Project Fair
                </h1>
                <h5 className="fw-bolder mt-2 pb-3 text-light">
                  {isRegisterForm
                    ? "Sign up to Your Account"
                    : "Sign In to Your Account"}
                </h5>
                <Form className="text-light w-100">
                  {isRegisterForm && (
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Your Email Id" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="password"
                      placeholder="Enter a Password"
                    />
                  </Form.Group>
                  {isRegisterForm ? (
                    <div>
                      <button className="btn btn-light mb-2">Register</button>
                      <p className="mt-3">
                        Already Have Account? Click here to
                        <Link to={"/login"} className="text-warning"> Login</Link>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <button className="btn btn-light mb-2">Login</button>
                      <p className="mt-3">
                       New User? Click here to
                        <Link to={"/register"} className="text-warning"> Register</Link>
                      </p>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
