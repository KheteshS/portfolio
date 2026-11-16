import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import MotionEffects from "./components/MotionEffects";

const App = () => (
  <>
    <a className="skip-link" href="#main">Skip to content</a>
    <NavBar />
    <main id="main" tabIndex={-1}>
      <Hero />
      <ShowcaseSection />
      <ExperienceSection />
      <TechStack />
      <Contact />
    </main>
    <Footer />
    <MotionEffects />
  </>
);

export default App;
