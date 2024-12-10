//related products component

"use client";

import React, { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { products } from "../utils/products";

export const RelatedProducts = () => {
  // reference to the container div for scrolling control
  const containerref = useRef<HTMLDivElement>(null);
  const [isLeftShow, setIsLeftShow] = useState(false);
  const [isRightShow, setIsRightShow] = useState(true);

  // function to scroll to left
  const scrollLeft = () => {
    if (containerref.current) {
      containerref.current.scrollBy({ left: -330, behavior: "smooth" });
    }
  };

  // function to scroll to right
  const scrollRight = () => {
    if (containerref.current) {
      containerref.current.scrollBy({ left: 330, behavior: "smooth" });
    }
  };

  // handle the visibility of the scroll button
  const handleScroll = () => {
    if (containerref.current) {
      const scrollLeftPosition = containerref.current.scrollLeft;
      const scrollWidth = containerref.current.scrollWidth;
      const clientWidth = containerref.current.clientWidth;

      setIsLeftShow(scrollLeftPosition > 0);
      setIsRightShow(scrollLeftPosition + clientWidth < scrollWidth);
    }
  };

  return (
    <div className="p-7 bg-[#FBF9F899]">
      <div className="flex justify-between items-center mb-4 text-[#393939]">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
          Articles similaires
        </h1>
        <h2 className="underline uppercase">Voir toute la collection</h2>
      </div>

      <div className="relative">
        {/* scroll buttons */}

        {isLeftShow && (
          <button
            onClick={scrollLeft}
            className="z-40 absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#5CD2DD] p-2"
          >
            <IoIosArrowRoundBack className="text-white text-2xl" />
          </button>
        )}
        {isRightShow && (
          <button
            onClick={scrollRight}
            className="absolute z-40 right-0 top-1/2 transform -translate-y-1/2 bg-[#5CD2DD] p-2"
          >
            <IoIosArrowRoundForward className="text-white text-2xl" />
          </button>
        )}

        {/* Product container */}
        <div
          ref={containerref}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
          onScroll={handleScroll}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-lg group relative"
            >
              <div className="flex justify-between items-center">
                <button className="relative z-40 top-4 left-4 text-gray-500 text-2xl">
                  <CiHeart />
                  <span
                    className="absolute inset-0 rounded-full bg-red-500 opacity-0 
                    hover:opacity-50 hover:scale-150 
                    transition-transform duration-700 ease-in-out"
                  ></span>
                </button>
                <div className="flex items-center">
                  <span className="uppercase relative z-40 top-4 right-3 bg-gray-100 pr-2 pl-2 text-[10px] rounded">
                    {product.category}
                  </span>
                  <span className="hidden group-hover:block text-gray-500 ml-2 uppercase relative z-50 top-4 right-3 bg-[#FBF9F899] pr-2 pl-2 text-[10px] rounded">
                    {"lot"}
                  </span>
                </div>
              </div>

              <div className="relative p-10 hover:p-8">
                <Image src={product.imageSrc} width={330} height={300} alt="" />
                <div className="absolute mt-2 inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-3 bg-gray-100 items-center justify-between w-full p-1 rounded-lg">
                    <span className="uppercase text-xs">Qté</span>
                    {/* quantity control */}
                    <div className="flex justify-between items-center w-full h-full bg-white rounded-md">
                      <button className="text-gray-600 px-2 font-bold">
                        -
                      </button>
                      <span className="px-2 text-sm font-medium">1</span>
                      <button className="text-gray-600 px-2 font-bold">
                        +
                      </button>
                    </div>
                    <button className="bg-pink-500 w-20 text-white py-2 px-4 rounded-lg shadow">
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-2 p-4 bg-[#FBF9F899]">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-medium">{product.title}</h1>
                  <h1 className="text-lg font-bold">{product.price}</h1>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <h1 className="text-base">
                    {product.description}.{" "}
                    <span className="text-[10px]">{product.ref}</span>
                  </h1>
                  <span className="text-xs bg-[#F1F4F6] p-0.5 rounded-xl pl-2 pr-2">
                    {product.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
