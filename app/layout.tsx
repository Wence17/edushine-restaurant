import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto, Amatic_SC, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const amaticSC = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amatic",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Edushine Fast Food",
  description:
    "Edushine Fast Food is a modern Abuja fast-food restaurant serving freshly prepared Nigerian and continental meals, healthy salads, refreshing beverages, and chef-crafted house specials. The restaurant is known for quality ingredients, hygienic preparation, affordable prices, quick service, and convenient delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        // className="min-h-full flex flex-col"
        className={cn(
          roboto.variable,
          amaticSC.variable,
          inter.variable,
          "font-sans", // Sets the default font
        )}
      >
        {children}
      </body>
    </html>
  );
}
