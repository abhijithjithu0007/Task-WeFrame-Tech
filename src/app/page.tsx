import Banner from "./components/banner";
import Contact from "./components/contact";
import Description from "./components/description";
import { Intrestroducts } from "./components/intrest-products";
import Itemsrow from "./components/items-row";
import Navbar from "./components/nav-bar";
import Productcard from "./components/product-card";
import Relatedproducts from "./components/related-products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Itemsrow />
      <Productcard />
      <Description />
      <Relatedproducts />
      <Intrestroducts />
      <Banner />
      <Contact />
    </>
  );
}
