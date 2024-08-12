"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";

interface ProjectProps {
  projects: {
    name: string;
    image: string;
    category: string;
  }[];
}

const Project: React.FC<ProjectProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <div className="container mx-auto py-8">
      <div className="flex overflow-x-auto gap-4 mb-8 pb-4 scrollbar-none">
        <motion.button
          className={`px-4 py-2 rounded-full flex-shrink-0 ${
            selectedCategory === null
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </motion.button>
        {services.map((service) => (
          <motion.button
            key={service.name}
            className={`px-4 py-2 rounded-full flex-shrink-0 ${
              selectedCategory === service.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(service.name)}
          >
            {service.name}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <Link
            href={`/projects/${project.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            key={index}
          >
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-4 ">
                <h3 className="text-lg text-center font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-center text-gray-600">
                  {project.category}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
