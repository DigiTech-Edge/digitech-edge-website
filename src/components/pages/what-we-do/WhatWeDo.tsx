"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/lib/constants";
import { 
  FaDesktop, 
  FaPaintBrush, 
  FaServer, 
  FaChalkboardTeacher,
  FaChartLine,
  FaMobileAlt 
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const iconComponents = {
  FaDesktop,
  MdWeb,
  FaChalkboardTeacher,
  FaPaintBrush,
  FaServer,
  FaChartLine,
  FaMobileAlt,
};

const WhatWeDo = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="w-full max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="space-y-8 lg:sticky lg:top-0 lg:self-start ">
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.iconName as keyof typeof iconComponents];
            return (
              <motion.div
                key={service.name}
                className={`flex items-start space-x-4 cursor-pointer p-4 rounded-lg ${
                  selectedService.name === service.name ? "bg-blue-100" : ""
                }`}
                onClick={() => setSelectedService(service)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="text-blue-600 text-3xl">
                  <IconComponent />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          key={selectedService.name}
        >
          <div className="relative mb-6">
            <Image
              src={selectedService.image}
              alt={selectedService.name}
              width={400}
              height={300}
              className="w-full h-[600px] object-cover object-center rounded-lg"
            />
            <div className="absolute w-[80%] bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4 rounded-b-lg">
              <h3 className="text-sm text-center font-semibold mb-4">
                Our Excellent {selectedService.name} Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedService.summary.map((item, index) => (
                  <motion.span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              {selectedService.name} Details
            </h3>
            <ul className="list-none space-y-4">
              {selectedService.details.map((detail, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <span className="mr-2 mt-1 flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
