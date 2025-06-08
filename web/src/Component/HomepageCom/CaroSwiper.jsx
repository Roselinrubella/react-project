import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import {  loogo } from '../../assets/assets'
import { Autoplay, Navigation,Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



const CaroSwiper = () => {
  return (
   <>
   <Container>
    <Row>
       <Swiper
       slidesPerView={6}
       spaceBetween={30}
       modules={[Navigation,Autoplay]}
       navigation
       autoplay={{delay:3000}}
       speed={1000}
       loop={true}
       loopFillGroupWithBlank={true}>
        {loogo.map((value, index)=>{
            return(
                <SwiperSlide key={index}>
                    <img src={value.img} alt={value.alt} className='img-fluid' />
                    </SwiperSlide>
            )
        })}
       </Swiper> 
    </Row><br></br><br></br>
 </Container>
   </>
  )
}

export default CaroSwiper