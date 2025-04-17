import React, { useEffect, useState } from 'react'

const Products = () => {
  const [getProducts, setGetProducts] = useState([])
  useEffect(() => {
    product()
  }, [])
  const product = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      setGetProducts(data.products)
      console.log(data.products);
    }
    catch (error) {
      console.error("couldnt fetch products")
    }
  }
  return (
    <div>
      
      {getProducts.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '20px', padding: '10px' }}>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
            {item.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={`${item.title} ${imgIndex}`}
                style={{ width: '150px', height: 'auto', borderRadius: '8px' }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products