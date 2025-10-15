"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string[];
  beforeImageUrl: string[];
  afterImageUrl: string[];
  designHighlights?: string[];
}

const ProjectCard = ({ project, reverse }: { project: Project; reverse?: boolean }) => {
  const { title, description, location, imageUrl } = project;

  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} gap-12 items-start mb-18`}>
      {/* Image grid */}
      <div className="w-full md:w-1/2 flex gap-4">
        {imageUrl.length === 3 ? (
          <>
            {/* Special 3-image layout */}
            <div className="w-1/2 rounded-2xl overflow-hidden">
              <Image src={imageUrl[0]} alt={title} width={400} height={500} className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden h-1/2">
                <Image src={imageUrl[1]} alt={title} width={400} height={250} className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="rounded-2xl overflow-hidden h-1/2">
                <Image src={imageUrl[2]} alt={title} width={400} height={250} className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Default grid layout */}
            <div className="flex flex-col gap-2 w-1/3">
              {imageUrl.filter((_, i) => i % 2 === 0).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden h-[250px]">
                  <Image src={img} alt={`${title} image ${idx + 1}`} width={200} height={250} className="w-full h-full object-cover rounded-2xl" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 w-2/3">
              {imageUrl.filter((_, i) => i % 2 !== 0).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden h-[250px]">
                  <Image src={img} alt={`${title} image ${idx + 1}`} width={400} height={250} className="w-full h-full object-cover rounded-2xl" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Text content */}
      <div className="w-full md:w-1/2 py-20">
        <h2 className="text-[#2c2c2c] text-[42px] font-semibold leading-tight mb-6">{title}</h2>
        <p className="text-[#666] text-[16px] leading-relaxed mb-6">{description.slice(0, 200)}...</p>
        <div className="flex items-center gap-2 mb-8">
          <span className="text-red-500 text-xl">📍</span>
          <span className="text-[#2c2c2c] text-[16px] font-medium">{location}</span>
        </div>
        <Link href={`/all-project/${project.slug}`}>
          <button className="text-[#996830] text-[16px] font-semibold hover:underline flex items-center gap-2">
            View Project <span>→</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          "https://d2j83cbk-4000.inc1.devtunnels.ms/api/projects?limit=6"
        );
        const json = await res.json();
        setProjects(json.data?.items || []);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    }
    fetchProjects();
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#fffefa] w-full min-h-screen relative">
      {/* Hero Video */}
      <section className="relative h-[600px]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/Images/project-video.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            className="w-[159px] h-[159px] bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition text-4xl"
            onClick={toggleVideo}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-[1400px] mx-auto px-[88px] py-24">
        <div className="text-center mb-20">
          <h1 className="text-[#2c2c2c] text-[64px] font-bold leading-tight mb-4">Our Featured Projects</h1>
          <p className="text-[#666] text-[20px] leading-relaxed max-w-[800px] mx-auto">
            Explore our portfolio of thoughtfully designed spaces that blend aesthetics with functionality.
          </p>
        </div>

        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
          ))
        ) : (
          <div className="text-center text-gray-500">Loading projects...</div>
        )}
      </section>
    </div>
  );
};

export default ProjectPage;