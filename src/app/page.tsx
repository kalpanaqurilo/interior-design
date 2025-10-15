// "use client";

// import React from "react";

// import { Button } from "@/component/ui/button";
// import { useRef, useState } from "react";
// import Testimonial from "@/component/Testimonial";
// import Image from "next/image";
// import StatsBanner from "@/component/Stats";
// import Link from "next/link";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { FaCirclePlay,FaCirclePause  } from "react-icons/fa6";
// import LatestProject from "@/component/LatestProject";
// import FeatureProjects from "@/component/FeatureProjects";


// export default function Home() {

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
//     <div className="bg-[#fffefa] w-full min-h-screen  relative">
//       {/* ✅ HEADER */}

//       {/* ✅ MAIN CONTENT */}
//       <main className="pt-[76px]">
//         {/* Hero Section */}

//         <section className="relative w-full h-[968px]">
//   <video
//     ref={videoRef}
//     className="w-full h-full object-cover"
//     src="/Images/hero-video.mp4"
//     autoPlay
//     muted
//     loop
//   />

//  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//   <Button
//     className="w-[159px] h-[159px] bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition"
//     onClick={toggleVideo}
//   >
//     {isPlaying ? (
//       <FaCirclePause  className="text-white  w-3/4 h-3/4" />
//     ) : (
//       <FaCirclePlay  className="text-white  w-3/4 h-3/4" />
//     )}
//   </Button>
// </div>

// </section>


//         {/* Banner */}

//         <section className="w-full bg-[#0a0f1c] py-8">
//           <StatsBanner />
//         </section>

//         {/* section1 */}

//         <section>
//           <div className="px-28 py-20">
//             <h2 className="text-[#444444] font-['Playfair_Display'] text-[55px] text-wrap ">We will make Unique <br />
//               Designs for you .</h2>
//             <Image
//               src="/Images/section2.png"
//               alt="section2"
//               className=" mt-8"
//               width={1300}
//               height={1300}
//             />

//             <p className="text-[#444444] font-['Urbanist'] text-[28px] mt-6 px-2 py-2 text-center">We create designs in a collaborative environment enabling us to deliver the client’s ultimate vision. Our designs are current, yet still possess a timeless style generating broad market appeal</p>
//           </div>
//         </section>


//         {/* section2 */}

//         <section className=" w-full py-20 ">
//           <div className="absolute bg-white opacity-20 ">
//             <Image
//               src="/Images/section3.png"
//               alt="section3"
//               width={1550}
//               height={1300}
//             />
//           </div>

//           <div className=" relative max-w-[1300px]   mx-auto  mb-16">
//             <div className=" py-14">
//               <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold">
//                 Our Signature Approach
//               </h2>
//               <p className="text-[#555] text-lg mt-4">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
//                 Lorem Ipsum has been.
//               </p>
//             </div>

//             <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-8 ">
//               {/* Card 1 */}
//               <div className="bg-white shadow-lg  rounded-tr-[40px] rounded-bl-[0px] rounded-br-[0px] p-10 text-left hover:-translate-y-2 transition-transform duration-300">
//                 <h3 className="text-[#f39c12] text-[46px] font-bold mb-4">01</h3>
//                 <h4 className="text-[#222] text-[22px] font-semibold mb-2">Statement of the problem</h4>
//                 <p className="text-[#555] text-[16px] leading-relaxed">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
//                 </p>
//               </div>

//               {/* Card 2 */}
//               <div className="bg-white shadow-lg rounded-tr-[40px] rounded-bl-[0px] rounded-br-[0px] p-10 text-left hover:-translate-y-2 transition-transform duration-300">
//                 <h3 className="text-[#f39c12] text-[46px] font-bold mb-4">02</h3>
//                 <h4 className="text-[#222] text-[22px] font-semibold mb-2">Project presentation</h4>
//                 <p className="text-[#555] text-[16px] leading-relaxed">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
//                 </p>
//               </div>

//               {/* Card 3 */}
//               <div className="bg-white shadow-lg  rounded-tr-[40px] rounded-bl-[0px] rounded-br-[0px] p-10 text-left hover:-translate-y-2 transition-transform duration-300">
//                 <h3 className="text-[#f39c12] text-[46px] font-bold mb-4">03</h3>
//                 <h4 className="text-[#222] text-[22px] font-semibold mb-2">Development of renderings</h4>
//                 <p className="text-[#555] text-[16px] leading-relaxed">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Recent Works section3 */}
//         <FeatureProjects/>

