"use client";

import React from "react";

import { Button } from "@/component/ui/button";
import { useRef, useState } from "react";
import Image from "next/image";



const projectImages1 = [
  { src: "/image-6.svg", alt: "Image", className: "w-[226px] h-[302px]" },
  { src: "/image-15.svg", alt: "Image", className: "w-[334px] h-[301px]" },
  { src: "/image-16.svg", alt: "Image", className: "w-[191px] h-80" },
  { src: "/image-17.svg", alt: "Image", className: "w-[368px] h-[322px]" },
];

const projectImages2 = [
  { src: "/image-18.svg", alt: "Image", className: "w-[226px] h-[302px]" },
  { src: "/image-19.svg", alt: "Image", className: "w-[334px] h-[301px]" },
  { src: "/image-20.svg", alt: "Image", className: "w-[191px] h-80" },
  { src: "/image-13.svg", alt: "Image", className: "w-[368px] h-[322px]" },
];

const galleryImages = [
  { src: "/rectangle-34627377.svg", alt: "Rectangle", className: "col-span-2 row-span-1" },
  { src: "/rectangle-34627380.svg", alt: "Rectangle", className: "col-span-2 row-span-1" },
  { src: "/rectangle-34627382.svg", alt: "Rectangle", className: "col-span-1 row-span-1" },
  { src: "/rectangle-34627378.svg", alt: "Rectangle", className: "col-span-2 row-span-1" },
  { src: "/rectangle-34627383.svg", alt: "Rectangle", className: "col-span-1 row-span-1" },
  { src: "/rectangle-34627381.svg", alt: "Rectangle", className: "col-span-2 row-span-1" },
  { src: "/rectangle-34627379.svg", alt: "Rectangle", className: "col-span-2 row-span-1" },
];


export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#fffefa] w-full min-h-screen  relative">
      {/* ✅ HEADER */}

      {/* ✅ MAIN CONTENT */}
      <main className="pt-[90px]">
        {/* Hero Section */}


        <section className="relative w-full h-[968px]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/Images/hero-video.mp4"
            autoPlay
            muted
            loop
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Button
              className="w-[159px] h-[159px] bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition"
              onClick={toggleVideo}
            >
              {isPlaying ? "⏸️" : "▶️"}
            </Button>
          </div>
        </section>

        {/* Banner */}

        <section className="w-full bg-[#0a0f1c] py-8">
          <div className="max-w-[1400px] mx-auto grid grid-cols-4 text-center text-white gap-6">
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
              <p className="text-sm mt-2">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">15+</h3>
              <p className="text-sm mt-2">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">50+</h3>
              <p className="text-sm mt-2">Design Awards</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">98%</h3>
              <p className="text-sm mt-2">Client Satisfaction</p>
            </div>
          </div>
        </section>

        {/* section1 */}

        <section>
          <div className="px-28 py-20">
            <h2 className="text-[#444444] font-Playfair Display text-[60px] text-wrap ">We will make Unique <br />
              Designs for you .</h2>
            <Image
              src="/Images/section2.png"
              alt="section2"
              className=" mt-8"
              width={1300}
              height={1300}
            />

            <p className="text-[#444444] font-Urbanist text-[30px] mt-6 px-2 py-2 ">We create designs in a collaborative environment enabling us to deliver the client’s ultimate vision. Our designs are current, yet still possess a timeless style generating broad market appeal</p>
          </div>
        </section>


      

        {/* <section>
          <div>
            <div className="absolute bg-white opacity-20 ">
              <Image
                src="/Images/section3.png"
                alt="section3"
                width={1550}
                height={1300}
              />
            </div>
            <div className="relative px-26 py-26  ">
              <h2 className="text-[#444444] text-bold font-Playfair Display text-[48px]">Our Signature Approach </h2>
              <p className="text-[#444444] px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Atque recusandae numquam incidunt eius nihil nulla, ea perspiciatis <br/>quas qui vero culpa quibusdam dolorem laudantium,  a nam!</p>
            </div>
          </div>
        </section> */}

          {/* section2 */}

