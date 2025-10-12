


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
  heading,
  list,
  location,
  images,
  reverse = false,
}: {
  title: string;
  description: string;
  heading?: string;
  list?: string;
  location: string;
  images: string[];
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
        } gap-12 items-start mb-18`}
    >
      {/* ✅ Custom Image Layout */}
      <div className="w-full md:w-1/2 flex gap-4">
        {images.length === 3 ? (
          // Special Layout for Mehta Residence 2 (3 images)
          <>
            {/* Left: One Tall Image */}
            <div className="w-1/2 rounded-2xl overflow-hidden">
              <Image
                src={images[0]}
                alt={`${title} image 1`}
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right: Two Stacked Images */}
            <div className="w-1/2 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden h-1/2">
                <Image
                  src={images[1]}
                  alt={`${title} image 2`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-1/2">
                <Image
                  src={images[2]}
                  alt={`${title} image 3`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </>
        ) : (
          // Default Layout for Other Projects
          <>
            {/* Left Column (even-indexed images) */}
            <div className="flex flex-col gap-2 w-1/3">
              {images.filter((_, i) => i % 2 === 0).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden h-[250px]">
                  <Image
                    src={img}
                    alt={`${title} image ${idx + 1}`}
                    width={200}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right Column (odd-indexed images) */}
            <div className="flex flex-col gap-2 w-2/3">
              {images.filter((_, i) => i % 2 !== 0).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden h-[250px]">
                  <Image
                    src={img}
                    alt={`${title} image ${idx + 1}`}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ✅ Text Content */}
      <div className="w-full md:w-1/2 py-20">
        <h2 className="font-['Lato',Helvetica] text-[#2c2c2c] text-[42px] font-semibold leading-tight mb-6">
          {title}
        </h2>
        <p className="font-['Lato',Helvetica] text-[#666] text-[16px] leading-relaxed mb-6">
          {description}
        </p>

        {heading && (
          <h3 className="font-['Lato',Helvetica] text-[#2c2c2c] text-[42px] font-semibold leading-tight mb-6">
            {heading}
          </h3>
        )}

        {list && (
          <ul className="font-['Lato',Helvetica] text-[#666] text-[16px] leading-relaxed mb-6 list-disc pl-5">
            {list.split("\n").map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

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
        "/Images/metha1.png",
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
    {
      title: "The Kapoor Villa",
      description:
        "The Kapoor family wanted their new bungalow to reflect timeless elegance and modern sophistication—with every corner speaking of luxury, comfort, and personality. Our challenge was to balance opulence with warmth creating a space that feels both grand and inviting. The result? A bespoke villa experience that merges architectural finesse with handcrafted interior design.",
      heading: "✨ Design Highlights :",
      list:
        "Double-height foyer with a crystal chandelier and gold accents\nA sunken seating area in the living room, designed for elite entertaining\nWalk-in wardrobe with island dresser in the master suite\nIndoor-outdoor transition in dining space via sliding glass walls\nSmart home integration: lighting, blinds, and climate control",
      location: "📍Noida | 🧱 2500 sq. ft. Workspace",
      images: [
        "/Images/villa1.png",
        "/Images/villa2.png",
        "/Images/villa3.png",
        "/Images/villa4.png",
        "/Images/villa5.png",
        "/Images/villa6.png",
      ],
    },
    // ✅ Mehta Residence 2 (3-image layout)
    {
      title: "The Mehta Residence",
      description:
        "A warm, modern living space crafted for a young professional couple, the Mehta Residence showcases a perfect blend of functionality and elegance. Our team designed the entire home interior, including a modular kitchen, custom furniture, and soft decor elements. The design theme focused on subtle wooden textures, neutral color palettes, and open, clutter-free layouts.",
      location: "📍Gurgaon – 3BHK Apartment",
      images: [
        "/Images/house1.png",
        "/Images/house2.png",
        "/Images/house4.png",
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
            heading={project.heading}
            list={project.list}
            location={project.location}
            images={project.images}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>


      {/* ✨ Call-To-Action Section */}
      <section className=" py-5 ">
        <div className="max-w-[1400px] mx-auto px-[88px] text-center">

          <button className="hover:bg-[#996830]  text-[#996830] hover:text-white px-6 py-2 rounded-lg font-['Lato',Helvetica] text-[16px] font-thin border border-[#996830] transition">
            View All Project
          </button>
        </div>
      </section>
      {/* 
card crousle */}

      <section className="w-full py-20 overflow-hidden bg-[#fffefa]">
  <div className="relative">
    <div className="flex gap-6 animate-scroll px-6">
      {/* First Set */}
      <div className="flex gap-6 min-w-max">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="w-[400px] h-[300px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex-shrink-0"
          >
            <Image
              src={`/Images/slider${num}.png`}
              alt={`Interior ${num}`}
              height={300}
              width={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Duplicate Set (for seamless looping) */}
      <div className="flex gap-6 min-w-max" aria-hidden="true">
        {[6, 7, 1, 2, 3].map((num) => (
          <div
            key={`dup-${num}`}
            className="w-[400px] h-[300px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex-shrink-0"
          >
            <Image
              src={`/Images/slider${num}.png`}
              alt={`Interior ${num}`}
              height={300}
              width={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Project;



