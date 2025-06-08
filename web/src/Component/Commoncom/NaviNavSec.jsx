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
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge'; // Import Badge
import { Mycontext } from '../../context/MyContextData';
import { useContext } from 'react';







const NaviNavSec = () => {
  
const {show, handleClose, handleShow,inPut,setInPut,search_product,filterproduct, cartItems, favoriteItems} = useContext(Mycontext); // Add favoriteItems
const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <> {/* Using a fragment to wrap Navbar and Modal */}
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
            <i className="bi bi-search" onClick={handleShow} style={{ cursor: 'pointer' }}>
              {/* Modal trigger icon - Modal itself is now outside */}
            </i>
            <i className="bi bi-person"></i>
            <Link to="/favorites" style={{textDecoration: 'none', color: 'inherit'}}>
              <i className={favoriteItems.length > 0 ? "bi bi-heart-fill text-danger" : "bi bi-heart"}></i>
            </Link>
            <Link to="/cart" className="position-relative" style={{textDecoration: 'none', color: 'inherit'}}>
              <i className="bi bi-handbag"></i>
              {totalCartQuantity > 0 && (
                <Badge pill bg="danger" style={{ position: 'absolute', top: '-5px', right: '-10px' }}>
                  {totalCartQuantity}
                </Badge>
              )}
            </Link>
          </div>
    
      </NavbarCollapse>
      </BootstrapNavbar>
      </Container>

      {/* Modal definition moved here */}
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
                onChange={search_product}
              />
            </Form>
            {/* --- CRITICAL DISPLAY LOGIC --- */}
            {filterproduct.length === 0 && inPut.trim() !== '' && (
              <Alert variant="info" className="mt-3">
                No products found for "{inPut}".
              </Alert>
            )}

            {filterproduct.length > 0 && (
              <ListGroup className="mt-3">
                {filterproduct.map(product => (
                  <ListGroup.Item key={product.id || product.Desc}> {/* Ensure each item has a unique key */}
                    <Row className="align-items-center">
                      {product.Img && (
                        <Col xs="auto">
                          <img src={product.Img} alt={product.Desc} style={{ height: '50px', marginRight: '10px' }} />
                        </Col>
                      )}
                      <Col>
                        <strong>{product.Desc}</strong>
                        <br />
                        <small className="text-muted">{product.Type} - {product.Category}</small>
                      </Col>
                      <Col xs="auto">
                        <strong>${product.Price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};


export default NaviNavSec