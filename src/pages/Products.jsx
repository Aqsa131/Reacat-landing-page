import React, { useContext, useEffect, useState } from 'react';
import style from "../css/home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CartContext from "../context/CartContext"

const Products = () => {
  const { setCart } = useContext(CartContext)
  const [getProducts, setGetProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setsearch] = useState("")

  useEffect(() => {
    product();
  }, []);

  const product = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setGetProducts(data.products);
      console.log(data.products);

    } catch (error) {
      console.error('Couldn’t fetch products');
    }
  };
  const handleProducts = (item) => {
    setSelectProduct(item)
    setModal(true)
    console.log("clicked", item.id);
  }
  // ADD TO CART
  const addToCart = (selectProduct) => {
    setCart(previous => [...previous, selectProduct])
   
    setCart(prevCart => {
    const itemExists = prevCart.find(item => item.id === selectProduct.id);

    if (itemExists) {
      return prevCart.map(item =>
        item.id === selectProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { ...selectProduct, quantity: 1 }];
    }
  })

  }
  return (
    <>
      <div className=" min-h-screen py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-4">Our Products</h1>
        <div className={style.field}>
          <input
            className={style.searchField}
            type="text"
            placeholder='Search Your Desired Product'
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} color='gray' />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-3">
          {getProducts
            .filter(item => {
              if (search === "") {
                return true;
              } else {
                // setShowIcon(false)
                return item.title.toLowerCase().includes(search.toLowerCase());
              }
            })
            .map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-pink-200 transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-5">
                  <h5 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h5>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                </div>
                <div className="flex overflow-x-auto gap-4 p-4">
                  {item.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`${item.title} ${imgIndex}`}
                      className="w-40 h-32 object-cover rounded-xl flex-shrink-0 border border-pink-200"
                    />
                  ))}
                </div>
                <button
                  onClick={() => handleProducts(item)}
                  className={style.cardBtn}
                >
                  View Details
                </button>
              </div>
            ))
          }
        </div>

        {modal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden relative">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-red-500"
                onClick={() => setModal(false)}
              >
                &times;
              </button>

              {/* Left: Image */}
              <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
                <img
                  src={selectProduct.images?.[0]}
                  alt={selectProduct.title}
                  className="object-cover rounded-lg max-h-80"
                />
              </div>

              {/* Right: Details */}
              <div className="w-full md:w-1/2 p-6 space-y-4">
                <h2 className="text-2xl font-bold text-pink-600">{selectProduct.title}</h2>
                <p className="text-gray-600 text-sm">{selectProduct.description}</p>
                <div>
                  <p className="text-gray-700"><strong>Brand:</strong> {selectProduct.brand}</p>
                  <p className="text-gray-700"><strong>Category:</strong> {selectProduct.category}</p>
                  <p className="text-gray-700"><strong >Price:</strong> ${selectProduct.price}</p>
                  <p className="text-gray-700"><strong>Rating:</strong> ⭐ {selectProduct.rating}</p>
                  <p className="text-gray-700"><strong>Rating:</strong> {selectProduct.reviews.rating}</p>
                  <p className="text-gray-700"><strong>Stock:</strong> {selectProduct.availabilityStatus}</p>
                  <p className="text-gray-700"><strong>No of Items:</strong> {selectProduct.minimumOrderQuantity}</p>

                </div>
                <button onClick={() => addToCart(selectProduct)} className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-xl shadow">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}


      </div >

    </>
  );
};

export default Products;
