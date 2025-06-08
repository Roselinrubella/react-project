import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import {Navigation,  Autoplay} from 'swiper/modules'
import { aboutsection } from '../../../assets/assets'
import {Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css"
import "swiper/css/navigation"
import Footerpage from '../../HomepageCom/Footerpage'


const Aboutsecond = () => {
  return (
    <>
    <br />
    <h1 className='text-center'>Meet The Our Team</h1>
    <br />
    <Container>
        <Row>
            <Swiper
            slidesPerView={4}
            spaceBetween={10}
            slidesPerGroup={1}
            loopFillGroupWithBlank={true}
            modules ={[Navigation, Autoplay]}
            navigation
            autoplay={{delay:2000}}
            speed={800}
             loop={true}>
            {aboutsection.map((value, index) => {
                    return (
                        <Col lg='3' md='6' sm='12'>
                          <SwiperSlide key ={index}>
                            <img src={value.Img} alt={value.alt} className='img-fluid'  />
                            <h4 className='text-center'>{value.Name}</h4>
                            <p className='text-center'>{value.desc}</p>
                        </SwiperSlide></Col>
                       
                    )
                })}
            </Swiper>
        </Row>
    </Container>
    <Container fluid>
       <Footerpage />
    </Container>
    
    </>
  ) 
}

export default Aboutsecond