//         {/* section4 */}

//         <section className="flex justify-evenly px-4 py-16">
//           <div className="py-16">
//             <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">We Don’t Fill Rooms.<br className="text-[#996830] ml-4" /> We Shape Feelings.</h2>
//             <p className="text-[#555] text-[16px] mt-2 leading-relaxed">Your home isnt just where you live — its where your life unfolds.<br />
//               We design interiors that remember how you like your coffee,<br />
//               where the light hits just right in the morning,<br />
//               and how silence should feel when you finally get home.</p>
//           </div>
//           <div>
//             <div className="flex gap-6">
//               <Image
//                 src="/Images/lay2.png"
//                 alt="image"
//                 height={700}
//                 width={300}
//                 className=" mb-12" />

//               <Image
//                 src="/Images/lay1.png"
//                 alt="image"
//                 height
//                 ={700}
//                 width={300}
//                 className="mt-12" />

//             </div>
//           </div>
//         </section>


//         {/* section5 */}

//         {/* section5 */}
//         <section className="relative py-34 px-30 flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#fffefa]">
//           {/* Image Layer Section */}
//           <div className="relative flex-shrink-0">
//             {/* Background image */}
//             <Image
//               src="/Images/layer1.png"
//               alt="Layer background"
//               width={350}
//               height={350}
//               className="absolute top-16 mt-48 left-0 opacity-80"
//             />
//             {/* Foreground image */}
//             <Image
//               src="/Images/layer2.png"
//               alt="Layer foreground"
//               width={350}
//               height={350}
//               className="relative z-10 ml-34"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="max-w-xl mt-48">
//             <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold leading-tight mb-4">
//               We Design in Layers,<br /> Not Just Layouts
//             </h2>
//             <h3 className="text-[#9e7b47] text-lg font-semibold tracking-wide mb-6">
//               Raw  ·  Refined  ·  Real
//             </h3>
//             <p className="text-[#555] text-[18px] leading-relaxed mb-6">
//               From bare concrete walls to whisper-soft curtains, from sunlit nooks to shadowed calm — every corner tells a story.
//               Whether it is:
//             </p>

//             <ul className="text-[#444] text-[17px] space-y-2">
//               <li>✨ a home that hugs you back,</li>
//               <li>🪴 a kitchen that grows with you,</li>
//               <li>💭 or a workspace that breathes —</li>
//               <li>we are here to translate your life into form and feeling.</li>
//             </ul>
//           </div>
//         </section>

//         {/* Our Latest Project section 6 */}

//         <LatestProject />

//         {/* section 7 */}

//         <section className="w-full h-[1210] bg-[#fffefa] py-20 relative">
//           <div className="relative w-full flex justify-center items-center mt-10">
//             {/* Background Image */}
//             <Image
//               src="/Images/about.png"
//               alt="About Background"
//               width={1510}
//               height={700}
//               className="w-[1510px] h-[700px] object-cover shadow-lg"
//             />

//             {/* Content Card */}
//             <div className="absolute bottom-[-180px] bg-white w-[1300px] flex justify-between px-16 py-14 shadow-lg">
//   {/* Left Content */}
//   <div className="w-[35%] relative">
//     {/* Heading line and About Us */}
//     <div className="flex items-center gap-4 mb-4">
//       <div className="w-10 h-[2px] bg-[#b88b4a]"></div>
//       <p className="text-[#b88b4a] font-[Urbanist] text-xl">About Us</p>
//     </div>

//     {/* Main heading */}
//     <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-bold leading-snug mb-10">
//       WHO WE <br /> ARE ?
//     </h2>

//     {/* Read More Circular Style */}
//     <div className=" bottom-[-120px] left-[-40px] w-[140px] h-[140px] flex items-center justify-center relative">
//       {/* Spinning Circle Text */}
//       <svg width="140" height="140" viewBox="0 0 140 140" className="animate-spin-slow absolute top-0 left-0">
//         <defs>
//           <path
//             id="circlePath"
//             d="M70,70 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
//           />
//         </defs>
//         <text fill="#999" fontSize="10" fontFamily="Arial" letterSpacing="2">
//           <textPath href="#circlePath" startOffset="0%">
//             READ MORE · READ MORE · READ MORE · READ MORE ·
//           </textPath>
//         </text>
//       </svg>
//       </div>
// <div>
//       {/* Arrow inside the circle, at the bottom */}
//       <Link href="/about-us">
//         <div className="absolute mt-6 text-[#b88b4a] text-6xl cursor-pointer ">
//           <IoIosArrowRoundForward />
//         </div>
//       </Link>
//     </div>
//   </div>

