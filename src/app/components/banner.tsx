//banner component

"use client";
import { useEffect } from "react";
import initializeAOS from "../utils/aosConfig";

export default function Banner() {
  //aos animation
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <div className="flex flex-col justify-center text-center items-center p-10 md:p-16 bg-gradient-to-b from-pink-50 to-white">
      <h1
        className="text-[25px] md:text-[40px] mt-2 text-gray-600"
        data-aos="fade-up"
      >
        On s’occupe de <span className="font-bold text-[#5CD2DD]">tout</span>
      </h1>
      <p
        className="text-sm md:text-[16px] text-[#BDA2B0]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Office ipsum you must be muted. It meeting commitment busy pain.
      </p>
      <div className="flex flex-col gap-10 md:flex md:flex-row md:gap-0 mt-8">
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            className="w-16 h-14"
            src="/assets/images/trolly.png"
            alt="delivery"
          />
          <h1 className="font-medium text-[#393939]">Livraison & Reprise</h1>
          <p className="text-[#9C9C9C]">Selon vos besoins</p>
        </div>
        <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            className="w-16 h-14"
            src="/assets/images/dinner.png"
            alt="cleaning"
          />
          <h1 className="font-medium text-[#393939]">Nettoyage</h1>
          <p className="text-[#9C9C9C]">Selon vos besoins</p>
        </div>
        <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img
            className="w-16 h-14"
            src="/assets/images/cart.png"
            alt="unlimited"
          />
          <h1 className="font-medium text-[#393939]">Commande Illimitée</h1>
          <p className="text-[#9C9C9C]">Tout est possible</p>
        </div>
        <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />
        <div
          className="flex flex-col justify-center items-center gap-2"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <img
            className="w-16 h-14"
            src="/assets/images/delivery.png"
            alt="transport"
          />
          <h1 className="font-medium text-[#393939]">Transport & Enlèvement</h1>
          <p className="text-[#9C9C9C]">Selon vos besoins</p>
        </div>
      </div>
    </div>
  );
}
