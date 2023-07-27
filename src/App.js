import Navbar from "./Navbar/Navbar"
import Hero from "./hero/Hero"
import About from "./about/About"
import Extra from "./extra/Extra"
import Features from "./Features/Features"
import RoadMap from "./RoadMap/roadMap"
import Contact from "./contact/contact"
import PartnerSection from "./partner/Partner"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Extra/>
      <Features/>
      <RoadMap/>
      <PartnerSection/>
      <Contact/>
    </div>
  );
}

export default App;
