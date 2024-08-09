"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import UnderlinedHeading from "@/components/global/UnderlinedHeading";
import { Avatar } from "@nextui-org/react";

interface ClientService {
  id: string;
  title: string;
  description: string;
  image: string;
}

const clientServices: ClientService[] = [
  {
    id: "01",
    title: "CyberSecurity Trends",
    description:
      "Protect your digital assets with insights on current threats and best practices for defense.",
    image: "/images/cybersecurity.png",
  },
  {
    id: "02",
    title: "Tech Guides",
    description:
      "Rapidly evolving landscape of technology, stay updated of emerging trends is key to remaining competitive.",
    image: "/images/techguids.png",
  },
  {
    id: "03",
    title: "IT Career Advice",
    description:
      "Protect your digital assets with insights on current threats and best practices for defense.",
    image: "/images/advice.png",
  },
  {
    id: "04",
    title: "Cloud Computing",
    description:
      "With innovations like cloud computing revolutionizing the industry, staying ahead requires adaptability.",
    image: "/images/cloud.png",
  },
];

const clientReviews = [
  {
    text: "Rapidly evolving landscape of technology, stay updated of emerging trends is key to remaining competitive.",
    name: "Obiajulu Egbunike",
    position: "Denzel Cosmetics Founder",
    avatar: "/images/client-avatar-1.jpg",
  },
  {
    text: "TechEdge has been instrumental in our digital transformation journey. Their expertise is unmatched.",
    name: "Sarah Johnson",
    position: "CTO, InnovateTech",
    avatar: "/images/client-avatar-2.jpg",
  },
  {
    text: "The cybersecurity solutions provided by TechEdge have significantly enhanced our data protection measures.",
    name: "Michael Chen",
    position: "Security Director, SecureNet",
    avatar: "/images/client-avatar-3.jpg",
  },
];

const Client = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex(
        (prevIndex) => (prevIndex + 1) % clientReviews.length
      );
    }, 10000);
    return () => clearInterval(timer);
  }, []);
  return (
    <motion.div
      className="w-full max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <UnderlinedHeading text="Our Clients" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {clientServices.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="flex gap-2">
              <p className="text-blue-600 text-base font-bold mb-4">
                {service.id}.
              </p>
              <h3 className="text- font-semibold mb-2">{service.title}</h3>
            </div>
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />

            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              href={`/services/${service.title
                .toLowerCase()
                .replace(/ /g, "-")}`}
            >
              <motion.p
                className="text-blue-600 font-semibold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More →
              </motion.p>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link href="/blog">
          <motion.p
            className="text-blue-600 font-semibold text-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Our Blog →
          </motion.p>
        </Link>
      </motion.div>

      <motion.div
        className=" p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h3 className="text-2xl text-center font-semibold mb-4">
          Client Reviews
        </h3>
        <div className="relative h-48 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReviewIndex}
              className="absolute inset-0 flex items-center"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start space-x-4">
                <Avatar
                  src=""
                  alt={`${clientReviews[currentReviewIndex].name} Avatar`}
                  size="lg"
                />
                <div>
                  <p className="text-gray-600 mb-2">
                    {clientReviews[currentReviewIndex].text}
                  </p>
                  <p className="font-semibold">
                    {clientReviews[currentReviewIndex].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {clientReviews[currentReviewIndex].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          {clientReviews.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                index === currentReviewIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              animate={{ scale: index === currentReviewIndex ? 1.2 : 1 }}
              onClick={() => setCurrentReviewIndex(index)}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Client;
