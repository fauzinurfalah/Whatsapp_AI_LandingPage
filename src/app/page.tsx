import HeroSection from "@/components/hero-section";
import { Header } from "@/components/header";
import SolutionSection from "@/components/solution-section";
import CarakerjaSection from "@/components/carakerja-section";
import KeyFeatures from "@/components/keyfeatures";
import UseCase from "@/components/usecase";
import Faq from "@/components/faq";
import Pricing from "@/components/pricing";

import FinalctaSection from "@/components/finalcta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SolutionSection />
      <CarakerjaSection />
      <KeyFeatures />
      <UseCase />
      <Pricing />
      <Faq />
      <FinalctaSection />
      <Footer />
    </>
  );
}
