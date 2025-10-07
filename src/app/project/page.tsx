
// "use client";

// import React, { useState, useRef } from "react";
// import { Button } from "@/component/ui/button";

// const Project = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const toggleVideo = () => {
//     if (!videoRef.current) return;

//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="bg-[#fffefa] w-full min-h-screen relative">
//       {/* hero video */}
//       <section className="relative">
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover"
//           src="/Images/project-video.mp4"
//           autoPlay
//           muted
//           loop
//         />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           <Button
//             className="w-[159px] h-[159px] bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition"
//             onClick={toggleVideo}
//           >
//             {isPlaying ? "⏸️" : "▶️"}
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Project;

// "use client";

// import React, { useState, useRef } from "react";

// const Button = ({ className, onClick, children }) => (
//   <button className={className} onClick={onClick}>
//     {children}
//   </button>
// );

// const ProjectCard = ({ title, description, location, images, reverse = false }) => {
//   return (
//     <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} gap-12 items-start mb-32`}>
//       {/* Images Grid */}
//       <div className="w-1/2">
//         <div className="grid grid-cols-2 gap-4">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl overflow-hidden ${
//                 index === 0 ? 'col-span-1' : index === 1 ? 'col-span-1' : 'col-span-2'
//               }`}
//             >
//               <img
//                 src={img}
//                 alt={`${title} ${index + 1}`}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="w-1/2">
//         <h2 className="font-['Lato',Helvetica] text-[#2c2c2c] text-[42px] font-semibold leading-tight mb-6">
//           {title}
//         </h2>
//         <p className="font-['Lato',Helvetica] text-[#666] text-[16px] leading-relaxed mb-6">
//           {description}
//         </p>
//         <div className="flex items-center gap-2 mb-8">
//           <span className="text-red-500 text-xl">📍</span>
//           <span className="font-['Lato',Helvetica] text-[#2c2c2c] text-[16px] font-medium">
//             {location}
//           </span>
//         </div>
//         <button className="font-['Lato',Helvetica] text-[#996830] text-[16px] font-semibold hover:underline flex items-center gap-2">
//           View Project <span>→</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// const Project = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const toggleVideo = () => {
//     if (!videoRef.current) return;

//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const projects = [
//     {
//       title: "The Mehta Residence",
//       description: "A warm, modern living space crafted for a young professional couple. The Mehta Residence showcases a balance of comfort and contemporary elegance. We designed the entire home interior, including a modular kitchen, custom furniture, and soft decor elements. The design theme focused on subtle wooden textures, neutral color palettes, and open, airy layouts.",
//       location: "Gurgaon - 3BHK Apartment",
//       images: [
//         "/Images/mehta1.png",
//         "/Images/mehta2.png",
//         "/Images/mehta3.png",
//         "/Images/mehta4.png",
//       ],
//     },
//     {
//       title: "Greenleaf Office Renovation",
//       description: "Greenleaf, a fast-growing eco-consulting firm, approached us with a clear vision - to create a modern, vibrant and sustainable workspace that inspires productivity and well-being. Their old office was dull, overly corporate and lacked a sense of warmth. Our goal was to reimagine the space into an open, biophilic-inspired environment with minimal waste footprint and maximum creative energy.",
//       location: "Noida | 🌿 2500 sq ft. Workspace",
//       images: [
//         "/Images/greenleaf1.png",
//         "/Images/greenleaf2.png",
//         "/Images/greenleaf3.png",
//         "/Images/greenleaf4.png",
//       ],
//     },
//   ];

//   return (
//     <div className="bg-[#fffefa] w-full min-h-screen relative">
//       {/* Hero Video */}
//       <section className="relative h-[600px]">
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover"
//           src="/Images/project-video.mp4"
//           autoPlay
//           muted
//           loop
//         />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           <Button
//             className="w-[159px] h-[159px] bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition text-4xl"
//             onClick={toggleVideo}
//           >
//             {isPlaying ? "⏸️" : "▶️"}
//           </Button>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="max-w-[1400px] mx-auto px-[88px] py-24">
//         <div className="text-center mb-20">
//           <h1 className="font-['Lato',Helvetica] text-[#2c2c2c] text-[64px] font-bold leading-tight mb-4">
//             Our Featured Projects
//           </h1>
//           <p className="font-['Lato',Helvetica] text-[#666] text-[20px] leading-relaxed max-w-[800px] mx-auto">
//             Explore our portfolio of thoughtfully designed spaces that blend aesthetics with functionality
//           </p>
//         </div>

