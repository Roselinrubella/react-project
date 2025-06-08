import React from 'react'
import Faqhomecom from '../Component/FAQCom/Faqhomecom'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const FAQ = () => {
  return (
   <>
   <Col lg="12" md="12" sm="12" xs="12" className='text-center'><h1>FAQ</h1></Col>
        <Col lg="12" md="12" sm="12" xs="12" className='text-center'>
        <Link to={"/"} className='text-decoration-none text-dark'>Home/</Link>Shop
        </Col>
   <Faqhomecom />
   </>
  )
}

export default FAQ