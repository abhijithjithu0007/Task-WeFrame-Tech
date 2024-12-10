//intrested product component

"use client";

import React from "react";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { products2 } from "../utils/products"; //product data for map

export const Intrestroducts = () => {
  return (
    <div className="p-7 bg-[#FBF9F899]">
      <div className="flex justify-between items-center mb-4 text-[#393939]">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
          Ces produits pourraient vous intéresser
        </h1>
        <h2 className="underline uppercase">Voir toute la collection</h2>
      </div>

      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-4">
          {products2.map((product, index) => (
            <div
              key={index}
              className="w-full bg-white  rounded-lg group relative"
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
                  <span className="uppercase relative z-40 top-4 right-3 bg-gray-100 pr-2 pl-2 text-[6px] lg:text-[10px] rounded">
                    {product.category}
                  </span>
                  <span className="hidden group-hover:block text-gray-500 ml-2 uppercase relative z-40 top-4 right-3 bg-[#FBF9F899] pr-2 pl-2 text-[6px] lg:text-[10px] rounded">
                    {"lot"}
                  </span>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={product.imageSrc}
                  width={0}
                  height={0}
                  layout="responsive"
                  alt=""
                  className="p-5 lg:p-16 w-full h-[200px] group-hover:p-3 lg:group-hover:p-14"
                />

                <div className="absolute mt-2 inset-0 flex flex-col justify-end p-0 md:p-2 lg:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-3 bg-gray-100 items-center justify-between w-full  p-1 rounded-lg">
                    <span className="uppercase text-[10px] md:text-[12px] lg:text-xs">
                      Qté
                    </span>
                    <div className="flex justify-between items-center w-full h-full bg-white rounded-md">
                      <button className="text-gray-600 px-1 lg:px-2  font-bold">
                        -
                      </button>
                      <span className="px-2 text-xs md:text-sm font-medium">
                        1
                      </span>
                      <button className="text-gray-600 px-1 lg:px-2 font-bold">
                        +
                      </button>
                    </div>
                    <button className="bg-pink-500 text-xs md:text-sm text-white p-[3px]  md:py-2 md:px-4 rounded-lg shadow">
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
