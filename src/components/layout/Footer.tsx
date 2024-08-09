"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input, Button } from "@nextui-org/react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#074E8C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.png"
            alt="TechEdge"
            width={120}
            height={120}
            className="mb-4"
          />
          <p className="text-sm text-center">
            Empowering businesses with cutting-edge technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-blue-300 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do"
                  className="hover:text-blue-300 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-blue-300 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-300 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>CyberSecurity</li>
              <li>Cloud Computing</li>
              <li>UI/UX Design</li>
              <li>IT Consulting</li>
              <li>Web Development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="mb-2">123 Tech Street, Digital City, 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-4">Email: info@techedge.com</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-300 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700 text-center">
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row justify-center items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-xs sm:rounded-s-lg"
              radius="none"
            />
            <Button
              color="primary"
              className="w-full sm:w-auto max-w-xs max-sm:mt-2 sm:rounded-e-lg"
              radius="none"
            >
              Subscribe
            </Button>
          </form>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} DigiTech Edge. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
