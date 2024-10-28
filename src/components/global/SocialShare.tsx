"use client";

import { FaTiktok, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { socialLinks } from "@/lib/constants/social";

interface SocialShareProps {
  className?: string;
  iconSize?: number;
}

export default function SocialShare({
  className = "",
  iconSize = 24,
}: SocialShareProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href={socialLinks.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300 transition"
      >
        <FaTiktok size={iconSize} />
      </a>
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300 transition"
      >
        <FaTwitter size={iconSize} />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300 transition"
      >
        <FaLinkedinIn size={iconSize} />
      </a>
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300 transition"
      >
        <FaInstagram size={iconSize} />
      </a>
    </div>
  );
}
