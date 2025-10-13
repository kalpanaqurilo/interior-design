"use client";

import React from "react";

import { Button } from "@/component/ui/button";
import { useRef, useState } from "react";
import Testimonial from "@/component/Testimonial";
import Image from "next/image";
import StatsBanner from "@/component/Stats";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
<<<<<<< HEAD
import RecentProjects from "@/component/RecentProject";
=======
import RecentProjects from "@/component/RecentProjects";
import LatestProject from "@/component/LatestProject";
>>>>>>> 9c33023 (some changes)



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
          <StatsBanner />
        </section>

        {/* section1 */}

        <section>
          <div className="px-28 py-20">
            <h2 className="text-[#444444] font-['Playfair_Display'] text-[55px] text-wrap ">We will make Unique <br />
              Designs for you .</h2>
            <Image
              src="/Images/section2.png"
              alt="section2"
              className=" mt-8"
              width={1300}
              height={1300}
            />

            <p className="text-[#444444] font-['Urbanist'] text-[28px] mt-6 px-2 py-2 text-center">We create designs in a collaborative environment enabling us to deliver the client’s ultimate vision. Our designs are current, yet still possess a timeless style generating broad market appeal</p>
          </div>
        </section>


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



        {/* Recent Works section3 */}

        {/* <section className="w-full py-24 bg-[#fefcf8]">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 px-6">
<<<<<<< HEAD
           
=======
            {/* Left Text Content *
>>>>>>> 9c33023 (some changes)
            <div>
              <p className="uppercase text-[#b88b4a] tracking-widest mb-4 font-semibold">
                Recent Works
              </p>
              <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">
                Some of our crafts<br />made with love
              </h2>

<<<<<<< HEAD
             
=======
              {/* Large Image Card *
>>>>>>> 9c33023 (some changes)
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

              <Link href="/contact-us">
                <button className="mt-8 bg-[#9e7b47] hover:bg-[#83673b] text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide transition">
                  Contact Us ↗
                </button>
              </Link>
            </div>

<<<<<<< HEAD
            
            <div className="flex flex-col gap-10">
             
=======
            {/* Right Project List *
            <div className="flex flex-col gap-10">
              {/* Project 1 *
>>>>>>> 9c33023 (some changes)
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

<<<<<<< HEAD
              
=======
              {/* Project 2 *
>>>>>>> 9c33023 (some changes)
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
<<<<<<< HEAD
        </section>
        {/* <RecentProjects /> */}
=======
        </section> */}
        <RecentProjects />

>>>>>>> 9c33023 (some changes)

        {/* section4 */}

        <section className="flex justify-evenly px-4 py-16">
          <div className="py-16">
            <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">We Don’t Fill Rooms.<br className="text-[#996830] ml-4" /> We Shape Feelings.</h2>
            <p className="text-[#555] text-[16px] mt-2 leading-relaxed">Your home isnt just where you live — its where your life unfolds.<br />
              We design interiors that remember how you like your coffee,<br />
              where the light hits just right in the morning,<br />
              and how silence should feel when you finally get home.</p>
          </div>
          <div>
            <div className="flex gap-6">
              <Image
                src="/Images/lay2.png"
                alt="image"
                height={700}
                width={300}
                className=" mb-12" />

              <Image
                src="/Images/lay1.png"
                alt="image"
                height
                ={700}
                width={300}
                className="mt-12" />

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
              We Design in Layers,<br /> Not Just Layouts
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
              <li>we are here to translate your life into form and feeling.</li>
            </ul>
          </div>
        </section>

        {/* Our Latest Project section 6 */}

        <LatestProject/>

        {/* section 7 */}

        <section className="w-full h-[1210] bg-[#fffefa] py-20 relative">
          <div className="relative w-full flex justify-center items-center mt-10">
            {/* Background Image */}
            <Image
              src="/Images/about.png"
              alt="About Background"
              width={1510}
              height={700}
              className="w-[1510px] h-[700px] object-cover shadow-lg"
            />

            {/* Content Card */}
            <div className="absolute bottom-[-180px] bg-white w-[1300px] flex justify-between px-16 py-14 shadow-lg">
  {/* Left Content */}
  <div className="w-[35%] relative">
    {/* Heading line and About Us */}
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-[2px] bg-[#b88b4a]"></div>
      <p className="text-[#b88b4a] font-[Urbanist] text-xl">About Us</p>
    </div>

    {/* Main heading */}
    <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-bold leading-snug mb-10">
      WHO WE <br /> ARE ?
    </h2>

    {/* Read More Circular Style */}
    <div className=" bottom-[-120px] left-[-40px] w-[140px] h-[140px] flex items-center justify-center relative">
      {/* Spinning Circle Text */}
      <svg width="140" height="140" viewBox="0 0 140 140" className="animate-spin-slow absolute top-0 left-0">
        <defs>
          <path
            id="circlePath"
            d="M70,70 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
          />
        </defs>
        <text fill="#999" fontSize="10" fontFamily="Arial" letterSpacing="2">
          <textPath href="#circlePath" startOffset="0%">
            READ MORE · READ MORE · READ MORE · READ MORE ·
          </textPath>
        </text>
      </svg>
      </div>
<div>
      {/* Arrow inside the circle, at the bottom */}
      <Link href="/about-us">
        <div className="absolute mt-6 text-[#b88b4a] text-6xl cursor-pointer ">
          <IoIosArrowRoundForward />
        </div>
      </Link>
    </div>
  </div>

  {/* Right Content */}
  <div className="w-[60%]">
    <p className="text-[#555] text-[17px] leading-relaxed mb-4">
      At <span className="font-semibold text-[#b88b4a]">Rkaul Design & Build</span>, we believe that great design is more than just aesthetics—it is about creating spaces that reflect your personality, lifestyle, and dreams.
    </p>
    <p className="text-[#555] text-[17px] leading-relaxed ">
      With a team of passionate interior designers, architects, and stylists, we specialize in transforming residential and commercial spaces into timeless, functional, and inspiring environments. Whether it’s a cozy home makeover, a luxury apartment, or a sleek office revamp—we bring creativity, precision, and a personalized touch to every project.
    </p>
  </div>
</div>
          </div>
        </section>

        <section>
          {/* Testimonial Component */}
          <Testimonial />

        </section>
      </main>
    </div>
  );
}
