"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiStar, HiOutlineArrowRight, HiOutlineChatAlt2 } from "react-icons/hi";

const testimonials = [
  {
    name: "Chinedu A.",
    role: "Business Professional",
    image: "/assets/images/testimonials/testimonials-1.png",
    quote:
      "The House-Special Fried Rice is consistently delicious. Fresh ingredients, generous portions, and fast delivery every time.",
  },
  {
    name: "Amina S.",
    role: "Wuse II Resident",
    image: "/assets/images/testimonials/testimonials-2.png",
    quote:
      "Edushine Fast Food has become my go-to spot for lunch. Their Chapman and Caesar Salad are absolutely perfect.",
  },
  {
    name: "Tolu O.",
    role: "Corporate Client",
    image: "/assets/images/testimonials/testimonials-3.png",
    quote:
      "Excellent customer service and reliable office lunch delivery. Highly recommended for busy professionals in Abuja.",
  },
  {
    name: "Fatima K.",
    role: "Food Enthusiast",
    image: "/assets/images/testimonials/testimonials-4.png",
    quote:
      "Fresh, tasty, and affordable. The delivery was quick and the packaging was excellent.",
  },
  {
    name: "Emeka O.",
    role: "Entrepreneur",
    image: "/assets/images/testimonials/testimonials-1.png",
    quote:
      "One of the best fast food spots in Abuja. Great customer service and amazing flavors.",
  },
  {
    name: "Sarah M.",
    role: "Health-Conscious Customer",
    image: "/assets/images/testimonials/testimonials-2.png",
    quote:
      "I love their Caesar Salad and fresh juices. Everything tastes fresh and wholesome.",
  },
];

const stats = [
  { value: "4.8★", label: "Average Rating" },
  { value: "1,000+", label: "Orders Served" },
  { value: "500+", label: "Happy Customers" },
];

export default function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#FDFCF0] pt-20 w-full"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#FFC107]/10 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-[#1A237E]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#FFC107]/10 px-4 py-2 text-sm font-semibold text-[#1A237E]">
            Customer Reviews
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#1A237E] sm:text-4xl lg:text-5xl">
            Loved by Food Lovers in Abuja
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our customers keep coming back for fresh meals, excellent service,
            and consistently delicious food.
          </p>
        </motion.div>

        {/* Stats */}
        {/* <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-[#1A237E]/5"
            >
              <div className="text-3xl font-bold text-[#B71C1C]">
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div> */}

        {/* Testimonial Cards */}
        {/* Carousel */}
        <div className="mt-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-6 px-2">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-6 pb-20 pt-4 basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#1A237E]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1A237E]/10"
                  >
                    <div>
                      {/* Quote Icon */}
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFC107]/10">
                        <HiOutlineChatAlt2 className="h-6 w-6 text-[#1A237E]" />
                      </div>

                      {/* Stars */}
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <HiStar key={i} className="h-5 w-5 text-[#FFC107]" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-base leading-8 text-slate-600">
                        “{testimonial.quote}”
                      </blockquote>

                      {/* Customer */}
                      <div className="mt-6 flex items-center gap-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#1A237E]">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-slate-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="hidden -left-10 lg:flex border-[#1A237E]/10 text-[#1A237E]" />
            <CarouselNext className="hidden -right-10 lg:flex border-[#1A237E]/10 text-[#1A237E]" />
          </Carousel>
        </div>

        {/* CTA
        <div className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="group rounded-full bg-[#FFC107] px-8 font-semibold text-[#1A237E] shadow-lg shadow-[#FFC107]/20 hover:bg-[#FFD54F]!"
          >
            <Link
              href="https://www.google.com/search?q=Edushine+Fast+Food+Abuja"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More Reviews
              <HiOutlineArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <p className="mt-4 text-sm text-slate-500">
            See what customers are saying about Edushine Fast Food.
          </p>
        </div> */}
      </div>
    </section>
  );
}
