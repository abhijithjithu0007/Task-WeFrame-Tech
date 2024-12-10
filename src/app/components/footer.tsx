//footer component

import { ImTwitter } from "react-icons/im";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="px-4 py-6 md:px-10">
      <div className="flex flex-col items-center gap-10 justify-between md:items-start md:flex-row">
        <div className="flex flex-col gap-10 items-center text-center md:text-left md:flex-row justify-center">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="w-26 md:w-[120px] md:h-16"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-md font-bold text-[#393939]">
              INFOS PRATIQUES
            </h2>
            <p className="text-gray-500 font-medium">
              À propos <br /> Livraisons & Reprises <br /> Mode'emploi <br />
              F.A.Q
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-md font-bold text-[#393939]">LÉGAL</h2>
            <p className="text-gray-500 font-medium">
              Mentions légales <br /> CGU <br /> CGV <br />
              Politique de confidentialité
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-md font-bold text-[#393939]">MON COMPTE</h2>
            <p className="text-gray-500 font-medium">
              Accéder à mon compte <br />
              Ma liste d&apos;envies <br /> Créer un compte <br />
              Mot de passe oublié
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <h2 className="text-md font-bold text-[#393939]">NOUS SUIVRE</h2>
          <div className="flex gap-3">
            <div className="p-2 border rounded-md border-gray-300">
              <ImTwitter className="w-6 h-6" />
            </div>
            <div className="p-2 border rounded-md  border-gray-300">
              <FaInstagram className="w-6 h-6" />
            </div>
            <div className="p-2 border rounded-md  border-gray-300">
              <FaLinkedinIn className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
