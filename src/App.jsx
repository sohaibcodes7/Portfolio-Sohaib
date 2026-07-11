import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Tech />
        {/* <Experience /> */}
        <Works />
        {/* <Feedbacks /> */}

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;