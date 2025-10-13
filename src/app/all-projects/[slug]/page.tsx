// import { notFound } from 'next/navigation';
// import ProjectDetail from '@/component/ProjectDetails';

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

// async function getProject(slug: string): Promise<Project | null> {
//   try {
//     // Option 1: Agar aapke paas single project API hai
//     const response = await fetch(
//       `https://d2j83cbk-4000.inc1.devtunnels.ms/api/projects/${slug}`,
//       { cache: 'no-store' }
//     );

//     if (!response.ok) return null;

//     const data = await response.json();
//     return data.status ? data.data : null;
//   } catch {
//     // Option 2: Agar single project API nahi hai, to saare projects fetch karo
//     try {
//       const response = await fetch(
//         'https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=100',
//         { cache: 'no-store' }
//       );

//       const data = await response.json();
//       if (data.status && data.data?.items) {
//         const project = data.data.items.find((p: Project) => p.slug === slug);
//         return project || null;
//       }
//     } catch (err) {
//       console.error('Error fetching projects:', err);
//     }
    
//     return null;
//   }
// }

// export default async function ProjectPage({ 
//   params 
// }: { 
//   params: { slug: string } 
// }) {
//   const project = await getProject(params.slug);

//   if (!project) {
//     notFound();
//   }

//   return <ProjectDetail project={project} />;
// }

// // Metadata for SEO
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const project = await getProject(params.slug);

//   if (!project) {
//     return {
//       title: 'Project Not Found',
//     };
//   }

//   return {
//     title: `${project.title} | Your Company Name`,
//     description: project.description,
//   };
// }


// import PageLoader from "next/dist/client/page-loader";

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

// async function getProject(slug: string): Promise<Project | null> {
//   try {
//     // Option 1: Agar aapke paas single project API hai
//     const response = await fetch(
//       `https://d2j83cbk-4000.inc1.devtunnels.ms/api/projects?limit=6${slug}`,
//       { cache: 'no-store' }
//     );

//     if (!response.ok) return null;

//     const data = await response.json();
//     return data.status ? data.data : null;
//   } catch {
//     // Option 2: Agar single project API nahi hai, to saare projects fetch karo
//     try {
//       const response = await fetch(
//         'https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=100',
//         { cache: 'no-store' }
//       );

//       const data = await response.json();
//       if (data.status && data.data?.items) {
//         const project = data.data.items.find((p: Project) => p.slug === slug);
//         return project || null;
//       }
//     } catch (err) {
//       console.error('Error fetching projects:', err);
//     }
    
//     return null;
//   }
// }

// export default async function ProjectPage({ 
//   params 
// }: { 
//   params: { slug: string } 
// }) {
//   const project = await getProject(params.slug);

  

  
// }

// // Metadata for SEO
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const project = await getProject(params.slug);

//   if (!project) {
//     return {
//       title: 'Project Not Found',
//     };
//   }

//   return {
//     title: `${project.title} | Your Company Name`,
//     description: project.description,
//   };
// }

// import { notFound } from 'next/navigation';
// import ProjectDetail from '@/component/ProjectDetails';

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

// async function getProject(slug: string): Promise<Project | null> {
//   try {
//     const response = await fetch(
//       'https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=6',
//       { 
//         cache: 'no-store',
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       }
//     );

//     if (!response.ok) {
//       console.error('API Response not OK:', response.status);
//       return null;
//     }

//     const data = await response.json();
    
//     console.log('API Response:', data);
//     console.log('Looking for slug:', slug);
    
//     if (data.status && data.data?.items) {
//       const project = data.data.items.find((p: Project) => p.slug === slug);
//       console.log('Found project:', project);
//       return project || null;
//     }
    
//     return null;
//   } catch (error) {
//     console.error('Error fetching project:', error);
//     return null;
//   }
// }

// export default async function ProjectDetailPage({ 
//   params 
// }: { 
//   params: { slug: string } 
// }) {
//   console.log('Page params:', params);
  
//   const project = await getProject(params.slug);

//   if (!project) {
//     console.log('No project found, showing 404');
//     notFound();
//   }

//   return <ProjectDetail project={project} />;
// }

// // Metadata for SEO
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const project = await getProject(params.slug);

//   if (!project) {
//     return {
//       title: 'Project Not Found',
//     };
//   }

//   return {
//     title: `${project.title} | Interior Design`,
//     description: project.description,
//   };
// }

'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ProjectDetail from '@/component/ProjectDetails';

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

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);

        // ✅ Fetch both APIs (Feature + Recent)
        const [featureRes, recentRes] = await Promise.all([
          fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=100', { cache: 'no-store' }),
          fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=100', { cache: 'no-store' }),
        ]);

        if (!featureRes.ok || !recentRes.ok) throw new Error('Failed to fetch');

        const [featureData, recentData] = await Promise.all([
          featureRes.json(),
          recentRes.json(),
        ]);

        // ✅ Merge all project lists
        const allProjects: Project[] = [
          ...(featureData?.data?.items || []),
          ...(recentData?.data?.items || []),
        ];

        // ✅ Find the project by slug
        const foundProject = allProjects.find((p) => p.slug === slug);

        if (foundProject) {
          setProject(foundProject);
        } else {
          console.warn('Project not found for slug:', slug);
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching project:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchProject();
  }, [slug]);

  // ⏳ Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b88b4a] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  // ❌ Error / Not Found
  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffefa]">
        <div className="text-center">
          <h2 className="text-4xl font-['Playfair_Display'] font-semibold text-[#2d2d2d] mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn’t find the project you’re looking for.
          </p>
          <button
            onClick={() => router.push('/')}
            className="bg-[#b88b4a] text-white px-6 py-3 rounded-lg hover:bg-[#a67a3d] transition inline-block"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ✅ Render the detailed project component
  return <ProjectDetail project={project} />;
}

/* -------------------------------------------------------------
   ✅ Dynamic SEO metadata for this page
------------------------------------------------------------- */
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const slug = params.slug;

    // Fetch both APIs for full dataset
    const [featureRes, recentRes] = await Promise.all([
      fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=100', { cache: 'no-store' }),
      fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=100', { cache: 'no-store' }),
    ]);

    if (!featureRes.ok || !recentRes.ok) {
      return { title: 'Project Not Found' };
    }

    const [featureData, recentData] = await Promise.all([
      featureRes.json(),
      recentRes.json(),
    ]);

    // Merge and find project
    const allProjects: Project[] = [
      ...(featureData?.data?.items || []),
      ...(recentData?.data?.items || []),
    ];

    const project = allProjects.find((p) => p.slug === slug);

    if (!project) {
      return {
        title: 'Project Not Found',
        description: 'This project could not be found on our website.',
      };
    }

    return {
      title: `${project.title} | Interior Design by Your Company`,
      description: project.description,
      openGraph: {
        title: `${project.title} | Interior Design by Your Company`,
        description: project.description,
        images: project.afterImageUrl?.[0]
          ? [{ url: project.afterImageUrl[0], width: 1200, height: 630, alt: project.title }]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: project.title,
        description: project.description,
        images: project.afterImageUrl?.[0] || '',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return { title: 'Project Not Found' };
  }
}
