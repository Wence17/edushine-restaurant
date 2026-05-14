"use client";

import Link from "next/link";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineMail,
} from "react-icons/hi";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2349067565256",
    icon: FaWhatsapp,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: FaTiktok,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative font-sans! overflow-hidden bg-[#1A237E] text-white w-full">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FFC107]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#FFC107]/5 blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#hero" className="inline-block">
              <h2 className="font-sans! text-3xl font-bold tracking-tight">
                Edushine
                <span className="text-[#FFC107]">.</span>
              </h2>
            </Link>

            <p className="mt-4 leading-7 text-blue-100">
              Delicious Nigerian meals, refreshing drinks, and fast, friendly
              service in the heart of Wuse II, Abuja.
            </p>

            <p className="mt-4 text-sm text-blue-200">
              Eat fresh. Eat local. Eat Edushine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-sans! font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 transition-colors hover:text-[#FFC107]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-sans! font-semibold text-white">Contact Info</h3>

            <ul className="mt-5 space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-1 h-5 w-5 shrink-0 text-[#FFC107]" />
                <span>
                  Plot 106 Aminu Kano Crescent,
                  <br />
                  Wuse II, Abuja, Nigeria
                </span>
              </li>

              <li className="flex items-center gap-3">
                <HiOutlinePhone className="h-5 w-5 shrink-0 text-[#FFC107]" />
                <Link
                  href="tel:+2349067565256"
                  className="hover:text-[#FFC107]"
                >
                  +234 906 756 5256
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineMail className="h-5 w-5 shrink-0 text-[#FFC107]" />
                <Link
                  href="mailto:hello@edushinefastfood.com"
                  className="hover:text-[#FFC107]"
                >
                  hello@edushinefastfood.com
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineClock className="h-5 w-5 shrink-0 text-[#FFC107]" />
                <span>Mon – Sun: 8:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-sans! font-semibold text-white">Follow Us</h3>

            <p className="mt-4 leading-7 text-blue-100">
              Stay updated with our latest meals, offers, and customer moments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-[#FFC107] hover:text-[#1A237E]"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mb-16 md:mb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-blue-200 sm:px-6 lg:flex-row lg:px-8">
          <p>
            © {year} Edushine Fast Food. All rights reserved.
          </p>

          <p>
            Designed with{" "}
            <span className="text-[#FFC107]">♥</span> for food lovers in Abuja.
          </p>
        </div>
      </div>
    </footer>
  );
}