//contact page

import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="p-5 md:p-10 flex flex-col lg:flex-row gap-5 items-center justify-center">
      <div className="md:w-1/2">
        <div className="rounded-lg md:rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/contactimg.jpeg"
            alt="register"
            width={0}
            height={0}
            layout="responsive"
            className="w-full md:h-auto"
          />
        </div>
      </div>
      <div className="bg-[#FFF3F9] p-7 rounded-lg md:rounded-3xl md:w-1/2">
        <h2 className="text-[25px] md:text-4xl text-gray-600">
          S'inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
        </h2>
        <p className="mt-2 text-sm md:text-[14px] text-[#BDA2B0]">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didnt. Yet busy any meeting shark
          light marginalised 4-blocker message. Productize corporate nail caught
          synergy highlights lunch. Company another pushback items dear or any.
        </p>
        <div className="mt-4 md:mt-8 flex flex-col md:flex-row items-center gap-3">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="john@deo.com"
              className="w-full px-2 py-3 md:py-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-auto">
            <button
              className="uppercase w-full bg-[#5CD2DD] text-white py-3 md:py-3 px-5 
             flex items-center justify-center rounded-md
             hover:bg-gradient-to-r hover:from-[#5CD2DD] hover:to-[#3BA1B0]
             hover:scale-105 hover:shadow-lg hover:shadow-[#5CD2DD]/50
             transition-all duration-300 ease-in-out"
            >
              s'inscrire <IoArrowForwardSharp className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
