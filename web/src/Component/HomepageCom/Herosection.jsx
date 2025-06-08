import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Container } from 'react-bootstrap'
import {Autoplay, Navigation,Pagination} from 'swiper/modules'
import { mix } from '../../assets/assets'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Herosection() {
    return (
       <Container  data-aos="flip-left"><br></br>
        <Row>
            <Col>
        <Swiper 
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation, Pagination , Autoplay]}
        navigation={{prevEl:'.swiper-button-prev', nextEl:'.swiper-button-next'}}
        pagination={{ clickable: true }}
        autoplay ={{delay:2000}}
        speed={1000}
        loop={true}
        breakpoints={{
            576:{
                slidesPerView : 1,
                spaceBetween : 20
            },
            768:{
                slidesPerView : 1,
                spaceBetween : 30
            },
            992:{
                slidesPerView : 1,
                spaceBetween : 40
            }
        }}
        >
            <SwiperSlide>
                <div className='position-relative'>
                <img src={mix.swiper} alt="swiper"  className='img-fluid'/>
                <div className='position-absolute top-50 start-25 text-center text-dark'>
                    <h1>URBAN MUSE</h1><br></br>
                    <h1 className='text2'><b>City Chic with a <br></br>Feminine Twist</b></h1><br></br><br></br>
                    <input type="button" value="SHOP NOW" className='btn btn-dark btn-lg' />
                </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className='position-relative'>
                <img src={mix.swiper1} alt="swiper1" className='img-fluid'/>
                <div className='position-absolute top-50 start-25 text-center text-dark'>
                <h1>Travel Bag</h1><br></br>
                 <input type="button" value="SHOP NOW" className='btn btn-dark btn-lg' />
                </div>
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className='position-relative'>
                <img src={mix.swiper2} alt="swiper2" className='img-fluid' />
                <div className='position-absolute top-50 start-25 text-center text-dark'>
                    <h1>URBAN MUSE</h1><br></br>
                    <h1 ><b>Classic Beauties for <br></br>Modern Womens</b></h1><br></br><br></br>
                    <input type="button" value="SHOP NOW" className='btn btn-dark btn-lg' />
                </div>
                </div>
                </SwiperSlide>
                <div className='swiper-button-prev'>
                    <i class="bi bi-arrow-left fs-3 border rounded-circle p-2 bg-dark text-light"></i>
                </div>     
            
                <div className='swiper-button-next'>
                 <i class="bi bi-arrow-right fs-3 border rounded-circle p-2 bg-dark text-light"></i>
                </div>

        </Swiper>
        </Col>
        </Row>
        </Container> 

    )
}

export default Herosection