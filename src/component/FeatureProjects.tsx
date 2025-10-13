// import Image from "next/image";
// import Link from "next/link";

// const RecentProjects = () => {
//     return (

// <section className="w-full py-24 bg-[#fefcf8]">
//           <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 px-6">
//             {/* Left Text Content */}
//             <div>
//               <p className="uppercase text-[#b88b4a] tracking-widest mb-4 font-semibold">
//                 Recent Works
//               </p>
//               <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">
//                 Some of our crafts<br />made with love
//               </h2>

//               {/* Large Image Card */}
//               <div className="relative w-full h-[480px] overflow-hidden  shadow-lg group">
//                 <Image
//                   src="/Images/image1.png"
//                   alt="Villa Furnishing & Interior"
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                 />
//                 <Image
//                   src="/Images/variant1.png"
//                   alt="Villa Furnishing & Interior Hover"
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                 />
//               </div>

//               <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-6">
//                 Villa Furnishing & Interior
//               </h3>
//               <p className="text-[#555] text-[16px] mt-2 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
//                 Erat id laoreet posuere etiam morbi.
//               </p>

//               <Link href="/contact-us">
//                 <button className="mt-8 bg-[#9e7b47] hover:bg-[#83673b] text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide transition">
//                   Contact Us ↗
//                 </button>
//               </Link>
//             </div>

//             {/* Right Project List */}
//             <div className="flex flex-col gap-10">
//               {/* Project 1 */}
//               <div className="flex flex-col">
//                 <div className="relative w-full h-[390px] overflow-hidden  shadow-lg group">
//                   <Image
//                     src="/Images/image2.png"
//                     alt="Luxury Hotel Renovation"
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                   <Image
//                     src="/Images/variant2.png"
//                     alt="Luxury Hotel Renovation Hover"
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                 </div>
//                 <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-4">
//                   Luxury Hotel Renovation
//                 </h3>
//                 <p className="text-[#555] text-[16px] mt-2 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
//                 </p>
//               </div>

//               {/* Project 2 */}
//               <div className="flex flex-col">
//                 <div className="relative w-full h-[390px] overflow-hidden  shadow-lg group">
//                   <Image
//                     src="/Images/image3.png"
//                     alt="Residence Swimming Pool"
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                   <Image
//                     src="/Images/variant3.png"
//                     alt="Residence Swimming Pool Hover"
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                 </div>
//                 <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-4">
//                   Residence Swimming Pool
//                 </h3>
//                 <p className="text-[#555] text-[16px] mt-2 leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//     )
// }
// export default RecentProjects;

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface Project {
//   slug: string;
//   title: string;
//   description: string;
//   beforeImageUrl?: string;
//   afterImageUrl?: string;
// }

// const RecentProjects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchProjects() {
//       try {
//         const res = await fetch(
//           "https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=6"
//         );
//         const data = await res.json();
//         setProjects(data?.data?.items || []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProjects();
//   }, []);

//   if (loading) return <p className="text-center py-20">Loading projects...</p>;
//   if (!projects.length) return <p className="text-center py-20">No projects found.</p>;

//   return (
//     <section className="w-full py-24 bg-[#fefcf8]">
//       <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 px-6">
//         {/* Large first project */}
//         {projects[0] && (
//           <div>
//             <p className="uppercase text-[#b88b4a] tracking-widest mb-4 font-semibold">
//               Recent Works
//             </p>
//             <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">
//               Some of our crafts<br />made with love
//             </h2>

//             <Link href={`/project/${projects[0].slug}`}>
//               <div className="relative w-full h-[480px] overflow-hidden shadow-lg group cursor-pointer">
//                 {projects[0].beforeImageUrl && (
//                   <Image
//                     src={projects[0].beforeImageUrl}
//                     alt={projects[0].title}
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                 )}
//                 {projects[0].afterImageUrl && (
//                   <Image
//                     src={projects[0].afterImageUrl}
//                     alt={`${projects[0].title} hover`}
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                 )}
//               </div>
//             </Link>

//             <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-6">{projects[0].title}</h3>
//             <p className="text-[#555] text-[16px] mt-2 leading-relaxed">{projects[0].description}</p>
//           </div>
//         )}

