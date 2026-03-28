"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  "All",
  "BUSINESS",
  "FASHION",
  "TECH",
  "WEB 3",
  "HEALTH",
  "FINANCE",
  "LIQUOR",
  "REAL ESTATE",
  "LIFESTYLE",
  "ENTERTAINMENT",
];

const logos = [
  { src: "/images/media/the-brag.webp", alt: "The Brag" },
  { src: "/images/media/village-voice.webp", alt: "Village Voice" },
  { src: "/images/media/womens-journal.webp", alt: "Women's Journal" },
  { src: "/images/media/us-business-news.webp", alt: "US Business News" },
  { src: "/images/media/the-standard.webp", alt: "The Standard" },
  { src: "/images/media/the-advocate.webp", alt: "The Advocate" },
  { src: "/images/media/denver-gazette.webp", alt: "Denver Gazette" },
];

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="bg-[#F5F7FA] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl lg:text-3xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          We get your article and/or interview featured in
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide cursor-pointer transition ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-md transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="grayscale hover:grayscale-0 transition object-contain"
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <button className="border border-gray-300 rounded-md px-6 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
