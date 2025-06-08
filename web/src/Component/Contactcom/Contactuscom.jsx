import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Contactuscom = () => {
  return (
    <>
    <br />
    <br /><br />
    <br />
    <Container>
        <Row className='d-flex justify-content-center align-items-center'>
            <Col lg="3" md="3" sm="12" className='text-center'>
            <div>
                <i class="bi bi-geo-alt 'border rounded-circle p-4 bg-dark text-white fs-3"></i> 
                <br />
                <br />
                <br />
                <h6>Store Address</h6>
                <p>PO Box 16122 Collins Street West Victoria <br />
                   8007 Australia</p>
            </div>
            </Col>
            <Col lg="3" md="3" sm="12" className='text-center'>
            <div>
                <i class="bi bi-telephone-forward border rounded-circle p-4 bg-dark text-white fs-3"></i>
                <br />
                <br />
                <br />
                
                <h6>Call Info</h6>
                <p>Open a chat or give us call at <br />
                +61 3 8376 6284</p>

            </div>
            </Col>
            <Col lg="3" md="3" sm="12" className='text-center'>
            <div>
                <i class="bi bi-envelope border rounded-circle p-4 bg-dark text-white fs-3"></i>
                <br />
                <br />
                <br />
                <h6>Email Support</h6>
                <p>Live chat service <br />
                   https://www.livechat.com</p>
            </div>
            
            </Col>
            <Col lg="3" md="3" sm="12" className='text-center'>
            <div>
                <i class="bi bi-chat-right border rounded-circle p-4 bg-dark text-white fs-3"></i> <br />
                <br />
                <br />
                <h6>Live Support</h6>
                <p>Live chat service <br />
                   https://www.livechat.com</p>
            </div>
            
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Contactuscom