import React from 'react'
import Herosection from '../Component/HomepageCom/Herosection'
import Secondsection  from '../Component/HomepageCom/Secondsection'
import Offersection from '../Component/HomepageCom/Offersection'
import CaroSwiper from '../Component/HomepageCom/CaroSwiper'
import Blogspage from '../Component/HomepageCom/Blogspage'
import Footerpage from '../Component/HomepageCom/Footerpage'

const Home = () => {
  return (
    <>
  
      <Herosection />
      <Secondsection />
      <Offersection />
      <CaroSwiper />
      <Blogspage />
      <Footerpage />
  
    
    </>
  )
}

export default Home