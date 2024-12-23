//navbar component

import Image from "next/image"; // importing Next js optimized Image component for better performance
import { CiSearch, CiHeart } from "react-icons/ci";
import { LiaLightbulbSolid } from "react-icons/lia";
import { GrCart } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="bg-white mt-4">
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/images/logo.png"
            width={100}
            height={70}
            alt=""
            className=""
          />
          <div className="hidden md:flex items-center border rounded-lg px-2 py-1 space-x-2 bg-gray-200">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="outline-none p-1 text-sm border-none md:w-[300px] lg:w-[550px] bg-gray-200 focus:outline-none"
            />
            <CiSearch className="text-lg" />
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-8">
          <div className="flex items-center space-x-2">
            <LiaLightbulbSolid className="text-2xl md:text-xl" />
            <h2 className="hidden lg:block text-sm font-medium">
              Inspirations
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <CiHeart className="text-2xl md:text-xl" />
            <div className="flex gap-2 text-sm font-medium">
              <h2 className="hidden lg:block">Mes favoris</h2>
              <h2 className="text-gray-500 text-[11px] pl-1 pr-1 bg-gray-300 rounded-full">
                24
              </h2>
            </div>
          </div>

          <div>
            <button className="flex items-center space-x-2 bg-[#0093D0] text-white p-2 rounded-lg">
              <GrCart className="text-lg" />
              <span className="hidden md:block sm:text-sm font-medium">
                Panier
              </span>
            </button>
          </div>

          <div className="flex gap-2 items-center space-x-1 text-sm font-medium">
            <div>
              <div className="p-4 sm:p-5 bg-slate-200 rounded-full"></div>
            </div>
            <div>
              <h1>FR</h1>
              <RiArrowDropDownLine className="text-lg" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
