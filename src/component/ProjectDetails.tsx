// 'use client';
// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface Project {
//   slug: string;
//   title: string;
//   description: string;
//   propertyType: string;
//   area: string;
//   layout: string;
//   location: string;
//   designHighlights: string[];
//   beforeImageUrl: string;
//   afterImageUrl: string;
//   imageUrl: string[];
// }

// export default function ProjectDetails({ project }: { project: Project }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const gallery = project.imageUrl.filter(img => img && img.trim() !== '');
//   const finalGallery = gallery.length > 0 
//     ? gallery 
//     : [project.afterImageUrl || project.beforeImageUrl].filter(Boolean);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === finalGallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? finalGallery.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
//         <Link 
//           href="/"
//           className="flex items-center text-gray-600 hover:text-gray-900 transition"
//         >
//           <ChevronLeft className="w-5 h-5 mr-1" />
//           Back to Home
//         </Link>
//         <h1 className="text-2xl font-['Playfair_Display'] font-semibold text-[#2d2d2d]">
//           {project.title}
//         </h1>
//         <div className="w-24"></div>
//       </div>

//       {/* Content */}
//       <div className="max-w-[1200px] mx-auto px-6 py-12">
//         {/* Description */}
//         <div className="bg-[#fffefa] p-6 rounded-lg mb-8">
//           <p className="text-gray-700 leading-relaxed text-base">
//             {project.description}
//           </p>
//         </div>

//         {/* Project Details */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Property Type</h3>
//             <p className="text-gray-600">{project.propertyType}</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Area</h3>
//             <p className="text-gray-600">{project.area}</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Layout</h3>
//             <p className="text-gray-600">{project.layout}</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Location</h3>
//             <p className="text-gray-600">{project.location}</p>
//           </div>
//         </div>

//         {/* Design Highlights */}
//         {project.designHighlights && project.designHighlights.length > 0 && (
//           <div className="mb-12">
//             <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-4">
//               Design Highlights
//             </h3>
//             <ul className="space-y-2">
//               {project.designHighlights.map((highlight, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="text-[#b88b4a] mr-2">•</span>
//                   <span className="text-gray-700">{highlight}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Before & After */}
//         {project.beforeImageUrl && project.afterImageUrl && (
//           <div className="mb-12">
//             <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-6 text-center">
//               Before & After Transformation
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <div className="text-center mb-2 font-semibold text-gray-700">Before</div>
//                 <Image
//                   src={project.beforeImageUrl}
//                   alt="Before"
//                   width={600}
//                   height={400}
//                   className="w-full h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//               <div>
//                 <div className="text-center mb-2 font-semibold text-gray-700">After</div>
//                 <Image
//                   src={project.afterImageUrl}
//                   alt="After"
//                   width={600}
//                   height={400}
//                   className="w-full h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Image Gallery */}
//         {finalGallery.length > 0 && (
//           <div className="mb-8">
//             <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-6 text-center">
//               Image Gallery
//             </h3>

//             <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4">
//               <Image
//                 src={finalGallery[currentImageIndex]}
//                 alt={`Image ${currentImageIndex + 1}`}
//                 width={1200}
//                 height={600}
//                 className="w-full h-[600px] object-cover"
//               />

//               {finalGallery.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
//                   >
//                     <ChevronLeft className="w-6 h-6 text-gray-800" />
//                   </button>

//                   <button
//                     onClick={nextImage}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
//                   >
//                     <ChevronRight className="w-6 h-6 text-gray-800" />
//                   </button>

//                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
//                     {currentImageIndex + 1} / {finalGallery.length}
//                   </div>
//                 </>
//               )}
//             </div>

//             {finalGallery.length > 1 && (
//               <div className="grid grid-cols-4 gap-4">
//                 {finalGallery.map((image, index) => (
//                   <Image
//                     key={index}
//                     src={image}
//                     alt={`Thumbnail ${index + 1}`}
//                     width={300}
//                     height={200}
//                     onClick={() => setCurrentImageIndex(index)}
//                     className={`w-full h-32 object-cover rounded-lg cursor-pointer transition ${
//                       currentImageIndex === index
//                         ? 'ring-4 ring-[#b88b4a] opacity-100'
//                         : 'opacity-60 hover:opacity-100'
//                     }`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface Project {
//   slug: string;
//   title: string;
//   description: string;
//   propertyType: string;
//   area: string;
//   layout: string;
//   location: string;
//   designHighlights: string[];
//   beforeImageUrl: string[];
//   afterImageUrl: string[];
//   imageUrl: string[];
// }

