import AboutSection from "@/components/About";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/Testimonial";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <MenuSection />
      <TestimonialsSection />
    </div>
  );
}
