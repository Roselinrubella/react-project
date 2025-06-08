import React from 'react'
import Contactuscom from '../Component/Contactcom/Contactuscom'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Getintouchcom from '../Component/Contactcom/Getintouchcom'



const Contactus = () => {
  return (
   <>
   <br />
   <br />
   <Col lg="12" md="12" sm="12" xs="12" className='text-center'><h1>Contact Us</h1></Col>
        <Col lg="12" md="12" sm="12" xs="12" className='text-center'>
        <Link to={"/"} className='text-decoration-none text-dark'>Home/</Link>Contct Us
        </Col>
   <Contactuscom />
   <Getintouchcom />
   </>
  )
}

export default Contactus