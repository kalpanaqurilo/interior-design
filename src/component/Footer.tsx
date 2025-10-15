

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const footerLinks = {
//   quickLinks:[ 
//     {name:"About Us", href:"/about-us"}, 
//      {name:"Contact Us",href:"/contact-us"},
//      {name: "Portfolio" ,href:"/project"},
//   ],
//   studio: [
//     {name:"Terms & Condition", href:"/term-condition"},
//     {name:"Privacy Policy", href:"/privacy-policy"},
//   ],
// };


// export const Footer = () => {
//   return (
//     <footer className="w-full bg-[#996830] py-4 ">
//       <div className="max-w-7xl mx-auto px-2 ">
//         <div className="grid grid-cols-4 gap-14 mb-8 px-2 py-2">
//           {/* Logo and Social Icons */}
//           <div className="flex flex-col gap-8 ">
//             <div className=" mt-2 w-fit">
//               <div className="text-white font-serif text-3xl">
//                 <Image
//                 src="/Images/logo.png"
//                 alt="logo"
//                 height={150}
//                 width={150}
//                 className="text-white font-serif text-3xl"/>
//               </div>
              
//             </div>
//             <div className="flex gap-4">
             
                
          
//                   {/* <span className="text-[#996830] text-bold">{social.icon === 'twitter' ? '𝕏' : social.icon === 'linkedin' ? 'in' : '📷'}</span> */}
//                   <Image
//                   src="/Images/icon1.png"
//                   alt="twitter"
//                   height={60}
//                   width={40}
//                   className="px-2 py-2 rounded border border-white flex bg-white items-center justify-center cursor-pointer "/>

//                    <Image
//                   src="/Images/icon2.png"
//                   alt="twitter"
//                   height={60}
//                   width={40}
//                   className="px-2 py-2 rounded border border-white flex bg-white items-center justify-center cursor-pointer "/>

//                    <Image
//                   src="/Images/icon3.png"
//                   alt="twitter"
//                   height={60}
//                   width={40}
//                   className=" px-2 py-2 rounded border border-white flex bg-white items-center justify-center cursor-pointer "/>
                
              
//             </div>
//           </div>

//           {/* Get In Touch */}
//           <div className="py-4">
//             <h3 className="font-semibold text-white text-base mb-4">Get In Touch</h3>
//             <div className="flex flex-col gap-2 text-white text-sm">
//               <div className="flex items-start gap-2">
//                 <Image
//                   src="/Images/vector1.png"
//                   alt="email"
//                   height={16}
//                   width={16}
//                   className="mt-1"
//                 />
//                 <span>hardik.arcol@gmail.com</span>
//               </div>
//               <div className="flex items-start gap-2">
//                 <Image
//                   src="/Images/vector2.png"
//                   alt="phone"
//                   height={16}
//                   width={16}
//                   className="mt-1"
//                 />
//                 <span>(+91-8826027890)</span>
//               </div>
//               <div className="flex items-start gap-2">
//                 <Image
//                   src="/Images/vector3.png"
//                   alt="location"
//                   height={16}
//                   width={16}
//                   className="mt-1"
//                 />
//                 <span>B-61 1st floor,
//                    Ecosphere co working,
//                    Noida sec-67 Pin- 201301</span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Link */}
//           <div className="py-4 px-10">
//             <h3 className="font-semibold text-white text-base mb-4">Quick Link</h3>
//             <div className="flex flex-col gap-2">
//               {footerLinks.quickLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="text-white text-sm hover:underline"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Studio */}
//           <div className="py-4">
//             <h3 className="font-semibold text-white text-base mb-4">Studio</h3>
//             <div className="flex flex-col gap-2 mb-6">
//               {footerLinks.studio.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className="text-white text-sm hover:underline"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
            
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="  ">
//           <p className="text-white text-xs">
//             © All Copyrights Reserved. Lorem Ipsum Dolor Sit Amet, Conse
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  quickLinks: [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Portfolio", href: "/project" },
  ],
  studio: [
    { name: "Terms & Condition", href: "/term-condition" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const Footer = () => {
  return (
    <footer className="w-full bg-[#996830] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-8">
          
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <div className="mt-2">
              <Image
                src="/Images/logo.png"
                alt="logo"
                height={150}
                width={150}
                className="w-[100px] md:w-[130px] h-auto"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4 justify-center lg:justify-start">
              {/* Facebook */}
              {/* <Link
                href="https://www.facebook.com/rkauldesignandbuild"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/icon1.png"
                  alt="Facebook"
                  height={40}
                  width={40}
                  className="p-2 rounded border border-white bg-white cursor-pointer hover:opacity-80 transition"
                />
              </Link> */}

              {/* Instagram */}
              {/* <Link
                href="https://www.instagram.com/rkaul_design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/icon2.png"
                  alt="Instagram"
                  height={40}
                  width={40}
                  className="p-2 rounded border border-white bg-white cursor-pointer hover:opacity-80 transition"
                />
              </Link> */}

              {/* Optional 3rd icon (placeholder or remove if unused) */}
              <Link
                href="https://www.instagram.com/rkaul_design/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image
                src="/Images/icon3.png"
                alt="instagram"
                height={50}
                width={50}
                className="p-2 rounded cursor-pointer hover:opacity-80 transition"
              />
              </Link>

              <Link
                href="https://www.facebook.com/rkauldesignandbuild"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image
                src="/Images/icon4.png"
                alt="facebook"
                height={50}
                width={50}
                className="p-2 rounded border cursor-pointer hover:opacity-80 transition"
              />
              </Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold text-white text-lg mb-4">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3 text-white text-sm">
              <div className="flex justify-center lg:justify-start items-start gap-3">
                <Image
                  src="/Images/vector1.png"
                  alt="email"
                  height={16}
                  width={16}
                  className="mt-1"
                />
                <span>hardik.arcol@gmail.com</span>
              </div>
              <div className="flex justify-center lg:justify-start items-start gap-3">
                <Image
                  src="/Images/vector2.png"
                  alt="phone"
                  height={16}
                  width={16}
                  className="mt-1"
                />
                <span>(+91-8826027890)</span>
              </div>
              <div className="flex justify-center lg:justify-start items-start gap-3">
                <Image
                  src="/Images/vector3.png"
                  alt="location"
                  height={16}
                  width={16}
                  className="mt-1"
                />
                <span className="max-w-[220px] sm:max-w-xs">
                  B-61 1st floor, Ecosphere co-working, Noida sec-67 Pin-201301
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold text-white text-lg mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm hover:underline transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Studio */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold text-white text-lg mb-4">Studio</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.studio.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm hover:underline transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-4"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white text-xs sm:text-sm leading-relaxed">
            © All Copyrights Reserved. Lorem Ipsum Dolor Sit Amet, Conse
          </p>
        </div>
      </div>
    </footer>
  );
};
