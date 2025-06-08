import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { mix } from '../../assets/assets'


const Offersection = () => {
  return (
<>
<Container data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" >
    <Row>
        <Col lg="6" sm="12" className='mb-3 mb-lg-0'>
        <div className='position-relative hover-overlay'>
        <img src={mix.ban1} alt=""className='img-fluid' height={100} />
        <div className='position-absolute top-50 start-25 text-center ms-5 text-white opacity-1 hover-overlay' data-aos="zoom-in-down" >
        <h4>SALE OFF UP TO</h4>
        <h1 >50%</h1>
        <input type="text" value="SHOP NOW" width={10} className='btn btn-light btn-sm text-center' />
        </div>
        </div>
        </Col>
        <Col lg="6" sm="12" >
        <div className='position-relative hover-overlay'>
        <img src={mix.ban2} alt="" className='img-fluid'/>
        <div className='position-absolute top-50 start-25 text-center ms-5 text-white' data-aos="zoom-in-down">
        <h4>New Trending</h4>
        <h1>A Floral<br></br>Fantacy<br></br>Wardrobe</h1>
        <input type="text" value="SHOP NOW" width={10} className='btn btn-light btn-sm text-center' />
        </div>
        </div><br></br><br></br>
        </Col>
    </Row>

</Container>
</>
  )
}

export default Offersection