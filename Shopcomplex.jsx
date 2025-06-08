import React, { createContext, useState } from 'react'
import { Product } from '../assets/assets';

export const MycontextData = createContext() ;
const Shopcomplex = ({children}) => {

    const [searchInput, setsearchInput]=useState('');
    const [products, setProducts]=useState([]);

    const handleSearch =(e) => {
        setsearchInput(e.target.value);
      const filterproduct = Product.filter((a)=>{
        Product.Type.toLowerCase().includes(searchInput.toLowerCase());
      })
      setProducts(filterproduct);
    
    }
    const Contextvalue ={
        handleSearch,
        searchInput, 
        setsearchInput
    };
  return (
    <Mycontext.Provider value={Contextvalue}>
        {children}
    </Mycontext.Provider>
  )
}

export default Shopcomplex