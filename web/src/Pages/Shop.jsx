import React from 'react'
import Sidebar from '../Component/Shopsidebarcom/Sidebar';
import Shopmenu from '../Component/Shopsidebarcom/Shopmenu';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Shop = () => {
  return (
   <>
   <Container className='position-relavtive overflow-auto'>
    <Row>
       <Col lg="12" md="12" sm="12" xs="12" className='text-center'><h1>Shop</h1></Col>
        <Col lg="12" md="12" sm="12" xs="12" className='text-center'>
        <Link to={"/"} className='text-decoration-none text-dark'>Home/</Link>Shop
        </Col>
    </Row>
   </Container>
   <div className="row">
    <div className="col-lg-1 position-fixed top-5"><Sidebar /></div>
    <div className="col-lg-11"><Shopmenu /></div>
   </div>
   <br />
   
   </>
  )
}

export default Shop