

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { href } from "react-router-dom";

const footerLinks = {
  quickLinks:[ 
    {name:"About Us", href:"/about-us"}, 
     {name:"Contact Us",href:"/contact-us"},
     {name: "Portfolio" ,href:"/project"},
  ],
  studio: [
    {name:"Terms & Condition", href:"/term-condition"},
    {name:"Privacy Policy", href:"/privacy-policy"},
  ],
};

const socialIcons = [
  { icon: "twitter", alt: "Twitter" },
  { icon: "linkedin", alt: "LinkedIn" },
  { icon: "instagram", alt: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#996830] py-4 ">
      <div className="max-w-7xl mx-auto px-2 ">
        <div className="grid grid-cols-4 gap-14 mb-8 px-2 py-2">
          {/* Logo and Social Icons */}
          <div className="flex flex-col gap-8 ">
            <div className=" mt-2 w-fit">
              <div className="text-white font-serif text-3xl">
                <Image
                src="/Images/logo.png"
                alt="logo"
                height={150}
                width={150}
                className="text-white font-serif text-3xl"/>
              </div>
              
            </div>
            <div className="flex gap-4">
             
                
          
                  {/* <span className="text-[#996830] text-bold">{social.icon === 'twitter' ? '𝕏' : social.icon === 'linkedin' ? 'in' : '📷'}</span> */}
                  <Image
                  src="/Images/icon1.png"
                  alt="twitter"
                  height={60}
                  width={40}
                  className="px-2 py-2 rounded border border-white flex bg-white items-center justify-center cursor-pointer "/>

                   <Image
                  src="/Images/icon2.png"
                  alt="twitter"
                  height={60}
                  width={40}
                  className="px-2 py-2 rounded border border-white flex bg-white items-center justify-center cursor-pointer "/>

                   <Image
                  src="/Images/icon3.png"
                  alt="twitter"
                  height={60}
                  width={40}
                  className=" px-2 py-2 rounded border border-white flex bg-white items-center justify-center cursor-pointer "/>
                
              
            </div>
          </div>

          {/* Get In Touch */}
          <div className="py-4">
            <h3 className="font-semibold text-white text-base mb-4">Get In Touch</h3>
            <div className="flex flex-col gap-2 text-white text-sm">
              <div className="flex items-start gap-2">
                <Image
                  src="/Images/vector1.png"
                  alt="email"
                  height={16}
                  width={16}
                  className="mt-1"
                />
                <span>abcd@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src="/Images/vector2.png"
                  alt="phone"
                  height={16}
                  width={16}
                  className="mt-1"
                />
                <span>(+91-2345678967)</span>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src="/Images/vector3.png"
                  alt="location"
                  height={16}
                  width={16}
                  className="mt-1"
                />
                <span>8779 Windsor St. Fuquay Varina, NC 27526</span>
              </div>
            </div>
          </div>

          {/* Quick Link */}
          <div className="py-4 px-10">
            <h3 className="font-semibold text-white text-base mb-4">Quick Link</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Studio */}
          <div className="py-4">
            <h3 className="font-semibold text-white text-base mb-4">Studio</h3>
            <div className="flex flex-col gap-2 mb-6">
              {footerLinks.studio.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <button className="border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-[#B8936B] transition flex items-center gap-2">
              Subscribe
              <span>↗</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="  ">
          <p className="text-white text-xs">
            © All Copyrights Reserved. Lorem Ipsum Dolor Sit Amet, Conse
          </p>
        </div>
      </div>
    </footer>
  );
};