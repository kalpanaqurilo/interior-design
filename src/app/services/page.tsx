// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// type ServiceCardProps = {
//   image: string;
//   alt: string;
//   title: string;
//   description: string;
// };

// const ServiceCard = ({ image, alt, title, description }: ServiceCardProps) => {
//   return (
//     <div className="overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-shadow duration-300 group relative h-[500px]">
//       <div className="absolute inset-0 flex flex-col">
//         <Image
//           src={image}
//           alt={alt}
//           width={500}
//           height={500}
//           className="w-full h-[500px] object-cover"
//           style={{ objectFit: "cover" }}
//         />
//         {/* Remove duplicate <img> tag, Next.js Image is sufficient */}
//         <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transition-all duration-700 ease-in-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
//           <h3 className="font-['Lato',Helvetica] font-bold text-[#18191f] text-2xl mb-3">
//             {title}
//           </h3>
//           <p className="font-['Lato',Helvetica] text-[#18191f] text-base leading-relaxed">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// type RenovationCardProps = {
//   image: string;
//   title: string;
//   description: string;
//   isActive: boolean;
// };

// const RenovationCard = ({ image, title, description, isActive }: RenovationCardProps) => {
//   return (
//     <div
//       className={`transition-all duration-700 ${
//         isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
//       }`}
//     >
//       <div className="max-w-[900px] mx-auto bg-white overflow-hidden ">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="w-full  p-8">
//             <div className="overflow-hidden shadow-lg">
//               <Image
//                 src={image}
//                 alt={title}
//                 width={900}
//                 height={500}
//                 className="w-full h-[400px] object-cover"
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//           </div>

//           <div className="w-full  p-8 text-center md:text-left">
//             <h3 className="font-['Lato',Helvetica] text-[#996830] text-[34px] font-semibold tracking-wide mb-4 uppercase">
//               {title}
//             </h3>
//             <p className="font-['Lato',Helvetica] text-[#2c2c2c] text-[26px] leading-relaxed">
//               {description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollContainerRef = useRef<HTMLDivElement | null>(null);
//   const isScrollingRef = useRef(false);

//   const services = [
//     {
//       image: "/Images/service1.png",
//       alt: "Living Room Design",
//       title: "Living Room Design",
//       description:
//         "Transform your living space into a cozy and elegant retreat with our custom design solutions.",
//     },
//     {
//       image: "/Images/service2.png",
//       alt: "Modern Kitchen",
//       title: "Modern Kitchen",
//       description:
//         "Create the perfect culinary space with contemporary designs that blend style and functionality.",
//     },
//     {
//       image: "/Images/service3.png",
//       alt: "Office Space",
//       title: "Office Space",
//       description:
//         "Design productive work environments that inspire creativity and enhance business performance.",
//     },
//   ];

//   const renovations = [
//     {
//       image: "/Images/renovation1.png",
//       title: "3D Visualization",
//       description:
//         "Preview your future interiors with photorealistic 3D renders and walkthroughs.",
//     },
//     {
//       image: "/Images/renovation2.png",
//       title: "Vastu Compliant Interiors",
//       description:
//         "Design interiors that harmonize aesthetics with positive energy flow.",
//     },
//     {
//       image: "/Images/renovation3.png",
//       title: "Smart Home Interior",
//       description:
//         "Integrate technology seamlessly into your interiors for modern living.",
//     },
//     {
//       image: "/Images/renovation4.png",
//       title: "Furniture Design & Fittings",
//       description:
//         "Bespoke furniture crafted to fit your space perfectly.",
//     },
//     {
//       image: "/Images/renovation5.png",
//       title: "Modular Kitchen",
//       description:
//         "Efficient and stylish kitchens tailored to your lifestyle.",
//     },
//   ];

//   // 🧠 Scroll logic fixed to avoid passive event issue
//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       e.preventDefault();

//       if (isScrollingRef.current) return;
//       isScrollingRef.current = true;

//       if (e.deltaY > 0 && activeIndex < renovations.length - 1) {
//         setActiveIndex((prev) => prev + 1);
//       } else if (e.deltaY < 0 && activeIndex > 0) {
//         setActiveIndex((prev) => prev - 1);
//       }

//       setTimeout(() => {
//         isScrollingRef.current = false;
//       }, 700);
//     };

//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener("wheel", handleWheel, { passive: false });
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("wheel", handleWheel);
//       }
//     };
//   }, [activeIndex, renovations.length]);

//   return (
//     <div className="bg-[#fffefa] min-h-screen relative mt-8">
//       {/* Section 1 - Services */}
//       <section className="mx-auto px-[88px] py-20">
//         <div className="flex flex-col items-center gap-16 mb-20">
//           <div className="flex flex-col items-center gap-6">
//             <h1 className="font-[Playfair Display] text-black text-[56px] leading-[86px] text-center">
//               Our Interior Design Services
//             </h1>
//             <p className="font-[Urbanist] text-[#18191f] text-[28px] font-thin text-center">
//               From cozy homes to smart commercial spaces — we design it all
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <ServiceCard key={index} {...service} />
//           ))}
//         </div>
//       </section>

