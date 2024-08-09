"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import UnderlinedHeading from "@/components/global/UnderlinedHeading";
import { Button } from "@nextui-org/react";

interface Service {
  name: string;
  description: string;
}

const services: Service[] = [
  {
    name: "UI and UX Solutions",
    description:
      "Creating intuitive and engaging user interfaces and experiences to enhance user satisfaction and interaction.",
  },
  {
    name: "Web Design Solutions",
    description:
      "Designing visually appealing and functional websites tailored to meet your business needs.",
  },
  {
    name: "IT Skills Training",
    description:
      "Providing comprehensive training programs to equip individuals with essential IT skills and knowledge.",
  },
  {
    name: "Graphic Design",
    description:
      "Crafting visually compelling graphics and visual content to effectively communicate your brand message.",
  },
  {
    name: "IT Infrastructure Management",
    description:
      "Managing and optimizing your IT infrastructure to ensure seamless and efficient operations.",
  },
  {
    name: "IT Consulting and Strategy",
    description:
      "Offering expert IT consulting services to develop and implement effective technology strategies for your business.",
  },
];

const Services = () => {
  return (
    <motion.div
      className="w-full max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <UnderlinedHeading text="Our Services" />
      <motion.h2
        className="text-2xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        We Deliver Expert Solutions
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            className="flex items-start space-x-4"
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
              <Link
                href={`/what-we-do/${service.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <Button
                  radius="full"
                  size="sm"
                  color="primary"
                  className="mt-2"
                >
                  Explore
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-2xl font-semibold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <UnderlinedHeading text="Let us help you" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            title: "Optimize Your Systems for Peak Performance",
            description:
              "We'll ensure your computer systems and networks run at maximum efficiency.",
          },
          {
            title: "Provide Reliable Support and Maintenance",
            description:
              "Our support team is available 24/7 to address any issues, minimizing disruptions and keeping your business running smoothly.",
          },
          {
            title: "Strategize for Growth and Scalability",
            description:
              "As your business expands, your IT needs will change. We'll work closely with you to develop a scalable IT strategy that accommodates your growth, ensuring your technology infrastructure can adapt and support your evolving requirements.",
          },
          {
            title: "Stay Ahead of Technology Trends",
            description:
              "Technology is ever-evolving, and staying informed can give your business a distinct edge. Our team stays current with the latest advancements, ensuring you benefit from cutting-edge solutions that drive efficiency and innovation.",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + 0.1 * index, duration: 0.5 }}
          >
            <p className="text-blue-600 text-2xl font-bold text-center">
              0{index + 1}
            </p>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {[
          { value: "7+", label: "Years Work Experience" },
          { value: "20+", label: "Satisfied Customers" },
          { value: "50+", label: "Completed Projects" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + 0.1 * index, duration: 0.5 }}
          >
            <div className="bg-[#074E8C] w-[240px] h-[240px] mx-auto text-white flex flex-col items-center justify-center font-bold rounded-3xl p-8 mb-2">
              <p className="text-3xl">{stat.value}</p>
              <p className="text-xl">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
