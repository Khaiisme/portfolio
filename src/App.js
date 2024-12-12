import About from "./components/about.";
import Header from "./components/header";
import Hero from "./components/hero";
import { useState, useEffect } from "react";
import Skill from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  const [opacity, setOpacity] = useState(1);

  // Handle scroll event to fade out header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 300; // The scroll position where the header starts to fade

      // Calculate the opacity based on the scroll position
      const newOpacity = Math.max(1 - scrollPosition / maxScroll, 0);
      setOpacity(newOpacity);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Header opacity={ opacity } /> {/* Apply calculated opacity */}
      <Hero />
      <About/>
      <Skill/>
      <Work/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;

