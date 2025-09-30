import Services from "./components/Services";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Why from "./components/Why";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-[url('/bg.jpg')]  bg-cover bg-center bg-no-repeat">
        <Packages />
        <Services />
        <Why />
        <Stats />
       <Footer/>
      </div>
    </div>
  );
}
