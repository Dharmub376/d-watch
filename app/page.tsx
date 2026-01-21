import AboutUs from "./components/AboutUs";
import BestSellers from "./components/BestSellers";
import Benefits from "./components/Benefits";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Facts from "./components/Facts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroVideo from "./components/IntroVideo";
import OurProducts from "./components/OurProducts";
import Partners from "./components/Partners";
// import Preloader from "./components/Preloader";
import ScrollingTicker from "./components/ScrollingTicker";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <main>
        <Hero />
        <ScrollingTicker />
        <AboutUs />
        <OurProducts />
        <WhyChooseUs />
        <BestSellers />
        <Benefits />
        <Facts />
        <Testimonials />
        <IntroVideo />
        <Partners />
        <Faq />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
