// import React from "react";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import Image from "next/image";

// const navigationItems = [
//     { label: "Home", href: "/" },
//     { label: "Service", href: "/services"},
//     { label: "Project", href: "/project"},
//     { label: "About Us", href: "/about-us"},
//   ];

// export const Navbar=()=>{

//     return(
       
//       <header className="fixed top-0 left-0 right-0 z-35 bg-[#fffefa] h-[80px] flex items-center justify-between px-[52px] ">
//         <Image
//           src="/Images/logo1.png"
//           alt="Interior Design Logo"
//           width={150}
//           height={150}
//           className="w-[110px] h-[60px]"
//         />

//         <nav className="flex items-center gap-12 ml-6 ">
//           {navigationItems.map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               className="font-['Urbanist'] font-medium text-[25px] leading-[38px] whitespace-nowrap text-black hover:text-[#996830] "
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

// <Link href="/contact-us">
//         <Button className=" bg-[#996830] hover:bg-[#7d5426] rounded-[10px] px-[15] py-4">
//           <span className="font-['Urbanist'] font-medium text-white text-base text-center tracking-[0.50px] leading-5 whitespace-nowrap">
//             Contact Us
//           </span>
//         </Button>
//         </Link>
//       </header>

//     )
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // icons for hamburger menu

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/services" },
  { label: "Project", href: "/project" },
  { label: "About Us", href: "/about-us" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffefa] h-[80px] flex items-center justify-between px-6 md:px-[52px] shadow-sm">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/Images/logo1.png"
          alt="Interior Design Logo"
          width={150}
          height={150}
          className="w-[100px] md:w-[110px] h-[60px] cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 lg:gap-12 ml-6">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="font-['Urbanist'] font-medium text-[20px] lg:text-[25px] leading-[38px] whitespace-nowrap text-black hover:text-[#996830] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Button */}
      <Link href="/contact-us" className="hidden md:block">
        <Button className="bg-[#996830] hover:bg-[#7d5426] rounded-[10px] px-6 py-4">
          <span className="font-['Urbanist'] font-medium text-white text-base tracking-[0.5px] leading-5 whitespace-nowrap">
            Contact Us
          </span>
        </Button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 text-[#996830]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <HiOutlineX className="text-3xl" />
        ) : (
          <HiOutlineMenu className="text-3xl" />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#fffefa] shadow-md flex flex-col items-center py-6 space-y-6 md:hidden animate-slideDown">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-['Urbanist'] text-[20px] text-black hover:text-[#996830] transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
            <Button className="bg-[#996830] hover:bg-[#7d5426] rounded-[10px] px-6 py-3">
              <span className="font-['Urbanist'] font-medium text-white text-base">
                Contact Us
              </span>
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};
