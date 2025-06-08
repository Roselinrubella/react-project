import React from 'react'
import Header from './header'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, } from 'react-router-dom'
import { Product } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, Navigation} from 'swiper/modules'

import 'swiper/css'

const Productcom = () => {
  return (
   <>
   <Container>
    <Row>
        <Col>
        <div>
            <Link to="/">Home/</Link>
            <Link to="/shop">Shop</Link>

        </div>
        </Col>
    </Row>
    <Row>
    <Col lg="6" md="6" sm="12">
    <Swiper slidesPerView={1}
            modules={[Navigation]}
            navigation>
        {Product.filter((a) => a.Category === "New Arrivals").map((value, index) =>{
            return(
                <SwiperSlide key ={index}>
                    <img src={value.Img} alt="" className='img-fluid'/>
                </SwiperSlide>
            )
        })}

    </Swiper>
    <br />
    <Swiper slidesPerView={4}
    spaceBetween={20}
            modules={[Autoplay]}
            autoplay={true}
            >
        {Product.filter((a) => a.Type === "Hoodie").map((value, index) =>{
            return(
                <SwiperSlide key ={index}>
                    <img src={value.Img} alt="" className='img-fluid'/>
                </SwiperSlide>
            )
        })}

    </Swiper>
        
    </Col>
        <Col lg="6" md="6" sm="12">
        <div>
            <h4><h1>New Arrivals</h1></h4>
            <h6>Price</h6>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestias maxime, veniam itaque exercitationem at. Nemo, sit sapiente debitis voluptatibus corrupti nostrum velit nobis ea saepe ex, delectus exercitationem soluta.</p>
            <div className='d-flex'>
            <h6>col1</h6>
            <h6>col2</h6>

            </div>

        </div>
        
        </Col>
        
    </Row>
   </Container>
   </>
  )
}

export default Productcom