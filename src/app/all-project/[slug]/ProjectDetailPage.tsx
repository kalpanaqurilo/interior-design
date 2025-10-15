'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);

        const [featureRes, recentRes] = await Promise.all([
          fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/feature-projects?limit=100', { cache: 'no-store' }),
          fetch('https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=100', { cache: 'no-store' }),
        ]);

        if (!featureRes.ok || !recentRes.ok) throw new Error('Failed to fetch');

        const [featureData, recentData] = await Promise.all([
          featureRes.json(),
          recentRes.json(),
        ]);

        const allProjects: Project[] = [
          ...(featureData?.data?.items || []),
          ...(recentData?.data?.items || []),
        ];

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffefa]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b88b4a] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

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

  return <ProjectDetail project={project} />;
}
