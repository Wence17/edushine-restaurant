"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiOutlinePhone, HiOutlineShoppingBag } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#1A237E]/10 bg-white/95 backdrop-blur-xl shadow-[0_-8px_30px_rgba(15,23,42,0.08)] md:hidden">
    {/* <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#1A237E]/10 bg-white/95 backdrop-blur-xl shadow-[0_-8px_30px_rgba(15,23,42,0.08)] md:hidden"> */}
      {/* Top Accent Line */}
      <div className="h-0.5 w-full bg-linear-to-r from-[#FFC107] via-[#FFD54F] to-[#FFC107]" />

      <div className="grid grid-cols-3 gap-2 p-3">
        {/* Call */}
        <Button
          asChild
          variant="ghost"
          className="h-12 rounded-2xl border border-[#1A237E]/10 bg-[#FDFCF0] text-[#1A237E] hover:bg-[#FFC107]/10! hover:text-[#1A237E]!"
        >
          <Link href="tel:+2349067565256">
            <HiOutlinePhone className="mr-2 h-5 w-5 text-[#1A237E]" />
            <span className="text-sm font-semibold">Call</span>
          </Link>
        </Button>

        {/* WhatsApp */}
        <Button
          asChild
          className="h-12 rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:bg-[#22c55e]!"
        >
          <Link
            href="https://wa.me/2349067565256?text=Hello%20Edushine%20Fast%20Food!%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-0.5 sm:mr-2 h-5 w-5" />
            <span className="text-sm font-semibold">WhatsApp</span>
          </Link>
        </Button>

        {/* Order */}
        <Button
          asChild
          className="h-12 rounded-2xl bg-[#FFC107] text-[#1A237E] shadow-lg shadow-[#FFC107]/25 hover:bg-[#FFD54F]!"
        >
          <Link href="#menu">
            <HiOutlineShoppingBag className="mr-2 h-5 w-5" />
            <span className="text-sm font-semibold">Order</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}