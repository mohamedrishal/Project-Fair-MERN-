import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

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
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",github:user.github,linkedin:user.linkedin
      });
      setExistingImage(user.profile)
    }else{
      setExistingImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuO1KVIXGW6UaU8qAxlkHQPnA5rkvMo88NdQgeXq98vqjnEYBKy_EKNhroTtbaoza4lyk&usqp=CAU")
    }
  }, []);

  useEffect(()=>{
    if(userProfile.profile){
      setPreview(URL.createObjectURL(userProfile.profile))
    }else{
      setPreview("")
    }
  },[userProfile.profile])


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
              <input style={{ display: "none" }} type="file"  onChange={(e)=>setUserProfile({...userProfile,profile:e.target.files[0]})}/>
              <img
                height={"200px"}
                width={"200px"}
                className="rounded-circle border"
                src={preview?preview:existingImage}
                alt="Uploading picture"
              />
            </label>

            <div className="mt-3">
              <input
                value={userProfile.linkedin}
                onChange={e=>{setUserProfile({...userProfile,github:e.target.value})}}
                placeholder="Github"
                className="form-control"
                type="text"
              />
            </div>
            <div className="mt-3">
              <input
                value={userProfile.linkedin}
                onChange={e=>{setUserProfile({...userProfile,linkedin:e.target.value})}}
                placeholder="Linkedin"
                className="form-control"
                type="text"
              />
            </div>

            <div className="mt-3 btn">
              <Button className="btn w-100">Update</Button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default MyProfile;
