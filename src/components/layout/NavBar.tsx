"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavbarLinks } from "@/lib/constants";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      isBordered
      maxWidth="full"
      classNames={{
        base: "bg-white",
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          icon={(isOpen) =>
            !isOpen ? <FaBars size={20} /> : <MdOutlineClose size={32} />
          }
        />
        <NavbarBrand>
          <Link href="/">
          <Image src="/logo.png" alt="DigiTech Edge" width={50} height={50} />
          <p className="text-xl font-bold ml-2 text-primary hidden lg:block">
            DigiTech Edge
          </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="start" className="hidden sm:flex gap-10 text-xl">
        {NavbarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <NavbarItem key={link.href} isActive={isActive}>
              <Link
                color={isActive ? "primary" : "foreground"}
                href={link.href}
              >
                {link.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <AiOutlineSearch size={24} /> */}
      </NavbarContent>
      <NavbarMenu className="bg-white flex flex-col gap-10">
        {NavbarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <NavbarMenuItem key={link.href} isActive={isActive}>
              <Link
                color={isActive ? "primary" : "foreground"}
                href={link.href}
              >
                {link.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
