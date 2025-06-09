import React, { useState } from 'react'
import { createContext } from 'react'
import { Product } from '../assets/assets';


export const Mycontext = createContext()
const MyContextData = ({children}) => {
  // Seach for home page
    const [show, setShow] = useState(false);

    const[inPut, setInPut] = useState("")
    const[filterproduct, setFilterProduct] = useState(Product)
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);

    const [result, setResult] =useState("");


    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setInPut("");
        setFilterProduct(Product);
    };

    const search_product = (e) =>{
      const value = e.target.value
      setInPut(value)
      if(value === ""){
        setFilterProduct(Product)
      } else {
        const filtered = Product.filter(
          item =>
            item.Type.toLowerCase().includes(value.toLowerCase()) ||
            item.Desc.toLowerCase().includes(value.toLowerCase()) ||
            item.Category.toLowerCase().includes(value.toLowerCase())
        );
        setFilterProduct(filtered);
      }
    }

    //contact page
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c46c13a-7bab-410b-9564-128c3cbce8b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

     const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

   
    
      // offcanvas for shop page
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Cart Functions
    const addToCart = (product) => {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.Id === product.Id);
        if (existingItem) {
          return prevItems.map(item =>
            item.Id === product.Id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
    };

    const removeFromCart = (productId) => {
      setCartItems(prevItems => prevItems.filter(item => item.Id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
      setCartItems(prevItems => {
        if (quantity <= 0) {
          return prevItems.filter(item => item.Id !== productId);
        }
        return prevItems.map(item =>
          item.Id === productId ? { ...item, quantity: quantity } : item
        );
      });
    };

    // Favorite Functions
    const addToFavorites = (product) => {
      setFavoriteItems(prevItems => {
        const existingItem = prevItems.find(item => item.Id === product.Id);
        if (existingItem) {
          // If item exists, remove it (toggle off)
          alert(`${product.Type} removed from favorites!`);
          return prevItems.filter(item => item.Id !== product.Id);
        } else {
          // If item does not exist, add it (toggle on)
          alert(`${product.Type} added to favorites!`);
          return [...prevItems, product];
        }
      });
    };

    const removeFromFavorites = (productId) => {
      setFavoriteItems(prevItems => prevItems.filter(item => item.Id !== productId));
    };

    const isFavorite = (productId) => {
      return favoriteItems.some(item => item.Id === productId);
    };

    //contact page



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
        filterproduct,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        onSubmit,
        result,
       
    }
  



  return (
    <Mycontext.Provider value={ContextValue}>
        {children}
    </Mycontext.Provider>
  )
}

export default MyContextData