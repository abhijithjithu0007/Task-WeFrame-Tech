import Image from "next/image";
import { FaRuler } from "react-icons/fa";

export default function Productcard() {
  const images = new Array(4).fill(
    "https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMiUHuZpoRfvCz7IdNj2nYMIEe9tvEPdyyCHF0DOBg8L0OJ0nW5qGr18a6bumiC9KC5NNOc7sPBq2jVeZg87n4UMD7tLNWF5h2a~fDsdjH8EqSlkDaU9YHIbWQtbKQgxbEUJGWIeLkwH2X6VitjFrDWno~7ErXq82GFbCLacNn-W4G439x0Nx318gI1~lWTerCrW~Yq1NrBe3OdSB~8MgZaevo2ZWSsz3Ceb2mmjPctR2710Cv~8XM8ye-cN-~6HqDhBdRsI2ctsjWp7aRm9MvBW0MTsjsMhihSn~DX5Cz4f-wnHu3RJOQjpH6WGyytDlXvAbNju85hZG83l4VpnCQ__"
  );

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">
        Home . <span className="text-gray-500">Art de la table</span>
      </h1>

      <div className="flex flex-wrap gap-10">
        <div className="flex gap-4">
          <div className="flex justify-evenly flex-col gap-4">
            {images.map((image, index) => (
              <div key={index} className="shadow-lg p-2">
                <Image
                  src={image}
                  width={80}
                  height={80}
                  alt={`Small Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="shadow-lg p-4 rounded-lg">
            <Image
              src="https://s3-alpha-sig.figma.com/img/a697/3509/f0a6397c22547c66edb2d8aa2737a300?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAgvBKhptyNn2X9wgoUT-2AImt5tPN~DqXmg9ivpm7afXoMGoMccm87TaTIdmy3DVZ2kt62od2NsKxgv8d2xJWMexc2CldAnLMpI2uEHIYxZNe~DKesHflJm7g37IrCHmdXH3P-bVYeL-xK5tTUfbx2RO5Tw4NbRRtpJoMm-6ElwvG98gmIwH-4ptk9z-znzlHf9hyS9jqtKnJ6XdszWzlOVnz~YKnG8a2I1C6uZlt8m3~LHTzwx8Oj7mugjPlLqU8ZyHuGXsDWCKl7jrzeaj9Bl9sdr4ZnVbJgPI1zL~cQlce7eM0BSjgegYhzuKS8boN8eGR5vwL64WcQYlqHUNw__"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex-col justify-end">
            <div>
              <h1 className="text-3xl font-bold">
                Cheese - appareil à raclette 1/2 roue
              </h1>
              <h1 className="font-semibold mt-3 text-2xl text-gray-800 border-b-2 pb-3">
                39,50€
                <span className="text-sm font-semibold text-gray-500 mb-4">
                  {" "}
                  /pièce
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex gap-10 border-b-2 w-full pb-3">
                <div className="flex gap-2">
                  <FaRuler className="text-gray-600 text-2xl" />
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
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="black"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="85"
                      y1="15"
                      x2="15"
                      y2="85"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
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
            </div>
            <div className="text-gray-700 text-sm">
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
            <div className="flex items-center gap-10 outline outline-1 outline-gray-400 rounded-md p-1">
              <button className="text-2xl p-1">-</button>
              <h1 className="text-xl font-bold flex-shrink-0">1</h1>
              <button className="text-2xl p-1">+</button>
            </div>

            <div className="bg-[#5CD2DD] w-full text-center rounded-md flex items-center justify-center">
              <button className="px-4 py-2">ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
