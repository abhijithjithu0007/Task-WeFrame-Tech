export default function Itemsrow() {
  const items = [
    "art de la table",
    "mobilier",
    "nappage",
    "matériel de salle",
    "cuisine",
    "barbecue",
    "tente",
    "chauffage",
    "podium - piste de danse",
    "Son et lumière",
    "packs",
    "consommables",
  ];

  return (
    <div>
      <div className="flex justify-between p-5">
        {items.map((item, index) => (
          <p
            className="uppercase text-sm text-gray-500 font-semibold"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
