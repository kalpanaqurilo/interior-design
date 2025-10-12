// import Image from "next/image";

// const LatestProject = () => {

//   return (

// <section className="w-full bg-[#fffefa] py-44 px-10">
//           <div className="max-w-[1300px] mx-auto text-center">
//             {/* Title */}
//             <div className="flex items-center justify-center mb-12">
//               <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
//               <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
//                 Our Latest Projects
//               </h2>
//               <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
//             </div>

//             {/* Projects Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 {
//                   src: "/Images/project1.png",
//                   alt: "Modern Living Room",
//                   title: "Modern Loft Living",
//                   comment:
//                     "A stunning transformation of a lofty space into a contemporary and functional living area.",
//                 },
//                 {
//                   src: "/Images/project2.png",
//                   alt: "Dining Space Design",
//                   title: "Rustic Chic Cottage",
//                   comment: "A cozy cottage with rustic charm and chic accents.",
//                 },
//                 {
//                   src: "/Images/project3.png",
//                   alt: "Artful Interior",
//                   title: "Zen Garden Retreat",
//                   comment:
//                     "A serene retreat combining minimalist design and natural elements.",
//                 },
//                 {
//                   src: "/Images/project4.png",
//                   alt: "Cozy Wooden Room",
//                   title: "Modern Loft Renovation",
//                   comment:
//                     "A contemporary redesign enhancing both comfort and style.",
//                 },
//               ].map((card, index) => (
//                 <div
//                   key={index}
//                   className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
//                 >
//                   <Image
//                     src={card.src}
//                     alt={card.alt}
//                     width={400}
//                     height={400}
//                     className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* Floating Comment Bubble */}
//                   <div className="absolute top-6  left-1/2 -translate-x-1/2 mt-40 opacity-0 translate-y-2
//               group-hover:opacity-100 group-hover:translate-y-0
//               transition-all duration-300 z-10">
//                     <div className="relative bg-white text-[#2d2d2d] text-sm font-medium px-4 py-3 rounded-lg shadow-lg w-64">
//                       <div className="font-semibold mb-1 text-[15px]">{card.title}</div>
//                       <div>{card.comment}</div>

//                       {/* Triangle Tail */}
//                       <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-0 h-0
//                   border-l-[6px] border-l-transparent
//                   border-r-[6px] border-r-transparent
//                   border-t-[6px] border-t-white"></div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//   );
// }

// export default LatestProject;

// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// import Image from 'next/image';

// // Types for API Response
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

// interface ApiResponse {
//   status: boolean;
//   message: string;
//   data: {
//     items: Project[];
//   };
// }

// const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
//   <div
//     onClick={onClick}
//     className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
//   >
//     <Image
//       src={project.afterImageUrl || project.beforeImageUrl}
//       alt={project.title}
//       width={400}
//       height={400}
//       className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
//     />
    
//     {/* Floating Comment Bubble - Cloud Symbol */}
//     <div className="absolute top-6 left-1/2 -translate-x-1/2 mt-40 opacity-0 translate-y-2
//       group-hover:opacity-100 group-hover:translate-y-0
//       transition-all duration-300 z-10">
//       <div className="relative bg-white text-[#2d2d2d] text-sm font-medium px-4 py-3 rounded-lg shadow-lg w-64">
//         <div className="font-semibold mb-1 text-[15px]">{project.title}</div>
//         <div className="text-xs line-clamp-3">
//           {project.description}
//         </div>
        
//         {/* Triangle Tail - Cloud Bottom */}
//         <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-0 h-0
//           border-l-[6px] border-l-transparent
//           border-r-[6px] border-r-transparent
//           border-t-[6px] border-t-white"></div>
//       </div>
//     </div>
//   </div>
// );

// const ProjectDetailPage = ({ project, onClose }: { project: Project; onClose: () => void }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
//   // Filter out empty strings and create gallery
//   const gallery = project.imageUrl.filter(img => img && img.trim() !== '');
  
//   // If no images in gallery, use afterImageUrl or beforeImageUrl
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
//     <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
//       {/* Header */}
//       <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
//         <button
//           onClick={onClose}
//           className="flex items-center text-gray-600 hover:text-gray-900 transition"
//         >
//           <ChevronLeft className="w-5 h-5 mr-1" />
//           Back
//         </button>
//         <h1 className="text-2xl font-['Playfair_Display'] font-semibold text-[#2d2d2d]">
//           {project.title}
//         </h1>
//         <button
//           onClick={onClose}
//           className="text-gray-600 hover:text-gray-900 transition"
//         >
//           <X className="w-6 h-6" />
//         </button>
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

//         {/* Before & After Section */}
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
//                   alt="Before transformation"
//                   width={600}
//                   height={400}
//                   className="w-full h-[400px] object-cover rounded-lg"
//                 />
//               </div>
//               <div>
//                 <div className="text-center mb-2 font-semibold text-gray-700">After</div>
//                 <Image
//                   src={project.afterImageUrl}
//                   alt="After transformation"
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
            
//             {/* Main Image with Navigation */}
//             <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4">
//               <Image
//                 src={finalGallery[currentImageIndex]}
//                 alt={`${project.title} - Image ${currentImageIndex + 1}`}
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

//             {/* Thumbnail Gallery */}
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
// };

// const LatestProject = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
//     <>
//       {selectedProject ? (
//         <ProjectDetailPage 
//           project={selectedProject} 
//           onClose={() => setSelectedProject(null)} 
//         />
//       ) : (
//         <section className="w-full bg-[#fffefa] py-44 px-10">
//           <div className="max-w-[1300px] mx-auto text-center">
//             {/* Title */}
//             <div className="flex items-center justify-center mb-12">
//               <span className="w-16 h-[2px] bg-[#b88b4a] mr-4"></span>
//               <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[42px] font-semibold">
//                 Our Latest Projects
//               </h2>
//               <span className="w-16 h-[2px] bg-[#b88b4a] ml-4"></span>
//             </div>

//             {/* Projects Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {projects.map((project) => (
//                 <ProjectCard
//                   key={project.slug}
//                   project={project}
//                   onClick={() => setSelectedProject(project)}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </>
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
  beforeImageUrl: string;
  afterImageUrl: string;
  imageUrl: string[];
}

interface ApiResponse {
  status: boolean;
  message: string;
  data: {
    items: Project[];
  };
}

const ProjectCard = ({ project }: { project: Project }) => (
  <Link href={`/all-project/${project.slug}`}>
    <div className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl">
      <Image
        src={project.afterImageUrl || project.beforeImageUrl}
        alt={project.title}
        width={400}
        height={400}
        className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Floating Comment Bubble - Cloud Symbol */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 mt-40 opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-300 z-10">
        <div className="relative bg-white text-[#2d2d2d] text-sm font-medium px-4 py-3 rounded-lg shadow-lg w-64">
          <div className="font-semibold mb-1 text-[15px]">{project.title}</div>
          <div className="text-xs line-clamp-3">
            {project.description}
          </div>
          
          {/* Triangle Tail - Cloud Bottom */}
          <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-0 h-0
            border-l-[6px] border-l-transparent
            border-r-[6px] border-r-transparent
            border-t-[6px] border-t-white"></div>
        </div>
      </div>
    </div>
  </Link>
);

const LatestProject = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=6');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data: ApiResponse = await response.json();
        
        if (data.status && data.data && data.data.items) {
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
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProject;