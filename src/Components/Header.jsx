import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import { tokenAuthorisationContext } from "../Context/TokenAuth";
function Header({logout}) {

  const {isAuthorized, setIsAuthorized} = useContext(tokenAuthorisationContext)


  const navigate = useNavigate()

  const handleLogout = ()=>{
    // remove all exisisting user details form browser
    sessionStorage.removeItem("exstingUser")
    sessionStorage.removeItem("token")
    // navigate to landing page
    setIsAuthorized(false)

    navigate("/")
  }

  return (
     <Navbar className="bg-success position-fixed top-0 w-100 z-1">
     <Container>
       <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:"none"}} className="fw-bolder fs-3 text-dark">
        <i class="fa-solid fa-blog"></i> Project Fair
        </Link>
       </Navbar.Brand>

       {
         logout &&
        <button onClick={handleLogout} className="btn text-dark fs-5 p-2  fw-bolder">
        Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
       </button>}

     </Container>
   </Navbar>
  );
}

export default Header;
