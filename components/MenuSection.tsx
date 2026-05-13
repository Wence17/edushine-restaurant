"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiOutlineArrowRight, HiOutlineShoppingBag } from "react-icons/hi";

type MenuCategory = "house-specials" | "beverages" | "salads" | "sides";

const categories = [
  { id: "house-specials", label: "House Specials" },
  { id: "beverages", label: "Beverages" },
  { id: "salads", label: "Salads" },
  { id: "sides", label: "Sides" },
] as const;

const menuItems: Record<
  MenuCategory,
  {
    name: string;
    description: string;
    price: string;
    image: string;
    featured?: boolean;
  }[]
> = {
  "house-specials": [
    {
      name: "House-Special Fried Rice",
      description:
        "Our signature fried rice prepared with chef-selected ingredients and bold, satisfying flavors.",
      price: "₦4,000",
      image: "/assets/images/menu/House-Special-Fried-Rice.png",
      featured: true,
    },
    {
      name: "Noodles Special",
      description:
        "Savory stir-fried noodles with vegetables and your choice of protein.",
      price: "₦4,000",
      image: "/assets/images/menu/noodles.jpg",
    },
    {
      name: "Casserole Special",
      description:
        "A premium chef-crafted casserole packed with hearty ingredients and rich taste.",
      price: "₦6,000",
      image: "/assets/images/menu/casserole.jpg",
    },
  ],
  beverages: [
    {
      name: "Chapman",
      description: "Nigeria’s favorite refreshing cocktail, perfectly chilled.",
      price: "₦1,500",
      image: "/assets/images/menu/chapman.jpg",
      featured: true,
    },
    {
      name: "Zobo",
      description: "Traditional hibiscus drink with a refreshing local taste.",
      price: "₦1,000",
      image: "/assets/images/menu/zobo.jpg",
    },
    {
      name: "Fresh Juice",
      description: "Freshly made orange, pineapple, or watermelon juice.",
      price: "₦1,000",
      image: "/assets/images/menu/fresh-juice.jpg",
    },
    {
      name: "Coca-Cola Original PET",
      description: "A refreshing classic cola served ice cold in a convenient PET bottle.",
      price: "₦500",
      image: "/assets/images/menu/coca-cola.jpg",
    },
    {
      name: "Pet Sprite",
      description: "An ice-cold, refreshing lemon-lime soda in a convenient PET bottle.",
      price: "₦500",
      image: "/assets/images/menu/sprite.jpg",
    },
    {
      name: "Fanta Pet",
      description: "Enjoy the fruity, refreshing taste of Fanta in a convenient PET bottle.",
      price: "₦500",
      image: "/assets/images/menu/fanta.jpg",
    },
    {
      name: "Water Pet",
      description: "Fresh water served in a PET bottle.",
      price: "₦300",
      image: "/assets/images/menu/water.jpg",
    },
  ],
  salads: [
    {
      name: "Caesar Salad",
      description:
        "Fresh lettuce, crispy croutons, and creamy Caesar dressing.",
      price: "₦3,000",
      image: "/assets/images/menu/caesar-salad.jpg",
      featured: true,
    },
  ],
  sides: [
    {
      name: "Fried Plantain (Dodo)",
      description: "Sweet golden plantains fried to perfection.",
      price: "₦1,500",
      image: "/assets/images/menu/dodo.jpg",
    },
    {
      name: "Moi Moi",
      description: "Steamed bean pudding, soft and flavorful.",
      price: "₦1,000",
      image: "/assets/images/menu/moi-moi.jpg",
    },
    {
      name: "Coleslaw",
      description: "Fresh cabbage and carrot salad.",
      price: "₦1,500",
      image: "/assets/images/menu/coleslaw.jpg",
    },
    {
      name: "Pepper Sauce",
      description: "Spicy pepper sauce to add extra heat.",
      price: "₦800",
      image: "/assets/images/menu/pepper-sauce.jpg",
    },
  ],
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("house-specials");

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-white py-20 w-full"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-[#FFC107]/10 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-[#1A237E]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#FFC107]/10 px-4 py-2 text-sm font-semibold text-[#1A237E]">
            Our Menu
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#1A237E] sm:text-4xl lg:text-5xl">
            Fresh Meals Made to Satisfy
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Discover our chef-crafted specials, refreshing beverages, healthy
            salads, and delicious sides.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#1A237E] text-white shadow-lg"
                    : "bg-[#FDFCF0] text-[#1A237E] hover:bg-[#FFC107]/10!"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Category Title */}
        <div className="mt-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Menu Category
          </p>
          <h3 className="mt-2 font-serif text-3xl font-bold text-[#B71C1C]">
            {
              categories.find((category) => category.id === activeCategory)
                ?.label
            }
          </h3>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
          >
            {menuItems[activeCategory].map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-[#1A237E]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1A237E]/10"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {item.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#B71C1C] px-3 py-1 text-xs font-semibold text-white">
                      Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-lg font-bold text-[#1A237E]">
                      {item.name}
                    </h4>

                    <span className="whitespace-nowrap text-lg font-bold text-[#B71C1C]">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="group rounded-full bg-[#FFC107] px-8 font-semibold text-[#1A237E] shadow-lg shadow-[#FFC107]/20 hover:bg-[#FFD54F]!"
          >
            <Link href="tel:+2349067565256">
              <HiOutlineShoppingBag className="mr-2 h-5 w-5" />
              Call to Order
              <HiOutlineArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <p className="mt-4 text-sm text-slate-500">
            Delivery, pickup, takeaway, and dine-in available.
          </p>
        </div>
      </div>
    </section>
  );
}