import Image from "next/image";

export default function Productcard() {
  const images = new Array(4).fill(
    "https://s3-alpha-sig.figma.com/img/544e/3029/c4c7cd0100e27f205801be034a1511b4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMiUHuZpoRfvCz7IdNj2nYMIEe9tvEPdyyCHF0DOBg8L0OJ0nW5qGr18a6bumiC9KC5NNOc7sPBq2jVeZg87n4UMD7tLNWF5h2a~fDsdjH8EqSlkDaU9YHIbWQtbKQgxbEUJGWIeLkwH2X6VitjFrDWno~7ErXq82GFbCLacNn-W4G439x0Nx318gI1~lWTerCrW~Yq1NrBe3OdSB~8MgZaevo2ZWSsz3Ceb2mmjPctR2710Cv~8XM8ye-cN-~6HqDhBdRsI2ctsjWp7aRm9MvBW0MTsjsMhihSn~DX5Cz4f-wnHu3RJOQjpH6WGyytDlXvAbNju85hZG83l4VpnCQ__"
  );

  return (
    <div>
      <h1>
        Home . <span>Art de la table</span>
      </h1>
      <div>
        <div>
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                width={100}
                height={100}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
