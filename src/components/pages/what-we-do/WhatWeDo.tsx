"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { services } from "@/lib/constants";

const WhatWeDo = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="w-full max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* <motion.h2
        className="text-2xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Our Expert Solutions
      </motion.h2> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {services.map((service, index) => (
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
              <Image
                src="/images/service.png"
                alt="Service icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          key={selectedService.name}
        >
          <Image
            src={selectedService.image}
            alt={selectedService.name}
            width={400}
            height={300}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <h3 className="text-2xl font-semibold mb-4">
            {selectedService.name}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {selectedService.details.map((detail, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                {detail}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
