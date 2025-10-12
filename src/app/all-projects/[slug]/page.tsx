import { notFound } from 'next/navigation';
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
  beforeImageUrl: string;
  afterImageUrl: string;
  imageUrl: string[];
}

async function getProject(slug: string): Promise<Project | null> {
  try {
    // Option 1: Agar aapke paas single project API hai
    const response = await fetch(
      `https://d2j83cbk-4000.inc1.devtunnels.ms/api/projects/${slug}`,
      { cache: 'no-store' }
    );

    if (!response.ok) return null;

    const data = await response.json();
    return data.status ? data.data : null;
  } catch {
    // Option 2: Agar single project API nahi hai, to saare projects fetch karo
    try {
      const response = await fetch(
        'https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=100',
        { cache: 'no-store' }
      );

      const data = await response.json();
      if (data.status && data.data?.items) {
        const project = data.data.items.find((p: Project) => p.slug === slug);
        return project || null;
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
    
    return null;
  }
}

export default async function ProjectPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Your Company Name`,
    description: project.description,
  };
}