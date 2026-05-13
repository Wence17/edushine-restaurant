"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HiOutlineArrowRight,
  HiOutlinePlay,
  HiOutlineStar,
  HiOutlineTruck,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import herofood from "../public/assets/images/hero-img.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#FDFCF0] pt-20 pb-16 sm:pb-20 lg:pb-24 w-full"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Soft radial gradients */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#FFC107]/15 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#1A237E]/10 blur-3xl" />

        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(26,35,126,0.05)_1px,transparent_0)] bg-size-[24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-2 text-sm font-semibold text-[#1A237E]">
              <span className="h-2 w-2 rounded-full bg-[#B71C1C]" />
              Freshly Prepared Daily • Fast Abuja Delivery
            </div>

            {/* Heading */}
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-[#1A237E] sm:text-5xl lg:text-6xl">
              Freshly Made Meals
              <span className="block text-[#B71C1C]">
                Delivered Fast in Abuja
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Enjoy delicious Nigerian favorites, healthy salads, and refreshing
              drinks from{" "}
              <span className="font-semibold text-[#1A237E]">
                Edushine Fast Food
              </span>
              . Prepared fresh daily and delivered hot to your doorstep in Wuse
              II and across Abuja.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-full bg-[#FFC107] px-8 font-semibold text-[#1A237E] shadow-lg shadow-[#FFC107]/25 transition-all ease-in-out duration-300 hover:bg-[#FFD54F]! hover:shadow-xl hover:shadow-[#FFC107]/30"
              >
                <Link href="#menu">
                  Order Now
                  <HiOutlineArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-2 border-[#1A237E]/20 bg-white/80 px-8 font-semibold text-[#1A237E] backdrop-blur-sm hover:border-[#1A237E]! hover:bg-white"
              >
                <Link href="#gallery">
                  <HiOutlinePlay className="mr-2 h-5 w-5 text-[#B71C1C]" />
                  View Gallery
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <HiOutlineStar className="h-6 w-6 text-[#FFC107]" />
                <div>
                  <p className="text-sm font-semibold text-[#1A237E]">
                    Customer Favorite
                  </p>
                  <p className="text-xs text-slate-500">
                    Fresh & Delicious
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <HiOutlineTruck className="h-6 w-6 text-[#B71C1C]" />
                <div>
                  <p className="text-sm font-semibold text-[#1A237E]">
                    Fast Delivery
                  </p>
                  <p className="text-xs text-slate-500">
                    Across Abuja
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <HiOutlineShieldCheck className="h-6 w-6 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-[#1A237E]">
                    Hygienic Kitchen
                  </p>
                  <p className="text-xs text-slate-500">
                    Prepared with Care
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-[#FFC107]/20 to-[#1A237E]/10 blur-2xl" />

              {/* Main image card */}
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-[#1A237E]/10 ring-1 ring-[#1A237E]/5">
                <div className="relative aspect-4/5 overflow-hidden rounded-[1.5rem]">
                  <Image
                    // src="/images/hero-food.jpg"
                    src={herofood}
                    alt="Delicious meals from Edushine Fast Food"
                    fill
                    priority
                    className="object-contain object-center"
                  />
                </div>
              </div>

              {/* Floating price tag */}
              <div className="absolute -left-4 top-8 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100">
                <p className="text-xs font-medium text-slate-500">Starting At</p>
                <p className="text-lg font-bold text-[#B71C1C]">₦500</p>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 bottom-8 rounded-2xl bg-[#1A237E] px-5 py-4 text-white shadow-xl">
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Popular Special
                </p>
                <p className="text-sm font-semibold text-[#FFC107]">
                  Fried Rice • ₦4,000
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}