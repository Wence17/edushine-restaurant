"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineMail,
  HiOutlinePaperAirplane,
} from "react-icons/hi";

const contactInfo = [
  {
    icon: HiOutlineLocationMarker,
    title: "Visit Us",
    content: "Plot 106 Aminu Kano Crescent, Wuse II, Abuja, Nigeria",
    href: "https://maps.google.com/?q=Plot+106+Aminu+Kano+Crescent+Wuse+II+Abuja",
  },
  {
    icon: HiOutlinePhone,
    title: "Call Us",
    content: "+234 906 756 5256",
    href: "tel:+2349067565256",
  },
  {
    icon: HiOutlineMail,
    title: "Email Us",
    content: "hello@edushinefastfood.com",
    href: "mailto:hello@edushinefastfood.com",
  },
  {
    icon: HiOutlineClock,
    title: "Opening Hours",
    content: "Mon - Sun: 8:00 AM - 10:00 PM",
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 w-full"
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
            Contact Us
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#1A237E] sm:text-4xl lg:text-5xl">
            Order, Visit, or Send Us a Message
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you're craving a quick lunch, planning a family meal, or
            making an inquiry, we’re here to serve you.
          </p>
        </motion.div>

        {/* Google Map */}
        <div className="mt-14 overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-[#1A237E]/5">
          <iframe
            title="Edushine Fast Food Location"
            src="https://www.google.com/maps?q=Plot+106+Aminu+Kano+Crescent+Wuse+II+Abuja&output=embed"
            className="h-105 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-3xl bg-[#FDFCF0] p-6 ring-1 ring-[#1A237E]/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFC107]/10 text-[#1A237E]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-[#1A237E]">
                        {item.title}
                      </h3>

                      {item.href !== "#" ? (
                        <Link
                          href={item.href}
                          target={
                            item.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-1 block leading-7 text-slate-600 hover:text-[#B71C1C]"
                        >
                          {item.content}
                        </Link>
                      ) : (
                        <p className="mt-1 leading-7 text-slate-600">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-[#1A237E]/5 sm:p-10">
              <h3 className="text-2xl font-bold text-[#1A237E]">
                Send Us a Message
              </h3>

              <p className="mt-2 text-slate-600">
                We’ll respond as quickly as possible.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="h-12 rounded-xl border-slate-200"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="h-12 rounded-xl border-slate-200"
                  />
                </div>

                <Input
                  type="text"
                  placeholder="Subject"
                  className="h-12 rounded-xl border-slate-200"
                />

                <Textarea
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="rounded-xl border-slate-200"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-[#FFC107] font-semibold text-[#1A237E] shadow-lg shadow-[#FFC107]/20 hover:bg-[#FFD54F]! sm:w-auto"
                >
                  <HiOutlinePaperAirplane className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}