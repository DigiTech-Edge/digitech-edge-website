"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const bannerItems = [
  {
    text: "Unleash the Power of Intuitive Design",
    link: "/get-in-touch",
    buttonText: "Get in Touch",
  },
  { text: "Discover Our Story", link: "/about-us", buttonText: "About Us" },
  {
    text: "Explore Our Services",
    link: "/what-we-do",
    buttonText: "What We Do",
  },
  { text: "See Our Work", link: "/projects", buttonText: "Projects" },
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerItems.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <Image
        src="/images/banner.png"
        alt="Banner background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {bannerItems[currentIndex].text}
            </h1>
            <h2 className="text-xl sm:text-2xl mb-8">
              Connect with DigiTech Edge
            </h2>
            <Link href={bannerItems[currentIndex].link}>
              <p className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-6 rounded-full transition duration-300 w-48 mx-auto">
                {bannerItems[currentIndex].buttonText}
              </p>
            </Link>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {bannerItems.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 cursor-pointer ${
                index === currentIndex
                  ? "bg-white w-12"
                  : "bg-white bg-opacity-50 w-8"
              }`}
              animate={{ scale: index === currentIndex ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
