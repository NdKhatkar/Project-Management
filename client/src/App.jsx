import { Toaster } from "react-hot-toast";

import Nev from "./components/nevbar";
import Section1 from "./components/sections/main-section";
import TickerTape from "./components/common/ticker-tape";
import About from "./components/sections/about-section";
import Education from "./components/sections/education";
import WorkSection from "./components/sections/work-section";
import ContactSection from "./components/sections/contact-section";
export default function App() {
  return (
    <div className="bg-black w-full">
      <Toaster position="top-right" reverseOrder={false} />
      <Nev />
      <Section1 />
      <TickerTape />
      <About />
      <Education />
      <WorkSection />
      <ContactSection />
    </div>
  );
}