<section className=" w-full py-20 ">
<div className="absolute bg-white opacity-20 ">
              <Image
                src="/Images/section3.png"
                alt="section3"
                width={1550}
                height={1300}
              />
            </div>

  <div className=" relative max-w-[1300px]   mx-auto  mb-16">
<div className=" py-14">
    <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold">
      Our Signature Approach
    </h2>
    <p className="text-[#555] text-lg mt-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
      Lorem Ipsum has been.
    </p>
    </div>

  <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-8 ">
    {/* Card 1 */}
    <div className="bg-white shadow-lg  rounded-tr-[40px] rounded-bl-[0px] rounded-br-[0px] p-10 text-left hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-[#f39c12] text-[46px] font-bold mb-4">01</h3>
      <h4 className="text-[#222] text-[22px] font-semibold mb-2">Statement of the problem</h4>
      <p className="text-[#555] text-[16px] leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg rounded-tr-[40px] rounded-bl-[0px] rounded-br-[0px] p-10 text-left hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-[#f39c12] text-[46px] font-bold mb-4">02</h3>
      <h4 className="text-[#222] text-[22px] font-semibold mb-2">Project presentation</h4>
      <p className="text-[#555] text-[16px] leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg  rounded-tr-[40px] rounded-bl-[0px] rounded-br-[0px] p-10 text-left hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-[#f39c12] text-[46px] font-bold mb-4">03</h3>
      <h4 className="text-[#222] text-[22px] font-semibold mb-2">Development of renderings</h4>
      <p className="text-[#555] text-[16px] leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
      </p>
    </div>
  </div>
  </div>
</section>



{/* section3 */}

<section className="w-full py-24 bg-[#fefcf8]">
  <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 px-6">
    {/* Left Text Content */}
    <div>
      <p className="uppercase text-[#b88b4a] tracking-widest mb-4 font-semibold">
        Recent Works
      </p>
      <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">
        Some of our crafts<br />made with love
      </h2>

      {/* Large Image Card */}
      <div className="relative w-full h-[480px] overflow-hidden  shadow-lg group">
        <Image
          src="/Images/image1.png"
          alt="Villa Furnishing & Interior"
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
        />
        <Image
          src="/Images/variant1.png"
          alt="Villa Furnishing & Interior Hover"
          width={600}
          height={400}
          className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
        />
      </div>

      <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-6">
        Villa Furnishing & Interior
      </h3>
      <p className="text-[#555] text-[16px] mt-2 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
        Erat id laoreet posuere etiam morbi.
      </p>

      <button className="mt-8 bg-[#9e7b47] hover:bg-[#83673b] text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide transition">
        Contact Us →
      </button>
    </div>

    {/* Right Project List */}
    <div className="flex flex-col gap-10">
      {/* Project 1 */}
      <div className="flex flex-col">
        <div className="relative w-full h-[390px] overflow-hidden  shadow-lg group">
          <Image
            src="/Images/image2.png"
            alt="Luxury Hotel Renovation"
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
          />
          <Image
            src="/Images/variant2.png"
            alt="Luxury Hotel Renovation Hover"
            width={600}
            height={400}
            className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
          />
        </div>
        <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-4">
          Luxury Hotel Renovation
        </h3>
        <p className="text-[#555] text-[16px] mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
        </p>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col">
        <div className="relative w-full h-[390px] overflow-hidden  shadow-lg group">
          <Image
            src="/Images/image3.png"
            alt="Residence Swimming Pool"
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
          />
          <Image
            src="/Images/variant3.png"
            alt="Residence Swimming Pool Hover"
            width={600}
            height={400}
            className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
          />
        </div>
        <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-4">
          Residence Swimming Pool
        </h3>
        <p className="text-[#555] text-[16px] mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
        </p>
      </div>
    </div>
  </div>
</section>


{/* section4 */}

<section className="flex justify-evenly px-4 py-16">
<div className="py-16">
  <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">We Don’t Fill Rooms.<br/> We Shape Feelings.</h2>
  <p className="text-[#555] text-[16px] mt-2 leading-relaxed">Your home isn't just where you live — it's where your life unfolds.<br/>
