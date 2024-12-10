// import the AOS library and its CSS for animations (reusable)

import AOS from "aos";
import "aos/dist/aos.css";

const initializeAOS = () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
};

export default initializeAOS;
