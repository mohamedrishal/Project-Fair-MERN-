import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import MyProfile from '../Components/MyProfile'
import MyProject from '../Components/MyProject'

function Dashboard() {
  return (
    <div>
      <Header logout />
       <Row style={{marginTop:"100px"}} className='container-fluid'>
        <Col sm={12} md={8} >
          {/* My Project section */}
          <h2 className='fw-bolder overflow-hidden'>Welcome <span className='text-warning'>User</span></h2>
          <MyProject/>
        </Col>
        <Col sm={12} md={4} >
          {/* My Profile section */}
          <MyProfile/>
        </Col>
       </Row>
    </div>
  )
}

export default Dashboard