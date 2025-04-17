import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import SLiderButton from './SLiderButton';

function Slider() {
  return (
    <Carousel fade interval={5000} className="overflow-y-hidden">
      <Carousel.Item>
        <div className="relative h-screen w-full">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover animate-zoom" src="https://static.vecteezy.com/system/resources/previews/047/009/922/non_2x/make-up-cosmetic-product-beauty-products-and-cosmetics-swatch-sample-flatlay-various-makeup-brand-tools-as-glamour-fashion-night-out-background-photo.jpg"
            alt="First slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h3 className="text-4xl font-bold mb-4 animate-fadeInUp">We Dont Compromise on Quality</h3>
            <h1 className="text-6xl font-extrabold mb-6 animate-fadeInUp delay-200 m-1">Best Choice for you</h1>
            <p className="text-lg animate-fadeInUp delay-400 m-2">Our Mission is to Provide High Class Quality of Makeup Products.</p>
            <SLiderButton learn={"About Us"} quote={"View All Products"}/>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="relative h-screen w-full">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover animate-zoom"
            src="https://images.pexels.com/photos/3800060/pexels-photo-3800060.jpeg?cs=srgb&dl=pexels-freestockpro-3800060.jpg&fm=jpg"
            alt="First slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h3 className="text-4xl font-bold mb-4 animate-fadeInUp">Your Faith Is Our Mission</h3>
            <h1 className="text-6xl font-extrabold mb-6 animate-fadeInUp delay-200 m-1">Best Choice for you</h1>
            <p className="text-lg animate-fadeInUp delay-400 m-2">Our Mission is to Provide High Class Quality of Makeup Products.</p>
            <SLiderButton learn={"About Us"} quote={"View All Products"}/>
          
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="relative h-screen w-full">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover animate-zoom"
            src="https://burst.shopifycdn.com/photos/beauty-products-and-makeup-on-black-background.jpg?width=925&format=pjpg&exif=0&iptc=0"
            alt="First slide"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h3 className="text-4xl font-bold mb-4 animate-fadeInUp">Try Our Makeup Products</h3>
            <h1 className="text-6xl font-extrabold mb-6 animate-fadeInUp delay-200 m-1">Best Choice for you</h1>
            <p className="text-lg animate-fadeInUp delay-400 m-2">Our Mission is to Provide High Class Quality of Makeup Products.</p>
            <SLiderButton learn={"About Us"} quote={"View All Products"}/>
          
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
