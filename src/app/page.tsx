import GrainOverlay from "@/components/GrainOverlay";
import CursorGlow from "@/components/CursorGlow";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ValueSection from "@/components/ValueSection";
import TrackSection from "@/components/TrackSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <main>
      <GrainOverlay />
      <CursorGlow />
      <HeroSection />
      <WhyUsSection />
      <ValueSection />
      <TrackSection />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </main>
  );
}