//       {/* Section 2 - Renovation with Scroll */}
//       <section className="px-[88px] py-20 bg-white ">
//         <div className="text-center mb-16">
//           <h2 className="font-[Playfair Display] text-[#2c2c2c] text-[56px] font-light tracking-wide mb-4">
//             Renovation & Space Makeover
//           </h2>
//           <p className="font-[Urbanist] text-[#666] text-[18px] leading-relaxed  mx-auto">
//             Whether it is a single room or your whole home  we redesign with a <br/>
//             modern aesthetic and super-functional approach.
//           </p>
//         </div>

//         <div
//           ref={scrollContainerRef}
//           className="relative overflow-hidden h-[450px] "
//         >
//           <div
//             className="flex flex-col  transition-transform duration-700  ease-out"
//             style={{ transform: `translateY(-${activeIndex * 550}px)` }}
//           >
//             {renovations.map((renovation, index) => (
//               <div key={index} className="h-[550px] flex  justify-between items-center w-full ">
//                 <RenovationCard
//                   {...renovation}
//                   isActive={index === activeIndex}
                  
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Card Counter */}
//         <div className="text-center mt-6  ">
//           <span className="font-[Playfair Display] text-[#666] text-lg">
           
//           </span>
//         </div>
//       </section>
     
//       {/*section3*/}
     

// <section className="px-[88px] py-20 bg-white">
//   <div className="text-center mb-16 text-4xl font-[Playfair Display] text-[#2c2c2c] text-[56px] font-thin">
//       Before & After Design Magic
//     <h2 className="font-[Urbanist] text-[48px] font-semibold mb-4 text-gray-800">
//     </h2>
//     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//       See how we breathe life into lifeless spaces. From grayscale walls to vivid vibes,
//       <br />
//       our designs do not just decorate they transform.
//       <br />
//       <strong>From Dull to Dynamic.</strong>
//     </p>
//   </div>

//   <div className="flex flex-wrap justify-center gap-8">
//     {[
//       {
//         src: "/Images/Rectangle1.png",
       
//       },
//       {
//         src: "/Images/Rectangle2.png",
       
//       },
//       {
//         src: "/Images/Rectangle3.png",
    
//       },
//       {
//         src: "/Images/Rectangle4.png",
//       },
//       {
//         src: "/Images/Rectangle5.png",
       
//       },

//     ].map((item, index) => (
//       <div
//         key={index}
//         className="group grayscale hover:grayscale-0 transition-all duration-500 ease-in-out overflow-hidden  shadow-md hover:shadow-xl transform hover:scale-x-110 w-[180px] hover:w-[320px] h-[450px] flex flex-col items-center text-center "
//       >
//         <Image
//           src={item.src}
//           alt='image'
//           width={300}
//           height={300}
//           className="object-cover  w-full h-[450px]  transition-all duration-500"
//         />
       
//       </div>
//     ))}
//   </div>
// </section>



//     </div>
//   );
// };

