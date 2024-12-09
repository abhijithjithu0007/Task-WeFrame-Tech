import React from "react";

export default function Banner() {
  const banners = [
    {
      image: "/assets/images/cart.png",
      title: "Livraison & Reprise",
      title2: "Selon vos besoins",
    },
    {
      image: "/assets/images/dinner.png",
      title: "Nettoyage",
      title2: "Selon vos besoins",
    },
    {
      image: "/assets/images/cart.png",
      title: "Commande Illimitée",
      title2: "Tout est possible",
    },
    {
      image: "/assets/images/delivery.png",
      title: "Transport & Enlèvement",
      title2: "On s’occupe de tout.",
    },
  ];

  return (
    <div>
      <div>
        <h1>On s’occupe de tout</h1>
        <p>Office ipsum you must be muted. It meeting commitment busy pain.</p>
        <div></div>
      </div>
    </div>
  );
}
