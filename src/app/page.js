import Services from "./components/Services";
import Packages from "./components/Packages";
import Why from "./components/Why";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="bg-[url('/bg.jpg')]  bg-cover bg-center bg-no-repeat">
        <Packages />
        <Services />
        <Why />
        <Stats />
      </div>
      <WhatsAppButton/>
       <Footer/>

    </div>
  );
}
