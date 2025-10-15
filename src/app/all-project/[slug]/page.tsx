
// import ProjectDetailPage from "./ProjectDetailPage";

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   try {
//     const slug = params.slug;

//     const [featureRes, recentRes] = await Promise.all([
//       fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=100', { cache: 'no-store' }),
//       fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=100', { cache: 'no-store' }),
//     ]);

//     if (!featureRes.ok || !recentRes.ok) {
//       return { title: 'Project Not Found' };
//     }

//     const [featureData, recentData] = await Promise.all([
//       featureRes.json(),
//       recentRes.json(),
//     ]);

//     const allProjects = [
//       ...(featureData?.data?.items || []),
//       ...(recentData?.data?.items || []),
//     ];

//     const project = allProjects.find((p) => p.slug === slug);

//     if (!project) {
//       return {
//         title: 'Project Not Found',
//         description: 'This project could not be found on our website.',
//       };
//     }

//     return {
//       title: `${project.title} | Interior Design by Your Company`,
//       description: project.description,
//       openGraph: {
//         title: `${project.title} | Interior Design by Your Company`,
//         description: project.description,
//         images: project.afterImageUrl?.[0]
//           ? [{ url: project.afterImageUrl[0], width: 1200, height: 630, alt: project.title }]
//           : [],
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: project.title,
//         description: project.description,
//         images: project.afterImageUrl?.[0] || '',
//       },
//     };
//   } catch (error) {
//     console.error('Error generating metadata:', error);
//     return { title: 'Project Not Found' };
//   }
// }

// export default function Page({ params }: { params: { slug: string } }) {
//   return <ProjectDetailPage slug={params.slug} />;
// }

import ProjectDetailPage from "./ProjectDetailPage";

type Project = {
  slug: string;
  title: string;
  description?: string;
  afterImageUrl?: string[];
};

// ✅ Helper function to fetch all projects at build time
async function fetchAllProjects(): Promise<Project[]> {
  const [featureRes, recentRes] = await Promise.all([
    fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=100'),
    fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=100'),
  ]);

  if (!featureRes.ok || !recentRes.ok) return [];

  const [featureData, recentData] = await Promise.all([
    featureRes.json(),
    recentRes.json(),
  ]);

  return [
    ...(featureData?.data?.items || []),
    ...(recentData?.data?.items || []),
  ];
}

// ✅ This tells Next.js what slugs to pre-render for static export
export async function generateStaticParams() {
  const projects = await fetchAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

// ✅ This generates metadata per page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const projects = await fetchAllProjects();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project could not be found on our website.",
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
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.afterImageUrl?.[0] || "",
    },
  };
}

// ✅ Your page component
export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectDetailPage slug={params.slug} />;
}