// export default function ProjectDetail({ project }: { project: Project }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const gallery = project.imageUrl.filter(img => img && img.trim() !== '');
//   const finalGallery = gallery.length > 0 
//     ? gallery 
//     : [project.afterImageUrl || project.beforeImageUrl].filter(Boolean);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === finalGallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? finalGallery.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
//         <Link 
//           href="/"
//           className="flex items-center text-gray-600 hover:text-gray-900 transition"
//         >
//           <ChevronLeft className="w-5 h-5 mr-1" />
//           Back to Home
//         </Link>
//         <h1 className="text-2xl font-['Playfair_Display'] font-semibold text-[#2d2d2d]">
//           {project.title}
//         </h1>
//         <div className="w-24"></div>
//       </div>

//       {/* Content */}
//       <div className="max-w-[1200px] mx-auto px-6 py-12">
//         {/* Description */}
//         <div className="bg-[#fffefa] p-6 rounded-lg mb-8">
//           <p className="text-gray-700 leading-relaxed text-base">
//             {project.description}
//           </p>
//         </div>

//         {/* Project Details */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Property Type</h3>
//             <p className="text-gray-600">{project.propertyType}</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Area</h3>
//             <p className="text-gray-600">{project.area}</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Layout</h3>
//             <p className="text-gray-600">{project.layout}</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Location</h3>
//             <p className="text-gray-600">{project.location}</p>
//           </div>
//         </div>

//         {/* Design Highlights */}
//         {project.designHighlights && project.designHighlights.length > 0 && (
//           <div className="mb-12">
//             <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-4">
//               Design Highlights
//             </h3>
//             <ul className="space-y-2">
//               {project.designHighlights.map((highlight, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="text-[#b88b4a] mr-2">•</span>
//                   <span className="text-gray-700">{highlight}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Before & After */}
//         {project.beforeImageUrl && project.afterImageUrl && (
//           <div className="mb-12">
//             <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-6 text-center">
//               Before & After Transformation
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <div className="text-center mb-2 font-semibold text-gray-700">Before</div>
//                 <Image
//                   src={project.beforeImageUrl}
//                   alt="Before"
//                   width={600}
//                   height={400}
//                   className="w-full h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//               <div>
//                 <div className="text-center mb-2 font-semibold text-gray-700">After</div>
//                 <Image
//                   src={project.afterImageUrl}
//                   alt="After"
//                   width={600}
//                   height={400}
//                   className="w-full h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Image Gallery */}
//         {finalGallery.length > 0 && (
//           <div className="mb-8">
//             <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-6 text-center">
//               Image Gallery
//             </h3>

//             <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4">
//               <Image
//                 src={finalGallery[currentImageIndex]}
//                 alt={`Image ${currentImageIndex + 1}`}
//                 width={1200}
//                 height={600}
//                 className="w-full h-[600px] object-cover"
//               />

//               {finalGallery.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
//                   >
//                     <ChevronLeft className="w-6 h-6 text-gray-800" />
//                   </button>

//                   <button
//                     onClick={nextImage}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
//                   >
//                     <ChevronRight className="w-6 h-6 text-gray-800" />
//                   </button>

//                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
//                     {currentImageIndex + 1} / {finalGallery.length}
//                   </div>
//                 </>
//               )}
//             </div>

