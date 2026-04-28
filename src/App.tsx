import { ContactSection } from "./components/ContactSection";
import { FeaturedListings } from "./components/FeaturedListings";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseUs } from "./components/WhyChooseUs";

function App() {
  return (
    <div className="min-h-screen bg-background font-body-base text-on-surface antialiased">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturedListings />
        <ServicesSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
