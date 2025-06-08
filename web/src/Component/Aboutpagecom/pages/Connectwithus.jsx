import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutHomecom from '../AboutHomecom'
import AboutNavcom from '../AboutNavcom'



const Connectwithus = () => {
  return (
   <>
   <br />
   <br />
   <AboutHomecom/>
   <AboutNavcom />
   <Container>
    <Row className='p-5'>
      <Col lg="12" md="12" sm="12">
      <h4>
        Affilate Program
      </h4>
      <ul>
        <li>Build your own online sporting goods store!</li>
        <li>If you have a web site, you can make money selling sporting goods products- It's easy and it's free to join.</li>
        <li>Click here to join now and earn commissions of up to 6%</li>
      </ul>
      
      </Col>
    </Row>

   </Container>
   </>
  )
}

export default Connectwithus