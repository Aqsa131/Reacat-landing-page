import React from 'react'
import Slider from '../components/Slider'
import Cards from "../components/Cards"
import GridCards from '../components/GridCards';
import img1 from "../assets/Untitled design.png"
import img2 from "../assets/1.png"



const Home = () => {
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
      <div className="container d-flex flex-wrap justify-content-center gap-3 mt-5">
        <Cards title='Merit Hilighter' disc="Beautifully applied highliter give ultra inhancement" price="$5" btn="View Details" img={"https://assets.vogue.com/photos/63b5d1f9c23144ad0c74c038/3:4/w_748%2Cc_limit/slide_%2520(89).jpg"} />
        <Cards title='Mybeline Fit Foundation' disc="This out of trouble foundations gives immense Beauty" price="$10" btn="View Details" img={"https://ameena.pk/cdn/shop/files/maybelline-18ml-stay_1.jpg?v=1721927565"} />
        <Cards title='Flawless' disc="New Flwless Summer shimmer Attracts you towards it" price="$14" btn="View Details" img={"https://www.globalcosmeticsnews.com/wp-content/uploads/2020/09/Summer-Fridays-767x640.jpg"} />
        <Cards title='Multi Products Kit' disc="Not one but a whole kit for your big day is here" price="$14" btn="View Details" img={"https://static.vecteezy.com/system/resources/previews/029/783/765/large_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg"} />
        <Cards title='Huda Beauty Product' disc="this is my discription to work accordingly" price="$20" btn="View Details" img={"https://di2ponv0v5otw.cloudfront.net/posts/2022/03/16/6231e9f56f6c91bfd99c87ec/m_wp_6231ea2fc936afa6afea2d9a.webp"} />
        <Cards title='Huda Lip Liner' disc="Multi Shades gives you Desired style within" price="$34" btn="View Details" img={"https://thebeautyleague.pk/cdn/shop/products/715WJeuez0L._SL1500_61a8f4e7-b39d-4ce5-ada2-f8ddf327e7e2.jpg?v=1677937329"} />
        <Cards title='Pack of 6 ' disc="All in 1 Brushes which you want as desired" price="$7" btn="View Details" img={"https://i0.wp.com/imagiccosmeticspk.com/wp-content/uploads/2023/08/2-9.jpg?fit=800%2C800&ssl=1"} />
        <Cards title='All in 1' disc="This great deal is Enough for your Summers and Winters" price="$29" btn="View Details" img={"https://hutch.pk/cdn/shop/articles/Cosmetics-Brands-in-Pakistan.jpg?v=1714750895"} />
      </div>
    </>
  )
}

export default Home