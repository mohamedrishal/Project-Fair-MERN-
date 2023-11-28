import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { BASE_URL } from "../Services/baseURL";
import { editUserAPI } from "../Services/allAPI";

function MyProfile() {

  const [open, setOpen] = useState(false);

  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
    github: "",
    linkedin: "",
  });

  const [existingImage, setExistingImage] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("exstingUser"));
    setUserProfile({
      ...userProfile,
      username: user.username,
      email: user.email,
      password: user.password,
      profile: "",
      github: user.github,
      linkedin: user.linkedin,
    });
    setExistingImage(user.profile);
  }, [open]);

  useEffect(() => {
    if (userProfile.profile) {
      setPreview(URL.createObjectURL(userProfile.profile));
    } else {
      setPreview("");
    }
  }, [userProfile.profile]);

  const handleProfileUpdate = async () => {
    const { username, email, password, profile, github, linkedin } =
      userProfile;
    if (!github || !linkedin) {
    } else {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("email", email);
      reqBody.append("password", password);
      reqBody.append("github", github);
      reqBody.append("linkedin", linkedin);
      preview
        ? reqBody.append("profileImage", profile)
        : reqBody.append("profileImage", existingImage);
      const token = sessionStorage.getItem("token");

      if (preview) {
        const reqHeader = {
          "Content-type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };
        // api call
        const res = await editUserAPI(reqBody,reqHeader)
        if(res.status===200){
          setOpen(!open)
          sessionStorage.setItem("exstingUser",JSON.stringify(res.data))
        }else{
          setOpen(!open)
          console.log(res);
          console.log(res.response.data);
        }
      } else {
        const reqHeader = {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`,
        };
        // api call
        const res = await editUserAPI(reqBody,reqHeader)
        if(res.status===200){
          setOpen(!open)
          sessionStorage.setItem("exstingUser",JSON.stringify(res.data))
        }else{
          setOpen(!open)
          console.log(res);
          console.log(res.response.data);
        }
      }
    }
  };

  return (
    <div className="card shadow p-5">
      <div className="d-flex justify-content-between">
        <h4>MyProfile</h4>
        <Button
          className="btn btn-outline-dark"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <i class="fa-solid fa-chevron-down"></i>
        </Button>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="row justify-content-center mt-3">
            <label className="text-center">
              <input
                style={{ display: "none" }}
                type="file"
                onChange={(e) =>
                  setUserProfile({ ...userProfile, profile: e.target.files[0] })
                }
              />
              {existingImage !== "" ? (
                <img
                  height={"200px"}
                  width={"200px"}
                  className="rounded-circle border"
                  src={
                    preview ? preview : `${BASE_URL}/uploads/${existingImage}`
                  }
                  alt="Uploading picture"
                />
              ) : (
                <img
                  height={"200px"}
                  width={"200px"}
                  className="rounded-circle border"
                  src={
                    preview
                      ? preview
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuO1KVIXGW6UaU8qAxlkHQPnA5rkvMo88NdQgeXq98vqjnEYBKy_EKNhroTtbaoza4lyk&usqp=CAU"
                  }
                  alt="Uploading picture"
                />
              )}
            </label>

            <div className="mt-3">
              <input
                value={userProfile.github}
                onChange={(e) => {
                  setUserProfile({ ...userProfile, github: e.target.value });
                }}
                placeholder="Github"
                className="form-control"
                type="text"
              />
            </div>
            <div className="mt-3">
              <input
                value={userProfile.linkedin}
                onChange={(e) => {
                  setUserProfile({ ...userProfile, linkedin: e.target.value });
                }}
                placeholder="Linkedin"
                className="form-control"
                type="text"
              />
            </div>

            <div className="mt-3 btn">
              <Button onClick={handleProfileUpdate} className="btn w-100">Update</Button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default MyProfile;
