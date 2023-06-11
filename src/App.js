import './App.css';
import background from "./background.png";
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import NetworkSection from './components/NetworkSection';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <main style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',backgroundSize:'cover', backgroundPosition: 'center'}}>
      
    <Header />
      <section className="App px-5 md:px-20 py-2" >
      {/* ==== Hero Section=== */}
      <HeroSection className="z-1" />
      {/* ==== Product Section === */}
      <ProductSection className="z-1"/>
      {/* ==== Available Network Section === */}
      <NetworkSection className="z-1" />
      {/* === about section === */}
      <AboutSection className="z-1" />

      <FaqSection className="z-1"/>

      <Footer className="z-1" />
      </section>
    </main>
  );
}

export default App;
