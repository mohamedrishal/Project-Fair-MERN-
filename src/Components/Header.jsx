import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header({logout}) {
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
        <button className="btn text-dark fs-5 p-2  fw-bolder">
        Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
       </button>}

     </Container>
   </Navbar>
  );
}

export default Header;
