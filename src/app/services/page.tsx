

// import React from "react";
// import Image from "next/image";

// type ServiceCardProps = {
//   image: string;
//   alt: string;
//   title: string;
//   description: string;
// };

// const ServiceCard = ({ image, alt, title, description }: ServiceCardProps) => {
//   return (
//     <div className="  overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-shadow duration-300 group relative h-[500px] ">
//       <div className="absolute inset-0 flex flex-col">
//         {/* Image container with fold effect */}
//           <Image
//             src={image}
//             alt={alt}
//             width={500}
//             height={600}
//             className="object-contain"
//             style={{ objectFit: "cover" }}
//           />
        
//         {/* Content below - revealed on hover */}
//         <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transition-all duration-700 ease-in-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
//           <h3 className="font-['Lato',Helvetica] font-bold text-[#18191f] text-2xl mb-3">
//             {title}
//           </h3>
//           <p className="font-['Lato',Helvetica] font-normal text-[#18191f] text-base leading-relaxed">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   const services = [
//     {
//       image: "/Images/service1.png",
//       alt: "Living Room Design",
//       title: "Living Room Design",
//       description: "Transform your living space into a cozy and elegant retreat with our custom design solutions."
//     },
//     {
//       image: "/Images/service2.png",
//       alt: "Modern Kitchen",
//       title: "Modern Kitchen",
//       description: "Create the perfect culinary space with contemporary designs that blend style and functionality."
//     },
//     {
//       image: "/Images/service3.png",
//       alt: "Office Space",
//       title: "Office Space",
//       description: "Design productive work environments that inspire creativity and enhance business performance."
//     }
//   ];

//   return (
//     // outer border
//     <div className="bg-[#fffefa]  min-h-screen relative mt-8 ">
//       <section className=" mx-auto px-[88px] py-20">
//         <div className="flex flex-col items-center gap-16 mb-20">
//           {/* our interior border */}
//           <div className="flex flex-col items-center gap-6 ">
//             <h1 className="[font-family:'Lato',Helvetica] text-black text-[72px] tracking-[0] leading-[86px] text-center">
//               Our Interior Design Services
//             </h1>
//             <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[28px] tracking-[0] leading-[38px] text-center">
//               From cozy homes to smart commercial spaces — we design it all
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-2  ">
//           {services.map((service, index) => (
//             <ServiceCard
//               key={index}
//               image={service.image}
//               alt={service.alt}
//               title={service.title}
//               description={service.description}
//             />
//           ))}
//         </div>
//       </section>


// // section 2

//       <section>
//         <h2>Renovation & Space Makeover</h2>
//         <p>Transform your space with our expert renovation services, tailored to your style and needs.</p>
// <div>
//   <div className ="flex gap-8 text-center">
//   <Image
//     src="/Images/renovation1.png"
//     alt="renovation1"
//     height={500}
//     width={600}
//     />

//     <h2>3D VISUALIZATION</h2>
//     <p>jhello there how are you </p>
//     </div>

// <div className ="flex gap-8 text-center>

//  <Image
//     src="/Images/renovation2.png"
//     alt="renovation1"
//     height={500}
//     width={600}
//     />

//     <h2>VASTU COMPLIANT INTERIORS</h2>
//     <p>yes im good seeing hello there how are you </p>
// </div>

// <div className ="flex gap-8 text-center">
//      <Image
//     src="/Images/renovation3.png"
//     alt="renovation1"
//     height={500}
//     width={600}
//     />

// <h2>SMART HOME INTERIOR</h2>
//     <p>yes im good seeing hello there how are you  hfhds  djdhdhjdjb jchbyd </p>

// </div>

// <div className ="flex gap-8 text-center">
//      <Image
//     src="/Images/renovation4.png"
//     alt="renovation1"
//     height={500}
//     width={600}
//     />
// <h2>FURNITURE DESIGN & FITTINGS</h2>
//     <p>yes im good seeing hello there how are you  hfhds  djdhdhjdjb jchbyd </p>
// </div>

// <div className ="flex gap-8 text-center">
//      <Image
//     src="/Images/renovation5.png"
//     alt="renovation1"
//     height={500}
//     width={600}

//     />
// <h2>MODULAR KITCHEN</h2>
//     <p>yes im good seeing hello there how are you  hfhds  djdhdhjdjb jchbyd </p>
// </div>

// </div>
//       </section>
//     </div>
//   );
// };

// export default Services;

// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

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
//           height={600}
//           className="object-cover"
//         />

//         {/* Hover reveal content */}
//         <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transition-all duration-700 ease-in-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
//           <h3 className="font-['Lato',Helvetica] font-bold text-[#18191f] text-2xl mb-3">
//             {title}
//           </h3>
//           <p className="font-['Lato',Helvetica] font-normal text-[#18191f] text-base leading-relaxed">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
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
//       description: "Bring your ideas to life with realistic 3D renderings of your dream spaces.",
//     },
//     {
//       image: "/Images/renovation2.png",
//       title: "Vastu Compliant Interiors",
//       description: "Design interiors that harmonize aesthetics with positive energy flow.",
//     },
//     {
//       image: "/Images/renovation3.png",
//       title: "Smart Home Interior",
//       description: "Integrate technology seamlessly into your interiors for modern living.",
//     },
//     {
//       image: "/Images/renovation4.png",
//       title: "Furniture Design & Fittings",
//       description: "Bespoke furniture crafted to fit your space perfectly.",
//     },
//     {
//       image: "/Images/renovation5.png",
//       title: "Modular Kitchen",
//       description: "Efficient and stylish kitchens tailored to your lifestyle.",
//     },
//   ];

