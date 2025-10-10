import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/services"},
    { label: "Project", href: "/project"},
    { label: "About Us", href: "/about-us"},
  ];

export const Navbar=()=>{

    return(
       
      <header className="fixed top-0 left-0 right-0 z-35 bg-[#fffefa] h-[90px] flex items-center justify-between px-[52px] ">
        <Image
          src="/Images/logo1.png"
          alt="Interior Design Logo"
          width={150}
          height={150}
          className="w-[110px] h-[60px]"
        />

        <nav className="flex items-center gap-12 ml-6 ">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-['Urbanist'] font-medium text-[25px] leading-[38px] whitespace-nowrap text-black hover:text-[#996830] "
            >
              {item.label}
            </Link>
          ))}
        </nav>

<Link href="/contact-us">
        <Button className=" bg-[#996830] hover:bg-[#7d5426] rounded-[10px] px-[15] py-4">
          <span className="font-['Urbanist'] font-medium text-white text-base text-center tracking-[0.50px] leading-5 whitespace-nowrap">
            Contact Us
          </span>
        </Button>
        </Link>
      </header>

    )
}