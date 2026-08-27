import Link from 'next/link';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types/database.types';

interface FeaturedProjectsProps {
  initialProjects?: Project[];
}

const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'Appointro — Appointment Booking & Management Platform',
    description:
      'A modern appointment booking and business management platform for clinics, salons, consultants, and service-based businesses.',
    thumbnail_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://appointro.vercel.app',
    github_url: 'https://github.com/sukhsingh1313/Appointro',
    tech_stack: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Supabase'],
    featured: true,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'HireSenseAI — AI Talent Assessment Platform',
    description:
      'AI-driven hiring and talent assessment platform designed to automate candidate screening, evaluate coding capabilities, and streamline interviews.',
    thumbnail_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://github.com/sukhsingh1313/HireSenseAI',
    github_url: 'https://github.com/sukhsingh1313/HireSenseAI',
    tech_stack: ['TypeScript', 'React', 'OpenAI API', 'Tailwind CSS'],
    featured: true,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'AI-Powered Resume Screening System (ATS)',
    description:
      'Smart Applicant Tracking System that parses resumes, matches keywords against job descriptions, and calculates match scores using AI models.',
    thumbnail_url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://github.com/sukhsingh1313/AI-Powered-Resume-Screening-System--ATS-',
    github_url: 'https://github.com/sukhsingh1313/AI-Powered-Resume-Screening-System--ATS-',
    tech_stack: ['JavaScript', 'Node.js', 'AI/ML', 'Express', 'Tailwind CSS'],
    featured: true,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'AI Study Assistant Pro',
    description:
      'Interactive learning assistant platform featuring automated note summarization, quiz generation, practice question solver, and study session trackers.',
    thumbnail_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://github.com/sukhsingh1313/ai-study-assistant-pro',
    github_url: 'https://github.com/sukhsingh1313/ai-study-assistant-pro',
    tech_stack: ['PHP', 'Blade', 'Laravel', 'OpenAI API', 'Tailwind CSS'],
    featured: true,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export function FeaturedProjects({ initialProjects }: FeaturedProjectsProps) {
  const projects = initialProjects && initialProjects.length > 0 ? initialProjects : fallbackProjects;

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-950 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider border border-indigo-500/20">
              <Layers className="h-3.5 w-3.5" />
              <span>Production Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Live Projects & Demos
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Explore open-source platforms, SaaS applications, and real-world tools built with modern full-stack web tech.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20"
            >
              <div>
                {/* Project Image Wrapper */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-800">
                  {project.thumbnail_url ? (
                    <img
                      src={project.thumbnail_url}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-900 text-slate-700 font-semibold text-lg">
                      Live Project
                    </div>
                  )}

                  {/* Featured Tag */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wide uppercase rounded-full bg-cyan-500 text-slate-950 shadow-md">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-semibold text-slate-300 rounded-lg bg-slate-800/80 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-3 flex items-center gap-3 border-t border-slate-800/60 mt-auto">
                {project.live_demo_url && (
                  <a
                    href={project.live_demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-md hover:opacity-95 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
                  </a>
                )}

                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-300 border border-slate-700/80 hover:bg-slate-800 hover:text-white transition-all"
                  >
                    <Github className="h-3.5 w-3.5 text-slate-400" />
                    <span>GitHub Repo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