We design interiors that remember how you like your coffee,<br/>
where the light hits just right in the morning,<br/>
and how silence should feel when you finally get home.</p>
</div>
<div>
<div className="flex gap-6">
<Image
src="/Images/lay2.png"
alt="image"
height={700}
width={300}
className=" mb-12"/>

<Image
src="/Images/lay1.png"
alt="image"
height={700}
width={300}
className="mt-12"/>

</div>
</div>
</section>


{/* section5 */}

{/* section5 */}
<section className="relative py-34 px-30 flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#fffefa]">
  {/* Image Layer Section */}
  <div className="relative flex-shrink-0">
    {/* Background image */}
    <Image
      src="/Images/layer1.png"
      alt="Layer background"
      width={350}
      height={350}
      className="absolute top-16 mt-48 left-0 opacity-80"
    />
    {/* Foreground image */}
    <Image
      src="/Images/layer2.png"
      alt="Layer foreground"
      width={350}
      height={350}
      className="relative z-10 ml-34"
    />
  </div>

  {/* Text Section */}
  <div className="max-w-xl mt-48">
    <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold leading-tight mb-4">
      We Design in Layers,<br/> Not Just Layouts
    </h2>
    <h3 className="text-[#9e7b47] text-lg font-semibold tracking-wide mb-6">
      Raw  ·  Refined  ·  Real
    </h3>
    <p className="text-[#555] text-[18px] leading-relaxed mb-6">
      From bare concrete walls to whisper-soft curtains, from sunlit nooks to shadowed calm — every corner tells a story. 
      Whether it’s:
    </p>

    <ul className="text-[#444] text-[17px] space-y-2">
      <li>✨ a home that hugs you back,</li>
      <li>🪴 a kitchen that grows with you,</li>
      <li>💭 or a workspace that breathes —</li>
      <li>we're here to translate your life into form and feeling.</li>
    </ul>
  </div>
</section>

{/* section 6 */}

<section className="w-full bg-[#fffefa] py-44 px-10">
  <div className="max-w-[1300px] mx-auto text-center">
    {/* Title */}
    <div className="flex items-center justify-center mb-12">
      <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
      <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
        Our Latest Projects
      </h2>
      <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          src: "/Images/project1.png",
          alt: "Modern Living Room",
          title: "Modern Loft Living",
          comment:
            "A stunning transformation of a lofty space into a contemporary and functional living area.",
        },
        {
          src: "/Images/project2.png",
          alt: "Dining Space Design",
          title: "Rustic Chic Cottage",
          comment: "A cozy cottage with rustic charm and chic accents.",
        },
        {
          src: "/Images/project3.png",
          alt: "Artful Interior",
          title: "Zen Garden Retreat",
          comment:
            "A serene retreat combining minimalist design and natural elements.",
        },
        {
          src: "/Images/project4.png",
          alt: "Cozy Wooden Room",
          title: "Modern Loft Renovation",
          comment:
            "A contemporary redesign enhancing both comfort and style.",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
        >
          <Image
            src={card.src}
            alt={card.alt}
            width={400}
            height={400}
            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Floating Comment Bubble */}
          <div className="absolute top-6  left-1/2 -translate-x-1/2 mt-40 opacity-0 translate-y-2
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300 z-10">
            <div className="relative bg-white text-[#2d2d2d] text-sm font-medium px-4 py-3 rounded-lg shadow-lg w-64">
              <div className="font-semibold mb-1">{card.title}</div>
              <div>{card.comment}</div>

              {/* Triangle Tail */}
              <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-0 h-0
                  border-l-[6px] border-l-transparent
                  border-r-[6px] border-r-transparent
                  border-t-[6px] border-t-white"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




