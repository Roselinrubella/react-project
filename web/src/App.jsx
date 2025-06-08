import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Shop from './Pages/Shop'
import Contactus from './Pages/Contactus'
import FAQ from './Pages/FAQ'
import Error from './Pages/Error'
import Header from './Component/Commoncom/header'
import NaviNavSec from './Component/Commoncom/NaviNavSec'
import AboutNavcom from './Component/Aboutpagecom/AboutNavcom'
import Aboutmixtas from './Component/Aboutpagecom/pages/Aboutmixtas'
import OurStory from './Component/Aboutpagecom/pages/OurStory'
import Connectwithus from './Component/Aboutpagecom/pages/Connectwithus'
import OurMIssion from './Component/Aboutpagecom/pages/OurMIssion'
import Productcom from './Component/Commoncom/Productcom'
import Sidebar from './Component/Shopsidebarcom/Sidebar'
import CartPage from './Pages/CartPage'; // Import CartPage
import FavoritesPage from './Pages/FavoritesPage'; // Import FavoritesPage
import MyContextData from './context/MyContextData'

function App() {
  return (
    <BrowserRouter>
    <MyContextData>
  <Header />
  <NaviNavSec />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='*' element={<Error />} />
        <Route path='/aboutus/aboutmixtas' element={<Aboutmixtas />} />
        <Route path='/aboutus/story' element={<OurStory />}/>
        <Route path='/aboutus/mission' element={<OurMIssion />}/>
        <Route path='/aboutus/connect' element={<Connectwithus />} />
        <Route path="/product" element={<Productcom />}/>    
        <Route path='/cart' element={<CartPage />} /> {/* Add CartPage Route */}
        <Route path='/favorites' element={<FavoritesPage />} /> {/* Add FavoritesPage Route */}
        
      </Routes>
      </MyContextData>
     
    </BrowserRouter>
  )
}
export default App
