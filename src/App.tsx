import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import ImpactStats from "./components/ImpactStats";
// import Integration from "./components/Integration";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import IntegrationSection from "./components/Integration";
import RecyclingClaritySection from "./components/RecyclingClaritySection";
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <RecyclingClaritySection />
      <HowItWorks />
      <Features />
      <ImpactStats />
      <IntegrationSection />
      <WhyChooseUs />
      <FAQSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
