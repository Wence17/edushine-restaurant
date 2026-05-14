"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HiOutlineArrowRight,
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineLocationMarker,
  HiOutlineHeart,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

const features = [
  {
    icon: HiOutlineClock,
    title: "Freshly Prepared Daily",
    description:
      "Every meal is cooked to order using quality ingredients for the best taste and freshness.",
  },
  {
    icon: HiOutlineTruck,
    title: "Fast Abuja Delivery",
    description:
      "Enjoy quick and reliable delivery to your home, office, or event anywhere in Abuja.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Hygienic Kitchen",
    description:
      "Our meals are prepared in a clean, well-maintained kitchen with strict food safety standards.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Affordable Prices",
    description:
      "Delicious meals and drinks at prices that offer excellent value for individuals and families.",
  },
  {
    icon: HiOutlineHeart,
    title: "Customer Favorites",
    description:
      "From House-Special Fried Rice to Chapman, our menu is packed with dishes customers love.",
  },
  {
    icon: HiOutlineLocationMarker,
    title: "Prime Wuse II Location",
    description:
      "Conveniently located at Plot 106 Aminu Kano Crescent, ideal for office lunches and quick stops.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#FDFCF0] py-20 sm:py-24 lg:py-28 w-full"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-[#FFC107]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#1A237E]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Featured Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="h-full rounded-[2rem] bg-[#1A237E] p-8 text-white shadow-2xl shadow-[#1A237E]/20">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#FFC107]">
                Why Choose Us
              </span>

              <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
                Why Abuja Loves Edushine Fast Food
              </h2>

              <p className="mt-6 leading-8 text-white/80">
                We combine fresh ingredients, hygienic preparation, affordable
                prices, and fast service to deliver meals that are as convenient
                as they are delicious.
              </p>

              <p className="mt-4 leading-8 text-white/80">
                Whether you need a quick office lunch, family dinner, or
                same-day delivery, Edushine Fast Food is your trusted choice in
                Wuse II, Abuja.
              </p>

              <Button
                asChild
                className="mt-8 h-12 rounded-full bg-[#FFC107] px-6 font-semibold text-[#1A237E] hover:bg-[#FFD54F]!"
              >
                <Link href="#menu">
                  Explore Our Menu
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#1A237E]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1A237E]/10"
                  >
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC107]/10 text-[#1A237E] transition-colors group-hover:bg-[#FFC107]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-xl font-bold text-[#1A237E]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}