//         {projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             title={project.title}
//             description={project.description}
//             location={project.location}
//             images={project.images}
//             reverse={index % 2 !== 0}
//           />
//         ))}
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#f5f1e8] py-20">
//         <div className="max-w-[1400px] mx-auto px-[88px] text-center">
//           <h2 className="font-['Lato',Helvetica] text-[#2c2c2c] text-[48px] font-bold mb-6">
//             Ready to Transform Your Space?
//           </h2>
//           <p className="font-['Lato',Helvetica] text-[#666] text-[18px] mb-8">
//             Let's create something beautiful together
//           </p>
//           <button className="bg-[#996830] text-white px-8 py-4 rounded-lg font-['Lato',Helvetica] text-[16px] font-semibold hover:bg-[#7d5426] transition">
//             Start Your Project
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Project;

"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

// ✅ Button Component
const Button = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

// ✅ ProjectCard Component
const ProjectCard = ({
  title,
  description,
  location,
  images,
  reverse = false,
}: {
  title: string;
  description: string;
  location: string;
  images: string[];
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-12 items-start mb-32`}
    >
      {/* Image Grid */}
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                index === 2 ? "col-span-2" : "col-span-1"
              }`}
            >
              <Image
                src={img}
                alt={`${title} image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="font-['Lato',Helvetica] text-[#2c2c2c] text-[42px] font-semibold leading-tight mb-6">
          {title}
        </h2>
        <p className="font-['Lato',Helvetica] text-[#666] text-[16px] leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center gap-2 mb-8">
          <span className="text-red-500 text-xl">📍</span>
          <span className="font-['Lato',Helvetica] text-[#2c2c2c] text-[16px] font-medium">
            {location}
          </span>
        </div>
        <button className="font-['Lato',Helvetica] text-[#996830] text-[16px] font-semibold hover:underline flex items-center gap-2">
          View Project <span>→</span>
        </button>
      </div>
    </div>
  );
};

// ✅ Main Project Page Component
const Project = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const projects = [
    {
      title: "The Mehta Residence",
      description:
        "A warm, modern living space crafted for a young professional couple. The Mehta Residence showcases a balance of comfort and contemporary elegance. We designed the entire home interior, including a modular kitchen, custom furniture, and soft decor elements. The design theme focused on subtle wooden textures, neutral color palettes, and open, airy layouts.",
      location: "Gurgaon - 3BHK Apartment",
      images: [
        "/Images/mehta1.png",
        "/Images/mehta2.png",
        "/Images/mehta3.png",
        "/Images/mehta4.png",
      ],
    },
    {
      title: "Greenleaf Office Renovation",
      description:
        "Greenleaf, a fast-growing eco-consulting firm, approached us with a clear vision — to create a modern, vibrant and sustainable workspace that inspires productivity and well-being. Their old office was dull and overly corporate. Our goal was to reimagine it into a biophilic-inspired environment with minimal waste and maximum creative energy.",
      location: "Noida | 🌿 2500 sq ft. Workspace",
      images: [
        "/Images/greenleaf1.png",
        "/Images/greenleaf2.png",
        "/Images/greenleaf3.png",
        "/Images/greenleaf4.png",
      ],
    },
  ];

  return (
    <div className="bg-[#fffefa] w-full min-h-screen relative">
      {/* 🎥 Hero Section with Video */}
      <section className="relative h-[600px]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/Images/project-video.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button
            className="w-[159px] h-[159px] bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition text-4xl"
            onClick={toggleVideo}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </Button>
        </div>
      </section>

      {/* 🏠 Projects Section */}
      <section className="max-w-[1400px] mx-auto px-[88px] py-24">
        <div className="text-center mb-20">
          <h1 className="font-['Lato',Helvetica] text-[#2c2c2c] text-[64px] font-bold leading-tight mb-4">
            Our Featured Projects
          </h1>
          <p className="font-['Lato',Helvetica] text-[#666] text-[20px] leading-relaxed max-w-[800px] mx-auto">
            Explore our portfolio of thoughtfully designed spaces that blend
            aesthetics with functionality.
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            location={project.location}
            images={project.images}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>

      {/* ✨ Call-To-Action Section */}
      <section className="bg-[#f5f1e8] py-20">
        <div className="max-w-[1400px] mx-auto px-[88px] text-center">
          <h2 className="font-['Lato',Helvetica] text-[#2c2c2c] text-[48px] font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="font-['Lato',Helvetica] text-[#666] text-[18px] mb-8">
            Lets create something beautiful together.
          </p>
          <button className="bg-[#996830] text-white px-8 py-4 rounded-lg font-['Lato',Helvetica] text-[16px] font-semibold hover:bg-[#7d5426] transition">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Project;
