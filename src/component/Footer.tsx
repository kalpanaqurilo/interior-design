import React from "react";


const footerLinks = {
    quickLinks: ["About Us", "Contact Us", "Blog", "Portfolio"],
    studio: ["Terms & Condition", "Privacy Policy"],
  };

  const socialIcons = [
    { src: "/group-89.png", alt: "Group" },
    { src: "/group-90.png", alt: "Group" },
    { src: "/group-91.png", alt: "Group" },
  ];

export const Footer =()=>{

    return(
        <div>
            <footer className="w-full bg-[#996830] shadow-[0px_-1px_5px_#00000021] py-[55px]">
        <div className="max-w-[1568px] mx-auto px-[174px]">
          <div className="grid grid-cols-4 gap-[188px] mb-[44px]">
            <div>
              <h3 className="font-bold text-white text-lg text-center">About Us</h3>
              <p className="text-white text-sm text-center">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aliquam Nec Luctus Arcu.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg text-center">Get In Touch</h3>
              <p className="text-white text-sm text-center">sayantikaqurilo@gmail.com</p>
              <p className="text-white text-sm text-center">(+91 2345678967)</p>
              <p className="text-white text-sm text-center">8779 Windsor St. Fuquay Varina, Nc 27526</p>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg text-center">Quick Link</h3>
              <div className="flex flex-col gap-2.5">
                {footerLinks.quickLinks.map((link, index) => (
                  <a key={index} href="#" className="text-white text-sm text-center">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg text-center">Studio</h3>
              <div className="flex flex-col gap-2.5">
                {footerLinks.studio.map((link, index) => (
                  <a key={index} href="#" className="text-white text-sm text-center">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-[79px]">
            {socialIcons.map((icon, index) => (
              <img key={index} className="w-[33px] h-[33px]" alt={icon.alt} src={icon.src} />
            ))}
          </div>
        </div>
      </footer>
        </div>
    )
}