"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  HiOutlineArrowRight,
  HiOutlinePhotograph,
  HiOutlineEye,
} from "react-icons/hi";

const galleryImages = [
  {
    src: "/assets/images/gallery/gallery-1.jpg",
    alt: "House-Special Fried Rice served at Edushine Fast Food",
    title: "House-Special Fried Rice",
    category: "Signature Dish",
  },
  {
    src: "/assets/images/gallery/gallery-2.jpg",
    alt: "Refreshing Chapman drink",
    title: "Refreshing Chapman",
    category: "Beverage",
  },
  {
    src: "/assets/images/gallery/gallery-3.jpg",
    alt: "Noodles Special with vegetables and protein",
    title: "Noodles Special",
    category: "House Special",
  },
  {
    src: "/assets/images/gallery/gallery-4.jpg",
    alt: "Caesar Salad prepared fresh",
    title: "Caesar Salad",
    category: "Healthy Choice",
  },
  {
    src: "/assets/images/gallery/gallery-5.jpg",
    alt: "Fresh fruit juice selection",
    title: "Fresh Juices",
    category: "Beverages",
  },
  {
    src: "/assets/images/gallery/gallery-6.jpg",
    alt: "Golden fried plantain",
    title: "Fried Plantain",
    category: "Side Dish",
  },
  {
    src: "/assets/images/gallery/gallery-7.jpg",
    alt: "Interior of Edushine Fast Food in Wuse II",
    title: "Welcoming Ambience",
    category: "Restaurant",
  },
  {
    src: "/assets/images/gallery/gallery-8.jpg",
    alt: "Chef preparing meals in the kitchen",
    title: "Freshly Prepared",
    category: "Kitchen",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FDFCF0] py-20 sm:py-24 lg:py-28 w-full"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#FFC107]/10 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-[#1A237E]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#FFC107]/10 px-4 py-2 text-sm font-semibold text-[#1A237E]">
            Gallery
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#1A237E] sm:text-4xl lg:text-5xl">
            A Taste of Edushine
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore our signature dishes, refreshing drinks, and the warm
            atmosphere that keeps customers coming back.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {galleryImages.map((image) => (
                <CarouselItem
                  key={image.src}
                  className="pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#1A237E]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1A237E]/10">
                    <div className="relative aspect-4/5 overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#1A237E]/85 via-[#1A237E]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* View Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#1A237E] shadow-lg">
                          <HiOutlineEye className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <span className="inline-block rounded-full bg-[#FFC107] px-3 py-1 text-xs font-semibold text-[#1A237E]">
                          {image.category}
                        </span>

                        <h3 className="mt-3 text-lg font-bold text-white">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="hidden -left-6 border-[#1A237E]/10 text-[#1A237E] lg:flex" />
            <CarouselNext className="hidden -right-6 border-[#1A237E]/10 text-[#1A237E] lg:flex" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="group rounded-full bg-[#FFC107] px-8 font-semibold text-[#1A237E] shadow-lg shadow-[#FFC107]/20 hover:bg-[#FFD54F]!"
          >
            <Link href="#menu">
              <HiOutlinePhotograph className="mr-2 h-5 w-5" />
              Explore Our Menu
              <HiOutlineArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <p className="mt-4 text-sm text-slate-500">
            Freshly prepared meals, beautifully served every day.
          </p>
        </div>
      </div>
    </section>
  );
}