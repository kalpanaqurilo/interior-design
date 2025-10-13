// import Image from "next/image";

// const LatestProject = () => {
//     return (
//         <section className="w-full bg-[#fffefa] py-44 px-10">
//             <div className="max-w-[1300px] mx-auto text-center">
//                 {/* Title */}
//                 <div className="flex items-center justify-center mb-12">
//                     <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
//                     <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
//                         Our Latest Projects
//                     </h2>
//                     <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
//                 </div>

//                 {/* Projects Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {[
//                         {
//                             src: "/Images/project1.png",
//                             alt: "Modern Living Room",
//                             title: "Modern Loft Living",
//                             comment:
//                                 "A stunning transformation of a lofty space into a contemporary and functional living area.",
//                         },
//                         {
//                             src: "/Images/project2.png",
//                             alt: "Dining Space Design",
//                             title: "Rustic Chic Cottage",
//                             comment: "A cozy cottage with rustic charm and chic accents.",
//                         },
//                         {
//                             src: "/Images/project3.png",
//                             alt: "Artful Interior",
//                             title: "Zen Garden Retreat",
//                             comment:
//                                 "A serene retreat combining minimalist design and natural elements.",
//                         },
//                         {
//                             src: "/Images/project4.png",
//                             alt: "Cozy Wooden Room",
//                             title: "Modern Loft Renovation",
//                             comment:
//                                 "A contemporary redesign enhancing both comfort and style.",
//                         },
//                     ].map((card, index) => (
//                         <div
//                             key={index}
//                             className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
//                         >
//                             <Image
//                                 src={card.src}
//                                 alt={card.alt}
//                                 width={400}
//                                 height={400}
//                                 className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
//                             />

//                             {/* Floating Comment Bubble */}
//                             <div className="absolute top-6  left-1/2 -translate-x-1/2 mt-40 opacity-0 translate-y-2
//               group-hover:opacity-100 group-hover:translate-y-0
//               transition-all duration-300 z-10">
//                                 <div className="relative bg-white text-[#2d2d2d] text-sm font-medium px-4 py-3 rounded-lg shadow-lg w-64">
//                                     <div className="font-semibold mb-1 text-[15px]">{card.title}</div>
//                                     <div>{card.comment}</div>

//                                     {/* Triangle Tail */}
//                                     <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-0 h-0
//                   border-l-[6px] border-l-transparent
//                   border-r-[6px] border-r-transparent
//                   border-t-[6px] border-t-white"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>


//     );
// }

// export default LatestProject

// 'use client';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

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

// const ProjectCard = ({ project }: { project: Project }) => (
//   <Link href={`/all-project/${project.slug}`}>
//     <div className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl">
//       <Image
//         src={project.afterImageUrl  || project.beforeImageUrl }
//         alt={project.title}
//         width={400}
//         height={400}
//         className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
//       />
      
//       {/* Floating Comment Bubble - Cloud Symbol */}
//       <div className="absolute top-6 left-1/2 -translate-x-1/2 mt-40 opacity-0 translate-y-2
//         group-hover:opacity-100 group-hover:translate-y-0
//         transition-all duration-300 z-10">
//         <div className="relative bg-white text-[#2d2d2d] text-sm font-medium px-4 py-3 rounded-lg shadow-lg w-64">
//           <div className="font-semibold mb-1 text-[15px]">{project.title}</div>
//           <div className="text-xs line-clamp-3">
//             {project.description}
//           </div>
          
//           {/* Triangle Tail - Cloud Bottom */}
//           <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-0 h-0
//             border-l-[6px] border-l-transparent
//             border-r-[6px] border-r-transparent
//             border-t-[6px] border-t-white"></div>
//         </div>
//       </div>
//     </div>
//   </Link>
// );

// const LatestProject = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=6');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch projects');
//         }

//         const data: ApiResponse = await response.json();
        
//         if (data.status && data.data && data.data.items) {
//           setProjects(data.data.items);
//         } else {
//           throw new Error(data.message || 'No projects found');
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Failed to load projects');
//         console.error('Error fetching projects:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return (
//       <section className="w-full bg-[#fffefa] py-44 px-10">
//         <div className="max-w-[1300px] mx-auto text-center">
//           <div className="flex items-center justify-center mb-12">
//             <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
//             <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
//               Our Latest Projects
//             </h2>
//             <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
//           </div>
//           <div className="text-gray-600">Loading projects...</div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="w-full bg-[#fffefa] py-44 px-10">
//         <div className="max-w-[1300px] mx-auto text-center">
//           <div className="flex items-center justify-center mb-12">
//             <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
//             <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
//               Our Latest Projects
//             </h2>
//             <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
//           </div>
//           <div className="text-red-600">Error: {error}</div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="w-full bg-[#fffefa] py-44 px-10">
//       <div className="max-w-[1300px] mx-auto text-center">
//         {/* Title */}
//         <div className="flex items-center justify-center mb-12">
//           <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
//           <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
//             Our Latest Projects
//           </h2>
//           <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {projects.map((project) => (
//             <ProjectCard
//               key={project.slug}
//               project={project}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestProject;

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

const ProjectCard = ({ project }: { project: Project }) => {
  const imageSrc =
    getFirstImage(project.afterImageUrl) ||
    getFirstImage(project.beforeImageUrl) ||
    '/Images/project1.png'; // ✅ fallback

  return (
    <Link href={`/all-project/${project.slug}`}>
      <div className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <Image
          src={imageSrc}
          alt={project.title}
          width={400}
          height={400}
          className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Floating Comment Bubble */}
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 mt-40 opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 z-10"
        >
          <div className="relative bg-white text-[#2d2d2d] text-sm font-medium px-4 py-3 rounded-lg shadow-lg w-64">
            <div className="font-semibold mb-1 text-[15px]">{project.title}</div>
            <div className="text-xs line-clamp-3">{project.description}</div>

            {/* Triangle Tail */}
            <div
              className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-0 h-0
              border-l-[6px] border-l-transparent
              border-r-[6px] border-r-transparent
              border-t-[6px] border-t-white"
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const LatestProject = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=6'
        );

        if (!response.ok) throw new Error('Failed to fetch projects');

        const data: ApiResponse = await response.json();

        if (data.status && data.data?.items) {
          setProjects(data.data.items);
        } else {
          throw new Error(data.message || 'No projects found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // ✅ Loading State
  if (loading) {
    return (
      <section className="w-full bg-[#fffefa] py-44 px-10">
        <div className="max-w-[1300px] mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
            <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
              Our Latest Projects
            </h2>
            <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
          </div>
          <div className="text-gray-600">Loading projects...</div>
        </div>
      </section>
    );
  }

  // ✅ Error State
  if (error) {
    return (
      <section className="w-full bg-[#fffefa] py-44 px-10">
        <div className="max-w-[1300px] mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
            <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
              Our Latest Projects
            </h2>
            <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
          </div>
          <div className="text-red-600">Error: {error}</div>
        </div>
      </section>
    );
  }

  // ✅ Main Render
  return (
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
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