//             {finalGallery.length > 1 && (
//               <div className="grid grid-cols-4 gap-4">
//                 {finalGallery.map((image, index) => (
//                   <Image
//                     key={index}
//                     src={image}
//                     alt={`Thumbnail ${index + 1}`}
//                     width={300}
//                     height={200}
//                     onClick={() => setCurrentImageIndex(index)}
//                     className={`w-full h-32 object-cover rounded-lg cursor-pointer transition ${
//                       currentImageIndex === index
//                         ? 'ring-4 ring-[#b88b4a] opacity-100'
//                         : 'opacity-60 hover:opacity-100'
//                     }`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface Project {
//   slug: string;
//   title: string;
//   description: string;
//   propertyType: string;
//   area: string;
//   layout: string;
//   location: string;
//   designHighlights: string[];
//   beforeImageUrl: string[];
//   afterImageUrl: string[];
//   imageUrl: string[];
// }

// export default function ProjectDetail({ project }: { project: Project }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Combine image gallery: imageUrl + afterImageUrl fallback
//   const gallery = project.imageUrl.length > 0
//     ? project.imageUrl
//     : project.afterImageUrl.length > 0
//     ? project.afterImageUrl
//     : project.beforeImageUrl;

//   const nextImage = () => setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
//   const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
//         <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition">
//           <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
//         </Link>
//         <h1 className="text-2xl font-['Playfair_Display'] font-semibold text-[#2d2d2d]">{project.title}</h1>
//         <div className="w-24"></div>
//       </div>

//       {/* Content */}
//       <div className="max-w-[1200px] mx-auto px-6 py-12">
//         {/* Description */}
//         <div className="bg-[#fffefa] p-6 rounded-lg mb-8">
//           <p className="text-gray-700 leading-relaxed text-base">{project.description}</p>
//         </div>

//         {/* Project Details */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Property Type</h3>
//             <p className="text-gray-600">{project.propertyType}</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Area</h3>
//             <p className="text-gray-600">{project.area}</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Layout</h3>
//             <p className="text-gray-600">{project.layout}</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg border border-gray-200">
//             <h3 className="font-semibold text-[#2d2d2d] mb-2">Location</h3>
//             <p className="text-gray-600">{project.location}</p>
//           </div>
//         </div>

//         {/* Design Highlights */}
//         {project.designHighlights.length > 0 && (
//           <div className="mb-12">
//             <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-4">Design Highlights</h3>
//             <ul className="space-y-2">
//               {project.designHighlights.map((highlight, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="text-[#b88b4a] mr-2">•</span>
//                   <span className="text-gray-700">{highlight}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Before & After */}
//         {project.beforeImageUrl.length > 0 && project.afterImageUrl.length > 0 && (
//           <div className="mb-12">
//             <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-6 text-center">Before & After Transformation</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <div className="text-center mb-2 font-semibold text-gray-700">Before</div>
//                 {project.beforeImageUrl.map((img, idx) => (
//                   <Image
//                     key={idx}
//                     src={img}
//                     alt={`Before ${idx + 1}`}
//                     width={600}
//                     height={400}
//                     className="w-full h-[400px] object-cover rounded-lg mb-4"
//                   />
//                 ))}
//               </div>
//               <div>
//                 <div className="text-center mb-2 font-semibold text-gray-700">After</div>
//                 {project.afterImageUrl.map((img, idx) => (
//                   <Image
//                     key={idx}
//                     src={img}
//                     alt={`After ${idx + 1}`}
//                     width={600}
//                     height={400}
//                     className="w-full h-[400px] object-cover rounded-lg mb-4"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Image Gallery */}
//         {gallery.length > 0 && (
//           <div className="mb-8">
//             <h3 className="text-xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-6 text-center">Image Gallery</h3>

//             <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4">
//               <Image
//                 src={gallery[currentImageIndex]}
//                 alt={`Image ${currentImageIndex + 1}`}
//                 width={1200}
//                 height={600}
//                 className="w-full h-[600px] object-cover"
//               />

//               {gallery.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevImage}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
//                   >
//                     <ChevronLeft className="w-6 h-6 text-gray-800" />
//                   </button>
//                   <button
//                     onClick={nextImage}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
//                   >
//                     <ChevronRight className="w-6 h-6 text-gray-800" />
//                   </button>
//                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
//                     {currentImageIndex + 1} / {gallery.length}
//                   </div>
//                 </>
//               )}
//             </div>