//   {/* Right Content */}
//   <div className="w-[60%]">
//     <p className="text-[#555] text-[17px] leading-relaxed mb-4">
//       At <span className="font-semibold text-[#b88b4a]">Rkaul Design & Build</span>, we believe that great design is more than just aesthetics—it is about creating spaces that reflect your personality, lifestyle, and dreams.
//     </p>
//     <p className="text-[#555] text-[17px] leading-relaxed ">
//       With a team of passionate interior designers, architects, and stylists, we specialize in transforming residential and commercial spaces into timeless, functional, and inspiring environments. Whether it’s a cozy home makeover, a luxury apartment, or a sleek office revamp—we bring creativity, precision, and a personalized touch to every project.
//     </p>
//   </div>
// </div>
//           </div>
//         </section>

//         <section>
//           {/* Testimonial Component */}
//           <Testimonial />

//         </section>
//       </main>
//     </div>
//   );
// }

"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/component/ui/button";
import Testimonial from "@/component/Testimonial";
import Image from "next/image";
import StatsBanner from "@/component/Stats";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import LatestProject from "@/component/LatestProject";
import FeatureProjects from "@/component/FeatureProjects";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#fffefa] w-full min-h-screen relative">
      <main className="pt-[76px]">
        {/* HERO SECTION */}
        <section className="relative w-full h-[600px] md:h-[968px]">
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
              className="w-[100px] h-[100px] md:w-[159px] md:h-[159px] bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition"
              onClick={toggleVideo}
            >
              {isPlaying ? (
                <FaCirclePause className="text-white w-3/4 h-3/4" />
              ) : (
                <FaCirclePlay className="text-white w-3/4 h-3/4" />
              )}
            </Button>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="w-full bg-[#0a0f1c] py-8">
          <StatsBanner />
        </section>

        {/* SECTION 1 */}
        <section className="px-6 md:px-28 py-10 md:py-20 text-center">
          <h2 className="text-[#444444] font-['Playfair_Display'] text-[32px] md:text-[55px] leading-snug">
            We will make Unique <br /> Designs for you.
          </h2>
          <div className="mt-8 flex justify-center">
            <Image
              src="/Images/section2.png"
              alt="section2"
              width={1300}
              height={1300}
              className="w-full max-w-[1300px] h-auto"
            />
          </div>
          <p className="text-[#444444] font-['Urbanist'] text-[18px] md:text-[28px] mt-6 px-2 py-2">
            We create designs in a collaborative environment enabling us to
            deliver the client’s ultimate vision. Our designs are current, yet
            still possess a timeless style generating broad market appeal.
          </p>
        </section>

        {/* SECTION 2 */}
        <section className="w-full py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/Images/section3.png"
              alt="section3"
              width={1550}
              height={1300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-[1300px] mx-auto mb-16 px-4 sm:px-6">
            <div className="py-8 md:py-14">
              <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[32px] md:text-[48px] font-semibold">
                Our Signature Approach
              </h2>
              <p className="text-[#555] text-base md:text-lg mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br className="hidden md:block" />
                Lorem Ipsum has been.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="bg-white shadow-lg rounded-tr-[40px] p-8 md:p-10 text-left hover:-translate-y-2 transition-transform duration-300"
                >
                  <h3 className="text-[#f39c12] text-[36px] md:text-[46px] font-bold mb-4">
                    0{num}
                  </h3>
                  <h4 className="text-[#222] text-[20px] md:text-[22px] font-semibold mb-2">
                    {num === 1
                      ? "Statement of the problem"
                      : num === 2
                      ? "Project presentation"
                      : "Development of renderings"}
                  </h4>
                  <p className="text-[#555] text-[15px] md:text-[16px] leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE PROJECTS */}
        <FeatureProjects />

        {/* SECTION 4 */}
        <section className="flex flex-col lg:flex-row items-center justify-evenly px-6 md:px-12 py-16 gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[32px] md:text-[48px] font-semibold leading-snug mb-8">
              We Don’t Fill Rooms. <br /> We Shape Feelings.
            </h2>
            <p className="text-[#555] text-[16px] md:text-[17px] leading-relaxed">
              Your home isn’t just where you live — it’s where your life
              unfolds. <br className="hidden md:block" />
              We design interiors that remember how you like your coffee,
              <br className="hidden md:block" />
              where the light hits just right in the morning, <br />
              and how silence should feel when you finally get home.
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <Image
              src="/Images/lay2.png"
              alt="image"
              height={700}
              width={300}
              className="w-[140px] sm:w-[200px] md:w-[300px] mb-8 md:mb-12"
            />
            <Image
              src="/Images/lay1.png"
              alt="image"
              height={700}
              width={300}
              className="w-[140px] sm:w-[200px] md:w-[300px] mt-8 md:mt-12"
            />
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="relative py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#fffefa]">
          <div className="relative flex-shrink-0">
            <Image
              src="/Images/layer1.png"
              alt="Layer background"
              width={250}
              height={250}
              className="absolute top-8 left-0 opacity-80 hidden sm:block"
            />
            <Image
              src="/Images/layer2.png"
              alt="Layer foreground"
              width={300}
              height={300}
              className="relative z-10 ml-8 sm:ml-16"
            />
          </div>

          <div className="max-w-xl mt-10 lg:mt-48 text-center lg:text-left">
            <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[32px] md:text-[42px] font-semibold leading-tight mb-4">
              We Design in Layers, <br /> Not Just Layouts
            </h2>
            <h3 className="text-[#9e7b47] text-base md:text-lg font-semibold tracking-wide mb-6">
              Raw · Refined · Real
            </h3>
            <p className="text-[#555] text-[16px] md:text-[18px] leading-relaxed mb-6">
              From bare concrete walls to whisper-soft curtains — every corner
              tells a story. Whether it is:
            </p>
            <ul className="text-[#444] text-[15px] md:text-[17px] space-y-2">
              <li>✨ a home that hugs you back,</li>
              <li>🪴 a kitchen that grows with you,</li>
              <li>💭 or a workspace that breathes —</li>
              <li>
                we are here to translate your life into form and feeling.
              </li>
            </ul>
          </div>
        </section>

        {/* LATEST PROJECT */}
        <LatestProject />

        {/* ABOUT SECTION */}
        <section className="w-full bg-[#fffefa] py-20 relative overflow-hidden">
          <div className="relative w-full flex flex-col items-center">
            <Image
              src="/Images/about.png"
              alt="About Background"
              width={1510}
              height={700}
              className="w-full max-w-[1510px] h-auto object-cover shadow-lg"
            />

            <div className="absolute bottom-[-180px] bg-white w-[90%] md:w-[1300px] flex flex-col md:flex-row justify-between px-6 md:px-16 py-10 md:py-14 shadow-lg">
              {/* Left */}
              <div className="md:w-[35%] relative text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-4 mb-4">
                  <div className="w-10 h-[2px] bg-[#b88b4a]" />
                  <p className="text-[#b88b4a] font-[Urbanist] text-lg md:text-xl">
                    About Us
                  </p>
                </div>
                <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[32px] md:text-[42px] font-bold leading-snug mb-8">
                  WHO WE <br /> ARE ?
                </h2>

                <div className="mx-auto md:mx-0 relative w-[120px] h-[120px] md:w-[140px] md:h-[140px]">
                  <svg
                    width="140"
                    height="140"
                    viewBox="0 0 140 140"
                    className="animate-spin-slow absolute top-0 left-0"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M70,70 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
                      />
                    </defs>
                    <text
                      fill="#999"
                      fontSize="10"
                      fontFamily="Arial"
                      letterSpacing="2"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        READ MORE · READ MORE · READ MORE · READ MORE ·
                      </textPath>
                    </text>
                  </svg>
                  <Link href="/about-us">
                    <div className="absolute inset-0 flex items-center justify-center text-[#b88b4a] text-5xl cursor-pointer">
                      <IoIosArrowRoundForward />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="md:w-[60%] mt-10 md:mt-0 text-[#555] text-[15px] md:text-[17px] leading-relaxed">
                <p className="mb-4">
                  At{" "}
                  <span className="font-semibold text-[#b88b4a]">
                    Rkaul Design & Build
                  </span>
                  , we believe that great design is more than just aesthetics—it
                  is about creating spaces that reflect your personality,
                  lifestyle, and dreams.
                </p>
                <p>
                  With a team of passionate interior designers, architects, and
                  stylists, we specialize in transforming residential and
                  commercial spaces into timeless, functional, and inspiring
                  environments. Whether it’s a cozy home makeover, a luxury
                  apartment, or a sleek office revamp—we bring creativity,
                  precision, and a personalized touch to every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section>
          <Testimonial />
        </section>
      </main>
    </div>
  );
}

