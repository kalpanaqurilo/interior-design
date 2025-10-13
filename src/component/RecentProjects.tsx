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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  description: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
}

const RecentProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          "https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=6"
        );
        const data = await res.json();
        setProjects(data?.data?.items || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) return <p className="text-center py-20">Loading projects...</p>;
  if (!projects.length) return <p className="text-center py-20">No projects found.</p>;

  return (
    <section className="w-full py-24 bg-[#fefcf8]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 px-6">
        {/* Large first project */}
        {projects[0] && (
          <div>
            <p className="uppercase text-[#b88b4a] tracking-widest mb-4 font-semibold">
              Recent Works
            </p>
            <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">
              Some of our crafts<br />made with love
            </h2>

            <Link href={`/project/${projects[0].slug}`}>
              <div className="relative w-full h-[480px] overflow-hidden shadow-lg group cursor-pointer">
                {projects[0].beforeImageUrl && (
                  <Image
                    src={projects[0].beforeImageUrl}
                    alt={projects[0].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                  />
                )}
                {projects[0].afterImageUrl && (
                  <Image
                    src={projects[0].afterImageUrl}
                    alt={`${projects[0].title} hover`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                  />
                )}
              </div>
            </Link>

            <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-6">{projects[0].title}</h3>
            <p className="text-[#555] text-[16px] mt-2 leading-relaxed">{projects[0].description}</p>
          </div>
        )}

        {/* Remaining projects */}
        <div className="flex flex-col gap-10">
          {projects.slice(1).map((project) => (
            <Link key={project.slug} href={`/project/${project.slug}`} className="flex flex-col cursor-pointer">
              <div className="relative w-full h-[390px] overflow-hidden shadow-lg group">
                {project.beforeImageUrl && (
                  <Image
                    src={project.beforeImageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                  />
                )}
                {project.afterImageUrl && (
                  <Image
                    src={project.afterImageUrl}
                    alt={`${project.title} hover`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                  />
                )}
              </div>
              <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-4">{project.title}</h3>
              <p className="text-[#555] text-[16px] mt-2 leading-relaxed">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
