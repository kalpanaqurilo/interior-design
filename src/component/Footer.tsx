// import React from "react";


// const footerLinks = {
//     quickLinks: ["About Us", "Contact Us", "Blog", "Portfolio"],
//     studio: ["Terms & Condition", "Privacy Policy"],
//   };

//   const socialIcons = [
//     { src: "/group-89.png", alt: "Group" },
//     { src: "/group-90.png", alt: "Group" },
//     { src: "/group-91.png", alt: "Group" },
//   ];

// export const Footer =()=>{

//     return(
//         <div>
//             <footer className="w-full bg-[#996830] shadow-[0px_-1px_5px_#00000021] py-[55px]">
//         <div className="max-w-[1568px] mx-auto px-[174px]">
//           <div className="grid grid-cols-4 gap-[188px] mb-[44px]">
//             <div>
//               <h3 className="font-bold text-white text-lg text-center">About Us</h3>
//               <p className="text-white text-sm text-center">
//                 Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aliquam Nec Luctus Arcu.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-bold text-white text-lg text-center">Get In Touch</h3>
//               <p className="text-white text-sm text-center">sayantikaqurilo@gmail.com</p>
//               <p className="text-white text-sm text-center">(+91 2345678967)</p>
//               <p className="text-white text-sm text-center">8779 Windsor St. Fuquay Varina, Nc 27526</p>
//             </div>

//             <div>
//               <h3 className="font-bold text-white text-lg text-center">Quick Link</h3>
//               <div className="flex flex-col gap-2.5">
//                 {footerLinks.quickLinks.map((link, index) => (
//                   <a key={index} href="#" className="text-white text-sm text-center">
//                     {link}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="font-bold text-white text-lg text-center">Studio</h3>
//               <div className="flex flex-col gap-2.5">
//                 {footerLinks.studio.map((link, index) => (
//                   <a key={index} href="#" className="text-white text-sm text-center">
//                     {link}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center gap-[79px]">
//             {socialIcons.map((icon, index) => (
//               <img key={index} className="w-[33px] h-[33px]" alt={icon.alt} src={icon.src} />
//             ))}
//           </div>
//         </div>
//       </footer>
//         </div>
//     )
// }

import React from "react";
import Image from "next/image";

const footerLinks = {
  quickLinks: ["About Us", "Contact Us", "Portfolio"],
  studio: ["Terms & Condition", "Privacy Policy"],
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
              {footerLinks.quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white text-sm hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Studio */}
          <div className="py-4">
            <h3 className="font-semibold text-white text-base mb-4">Studio</h3>
            <div className="flex flex-col gap-2 mb-6">
              {footerLinks.studio.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white text-sm hover:underline"
                >
                  {link}
                </a>
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