//   return (
//     <div className="bg-[#fffefa] min-h-screen relative mt-8">
//       {/* Section 1 */}
//       <section className="mx-auto px-[88px] py-20">
//         <div className="flex flex-col items-center gap-16 mb-20">
//           <div className="flex flex-col items-center gap-6">
//             <h1 className="font-['Lato',Helvetica] text-black text-[72px] leading-[86px] text-center">
//               Our Interior Design Services
//             </h1>
//             <p className="font-['Lato',Helvetica] text-[#18191f] text-[28px] leading-[38px] text-center">
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

//       {/* Section 2 - Renovation */}
//       <section className="px-[88px] py-20 bg-white">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-4">Renovation & Space Makeover</h2>
//           <p className="text-lg text-gray-700">
//             Transform your space with our expert renovation services, tailored to your style and needs.
//           </p>
//         </div>

//         <div className="flex flex-col gap-16">
//           {renovations.map((item, index) => (
//             <motion.div
//               key={index}
//               className={`flex flex-col md:flex-row items-center gap-8 ${
//                 index % 2 === 1 ? "md:flex-row-reverse" : ""
//               }`}
//               initial={{ opacity: 0, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 height={500}
//                 width={600}
//                 className="rounded-2xl shadow-md object-cover"
//               />
//               <div className="text-center md:text-left max-w-lg">
//                 <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type ServiceCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const ServiceCard = ({ image, alt, title, description }: ServiceCardProps) => {
  return (
    <div className="overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-shadow duration-300 group relative h-[500px]">
      <div className="absolute inset-0 flex flex-col">
        <Image
          src={image}
          alt={alt}
          width={500}
          height={500}
          className="w-full h-[500px] object-cover"
          style={{ objectFit: "cover" }}
        />
        {/* Remove duplicate <img> tag, Next.js Image is sufficient */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transition-all duration-700 ease-in-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
          <h3 className="font-['Lato',Helvetica] font-bold text-[#18191f] text-2xl mb-3">
            {title}
          </h3>
          <p className="font-['Lato',Helvetica] text-[#18191f] text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

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
      <div className="max-w-[900px] mx-auto bg-white overflow-hidden ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full  p-8">
            <div className="overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={title}
                width={900}
                height={500}
                className="w-full h-[400px] object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="w-full  p-8 text-center md:text-left">
            <h3 className="font-['Lato',Helvetica] text-[#996830] text-[34px] font-semibold tracking-wide mb-4 uppercase">
              {title}
            </h3>
            <p className="font-['Lato',Helvetica] text-[#2c2c2c] text-[26px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      description:
        "Bespoke furniture crafted to fit your space perfectly.",
    },
    {
      image: "/Images/renovation5.png",
      title: "Modular Kitchen",
      description:
        "Efficient and stylish kitchens tailored to your lifestyle.",
    },
  ];

  // 🧠 Scroll logic fixed to avoid passive event issue
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
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
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeIndex, renovations.length]);

  return (
    <div className="bg-[#fffefa] min-h-screen relative mt-8">
      {/* Section 1 - Services */}
      <section className="mx-auto px-[88px] py-20">
        <div className="flex flex-col items-center gap-16 mb-20">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-['Lato',Helvetica] text-black text-[72px] leading-[86px] text-center">
              Our Interior Design Services
            </h1>
            <p className="font-['Lato',Helvetica] text-[#18191f] text-[28px] leading-[38px] text-center">
              From cozy homes to smart commercial spaces — we design it all
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Section 2 - Renovation with Scroll */}
      <section className="px-[88px] py-20 bg-white ">
        <div className="text-center mb-16">
          <h2 className="font-['Lato',Helvetica] text-[#2c2c2c] text-[56px] font-light tracking-wide mb-4">
            Renovation & Space Makeover
          </h2>
          <p className="font-['Lato',Helvetica] text-[#666] text-[18px] leading-relaxed  mx-auto">
            Whether it&#39;s a single room or your whole home, we redesign with a
            modern, aesthetic, and super-functional approach.
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="relative overflow-hidden h-[450px] "
        >
          <div
            className="flex flex-col  transition-transform duration-700  ease-out"
            style={{ transform: `translateY(-${activeIndex * 550}px)` }}
          >
            {renovations.map((renovation, index) => (
              <div key={index} className="h-[550px] flex  justify-between items-center w-full ">
                <RenovationCard
                  {...renovation}
                  isActive={index === activeIndex}
                  
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        {/* <div className="flex justify-center gap-8 mt-8">
          {renovations.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#996830] w-8"
                  : "bg-[#d4c5b5] hover:bg-[#b8a28e]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}

        {/* Card Counter */}
        <div className="text-center mt-6  ">
          <span className="font-['Lato',Helvetica] text-[#666] text-lg">
           
          </span>
        </div>
      </section>
    </div>
  );
};

export default Services;
