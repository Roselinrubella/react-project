import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Renamed the imported Navbar
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { Link } from 'react-router-dom';
import { mix,} from '../../assets/assets'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card'
import { Mycontext } from '../../context/MyContextData';
import { useContext } from 'react';







const NaviNavSec = () => {
  
const {show, handleClose, handleShow,inPut,setInPut,search_product,filterproduct} = useContext(Mycontext)
  return (
    
   <Container className='position-sticky top-0'>
        <BootstrapNavbar expand="lg" navbar="light" bg="light" className="bg-body-tertiary'"> 
        <div className='d-flex align-items-center'> 
        <NavbarBrand as={Link} to="/">
       <img src={mix.logo} width={150}  alt="logo" className='img-fluid' />
        </NavbarBrand>
        <NavbarToggle />
        </div>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center justify-content-between align-items-center gap-5">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
            </Nav>
      
            <div className='ms-auto  d-flex  align-items-center gap-4' id='hero' >
            <i className="bi bi-search" onClick={handleShow}>
              <div>
                <Row>
                  <Col lg="3" md="12" sm="12">
                  <Modal show={show} onHide={handleClose} fullscreen={true}>
                 <Modal.Header closeButton>
                   <Modal.Title>Search Product</Modal.Title>
                   </Modal.Header>
                 <Modal.Body>
                  <Row>
                        <Form>
          <FormControl
            type="search"
            placeholder="Search products by category..."
            className="mb-3"
            aria-label="Search"
            value={inPut}
            // --- This is the key change ---
            onKeyUp={(e) => setInPut(e.target.value)} // Attach the handler to onKeyUp
            // You can also keep onChange if you want the state to update on every change
            onChange={search_product}
          />
        </Form>
            {/* --- CRITICAL DISPLAY LOGIC --- */}
        {filterproduct.length === 0 && searchTerm.trim() !== '' && (
          <Alert variant="info" className="mt-3">
            No products found for "{inPut}".
          </Alert>
        )}

            {filterproduct.length > 0 && (
          <Card className="mt-3">
            {filterproduct.map(product => {
                <Row className="align-items-center">
                  <Col>
                    <strong>{product.name}</strong>
                    <br />
                    <small className="text-muted">{product.category}</small>
                    ${product.price}
                  </Col>
                </Row>
              
})}
          </Card>
        )}
                  
                    
                  </Row>
                </Modal.Body>
               </Modal>
               </Col>
               </Row>
    </div>
            </i>
            <i className="bi bi-person"></i>
            <i className="bi bi-heart"></i>
            <i className="bi bi-handbag"></i>
          </div>
    
      </NavbarCollapse>
      </BootstrapNavbar>
      </Container>
    
    
  );
};


export default NaviNavSec