//             {gallery.length > 1 && (
//               <div className="grid grid-cols-4 gap-4">
//                 {gallery.map((img, idx) => (
//                   <Image
//                     key={idx}
//                     src={img}
//                     alt={`Thumbnail ${idx + 1}`}
//                     width={300}
//                     height={200}
//                     onClick={() => setCurrentImageIndex(idx)}
//                     className={`w-full h-32 object-cover rounded-lg cursor-pointer transition ${
//                       currentImageIndex === idx ? 'ring-4 ring-[#b88b4a] opacity-100' : 'opacity-60 hover:opacity-100'
//                     }`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type SliderType from "react-slick";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    propertyType: string;
    area: string;
    layout: string;
    location: string;
    designHighlights: string[];
    imageUrl: string[]; // images for top slider
    beforeImageUrl: string[];
    afterImageUrl: string[];
  };
}



const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const sliderRef = useRef<SliderType>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // custom buttons use kar rahe hain
    adaptiveHeight: true,
  };

  return (
    <div className="w-full mx-auto px-4 py-10 space-y-12 bg-[#fffefa]">

      {/* ================= Top Continuous Scroll Slider ================= */}
      <section className="w-full py-20 overflow-hidden ">
        <div className="relative">
          <div className="flex gap-6 animate-scroll px-6">
            {/* Original Set */}
            <div className="flex gap-6 min-w-max">
              {project.imageUrl.map((img, idx) => (
                <div
                  key={idx}
                  className="w-[400px] h-[300px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex-shrink-0"
                >
                  <Image
                    src={img}
                    alt={`Interior ${idx + 1}`}
                    height={300}
                    width={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate Set for seamless loop */}
            <div className="flex gap-6 min-w-max" aria-hidden="true">
              {project.imageUrl.map((img, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="w-[400px] h-[300px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex-shrink-0"
                >
                  <Image
                    src={img}
                    alt={`Interior duplicate ${idx + 1}`}
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

      {/* ================= Title & Description ================= */}
      <div className="space-y-8 px-28 mx-auto ">
        {/* Title */}
        <h1 className="text-4xl md:text-4xl font-[Playfair ] font-bold text-gray-900">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-gray-700  font-[Urbanist] text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Property Details - Single Column */}
        <div className="flex flex-col gap-3 text-gray-800 font-[Urbanist]">
          <div>
            <span className="font-semibold">Property Type:</span> {project.propertyType}
          </div>
          <div>
            <span className="font-semibold">Area:</span> {project.area}
          </div>
          <div>
            <span className="font-semibold">Layout:</span> {project.layout}
          </div>
          <div>
            <span className="font-semibold">Location:</span> {project.location}
          </div>
        </div>

        {/* Design Highlights with Star */}
        <div className="mt-6 font-[Urbanist]">
          <h2 className="text-[20px] font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-yellow-500 text-2xl">★</span> Design Highlights
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            {project.designHighlights.map((highlight: string, idx: number) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>



      {/* ================= Before & After Carousel ================= */}
      <div className="relative space-y-6 px-10 md:px-28">
      <h2 className="text-3xl font-[Playfair] font-semibold text-black mb-6">
        Image Gallery
      </h2>

      <Slider ref={sliderRef} {...settings}>
        {project.beforeImageUrl.map((beforeImg, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 items-center">
            {/* BEFORE IMAGE */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-center text-[22px] font-semibold text-gray-700 mb-2 font-[Urbanist]">Before the transformation</div>
              <div className="w-full h-[300px]  md:h-[400px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={beforeImg}
                  alt={`Before ${idx + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* AFTER IMAGE */}
            {project.afterImageUrl[idx] && (
              <div className="flex-1 flex flex-col items-center py-6">
                <div className="text-center text-[22px] font-semibold text-gray-700 mb-2 font-[Urbanist]">After the transformation</div>
                <div className="w-full h-[300px]  md:h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={project.afterImageUrl[idx]}
                    alt={`After ${idx + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-between absolute top-1/2 left-6 right-6 transform -translate-y-1/2 pointer-events-none">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="pointer-events-auto bg-[#996830] hover:bg-[#7d5426] text-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="pointer-events-auto bg-[#996830] hover:bg-[#7d5426] text-white rounded-full p-2 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>    </div>
  );
};

export default ProjectDetail;
