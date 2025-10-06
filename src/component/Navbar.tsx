import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Service", href: "/services"},
    { label: "Project", href: "/project"},
    { label: "Contact Us", href: "/contact-us"},
  ];

export const Navbar=()=>{

    return(
       
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#fffefa] h-[100px] flex items-center justify-between px-[62px] ">
        <img className="w-[155px] h-14 object-cover" alt="Rkaul logo" src="./Images/rkaul logo 1.png" />

        <nav className="flex items-center gap-12 ml-6 ">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="[font-family:'Urbanist',Helvetica] font-medium text-[25px] leading-[38px] whitespace-nowrap text-black hover:text-[#996830] "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button className=" bg-[#996830] hover:bg-[#7d5426] rounded-[10px] px-[10px] py-4">
          <span className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-base text-center tracking-[0.50px] leading-5 whitespace-nowrap">
            Get Free Quotation
          </span>
        </Button>
      </header>

    )
}