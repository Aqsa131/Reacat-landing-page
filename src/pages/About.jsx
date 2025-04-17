import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"

      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            minHeight: '100vh',
            backgroundImage: `url("https://c0.wallpaperflare.com/preview/951/627/759/women-s-black-dress.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            WHO ARE WE
          </div>
          <div className="text mt-4" data-swiper-parallax="-100">
            <p>
              We are more than just a clothing brand — we are a lifestyle. Born out of a passion for
              timeless style and modern elegance, we design pieces that empower confidence and celebrate
              individuality.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="subtitle" data-swiper-parallax="-200">
            OUR PHILOSPHY
          </div>
          <div className="text  mt-4" data-swiper-parallax="-100">
            <p>
              Fashion should be effortless, expressive, and inclusive. We believe in quality over quantity, mindful creation, and a deep connection with our community.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            WHAT WE OFFER
          </div>
          <div className="text  mt-4" data-swiper-parallax="-100">
            <p>
              From classic everyday essentials to bold seasonal statements — our collections are curated with love, tailored for those who dress with purpose.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* origin story */}
      <div className="container mt-5">
        <h2 className="container mt-5 text-center" style={{ textTransform: "uppercase" }}>
          Our Origin Story
        </h2>        
        <div className="row mt-5">
          <div className="col-md-6">
            <img src="https://www.otwocosmeticspk.com/wp-content/uploads/2022/03/CABEZAS-1-edited.jpg" alt="" />
          </div>
          <div className="col-md-5">
            <h4 className="mt-3">Why Choose Us?</h4>
            <p className="mt-3">
              It all started with a sketchbook, a small room, and a big dream. In a world filled with fast
              fashion and fleeting trends, we felt something was missing — clothing that told a story.
              We wanted to bring back the essence of thoughtful design, where every thread carries meaning. Born from
              late nights, coffee-fueled ideas, and fabric swatches scattered across the floor, our brand was built on
              passion — not perfection. real stories, and raw creativity. Today, we’re more than just a brand — we’re a movement.
              A celebration of individuality, slow fashion, and timeless confidence.</p>
            <h4 className="mt-3">Why Speciality?</h4>

            <p className="mt-3">
              What began as a side project turned into a full-fledged label, inspired by
              real people, real stories, and raw creativity. Today, we’re more than just a brand — we’re a movement.
              A celebration of individuality, slow fashion, and timeless confidence. And while we’ve grown, our heart
              remains the same: creating pieces that feel personal, purposeful, and proudly you. we felt something was missing —
              clothing that told a story.
              We wanted to bring back the essence of thoughtful design, where every thread carries meaning. Born from
              late nights, coffee-fueled ideas.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <h3>Our Story</h3>
            <hr />
            <p>Our Popularity is different</p>
            <ol style={{ padding: "0px", lineHeight: "36px" }}>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Started with a dream to redefine beauty standards</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Inspired by confidence, self-love, and individuality</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Handpicked quality products from trusted sources</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Committed to cruelty-free and sustainable practices</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>From a small local brand to a growing global presence</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Listening to our customers every step of the way</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Started with a dream to redefine beauty standards.</span></li>

            </ol>
          </div>
          <div className="col-md-3">
            <h3>Our Vision</h3>
            <hr />
            <p>Our Popularity is different</p>
            <ol style={{ padding: "0px", lineHeight: "36px" }}>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Quality over everything</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Empowering self-expression</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Cruelty-free & ethical beauty</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Honesty and transparency</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Innovation with purpose</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Inclusivity in all shades</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Sustainability for the future</span></li>
            </ol>
          </div>
          <div className="col-md-3">
            <h3>Our Story</h3>
            <hr />
            <p>Our Popularity is different</p>
            <ol style={{ padding: "0px", lineHeight: "36px" }}>
            <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>100% Original Products</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>No Compromise on Quality</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Skin-Friendly Ingredients</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}> Sustainability for the future</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}> Always Cruelty-Free</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}>Customer Satisfaction First</span></li>
              <li> <FontAwesomeIcon color=' #f53f85' icon={faCheck} size='15px' /><span style={{ padding: "5px" }}></span> Trendy & Timeless Looks</li>
            </ol>
          </div>
        </div>
      </div>

    </>

  )
}

export default About
