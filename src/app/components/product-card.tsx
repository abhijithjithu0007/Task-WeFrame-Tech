import Image from "next/image";
import { FaRuler } from "react-icons/fa";

export default function Productcard() {
  const images = new Array(4).fill(
    "https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMiUHuZpoRfvCz7IdNj2nYMIEe9tvEPdyyCHF0DOBg8L0OJ0nW5qGr18a6bumiC9KC5NNOc7sPBq2jVeZg87n4UMD7tLNWF5h2a~fDsdjH8EqSlkDaU9YHIbWQtbKQgxbEUJGWIeLkwH2X6VitjFrDWno~7ErXq82GFbCLacNn-W4G439x0Nx318gI1~lWTerCrW~Yq1NrBe3OdSB~8MgZaevo2ZWSsz3Ceb2mmjPctR2710Cv~8XM8ye-cN-~6HqDhBdRsI2ctsjWp7aRm9MvBW0MTsjsMhihSn~DX5Cz4f-wnHu3RJOQjpH6WGyytDlXvAbNju85hZG83l4VpnCQ__"
  );

  return (
    <div className="p-8">
      {/* Header */}
      <h1 className="text-xl font-bold mb-4">
        Home . <span className="text-gray-500">Art de la table</span>
      </h1>

      {/* Main Content */}
      <div className="flex flex-wrap gap-6">
        {/* Image Section */}
        <div className="flex gap-4">
          {/* Left: Small Images */}
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
          {/* Right: Large Image */}
          <div className="shadow-lg p-4">
            <Image
              src="https://s3-alpha-sig.figma.com/img/a697/3509/f0a6397c22547c66edb2d8aa2737a300?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAgvBKhptyNn2X9wgoUT-2AImt5tPN~DqXmg9ivpm7afXoMGoMccm87TaTIdmy3DVZ2kt62od2NsKxgv8d2xJWMexc2CldAnLMpI2uEHIYxZNe~DKesHflJm7g37IrCHmdXH3P-bVYeL-xK5tTUfbx2RO5Tw4NbRRtpJoMm-6ElwvG98gmIwH-4ptk9z-znzlHf9hyS9jqtKnJ6XdszWzlOVnz~YKnG8a2I1C6uZlt8m3~LHTzwx8Oj7mugjPlLqU8ZyHuGXsDWCKl7jrzeaj9Bl9sdr4ZnVbJgPI1zL~cQlce7eM0BSjgegYhzuKS8boN8eGR5vwL64WcQYlqHUNw__"
              width={500}
              height={500}
              alt="Large Product Image"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-bold">
              Cheese - Appareil à raclette 1/2 roue
            </h1>
            <h1 className="text-2xl text-gray-800">
              39,50{" "}
              <span className="text-xl text-gray-500 font-light">/pièce</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <FaRuler className="text-gray-600" />
            <div>
              <p>
                20 <span className="text-gray-500">cm</span>
              </p>
              <svg
                width="20"
                height="20"
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
              <p>
                50 <span className="text-gray-500">cm</span>
              </p>
            </div>
          </div>
          <div className="text-gray-700 space-y-2">
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
      </div>
    </div>
  );
}
