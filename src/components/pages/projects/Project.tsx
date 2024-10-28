"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { FiX } from "react-icons/fi";

interface ProjectProps {
  projects: {
    category: string;
    images: string[];
  }[];
}

const Project: React.FC<ProjectProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    onOpen();
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
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
          {projects.map((project) => (
            <motion.button
              key={project.category}
              className={`px-4 py-2 rounded-full flex-shrink-0 ${
                selectedCategory === project.category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(project.category)}
            >
              {project.category}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, projectIndex) => (
            <React.Fragment key={project.category}>
              {project.images.map((image, imageIndex) => (
                <motion.div
                  key={image}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image}
                    alt={`Project from ${project.category}`}
                    width={400}
                    height={300}
                    className="w-full h-72 object-cover object-center"
                  />
                  <div className="p-4">
                    <p className="text-sm text-center text-gray-600">
                      {project.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onClose}
        size="full"
        backdrop="blur"
        classNames={{
          backdrop: "bg-black/40 backdrop-blur-sm",
          base: "border-none bg-transparent shadow-none",
          closeButton: "top-4 right-4 text-white hover:bg-white/10",
        }}
        hideCloseButton={true}
      >
        <ModalContent>
          <ModalBody className="p-0 flex items-center justify-center min-h-screen">
            {selectedImage && (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Full size project image"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] object-contain"
                  quality={100}
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white text-xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <FiX />
                </button>
              </div>
              
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Project;
