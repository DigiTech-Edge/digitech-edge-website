"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BannerProps {
  title: string;
  imageSrc: string;
  height?: string;
}

const CustomBanner: React.FC<BannerProps> = ({
  title,
  imageSrc,
  height = "300px",
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`relative overflow-hidden`} style={{ height }}>
      <Image
        src={imageSrc}
        alt="CustomBanner"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 text-white text-center flex flex-col justify-center items-center h-full"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-8">{title}</h1>
      </motion.div>
    </div>
  );
};

export default CustomBanner;
