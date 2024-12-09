import Banner from "./components/banner";
import Contact from "./components/contact";
import Description from "./components/description";
import { Intrestroducts } from "./components/intrest-products";
import Itemsrow from "./components/nav-items-row";
import Navbar from "./components/nav-bar";
import Productcard from "./components/product-card";
import Relatedproducts from "./components/related-products";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="top-0 z-50  sticky">
        <Navbar />
        <Itemsrow />
      </div>

      <Productcard />
      <Description />
      <Relatedproducts />
      <Intrestroducts />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
}
