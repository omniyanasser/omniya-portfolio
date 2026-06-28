"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const menuItems = [
    { label: "About", href: "#about", active: true },
    { label: "Experience", href: "#experience", active: false },
    { label: "Projects", href: "#projects", active: false },
    { label: "Skills", href: "#skills", active: false },
    { label: "Contact", href: "#contact", active: false },
  ];


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
       
        elem.scrollIntoView({ behavior: "smooth" });
      }
     
      setMenuOpen(false); 
    }
  };

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-2 sticky top-1 z-[100]">
      <div className="flex justify-between items-center bg-secondary/20 backdrop-blur-md rounded-[26px] px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 relative border border-border/50">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Code icon with theme-compatible background */}
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary-foreground"
              aria-hidden="true"
            >
              <path d="m18 16 4-4-4-4"></path>
              <path d="m6 8-4 4 4 4"></path>
              <path d="m14.5 4-5 16"></path>
            </svg>
          </div>
          {/* Name Display */}
          <h1 className="text-foreground font-bold text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-8">
            omniya Nasser
          </h1>
        </div>

        {/* Hamburger Menu Icon (Mobile only) */}
        <button
          className="block lg:hidden p-2 text-foreground"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div className={`
          ${menuOpen ? "flex flex-col" : "hidden"} 
          lg:flex lg:flex-row items-start lg:items-center gap-4 lg:gap-6
          absolute lg:relative 
          top-full lg:top-auto 
          left-0 lg:left-auto 
          w-full lg:w-auto 
          bg-secondary lg:bg-transparent 
          mt-2 lg:mt-0 
          rounded-lg lg:rounded-none 
          p-4 lg:p-0 
          z-50
        `}>
          {/* Navigation Links */}
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`font-medium text-sm sm:text-base transition-colors duration-200 hover:text-primary ${
                item.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Header;