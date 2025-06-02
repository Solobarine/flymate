"use client";

import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme/toggle";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home" },
    { label: "Hotel" },
    { label: "Car" },
    { label: "About" },
    { label: "FAQ" },
    { label: "Blog" },
  ];
  return (
    <header className="fixed w-full bg-background-transparent top-0 flex items-center gap-2 justify-between px-6 sm:px-20 z-30 py-3">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.avif"
          alt="Product Logo"
          width={40}
          height={40}
          loading="lazy"
          className="object-cover aspect-square"
        />
        <h1 className="text-2xl font-semibold">Flymate</h1>
      </div>

      {/** DESKTOP NAV **/}
      <nav className="hidden sm:flex items-center gap-4 md:gap-10">
        {links.map((link, index) => (
          <Link key={index} href="#">
            {link.label}
          </Link>
        ))}
      </nav>
      {/** MOBILE NAV **/}
      <nav
        className={`absolute left-0 sm:hidden max-w-screen w-full bg-foreground flex flex-col gap-4 z-10 p-4 transition-all duration-1000 ${
          isOpen ? "top-16" : "-top-96"
        }
        `}
      >
        {links.map((link, index) => (
          <Link key={index} href="#">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-sm sm:hidden"
          onClick={() => {
            console.log("clicked");
            setIsOpen(!isOpen);
          }}
        >
          <Menu />
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
