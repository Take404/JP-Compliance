import GrainOverlay from "@/components/GrainOverlay";
import CursorGlow from "@/components/CursorGlow";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ValueSection from "@/components/ValueSection";

export default function Home() {
  return (
    <main>
      <GrainOverlay />
      <CursorGlow />
      <HeroSection />
      <WhyUsSection />
      <ValueSection />
    </main>
  );
}
