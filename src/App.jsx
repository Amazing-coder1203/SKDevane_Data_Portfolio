import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Skills from "./sections/Skills.jsx";
import Faq from "./sections/Faq.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Footer from "./sections/Footer.jsx";
import QuantCore from "./components/QuantCore.jsx";
// import Carousel from "./sections/carousel.jsx";

const App = () => {
  return (
    <main className="relative overflow-hidden">
      <QuantCore />
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Faq />
      <Experience />
      <Projects />
      <Footer />
      {/* <Carousel /> */}
    </main>
  );
};

export default App;
