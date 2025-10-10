"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  mainImage?: string;
  hoverImage?: string;
  title: string;
  description: string;
};

export default function RecentProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=6");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjects(data.projects || []); // Adjust based on API response shape
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-24 bg-[#fefcf8] text-center">
        <p className="text-[#b88b4a]">Loading recent projects...</p>
      </section>
    );
  }

  return (
    <section className="w-full py-24 bg-[#fefcf8]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-22 px-6">
        {/* Left section */}
        <div>
          <p className="uppercase text-[#b88b4a] tracking-widest mb-4 font-semibold">
            Recent Works
          </p>
          <h2 className="text-[#2d2d2d] font-['Playfair_Display'] text-[48px] font-semibold leading-snug mb-8">
            Some of our crafts<br />made with love
          </h2>

          {projects[0] && (
            <>
              <div className="relative w-full h-[480px] overflow-hidden shadow-lg group">
                <Image
                  src={projects[0].mainImage || "/Images/image1.png"}
                  alt={projects[0].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                />
                {projects[0].hoverImage && (
                  <Image
                    src={projects[0].hoverImage}
                    alt={`${projects[0].title} Hover`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                  />
                )}
              </div>

              <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-6">
                {projects[0].title}
              </h3>
              <p className="text-[#555] text-[16px] mt-2 leading-relaxed">
                {projects[0].description}
              </p>

              <Link href="/contact-us">
                <button className="mt-8 bg-[#9e7b47] hover:bg-[#83673b] text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide transition">
                  Contact Us ↗
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-10">
          {projects.slice(1, 3).map((project, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full h-[390px] overflow-hidden shadow-lg group">
                <Image
                  src={project.mainImage || "/Images/fallback.png"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                />
                {project.hoverImage && (
                  <Image
                    src={project.hoverImage}
                    alt={`${project.title} Hover`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover absolute top-full left-0 transition-transform duration-700 ease-in-out group-hover:-translate-y-full"
                  />
                )}
              </div>
              <h3 className="text-[#2d2d2d] text-[22px] font-semibold mt-4">
                {project.title}
              </h3>
              <p className="text-[#555] text-[16px] mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
