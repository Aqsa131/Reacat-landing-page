import React from 'react';
import { NavLink } from 'react-router-dom';

const GridCards = () => {
  return (
    <div className="w-full p-3 mt-5">
      <div className="flex flex-col lg:flex-row gap-4 h-[500px]">
        
        {/* LEFT COLUMN */}
        <div className="lg:w-1/2 relative h-full">
          <NavLink>
            <img
              src="https://burst.shopifycdn.com/photos/beauty-products-flatlay.jpg?width=1000&format=pjpg&exif=0&iptc=0"
              alt="New Collections"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-4 left-4 bg-white px-4 py-2 text-black italic font-semibold shadow-md rounded">
              New Collections!
            </div>
          </NavLink>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:w-1/2 flex flex-col gap-4 h-full">
          
          {/* TOP ROW with two small images */}
          <div className="flex gap-4 h-1/2">
            <div className="w-1/2 relative">
              <NavLink>
                <img
                  src="https://img.freepik.com/free-photo/foundation-bottles-advertising-arrangement_23-2149511225.jpg?semt=ais_hybrid&w=740"
                  alt="Our Popular Products"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-transparent px-4 py-2 text-black italic font-semibold shadow-md rounded">
                  Our Popular Products
                </div>
              </NavLink>
            </div>
            <div className="w-1/2 relative">
              <NavLink>
                <img
                  src="https://img.freepik.com/free-photo/flat-lay-toilet-bag-products_23-2149879457.jpg"
                  alt="Hot Trending Products"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-transparent px-4 py-2 text-black italic font-semibold shadow-md rounded">
                  Hot Trending Products
                </div>
              </NavLink>
            </div>
          </div>

          {/* BOTTOM SINGLE IMAGE */}
          <div className="relative h-1/2">
            <NavLink>
              <img
                src="https://media.istockphoto.com/id/1320934166/photo/cosmetic-skin-care-products-on-green-leaves.jpg?s=612x612&w=0&k=20&c=X4pwnTaBzXHDOGZlcdJdlKxmYd__61xboHVIiR5JMIk="
                alt="Winter Collections"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black italic font-semibold shadow-md rounded">
                Winter Collections!
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
