"use client";

import Image from "next/image";
import { images } from "../utils/products"; //this array contian the image data
import { useEffect } from "react";
import initializeAOS from "../utils/aosConfig";

export default function Productcard() {
  useEffect(() => {
    initializeAOS(); //aos initialisation
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-md font-semibold mb-4">
        Home <span className="text-gray-400">. Art de la table</span>
      </h1>

      <div className="flex flex-wrap gap-10">
        <div className="flex gap-4">
          <div className="flex justify-evenly flex-col gap-4">
            {images.map((image, ind) => (
              <div key={ind} className="shadow-lg p-2" data-aos="fade-up">
                <Image src={image} width={80} height={80} alt="" />
              </div>
            ))}
          </div>
          <div className="shadow-lg p-4 rounded-lg" data-aos="zoom-in">
            <Image
              src="https://s3-alpha-sig.figma.com/img/a697/3509/f0a6397c22547c66edb2d8aa2737a300?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAgvBKhptyNn2X9wgoUT-2AImt5tPN~DqXmg9ivpm7afXoMGoMccm87TaTIdmy3DVZ2kt62od2NsKxgv8d2xJWMexc2CldAnLMpI2uEHIYxZNe~DKesHflJm7g37IrCHmdXH3P-bVYeL-xK5tTUfbx2RO5Tw4NbRRtpJoMm-6ElwvG98gmIwH-4ptk9z-znzlHf9hyS9jqtKnJ6XdszWzlOVnz~YKnG8a2I1C6uZlt8m3~LHTzwx8Oj7mugjPlLqU8ZyHuGXsDWCKl7jrzeaj9Bl9sdr4ZnVbJgPI1zL~cQlce7eM0BSjgegYhzuKS8boN8eGR5vwL64WcQYlqHUNw__"
              width={500}
              height={500}
              alt=""
            />{" "}
            {/*main product image*/}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex-col justify-between h-[500px]">
            <div>
              <h1 className="text-3xl font-bold">
                Cheese - appareil à raclette 1/2 roue
              </h1>
              <h1 className="font-semibold mt-3 text-2xl text-gray-800 pb-3">
                39,50€
                <span className="text-sm font-semibold text-gray-500 mb-4">
                  {" "}
                  /pièce
                </span>
              </h1>
              <hr />
            </div>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex gap-10 w-full pb-3 pt-3">
                <div className="flex gap-2">
                  <Image
                    src="/assets/images/scale.png"
                    width={20}
                    height={8}
                    className="text-gray-600"
                    alt=""
                  />{" "}
                  {/*scale icon png*/}
                  <div className="relative">
                    <p className="text-base font-semibold">
                      20
                      <span className="absolute top-0 left-4 text-xs text-gray-500 transform translate-x-1 -translate-y-1">
                        cm
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/assets/images/radius.png"
                    width={23}
                    height={18}
                    alt=""
                  />{" "}
                  {/*radius icon pmg*/}
                  <div className="relative">
                    <p className="text-base font-semibold">
                      50
                      <span className="absolute top-0 left-4 text-xs text-gray-500 transform translate-x-1 -translate-y-1">
                        cm
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <h1 className="uppercase text-xs">réf : vabgn5</h1>
              </div>
            </div>
            <hr />
            <div className="text-gray-700 text-sm mt-4">
              <p>
                Location appareil à raclette - Raclette traditionnelle 1/2 roue
              </p>
              <p>Réglable en hauteur</p>
              <p>Appareil à raclette professionnel</p>
              <p>Boîtier de chauffe horizontal réglable en hauteur</p>
            </div>
            <div className="mt-6 text-gray-700">
              <p>200V</p>
              <p>900W</p>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex mt-4 items-center gap-10 outline outline-1 outline-gray-400 rounded-md p-1">
              <button className="text-2xl p-1">-</button>
              <h1 className="text-xl font-bold flex-shrink-0">1</h1>
              <button className="text-2xl p-1">+</button>
            </div>
            <div className="bg-[#5CD2DD] mt-4 w-full text-center rounded-md flex items-center justify-center">
              <button className="px-4 py-2 text-white uppercase">
                ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
