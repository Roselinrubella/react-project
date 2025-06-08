import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffcanvasBody from 'react-bootstrap/OffcanvasBody';
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Mycontext } from '../../context/MyContextData';


const Sidebar = () => {

  const {show1, handleClose1, handleShow1} = useContext(Mycontext);
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <Container>
    <div>
      <i class="bi bi-filter-square fs-1 position-sticky  top-0" variant="primary" onClick={handleShow1}>

      <Offcanvas show={show1}  onClick={handleClose1} >
        <OffcanvasHeader closeButton>
          <Offcanvas.Title>MIXTAS</Offcanvas.Title>
        </OffcanvasHeader>
        <OffcanvasBody>
         <Row>
  <Col lg="12" md="12" sm="12">
   <Accordion defaultActiveKey="" className='Accordion w-100 '>
  <AccordionItem eventKey="0" className='accordion-item'>
    <AccordionHeader className='Accordion-Header'>Product Categories</AccordionHeader>
    <AccordionBody className='accordion-body'>
      <Row>
        <Col lg="8" md="12" sm="12">
     <ul type="none">
      <li><i class="bi bi-chevron-right"></i>Bags</li>
      <li><i class="bi bi-chevron-right"></i>Hoodie</li>
      <li><i class="bi bi-chevron-right"></i>Jackets</li>
      <li><i class="bi bi-chevron-right"></i>Men</li>
      <li><i class="bi bi-chevron-right"></i>SweatShirts</li>
      <li><i class="bi bi-chevron-right"></i>T-Shirts</li>
      <li><i class="bi bi-chevron-right"></i>Women</li>
     </ul>
     </Col>
     <Col>
     <ul type="none">
      <li>(4)</li>
      <li>(5)</li>
      <li>(25)</li>
      <li>(23)</li>
      <li>(10)</li>
      <li>(15)</li>
      <li>(24)</li>
    </ul>
     
     </Col>
     </Row>
    </AccordionBody>
    <br />
  </AccordionItem>
  <br />
  <AccordionItem eventKey="1">
    <AccordionHeader className='Accordion-Header'>Price</AccordionHeader>
    <AccordionBody>
      <Row>
        <Col lg="12" md="12" sm="12">
        <ul type="none">
          <li>$50 - $100</li>
          <li>$100 - $150</li>
          <li>$150 - $200</li>
          <li>$200 - $250</li>
          <li>$250 - $300</li>
          <li>$1 -$50</li>
        </ul>
        </Col>
      </Row>
    </AccordionBody>
    <br />
  </AccordionItem>
  <br />
  <AccordionItem eventKey="2">
    <AccordionHeader className='Accordion-Header'>Color</AccordionHeader>
    <AccordionBody>
      <Row>
        <Col lg="8" md="12" sm="12">
        <ul type="none">
          <li>Blue</li>
          <li>Grey</li>
          <li>Green</li>
          <li>Red</li>
          <li>Yellow</li>
        </ul>
        </Col>
          <Col lg="2" md="12" sm="12">
        <ul type="none">
          <li>(46)</li>
          <li>(46)</li>
          <li>(46)</li>
          <li>(46)</li>
          <li>(46)</li>
        </ul>
        </Col>
      </Row>
    </AccordionBody>
    <br />
  </AccordionItem>
  <br />
  <AccordionItem eventKey="3">
    <AccordionHeader className='Accordion-Header'>Size</AccordionHeader>
    <AccordionBody>
      <Row>
        <Col lg="8" md="12" sm="12">
        <ul type="none">
          <li>Large</li>
          <li>Medium</li>
          <li>Small</li>
        </ul>
        </Col>
        <Col lg="2" md="12" sm="12">
        <ul type="none">
          <li>(46)</li>
          <li>(46)</li>
          <li>(46)</li>
        </ul>
        </Col>
      </Row>
    </AccordionBody>
    <br />
  </AccordionItem>
  <br />
  <AccordionItem eventKey="4">
    <AccordionHeader className='Accordion-Header'>Tags</AccordionHeader>
    <AccordionBody>
      <Row className='g-2'>
        <Col lg="12" md="12" sm="12">
        <button className='btn bg-secondary btn-sm me-2' id="hover-effects">Clothing</button>
        <button className='btn bg-secondary btn-sm me-2' id="hover-effects">ETC</button>
         <button className='btn bg-secondary btn-sm me-2' id="hover-effects">Fashion</button>
          <button className='btn bg-secondary btn-sm me-2' id="hover-effects">M11</button>
         </Col>
        <Col lg="12" md="12" sm="12" className='mb-2'>
          <button className='btn bg-secondary btn-sm me-2' id="hover-effects">M12</button>
          <button className='btn bg-secondary btn-sm me-2' id="hover-effects">M31</button>
           <button className='btn bg-secondary btn-sm me-2' id="hover-effects">M32</button>
            <button className='btn bg-secondary btn-sm me-2' id="hover-effects">M41</button>
            </Col>
            <Col lg="12" md="12" sm="12"className='mb-2'>
          <button className='btn bg-secondary btn-sm me-2' id="hover-effects">M71</button>
          <button className='btn bg-secondary btn-sm me-2' id="hover-effects">M72</button>
           <button className='btn bg-secondary btn-sm me-2' id="hover-effects">M81</button>
            <button className='btn bg-secondary btn-sm me-2' id="hover-effects">Men</button>
            </Col>
            <Col lg="12" md="12" sm="12"className='mb-2'>
          <button className='btn bg-secondary btn-sm me-2' id="hover-effects">Product</button>
          <button className='btn bg-secondary btn-sm me-2' id="hover-effects">Women</button>
            </Col>
      </Row>
    </AccordionBody>
    <br />
  </AccordionItem>
</Accordion>
  </Col>
</Row>
        </OffcanvasBody>
      </Offcanvas>
      </i>
    </div>
    </Container>
    </>
  )
}

export default Sidebar