import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lock from "../Assets/lock.png";
import Form from "react-bootstrap/Form";
import { loginAPI, registerAPI } from "../Services/allAPI";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { tokenAuthorisationContext } from "../Context/TokenAuth";
import { useContext } from "react";

function Auth({ register }) {

  const {isAuthorized, setIsAuthorized} = useContext(tokenAuthorisationContext)


  const navigate = useNavigate();

  const isRegisterForm = register ? true : false;

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.info("Please Fill the Form");
    } else {
      const result = await registerAPI(userData);
      console.log(result);

      if (result.status === 200) {
        toast.success(`${result.data.username} has Registered Successfully!!`);
        setUserData({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        toast.warning(result.response.data);
        console.log(result);
      }
      
    }
  };


  // login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if ( !email || !password) {
      toast.info("Please Fill the Form");
    } else {
      const result = await loginAPI(userData);
      console.log(result);

      if (result.status === 200) {
        // toast.success(`${result.data.username} has Registered Successfully!!`);
        sessionStorage.setItem("exstingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setIsAuthorized(true)
        setUserData({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.warning(result.response.data);
        console.log(result);
      }
      
    }
  };


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
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        value={userData.username}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            username: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email Id"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="password"
                      placeholder="Enter a Password"
                      value={userData.password}
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                    />
                  </Form.Group>
                  {isRegisterForm ? (
                    <div>
                      <button
                        onClick={handleRegister}
                        className="btn btn-light mb-2"
                      >
                        Register
                      </button>
                      <p className="mt-3">
                        Already Have Account? Click here to
                        <Link to={"/login"} className="text-warning">
                          {" "}
                          Login
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <button onClick={handleLogin} className="btn btn-light mb-2">Login</button>
                      <p className="mt-3">
                        New User? Click here to
                        <Link to={"/register"} className="text-warning">
                          {" "}
                          Register
                        </Link>
                      </p>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default Auth;
