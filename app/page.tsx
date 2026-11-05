// import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/HeroSection";
import Work from "@/components/sections/SkillsSection";
import Gallery from "@/components/sections/GallerySection";
import News from "@/components/sections/LatestNewsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import Testimonials from "@/components/sections/Testimonials";
import PortfolioBlogSection from "@/components/sections/PortfolioBlogSection";
import PricingSection from "@/components/sections/PricingSection";
import TemplatesSection from "@/components/sections/TemplatesSection";
import ContactSection from "@/components/sections/ContactSection";
export default function Page() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <SkillsSection />
        <PortfolioBlogSection />
        <Testimonials />
        <PricingSection />
        <TemplatesSection />
        <ContactSection />
      </main>
    </>
  );
}
