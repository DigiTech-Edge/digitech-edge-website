"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import UnderlinedHeading from "@/components/global/UnderlinedHeading";
import { Image } from "@nextui-org/react";

const Project = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <UnderlinedHeading text="Projects" />
      <motion.h3
        className="text-2xl font-semibold mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Browse Through Our Works
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link href="/projects">
          <motion.button
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Image
          src="/images/TechEdge mockup.png"
          alt="TechEdge Mockup"
          width={1200}
          height={675}
          className="rounded-3xl object-contain object-center"
        />
      </motion.div>
    </motion.div>
  );
};

export default Project;
