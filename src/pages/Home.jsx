import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import GridCards from '../components/GridCards';
import img1 from "../assets/Untitled design.png";
import img2 from "../assets/1.png";
import style from "../css/home.module.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const productApi = async () => {
    const dataa = await fetch("https://dummyjson.com/products")
    const set = await dataa.json()
    setData(set.products.slice(0, 6))
    // console.log(set.products.slice(10, 16));
  }
  useEffect(() => {
    productApi()
  }, [])

  const handleBtn=()=>{
    navigate("/Products")
  }
  return (
    <>
      <Slider />
      <GridCards />
      {/* codepen */}
      <div className="slidersss m-5 " style={{ overflow: "hidden" }}>
        <h3 className='text-center m-5'>Our Creative Partners</h3>
        <div className="slide-track">
          <div className="slidie">
            <img
              src={img1}
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img style={{ width: "170px" }}
              src="https://norakramerdesigns.b-cdn.net/wp-content/uploads/2017/08/Disney_400.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src={img2}
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
          <div className="slidie">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height={100}
              width={250}
              alt=""
            />
          </div>
        </div>
      </div>
      <h3 className='container text-center mt-5'>Our Hot selling Products</h3>
      <div className=" min-h-screen py-10 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-pink-200 transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-3 pb-0">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h5>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              </div>
              <div className="flex overflow-x-auto ">
                <img style={{ width: "200px", margin: "auto" }} src={item.images[0]} alt="" />
              </div>
              <button onClick={handleBtn} className={style.cardBtn}>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home