// export default Services;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ---------- Service Card ----------
type ServiceCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const ServiceCard = ({ image, alt, title, description }: ServiceCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-shadow duration-300 group relative h-[400px] sm:h-[450px] md:h-[500px]">
      <Image
        src={image}
        alt={alt}
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 sm:p-6 transition-all duration-700 ease-in-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="font-['Lato'] font-bold text-[#18191f] text-lg sm:text-xl md:text-2xl mb-2">
          {title}
        </h3>
        <p className="font-['Lato'] text-[#18191f] text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// ---------- Renovation Card ----------
type RenovationCardProps = {
  image: string;
  title: string;
  description: string;
  isActive: boolean;
};

const RenovationCard = ({ image, title, description, isActive }: RenovationCardProps) => {
  return (
    <div
      className={`transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
      }`}
    >
      <div className="max-w-[900px] mx-auto bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full p-4 md:p-8">
            <Image
              src={image}
              alt={title}
              width={900}
              height={500}
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="w-full p-4 md:p-8 text-center md:text-left">
            <h3 className="font-['Lato'] text-[#996830] text-2xl sm:text-3xl md:text-[34px] font-semibold tracking-wide mb-3 uppercase">
              {title}
            </h3>
            <p className="font-['Lato'] text-[#2c2c2c] text-base sm:text-lg md:text-[22px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- Main Services Component ----------
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);

  const services = [
    {
      image: "/Images/service1.png",
      alt: "Living Room Design",
      title: "Living Room Design",
      description:
        "Transform your living space into a cozy and elegant retreat with our custom design solutions.",
    },
    {
      image: "/Images/service2.png",
      alt: "Modern Kitchen",
      title: "Modern Kitchen",
      description:
        "Create the perfect culinary space with contemporary designs that blend style and functionality.",
    },
    {
      image: "/Images/service3.png",
      alt: "Office Space",
      title: "Office Space",
      description:
        "Design productive work environments that inspire creativity and enhance business performance.",
    },
  ];

  const renovations = [
    {
      image: "/Images/renovation1.png",
      title: "3D Visualization",
      description:
        "Preview your future interiors with photorealistic 3D renders and walkthroughs.",
    },
    {
      image: "/Images/renovation2.png",
      title: "Vastu Compliant Interiors",
      description:
        "Design interiors that harmonize aesthetics with positive energy flow.",
    },
    {
      image: "/Images/renovation3.png",
      title: "Smart Home Interior",
      description:
        "Integrate technology seamlessly into your interiors for modern living.",
    },
    {
      image: "/Images/renovation4.png",
      title: "Furniture Design & Fittings",
      description: "Bespoke furniture crafted to fit your space perfectly.",
    },
    {
      image: "/Images/renovation5.png",
      title: "Modular Kitchen",
      description: "Efficient and stylish kitchens tailored to your lifestyle.",
    },
  ];

  // Scroll logic (only applies on desktop)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768) return; // Disable for mobile
      e.preventDefault();

      if (isScrollingRef.current) return;
      isScrollingRef.current = true;

      if (e.deltaY > 0 && activeIndex < renovations.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
    };

    const container = scrollContainerRef.current;
    if (container) container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      if (container) container.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex, renovations.length]);

  return (
    <div className="bg-[#fffefa] min-h-screen relative mt-8">
      {/* Section 1: Services */}
      <section className="mx-auto px-6 sm:px-10 md:px-[88px] py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center gap-10 sm:gap-14 mb-12 sm:mb-20">
          <h1 className="font-[Playfair Display] text-black text-3xl sm:text-4xl md:text-[56px] leading-tight text-center">
            Our Interior Design Services
          </h1>
          <p className="font-[Urbanist] text-[#18191f] text-base sm:text-lg md:text-[22px] text-center max-w-2xl">
            From cozy homes to smart commercial spaces — we design it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Section 2: Renovation */}
      <section className="px-6 sm:px-10 md:px-[88px] py-16 md:py-20 bg-white">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-[Playfair Display] text-[#2c2c2c] text-3xl sm:text-4xl md:text-[56px] font-light mb-4">
            Renovation & Space Makeover
          </h2>
          <p className="font-[Urbanist] text-[#666] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether it’s a single room or your whole home, we redesign with a
            modern aesthetic and super-functional approach.
          </p>
        </div>

        {/* Scroll Section */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-hidden md:h-[550px]"
        >
          <div
            className={`flex flex-col transition-transform duration-700 ease-out ${
              window.innerWidth < 768 ? "gap-10" : ""
            }`}
            style={
              window.innerWidth >= 768
                ? { transform: `translateY(-${activeIndex * 550}px)` }
                : undefined
            }
          >
            {renovations.map((renovation, index) => (
              <div key={index} className="h-auto md:h-[550px] flex justify-center items-center w-full">
                <RenovationCard {...renovation} isActive={index === activeIndex} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Before & After */}
      {/* <section className="px-6 sm:px-10 md:px-[88px] py-16 bg-white">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-[Playfair Display] text-[#2c2c2c] text-3xl sm:text-4xl md:text-[56px] font-thin mb-4">
            Before & After Design Magic
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how we breathe life into lifeless spaces. From grayscale walls to vivid vibes —
            our designs don’t just decorate, they transform.
            <br />
            <strong>From Dull to Dynamic.</strong>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {[
            "/Images/Rectangle1.png",
            "/Images/Rectangle2.png",
            "/Images/Rectangle3.png",
            "/Images/Rectangle4.png",
            "/Images/Rectangle5.png",
          ].map((src, index) => (
            <div
              key={index}
              className="group grayscale hover:grayscale-0 transition-all duration-500 ease-in-out overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 w-[150px] sm:w-[200px] md:w-[250px] h-[250px] sm:h-[350px] md:h-[450px]"
            >
              <Image
                src={src}
                alt="Before After"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section> */}

      <section className="px-[88px] py-20 bg-white">
   <div className="text-center mb-16 text-4xl font-[Playfair Display] text-[#2c2c2c] text-[56px] font-thin">
       Before & After Design Magic
     <h2 className="font-[Urbanist] text-[48px] font-semibold mb-4 text-gray-800">
     </h2>
     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
       See how we breathe life into lifeless spaces. From grayscale walls to vivid vibes,
       <br />
       our designs do not just decorate they transform.
       <br />
       <strong>From Dull to Dynamic.</strong>
     </p>
   </div>

   <div className="flex flex-wrap justify-center gap-8">
    {[
      {
        src: "/Images/Rectangle1.png",
       
      },
      {
        src: "/Images/Rectangle2.png",
       
      },
      {
        src: "/Images/Rectangle3.png",
    
      },
      {
        src: "/Images/Rectangle4.png",
      },
      {
        src: "/Images/Rectangle5.png",
       
      },

    ].map((item, index) => (
      <div
        key={index}
        className="group grayscale hover:grayscale-0 transition-all duration-500 ease-in-out overflow-hidden  shadow-md hover:shadow-xl transform hover:scale-x-110 w-[180px] hover:w-[320px] h-[450px] flex flex-col items-center text-center "
      >
        <Image
          src={item.src}
          alt='image'
          width={300}
          height={300}
          className="object-cover  w-full h-[450px]  transition-all duration-500"
        />
       
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Services;

