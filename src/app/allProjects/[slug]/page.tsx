import Image from "next/image";

interface ProjectProps {
  params: {
    slug: string;
  };
}

interface ProjectDetail {
  title: string;
  description: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  imageUrl?: string[];
  propertyType?: string;
  area?: string;
  layout?: string;
  location?: string;
  designHighlights?: string[];
}

export default async function ProjectPage({ params }: ProjectProps) {
  const res = await fetch(
    `https://d2j83cbk-4000.inc1.devtunnels.ms/api/projects/${params.slug}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const project: ProjectDetail = data?.data;

  if (!project) return <p className="text-center py-20">Project not found</p>;

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-semibold mb-6">{project.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{project.description}</p>

      {project.beforeImageUrl && (
        <div className="relative w-full h-[500px] mb-10">
          <Image
            src={project.beforeImageUrl}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {project.imageUrl?.map(
          (img, i) =>
            img && (
              <Image
                key={i}
                src={img}
                alt={`${project.title}-${i}`}
                width={600}
                height={400}
                className="w-full h-auto rounded-md"
              />
            )
        )}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
        <ul className="list-disc list-inside text-gray-700">
          {project.propertyType && <li>Property Type: {project.propertyType}</li>}
          {project.area && <li>Area: {project.area}</li>}
          {project.layout && <li>Layout: {project.layout}</li>}
          {project.location && <li>Location: {project.location}</li>}
        </ul>

        {Array.isArray(project.designHighlights) && project.designHighlights.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mt-6 mb-2">Design Highlights</h3>
            <ul className="list-disc list-inside text-gray-700">
              {project.designHighlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
