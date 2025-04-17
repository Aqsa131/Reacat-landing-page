// Services.jsx
import React from 'react';

const services = [
  {
    title: "Bridal Makeup",
    description: "Flawless and long-lasting makeup for your big day. Customized looks to suit your style.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/037/246/741/small/ai-generated-make-up-products-advertisment-background-with-copy-space-free-photo.jpg", 
  },
  {
    title: "Party Glam",
    description: "Get party-ready with stunning glam makeup that turns heads and highlights your beauty.",
    image: "https://static.toiimg.com/photo/107658023.cms",
  },
  {
    title: "Photoshoot Look",
    description: "Camera-ready makeup perfect for model shoots, fashion portfolios, and editorial work.",
    image: "https://www.coloressence.com/cdn/shop/articles/HD_Makeup_vs_Airbrush_Makeup.jpg?v=1651659637&width=320",
  },
  {
    title: "Everyday Makeup",
    description: "Subtle, radiant everyday makeup to enhance your natural features effortlessly.",
    image: "https://c4.wallpaperflare.com/wallpaper/322/317/310/look-face-style-portrait-makeup-hd-wallpaper-preview.jpg",
  },
];

const Services = () => {
  return (
    <div className=" min-h-screen py-12 px-6">
      <h1 className="text-center text-pink-700 mb-10">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-pink-300 transition-shadow duration-300"
          >
            <img src={service.image} alt={service.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h4>{service.title}</h4>
              <p >{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
