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
    title: 'CodeWithSukh Course & Showcase Platform',
    description:
      'High-performance full-stack course directory and developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Supabase PostgreSQL RLS.',
    thumbnail_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://codewithsukh.dev',
    github_url: 'https://github.com/codewithsukh/platform',
    tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    featured: true,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'AI Code Assistant & Prompt Playground',
    description:
      'Interactive Web app allowing developers to prototype LLM prompts, run code snippets in real-time sandbox environments, and export clean components.',
    thumbnail_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://demo.codewithsukh.dev/ai-playground',
    github_url: 'https://github.com/codewithsukh/ai-code-playground',
    tech_stack: ['React', 'Next.js', 'Python', 'Tailwind CSS'],
    featured: true,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Enterprise Analytics Dashboard SaaS',
    description:
      'Real-time data visualization portal with custom chart components, dark-mode themes, CSV exports, and multi-tenant user authentication.',
    thumbnail_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://demo.codewithsukh.dev/analytics',
    github_url: 'https://github.com/codewithsukh/analytics-dashboard',
    tech_stack: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    featured: false,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Django REST E-Commerce Backend API',
    description:
      'Robust e-commerce backend service with Stripe checkout integration, inventory management endpoints, and automated JWT token refresh handling.',
    thumbnail_url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://demo.codewithsukh.dev/ecommerce-api',
    github_url: 'https://github.com/codewithsukh/django-ecommerce',
    tech_stack: ['Django', 'Python', 'PostgreSQL'],
    featured: false,
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Custom PHP Content Management System',
    description:
      'Lightweight, ultra-fast custom CMS with Markdown parsing, custom media uploads, and dynamic SEO meta tag generation.',
    thumbnail_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80',
    live_demo_url: 'https://demo.codewithsukh.dev/php-cms',
    github_url: 'https://github.com/codewithsukh/custom-php-cms',
    tech_stack: ['PHP', 'MySQL', 'Tailwind CSS'],
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

  const techStackList = ['All', 'React', 'Next.js', 'Django', 'Python', 'Tailwind CSS', 'PHP', 'Node.js', 'Supabase'];

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
