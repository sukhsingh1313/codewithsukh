'use client';

import { useState, useMemo } from 'react';
import { Search, ExternalLink, Github, Layers, RotateCcw, Filter } from 'lucide-react';
import type { Project } from '@/types/database.types';

interface ProjectListProps {
  initialProjects?: Project[];
}

const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'Appointro — Appointment Booking Platform',
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
  {
    id: '5',
    title: 'MyBookLab — Digital Library & Store',
    description:
      'Digital bookstore and library management web application for discovering, previewing, and bookmarking books online.',
    thumbnail_url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://github.com/sukhsingh1313/MyBookLab',
    github_url: 'https://github.com/sukhsingh1313/MyBookLab',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'CodeXClock — Modern Digital Clock',
    description:
      'Stylish animated digital clock web application with date display, dynamic time updates, and custom CSS gradient themes.',
    thumbnail_url: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://github.com/sukhsingh1313/CodeXClock',
    github_url: 'https://github.com/sukhsingh1313/CodeXClock',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'codeXsukh — Developer Portfolio Website',
    description:
      'Clean developer portfolio website showcasing tech skills, project showcases, and developer resume profile.',
    thumbnail_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://github.com/sukhsingh1313/codeXsukh',
    github_url: 'https://github.com/sukhsingh1313/codeXsukh',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'LinkGuard-Pro — URL Security Scanner',
    description:
      'URL inspection tool and security link scanner protecting users against malicious redirects and suspicious web links.',
    thumbnail_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://github.com/sukhsingh1313/LinkGuard-Pro',
    github_url: 'https://github.com/sukhsingh1313/LinkGuard-Pro',
    tech_stack: ['JavaScript', 'HTML', 'CSS'],
    featured: false,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '9',
    title: 'Modern Calc — Interactive Web Calculator',
    description:
      'Sleek web calculator app with responsive glassmorphism UI design, standard mathematical functions, and fluid button animations.',
    thumbnail_url: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://github.com/sukhsingh1313/moderncalc',
    github_url: 'https://github.com/sukhsingh1313/moderncalc',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export function ProjectList({ initialProjects }: ProjectListProps) {
  const projects = initialProjects && initialProjects.length > 0 ? initialProjects : fallbackProjects;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const techStackList = ['All', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'AI/ML', 'PHP', 'Supabase', 'HTML'];

  // Real-time filtering logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.description && project.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.tech_stack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTech =
        selectedTech === 'All' ||
        project.tech_stack.some((t) => t.toLowerCase() === selectedTech.toLowerCase());

      return matchesSearch && matchesTech;
    });
  }, [projects, searchQuery, selectedTech]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTech('All');
  };

  return (
    <div className="space-y-8">
      {/* Search & Tech Stack Filter Bar */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-5 shadow-xl">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, description, or technology stack..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
          />
        </div>

        {/* Tech Stack Chips Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="h-3.5 w-3.5 text-indigo-400" /> Tech Stack:
          </span>
          {techStackList.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTech === tech
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Showcase Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20"
            >
              <div>
                {/* Project Image Wrapper with Zoom */}
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

                {/* Details Section */}
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
      ) : (
        /* Empty State */
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-800/80 text-slate-400">
            <Layers className="h-7 w-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">No projects found matching your search</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try searching with different keywords or selecting a different technology stack filter.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-indigo-400 hover:bg-slate-700 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
