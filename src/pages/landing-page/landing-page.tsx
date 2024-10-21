import { FaChevronCircleDown } from "react-icons/fa";
import { HeaderProvider } from "../../component/molecules";
import {HeroSection, Category, WomanSection, BestOutfitSection, SercviceDescription, VideoComponent, FooterAndTestimonial} from "./components/index"

export default function LandingPage() {
  return (
    <div className="w-full">
      <HeaderProvider className="py-9 min-h-[72vh] bg-hero-banner bg-cover bg-center">
        <HeroSection />
        <span className="w-app-w mx-auto flex justify-center items-center text-2xl text-white gap-6">
          Scroll Down{" "}
          <a
            href="#category"
            className="scroll-smooth animate-bounce cursor-pointer"
          >
            <FaChevronCircleDown />
          </a>
        </span>
      </HeaderProvider>
      <Category />
      <WomanSection />
      <BestOutfitSection />
      <SercviceDescription />
      <VideoComponent />
      <FooterAndTestimonial />
    </div>
  );
}
