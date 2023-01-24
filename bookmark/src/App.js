import { Download } from "./sections/Download";
import { Hero } from "./sections/Hero";
import { Feature } from "./sections/Feature";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";
import { FAQ } from "./sections/FAQ";
import logo from "./images/logo-bookmark-footer.svg";
import { useState } from "react";
import { Overlay } from "./sections/Overlay";

function App() {
  const [menuMode, setMenuMode] = useState("off");

  return (
    <div className="relative">
      <Overlay menuMode={menuMode} />
      <Hero mode={menuMode} setMode={setMenuMode} />
      <Feature />
      <Download />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