//         {/* Remaining projects */}
//         <div className="flex flex-col gap-10">
//           {projects.slice(1).map((project) => (
//             <Link key={project.slug} href={`/project/${project.slug}`} className="flex flex-col cursor-pointer">
//               <div className="relative w-full h-[390px] overflow-hidden shadow-lg group">
//                 {project.beforeImageUrl && (
//                   <Image
//                     src={project.beforeImageUrl}
//                     alt={project.title}
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                 )}
//                 {project.afterImageUrl && (
//                   <Image
//                     src={project.afterImageUrl}
//                     alt={`${project.title} hover`}
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                 )}
//               </div>
//               <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-4">{project.title}</h3>
//               <p className="text-[#555] text-[16px] mt-2 leading-relaxed">{project.description}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecentProjects;

// 'use client';
// import { useState, useEffect } from 'react';
// import Image from "next/image";
// import Link from "next/link";

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

// interface ApiResponse {
//   status: boolean;
//   message: string;
//   data: {
//     items: Project[];
//   };
// }

// const FeatureProjects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           'https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=6'
//         );
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch projects');
//         }

//         const data: ApiResponse = await response.json();
        
//         if (data.status && data.data && data.data.items) {
//           // First 3 projects fetch karo
//           setProjects(data.data.items.slice(0, 3));
//         }
//       } catch (err) {
//         console.error('Error fetching projects:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return (
//       <section className="w-full py-24 bg-[#fefcf8]">
//         <div className="max-w-[1300px] mx-auto px-6 text-center">
//           <p className="text-gray-600">Loading projects...</p>
//         </div>
//       </section>
//     );
//   }

//   // Agar projects nahi hain
//   if (projects.length === 0) {
//     return (
//       <section className="w-full py-24 bg-[#fefcf8]">
//         <div className="max-w-[1300px] mx-auto px-6 text-center">
//           <p className="text-gray-600">No projects available</p>
//         </div>
//       </section>
//     );
//   }

//   // First project (main/featured)
//   const featuredProject = projects[0];
//   // Remaining projects for right side
//   const sideProjects = projects.slice(1, 3);

//   return (
//     <section className="w-full py-24 bg-[#fefcf8]">
//       <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 px-6">
//         {/* Left Side - Featured Project */}
//         <div>
//           <p className="uppercase text-[#b88b4a] tracking-widest mb-4 font-semibold">
//             Feature Projects
//           </p>
//           <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">
//             Some of our crafts<br />made with love
//           </h2>

//           {/* Featured Project Image with Hover Effect */}
//           <Link href={`/all-project/${featuredProject.slug}`}>
//             <div className="relative w-full h-[480px] overflow-hidden shadow-lg group cursor-pointer">
//               {/* Before Image */}
//               <Image
//                 src={featuredProject.beforeImageUrl || '/Images/image1.png'}
//                 alt={featuredProject.title}
//                 width={600}
//                 height={480}
//                 className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//               />
//               {/* After Image - Hover State */}
//               <Image
//                 src={featuredProject.afterImageUrl}
//                 alt={`${featuredProject.title} - After`}
//                 width={600}
//                 height={480}
//                 className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//               />
//             </div>
//           </Link>

//           <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-6">
//             {featuredProject.title}
//           </h3>
//           <p className="text-[#555] text-[16px] mt-2 leading-relaxed line-clamp-3">
//             {featuredProject.description}
//           </p>

//           <Link href="/contact-us">
//             <button className="mt-8 bg-[#9e7b47] hover:bg-[#83673b] text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide transition">
//               Contact Us ↗
//             </button>
//           </Link>
//         </div>

//         {/* Right Side - Two Projects */}
//         <div className="flex flex-col gap-10">
//           {sideProjects.map((project) => (
//             <div key={project.slug} className="flex flex-col">
//               <Link href={`/all-project/${project.slug}`}>
//                 <div className="relative w-full h-[390px] overflow-hidden shadow-lg group cursor-pointer">
//                   {/* Before Image */}
//                   <Image
//                     src={project.beforeImageUrl}
//                     alt={project.title}
//                     width={600}
//                     height={390}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                   {/* After Image - Hover State */}
//                   <Image
//                     src={project.afterImageUrl}
//                     alt={`${project.title} - After`}
//                     width={600}
//                     height={390}
//                     className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
//                   />
//                 </div>
//               </Link>

