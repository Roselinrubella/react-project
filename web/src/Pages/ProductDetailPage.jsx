import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../assets/assets';
import { Mycontext } from '../context/MyContextData';
import Footerpage from '../Component/HomepageCom/Footerpage';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = Product.find((item) => item.Id === id);
  const { addToCart, addToFavorites } = useContext(Mycontext);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.Img} alt={product.Desc} className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-4">{product.Type}</h1>
            <p className="text-gray-700 mb-4">{product.Desc}</p>
            <p className="text-2xl font-bold text-gray-900 mb-6">{product.Price}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => addToCart(product.Id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => addToFavorites(product.Id)}
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footerpage />
    </div>
  );
};

export default ProductDetailPage;
