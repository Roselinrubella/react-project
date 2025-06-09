import React, { useState, createContext } from 'react';
import { Product } from '../assets/assets';

export const Mycontext = createContext();

const MyContextData = ({ children }) => {
  // State for search functionality on the home page
  const [show, setShow] = useState(false);
  const [inPut, setInPut] = useState('');
  const [filterproduct, setFilterProduct] = useState(Product);

  // State for cart and favorites
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  // State for form submission result
  const [result, setResult] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setInPut(''); // Reset input when showing modal
    setFilterProduct(Product); // Reset product list
  };

  const search_product = (e) => {
    const value = e.target.value;
    setInPut(value);
    if (value === '') {
      setFilterProduct(Product);
    } else {
      const filtered = Product.filter(
        (item) =>
          item.Type.toLowerCase().includes(value.toLowerCase()) ||
          item.Desc.toLowerCase().includes(value.toLowerCase()) ||
          item.Category.toLowerCase().includes(value.toLowerCase())
      );
      setFilterProduct(filtered);
    }
  };

  // Contact page form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    // IMPORTANT: In a real-world application, this key should be an environment variable
    // and the form submission should ideally be handled by a backend service you control.
    formData.append('access_key', '7c46c13a-7bab-410b-9564-128c3cbce8b8');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.error('Error submitting form:', data);
        setResult(data.message || 'Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Network error or other issue during form submission:', error);
      setResult('An error occurred. Please check your internet connection and try again.');
    }
  };

  // Offcanvas for shop page
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // Cart Functions
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.Id === product.Id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.Id === product.Id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.Id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.Id !== productId);
      }
      return prevItems.map((item) =>
        item.Id === productId ? { ...item, quantity: quantity } : item
      );
    });
  };

  // Favorite Functions
  const addToFavorites = (product) => {
    setFavoriteItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.Id === product.Id);
      if (existingItem) {
        alert(`${product.Type} removed from favorites!`);
        return prevItems.filter((item) => item.Id !== product.Id);
      } else {
        alert(`${product.Type} added to favorites!`);
        return [...prevItems, product];
      }
    });
  };

  const removeFromFavorites = (productId) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.Id !== productId));
  };

  const isFavorite = (productId) => {
    return favoriteItems.some((item) => item.Id === productId);
  };

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
  };

  return <Mycontext.Provider value={ContextValue}>{children}</Mycontext.Provider>;
};

export default MyContextData;