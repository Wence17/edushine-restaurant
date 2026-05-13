"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineClock,
  HiOutlineStar,
} from "react-icons/hi";

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Happy Customers",
    description: "Satisfied diners served with delicious meals and warm hospitality.",
    icon: HiOutlineUsers,
  },
  {
    value: 25,
    suffix: "+",
    label: "Menu Items",
    description: "From house specials to refreshing beverages and tasty sides.",
    icon: HiOutlineSparkles,
  },
  {
    value: 7,
    suffix: " Days",
    label: "Open Weekly",
    description: "Serving fresh meals every day in the heart of Wuse II, Abuja.",
    icon: HiOutlineClock,
  },
  {
    value: 4.8,
    suffix: "/5",
    decimals: 1,
    label: "Customer Rating",
    description: "Loved by customers for quality, taste, and consistent service.",
    icon: HiOutlineStar,
  },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 w-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/stats-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[#1A237E]/90" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#FFC107]/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#FFC107]/5 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#FFC107] backdrop-blur-sm">
            Our Numbers
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Trusted by Food Lovers Across Abuja
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            Every plate we serve is prepared with care, quality ingredients,
            and a commitment to excellent customer service.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC107]/15 text-[#FFC107]">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Number */}
                <div className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </div>

                {/* Label */}
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-blue-100">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}