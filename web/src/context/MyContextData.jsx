import React, { useState } from 'react'
import { createContext } from 'react'
import { Product } from '../assets/assets';


export const Mycontext = createContext()
const MyContextData = ({children}) => {
  // Seach for home page
    const [show, setShow] = useState(false);

    const[inPut, setInPut] = useState("")
    const[filterproduct, setFilterProduct] = useState([Product])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const search_product = (e) =>{
      const value = e.target.value
      setInPut(value)
      if(inPut === 0){
      setFilterProduct(Product)
      return
    }

        // console.log(value)
    }
   
    const search_inputproduct = () =>{
      const filterdata =Product.filter(a=>a.Type.toLowerCase().includes(value.toLowerCase())||a.Category.toLowerCase().includes(value.toLowerCase())
     );
     setFilterProduct(filterdata)
        }


   
    
      // offcanvas for shop page
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const ContextValue = {
        show,
        handleClose,
        handleShow,
        show1,
        handleClose1,
        handleShow1,
        inPut,
        setInPut,
        search_product, 
        search_inputproduct,
        filterproduct,
       
    }
  



  return (
    <Mycontext.Provider value={ContextValue}>
        {children}
    </Mycontext.Provider>
  )
}

export default MyContextData