//               <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-4">
//                 {project.title}
//               </h3>
//               <p className="text-[#555] text-[16px] mt-2 leading-relaxed line-clamp-2">
//                 {project.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureProjects;

'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  description: string;
  propertyType: string;
  area: string;
  layout: string;
  location: string;
  designHighlights: string[];
  beforeImageUrl: string[];
  afterImageUrl: string[];
  imageUrl: string[];
}

interface ApiResponse {
  status: boolean;
  message: string;
  data: {
    items: Project[];
  };
}

// ✅ Helper function to safely get first valid image
const getFirstImage = (arr?: string[]): string | null => {
  if (!arr || arr.length === 0) return null;
  const first = arr[0]?.trim();
  if (!first || first === "null" || first === "undefined") return null;
  return first;
};

const FeatureProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=6'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data: ApiResponse = await response.json();
        
        if (data.status && data.data && data.data.items) {
          setProjects(data.data.items.slice(0, 3)); // Take only first 3
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-24 bg-[#fefcf8]">
        <div className="max-w-[1300px] mx-auto px-6 text-center">
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="w-full py-24 bg-[#fefcf8]">
        <div className="max-w-[1300px] mx-auto px-6 text-center">
          <p className="text-gray-600">No projects available</p>
        </div>
      </section>
    );
  }

  // ✅ Featured project
  const featuredProject = projects[0];
  const sideProjects = projects.slice(1, 3);

  return (
    <section className="w-full py-24 bg-[#fefcf8]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 px-6">

        {/* Left - Featured Project */}
        <div>
          <p className="uppercase text-[#b88b4a] tracking-widest mb-4 font-semibold">
            Feature Projects
          </p>
          <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">
            Some of our crafts<br />made with love
          </h2>

          <Link href={`/all-project/${featuredProject.slug}`}>
            <div className="relative w-full h-[480px] overflow-hidden shadow-lg group cursor-pointer">
              {/* Before Image */}
              <Image
                src={getFirstImage(featuredProject.beforeImageUrl) || '/Images/image1.png'}
                alt={featuredProject.title}
                width={600}
                height={480}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
              />
              {/* After Image */}
              <Image
                src={
                  getFirstImage(featuredProject.afterImageUrl) ||
                  getFirstImage(featuredProject.beforeImageUrl) ||
                  '/Images/image1.png'
                }
                alt={`${featuredProject.title} - After`}
                width={600}
                height={480}
                className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
              />
            </div>
          </Link>

          <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-6">
            {featuredProject.title}
          </h3>
          <p className="text-[#555] text-[16px] mt-2 leading-relaxed line-clamp-3">
            {featuredProject.description}
          </p>

          <Link href="/contact-us">
            <button className="mt-8 bg-[#9e7b47] hover:bg-[#83673b] text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide transition">
              Contact Us ↗
            </button>
          </Link>
        </div>

        {/* Right - Two Projects */}
        <div className="flex flex-col gap-10">
          {sideProjects.map((project) => (
            <div key={project.slug} className="flex flex-col">
              <Link href={`/all-project/${project.slug}`}>
                <div className="relative w-full h-[390px] overflow-hidden shadow-lg group cursor-pointer">
                  <Image
                    src={getFirstImage(project.beforeImageUrl) || '/Images/image1.png'}
                    alt={project.title}
                    width={600}
                    height={390}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                  />
                  <Image
                    src={
                      getFirstImage(project.afterImageUrl) ||
                      getFirstImage(project.beforeImageUrl) ||
                      '/Images/image1.png'
                    }
                    alt={`${project.title} - After`}
                    width={600}
                    height={390}
                    className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                  />
                </div>
              </Link>

              <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-4">
                {project.title}
              </h3>
              <p className="text-[#555] text-[16px] mt-2 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;
