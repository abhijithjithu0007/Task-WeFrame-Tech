import React from "react";
import { GoPlus } from "react-icons/go";

export default function Description() {
  return (
    <div className="flex justify-between p-6 gap-6">
      <div className="w-1/2">
        <h1 className="text-xl">Description produit</h1>
        <p className="text-gray-400 text-[13px] mt-3">
          Festi vous propose à la location un/une "Jewel - grand couteau/10pc"
          pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
          votre mariage, une fête d'anniversaire ou du personnel, ce produit a
          fait l'objet d'une sélection rigoureuse par notre équipe. Il est en
          location chez nous sous la référence "VAJGC". Nous sommes à votre
          disposition pour que les événements de nos clients, même en
          last-minute, soient toujours une réussite. Vous pourrez trouver tout
          une série d'autre produit à louer de ce type dans la catégorie "Art de
          la Table".
        </p>
      </div>
      <div className="bg-[#FDFBFB] w-1/2 p-4 rounded-sm">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-md font-semibold uppercase">Livraisons</h1>
          <button className="flex items-center justify-center w-8 h-8 ">
            <GoPlus className="text-gray-700 text-2xl" />
          </button>
        </div>
        <div className="flex justify-between items-center py-2">
          <h1 className="text-md font-semibold uppercase">Questions</h1>
          <button className="flex items-center justify-center w-8 h-8 ">
            <GoPlus className="text-gray-700 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