{/* <section className="w-full bg-[#fffefa] py-44 px-10">
  <div className="max-w-[1300px] mx-auto text-center">
    
    <div className="flex items-center justify-center mb-12">
      <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
      <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
        Our Latest Projects
      </h2>
      <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
    </div>

  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <div className="overflow-hidden rounded-lg shadow-md group">
        <Image
          src="/Images/project1.png"
          alt="Modern Living Room"
          width={400}
          height={400}
          className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      
      <div className="overflow-hidden rounded-lg shadow-md group">
        <Image
          src="/Images/project2.png"
          alt="Dining Space Design"
          width={400}
          height={400}
          className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      
      <div className="overflow-hidden rounded-lg shadow-md group">
        <Image
          src="/Images/project3.png"
          alt="Artful Interior"
          width={400}
          height={400}
          className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      
      <div className="overflow-hidden rounded-lg shadow-md group">
        <Image
          src="/Images/project4.png"
          alt="Cozy Wooden Room"
          width={400}
          height={400}
          className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  </div>
</section> */}


{/* section 7 */}

<section className="relative w-full bg-[#fffefa] py-20 px-10">
  <div className="max-w-[1300px] mx-auto  md:grid-cols-2 items-center gap-16">
    
    {/* Left Image */}
    <div className="relative">
      <Image
        src="/Images/about.png"
        alt="Who We Are Interior Design"
        width={600}
        height={600}
        className="rounded-xl shadow-lg w-full h-auto object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="absolute bg-white p-12 rounded-xl shadow-md">
      <p className="uppercase text-[#b88b4a] tracking-[4px] text-sm mb-4 font-semibold">
        About Us
      </p>

      <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-bold leading-tight mb-6">
        Who We Are ?
      </h2>

      <p className="text-[#555] text-[17px] leading-relaxed mb-6">
        At <span className="font-semibold text-[#b88b4a]">Ritual Design & Build</span>, 
        we believe that great design is more than just aesthetics — it’s about creating 
        spaces that reflect your personality, lifestyle, and dreams.
      </p>

      <p className="text-[#555] text-[17px] leading-relaxed">
        With a team of passionate interior designers, architects, and stylists, 
        we specialize in transforming residential and commercial spaces into 
        timeless, functional, and inspiring environments. Whether it’s a cozy home, 
        a modern workspace, or a sleek office interior — we bring creativity, 
        precision, and a personalized touch to every project.
      </p>

      {/* Read More Button */}
      <button className="mt-8 bg-[#b88b4a] text-white px-6 py-3 rounded-md text-sm uppercase tracking-wider hover:bg-[#9c7439] transition-all duration-300">
        Read More →
      </button>
    </div>
  </div>
</section>



        {/* Project Section 1 */}
        {/* <section className="max-w-[1728px] mx-auto px-[204px] py-20">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              {projectImages1.map((image, index) => (
                <img key={index} className={`${image.className} object-cover`} alt={image.alt} src={image.src} />
              ))}
            </div>

            <div className="flex flex-col gap-[56.68px] px-[68.01px]">
              <h2 className="[font-family:'Lato',Helvetica] font-extrabold text-text-gray-900 text-[56.7px] leading-[76.5px]">
                The Mehta Residence
              </h2>
              <p className="[font-family:'Lato',Helvetica] text-[#18191f] text-[25.5px] leading-8">
                A warm, modern living space crafted for a young professional couple, the Mehta Residence
                showcases a perfect blend of functionality and elegance.
              </p>
              <span className="font-bold">📍 Gurgaon – 3BHK Apartment</span>

              <Button className="h-auto w-[262.13px] bg-[#996830] hover:bg-[#7d5426] rounded-[18.42px] py-[30px]">
                <span className="text-white text-[25.5px] font-semibold">View Project</span>
              </Button>
            </div>
          </div>
        </section> */}

        {/* Gallery Section */}
        <section className="max-w-[1728px] mx-auto px-[88px] py-20">
          <div className="grid grid-cols-3 gap-4 mt-20">
            {galleryImages.map((image, index) => (
              <div key={index} className={image.className}>
                <Image className="object-cover rounded-3xl" alt={image.alt} src={image.src} height={100} width={100} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
