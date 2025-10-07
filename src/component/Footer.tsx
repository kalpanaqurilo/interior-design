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
    <footer className="w-full bg-[#B8936B] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-12 mb-8">
          {/* Logo and Social Icons */}
          <div className="flex flex-col gap-8">
            <div className="border-2 border-white p-4 w-fit">
              <div className="text-white font-serif text-3xl">Rehosul</div>
              <div className="text-white text-xs tracking-widest">DESIGN & BUILD</div>
            </div>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded border border-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition"
                >
                  <span className="text-white text-sm">{social.icon === 'twitter' ? '𝕏' : social.icon === 'linkedin' ? 'in' : '📷'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold text-white text-base mb-4">Get In Touch</h3>
            <div className="flex flex-col gap-2 text-white text-sm">
              <div className="flex items-start gap-2">
                <span>✉</span>
                <span>abcd@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <span>📞</span>
                <span>(+91-2345678967)</span>
              </div>
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span>8779 Windsor St. Fuquay Varina, NC 27526</span>
              </div>
            </div>
          </div>

          {/* Quick Link */}
          <div>
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
          <div>
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
        <div className="border-t border-white/20 pt-4">
          <p className="text-white text-xs">
            © All Copyrights Reserved. Lorem Ipsum Dolor Sit Amet, Conse
          </p>
        </div>
      </div>
    </footer>
  );
};