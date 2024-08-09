"use client";

import UnderlinedHeading from "@/helpers/UnderlinedHeading";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

const Welcome = () => {
  return (
    <motion.div
      className="bg-[#074E8C] text-white p-8 shadow-lg "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <UnderlinedHeading text="Welcome To DigiTech Edge" />
        <p className="text-center text-lg mb-16">
          Welcome to DigiTech Edge - Your Partner for Tech Excellence. Our
          skilled team provides tailored technology solutions to elevate your
          business.
        </p>

        <h2 className="text-2xl font-semibold mb-10 text-center ">
          Why Choose Us ?
        </h2>

        <div className="flex justify-between mb-6">
          <motion.div
            className="border border-white rounded-xl p-4 w-[48%]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ul className="list-disc list-inside">
              <li>Proven expertise</li>
              <li>Unwavering quality commitment</li>
            </ul>
          </motion.div>

          <motion.div
            className="border border-white rounded-xl p-4 w-[48%]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ul className="list-disc list-inside">
              <li>Customer-focused solutions</li>
              <li>Driving innovation and growth</li>
            </ul>
          </motion.div>
        </div>

        <div className="text-right">
          <Link href="/about" className="text-sm">
            <motion.span
              className="flex gap-2 items-center justify-end"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
              <FaCircleArrowRight />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Welcome;
