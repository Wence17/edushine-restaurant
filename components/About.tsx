"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HiCheckCircle,
  HiPhone,
  HiOutlineArrowRight,
  HiOutlinePlay,
} from "react-icons/hi";
import aboutpic from "../public/assets/images/about.jpg";
import aboutpic2 from "../public/assets/images/about-2.jpg";

const highlights = [
  "Freshly prepared meals made daily with quality ingredients.",
  "Fast delivery, pickup, takeaway, and dine-in options.",
  "Affordable prices without compromising taste or hygiene.",
  "Conveniently located in Wuse II, Abuja.",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 w-full"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#FFC107]/10 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#1A237E]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-[#FFC107]/10 px-4 py-2 text-sm font-semibold text-[#1A237E]">
            About Edushine Fast Food
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#1A237E] sm:text-4xl lg:text-5xl">
            Where Great Taste Meets Convenience
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Serving freshly prepared Nigerian favorites, healthy salads, and
            refreshing drinks in the heart of Wuse II, Abuja.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-[#1A237E]/10 ring-1 ring-[#1A237E]/5">
              <div className="relative aspect-4/3 overflow-hidden rounded-[1.5rem]">
                <Image
                  src={aboutpic}
                  alt="Fresh meals prepared at Edushine Fast Food"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-3xl bg-[#1A237E] p-6 text-white shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <HiPhone className="h-6 w-6 text-[#FFC107]" />
                </div>

                <div>
                  <p className="text-sm text-white/70">Call to Order</p>
                  <Link
                    href="tel:+2349067565256"
                    className="text-xl font-bold text-[#FFC107]"
                  >
                    +234 906 756 5256
                  </Link>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/80">
                Order for pickup, delivery, or dine-in and enjoy fresh meals
                prepared with care.
              </p>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pt-4"
          >
            {/* Intro Quote */}
            <p className="text-lg italic leading-8 text-slate-600">
              At Edushine Fast Food, we believe that every meal should be fresh,
              flavorful, and easy to enjoy.
            </p>

            {/* Main paragraphs */}
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Conveniently located at Plot 106 Aminu Kano Crescent, Wuse II,
                Abuja, we serve a delicious selection of Nigerian classics,
                chef-inspired house specials, healthy salads, and refreshing
                beverages.
              </p>

              <p>
                Whether you are grabbing a quick office lunch, ordering dinner
                for your family, or stopping by for a refreshing drink, we are
                committed to delivering great taste, excellent service, and
                consistently satisfying meals.
              </p>
            </div>

            {/* Highlights */}
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <HiCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-[#FFC107]" />
                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Secondary Image / Video Card */}
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-white p-3 shadow-lg ring-1 ring-slate-100">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={aboutpic2}
                  alt="Inside Edushine Fast Food"
                  fill
                  className="object-cover"
                />

                {/* Play Button Overlay */}
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center bg-[#1A237E]/20 backdrop-blur-[2px]"
                  aria-label="Watch our story"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">
                    <HiOutlinePlay className="h-8 w-8 text-[#B71C1C]" />
                  </span>
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-[#FFC107] px-8 font-semibold text-[#1A237E] shadow-lg shadow-[#FFC107]/20 hover:bg-[#FFD54F]!"
              >
                <Link href="#menu">
                  Explore Our Menu
                  <HiOutlineArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}