import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
      <Header/>
      <div style={{marginTop:"100px"}} className='projects'>
        <h1 className='text-center'>All Projects</h1>
        <div className="d-flex justify-content-center align-itmes-center w-100">
          <div className="d-flex border w-50 rounded mt-3">
            <input type="text"  className='form-control' placeholder='Search Projects by Technology Used' />
            <i style={{marginLeft:"-50px"}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
      </div>
      <Row className='mt-5 container-fluid'> 
        <Col sm={12} md={6} lg={4}>
            <ProjectCard />
        </Col> 
      </Row>
    </div>
  )
}

export default Projects