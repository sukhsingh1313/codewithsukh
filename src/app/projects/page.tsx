import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectList } from '@/components/projects/ProjectList';
import { createClient } from '@/lib/supabase/server';
import { Layers } from 'lucide-react';
import type { Project } from '@/types/database.types';

export const metadata = {
  title: 'Live Projects Showcase | CodeWithSukh',
  description:
    'Explore production web applications, administrative dashboards, open-source repositories, and live interactive demos built by Sukhchain Singh.',
};

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (!error && data) {
      projects = data as Project[];
    }
  } catch {
    // If Supabase is offline or unconfigured, ProjectList will render fallback data smoothly
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Hero Banner */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider border border-indigo-500/20">
              <Layers className="h-3.5 w-3.5" />
              <span>Production Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Live Demos & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                Portfolio Showcase
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Explore real-world web applications, SaaS platforms, developer tools, and administrative dashboards built with Next.js, React, Python, and Supabase.
            </p>
          </div>

          {/* Interactive Project List with Tech Filters */}
          <ProjectList initialProjects={projects} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
