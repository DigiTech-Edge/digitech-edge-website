"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import UnderlinedHeading from "@/components/global/UnderlinedHeading";
import CustomBanner from "@/components/global/CustomBanner";
export default function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <CustomBanner title="About Us" imageSrc="/images/banner.png" />

      <motion.div
        className="max-w-4xl mx-auto px-4 py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-lg mb-8">
          At DigiTech Edge, we are a leading provider of innovative technology
          solutions, specializing in creating tailored systems that solve
          complex challenges across various sectors. With a team of highly
          skilled professionals, we offer a comprehensive range of IT services
          to drive efficiency, productivity, and growth for our clients.
        </p>

        <p className="text-lg mb-8">
          What sets DigiTech Edge apart is our commitment to staying at the
          forefront of technological advancements. We continuously invest in
          research and development, ensuring that our solutions leverage the
          latest industry best practices and cutting-edge technologies.
        </p>

        <p className="text-lg mb-8">
          At the core of DigiTech Edge is a team of passionate individuals who
          thrive on delivering excellence. We believe in fostering long-term
          partnerships with our clients, providing ongoing support and guidance
          to ensure their technology investments continue to meet their evolving
          needs.
        </p>

        <p className="text-lg">
          Join the growing list of satisfied clients who have experienced the
          DigiTech Edge difference. Contact us today to learn how we can
          leverage technology to unlock new opportunities for your business.
        </p>
      </motion.div>

      <motion.div
        className="bg-[#074E8C] text-white py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <UnderlinedHeading text="MISSION" className="text-white" />
          <p className="text-lg mb-12">
            Our mission is to cultivate a culture of relentless innovation,
            where creativity and intellectual curiosity thrive. We are committed
            to attracting and nurturing exceptional talent, fostering an
            environment that encourages bold thinking, calculated risk-taking,
            and cross-disciplinary collaboration.
          </p>

          <UnderlinedHeading text="VISION" className="text-white" />
          <p className="text-lg">
            DigiTech Edge company envision a future where technology seamlessly
            enhances every aspect of human life, empowering individuals and
            businesses to reach their full potential. We aim to create
            cutting-edge solutions that revolutionize industries, simplify
            complex challenges, and inspire wonder through their elegance and
            efficiency.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto px-4 py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <UnderlinedHeading text="CORE VALUES" />
        <ul className="space-y-6 text-left">
          <li>
            <h3 className="text-xl font-semibold mb-2">Innovation:</h3>
            <p>
              We embrace an entrepreneurial spirit and encourage unconventional
              thinking. We believe that true innovation stems from a willingness
              to challenge conventions, learn from failures, and continuously
              push the boundaries of what is achievable.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold mb-2">Excellence:</h3>
            <p>
              We are driven by a passion for excellence in everything we do,
              from ideation to execution. We set ambitious goals and
              consistently strive to exceed expectations, delivering products
              and services of the highest quality that exceed industry
              standards.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold mb-2">Integrity:</h3>
            <p>
              We uphold unwavering ethical standards and operate with
              transparency, honesty, and accountability. We respect intellectual
              property rights, safeguard personal data, and prioritize the
              well-being of our customers, employees, and the communities we
              serve.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold mb-2">Collaboration:</h3>
            <p>
              We believe that diverse perspectives and open communication are
              essential for driving progress. We foster an inclusive environment
              that encourages teamwork, knowledge-sharing, and constructive
              feedback, enabling us to achieve more together than we could
              individually.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold mb-2">Sustainability:</h3>
            <p>
              We are committed to sustainable practices that minimize our
              environmental impact and contribute to a better future for
              generations to come. We strive to develop Eco-friendly
              technologies, reduce our carbon footprint, and promote responsible
              resource management.
            </p>
          </li>
        </ul>
        <div className="core-values">
          <p className="mt-8 text-left">
            By upholding these core values, we aim to create a work environment
            that nurtures talent, fosters innovation, and delivers exceptional
            products and services that positively impact the world around us.
          </p>
        </div>
      </motion.div>
    </>
  );
}
