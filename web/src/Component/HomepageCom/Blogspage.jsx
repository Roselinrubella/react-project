import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import { bblog } from '../../assets/assets'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'





const Blogspage = () => {
  return (
  <>
  <Container>
    <Row>
        <h5 className='text-secondary text-center'>LASTEST POSTS</h5>
        <h2 className='text-center'>Blog & Insights </h2>
    </Row>
    <Row>
        <Swiper
        slidesPerView={3}
        spaceBetween={5}
        slidesPerGroup={1}
        loopFillGroupWithBlank={true}
        modules={[Navigation ,Autoplay]}
        navigation
        autoplay={{delay:2000}}
        speed={800}
        loop={true}>
            {bblog.map((value, index) =>{
                return(
                    <Col lg='4' md='6' sm='12'>
                    <SwiperSlide key={index}><br></br>
                        <img src={value.img} alt={value.alt} className='img-fluid'/>
                        <p>{value.desc}</p>
                        <h4>{value.para}</h4>
                    </SwiperSlide>
                    </Col>
                )
            })}
        </Swiper>
    </Row>
  </Container>
  </>
  )
}

export default Blogspage