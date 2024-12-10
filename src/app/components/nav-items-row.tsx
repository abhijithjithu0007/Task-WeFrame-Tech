"use client";
import { useEffect } from "react";
import initializeAOS from "../utils/aosConfig";
import { items } from "../utils/naviItems"; // importing items array from the utils file contains navigation item data

export default function Itemsrow() {
  useEffect(() => {
    initializeAOS(); //aos animation initialisation
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto scrollbar-hide bg-white">
        <div className="flex justify-between gap-3 p-5">
          {items.map((item, index) => (
            <p
              className="flex-shrink-0 uppercase text-[10px] sm:text-sm text-gray-500 font-semibold"
              key={index}
              data-aos="fade-up" // Animation type: 'fade-up'
              data-aos-delay={index * 100} // delay for animation based on its index
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}
