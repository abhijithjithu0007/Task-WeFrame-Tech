"use client";

import React, { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const products = new Array(6).fill({
  category: "art de la table",
  title: "Title",
  price: "0$",
  description: "0,35/Piece . REF : VABGN5",
  quantity: "20 piece",
  imageSrc:
    "https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UObQ1jdNLafDs35tHDWdbnI2uzfOLubZe~VeQQgEzp-RQ9Sqoq-abOSfTxoGqZ3ilk1R8wmsBLVSD5XErWDgw7ydHqMRBfQjRaaVylP68~6VToFE8bTWnA1~rKuus~oKIvAKV4rfOE8C2VgPnbVGIs4~HEywB-OVRuMP1xKQM84QmxP71f49-CxMzchX8m4xhIugKSLQIajXCgCTH1Gn3fvzzdMqzlExIVky0Z4cHz5qfzEZN5pbt2KWVNeW7c3NDPNh0J92t9KRIk1ZSdLduweifPASbqnUSW~vdt-HmnjDmiuVg75wtE5T9VSWJc0H82waaMtDwq1EOkHWoFyn~g__",
});

const RelatedProducts: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -330, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 330, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeftPosition = containerRef.current.scrollLeft;
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;

      setIsLeftVisible(scrollLeftPosition > 0);
      setIsRightVisible(scrollLeftPosition + clientWidth < scrollWidth);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Articles Similaires</h1>
        <h2 className="text-blue-500 cursor-pointer">
          Voir toute la collection
        </h2>
      </div>

      {/* Carousel Navigation */}
      <div className="relative">
        {isLeftVisible && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow hover:bg-gray-400"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
        )}
        {isRightVisible && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow hover:bg-gray-400"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        )}

        {/* Product Carousel */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto pb-4"
          onScroll={handleScroll}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[330px] h-auto p-4 bg-white shadow rounded-lg"
            >
              {/* Category and Icon */}
              <div className="flex justify-between items-center mb-4">
                <button className="p-2 rounded-full bg-gray-100">
                  <CiHeart className="text-gray-500 text-xl" />
                </button>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>

              {/* Product Image */}
              <div className="mb-4">
                <Image
                  src={product.imageSrc}
                  width={330}
                  height={362}
                  alt={`Image ${index + 1}`}
                  className="rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Product Details */}
              <div className="space-y-2">
                {/* Title and Price */}
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-medium">{product.title}</h1>
                  <h1 className="text-lg font-semibold text-green-500">
                    {product.price}
                  </h1>
                </div>
                {/* Description and Quantity */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <h1>{product.description}</h1>
                  <h2>{product.quantity}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
