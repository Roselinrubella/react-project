import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { mix } from '../../assets/assets'


const Footerpage = () => {
  return (
    <>
    <br></br>
    <Container>
      <Row className='p-5'id="footerbackground">
        <div className='d-flex'>
        <Col sm="12" xs="12" md="3" className='text-light'>
        <h2 >Mixtas</h2>
        <p>Whether you're a trendsetter, minimalist, or an adventurer atheart, Mixtas has something foreveryone. Our diverse range ofstyles caters to various personas.</p>
            <Row className='d-flex text-light'>
              <Col lg="2" md="6" sm="12" className='mb-5'><i class="bi bi-facebook border  rounded-circle p-2"></i></Col>
              <Col lg="2" md="6" sm="12" className='mb-5'><i class="bi bi-twitter-x border  rounded-circle p-2"></i></Col>
              <Col lg="2" md="6" sm="12" className='mb-5'><i class="bi bi-instagram border  rounded-circle p-2"></i></Col>
              <Col lg="2" md="6" sm="12" className='mb-5'><i class="bi bi-whatsapp border  rounded-circle p-2"></i></Col>  
            </Row>
      </Col>
        <Col xs="6" md="2" sm="6" className='text-light'>
        <ul type="none">
        <h5>About Us</h5>
        <li>Our Story</li>
        <li>Mission & Values</li>
        <li>Meet the Team</li>
        <li>Sustainability Efforts</li>
        <li>Brand Partnerships</li>
        <li>Influcencer collaboration</li>
        </ul>        
        </Col>
        <Col xs="12" md="2" sm="12" className='text-light'>
        <ul type="none">
          <h5>Accessibility</h5>
          <li>Accessibility Statement</li>
          <li>Site Map</li>
          <li>Web Accessibility Options</li>
          <li>ADA Compliance</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
         </Col>
        <Col xs="12" md="2" sm="12" className='text-light'>
        <ul type="none">
          <h5>Join Our Community</h5>
          <li>VIP Membership</li>
          <li>Loyalty Program</li>
          <li>Customer Reviews</li>
          <li>Style Forums</li>
          <li>Job Opening</li>
          <li>Culture and Values</li>
          </ul>
        
        </Col>
        <Col xs="12" md="3" sm="12" className='text-light'>
         <h4>Lets get in touch</h4>
              <p>Sign up for our newsletter and receive 10% off your</p> 
            <div className='input-group'>
              <input type="text" className='btn btn-light btn-md' value="Enter Your email Address"/> 
              <div className='input-group-append'>
                <button className='btn btn-light btn-md'>
              <i className="bi bi-arrow-right"></i>
              </button>
              </div>
            </div><br></br> 
        </Col>
        </div>
        <br></br> 
        <hr className='text-light'></hr><br></br>
        <div className='d-flex text-light'>
          <Row>
        <Col  md='8' sm='12'>
        <p>@ 2024 Mixtas All rights reserved. Designed by Novaworks</p>
        </Col>
        <Col  md='4' sm='12' >
        <img src={mix.footer} alt="" className='img-fluid' />
        </Col>
        </Row>
        </div>
       </Row>
    </Container>
    
    </>
  )
}

export default Footerpage