import AboutSection from "@/components/About";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/Testimonial";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
