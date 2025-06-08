import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavbarCollapse, Row } from 'react-bootstrap'

const AboutNavcom = () => {
  return (
  <>
    
        <Container>
          <Row className='justify-content-center'>
            <Navbar className='Navabout1 me-auto d-flex justify-content-center align-items-center text-center gap-5' >
          <Navbar.Brand href="#home"></Navbar.Brand>
          <NavbarCollapse id="basic-navbar-nav1">
          <Nav className="me-auto d-flex justify-content-center align-items-center gap-5">
            <Nav.Link as={Link} to='/aboutus/aboutmixtas'>About Mixtas</Nav.Link>
            <Nav.Link as={Link} to='/aboutus/story'>Our Story</Nav.Link>
            <Nav.Link as={Link} to='/aboutus/mission'>Our Mission</Nav.Link>
            <Nav.Link as={Link} to='/aboutus/connect'>Connect</Nav.Link>
        
          </Nav>
          </NavbarCollapse>
           </Navbar>
           </Row>
        </Container>
     
  </>
  )
}

export default AboutNavcom