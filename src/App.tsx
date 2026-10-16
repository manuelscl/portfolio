import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Resume } from "./components/sections/Resume";
import { Work } from "./components/sections/Work";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Resume />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
