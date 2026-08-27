import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import {
  BookOpen,
  Layers,
  CheckCircle2,
  FileEdit,
  Plus,
  Shield,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import type { Course, Project } from '@/types/database.types';

export default async function AdminDashboardPage() {
  let courses: Course[] = [];
  let projects: Project[] = [];

  try {
    const supabase = await createClient();
    const [coursesRes, projectsRes] = await Promise.all([
      supabase.from('courses').select('*'),
      supabase.from('projects').select('*'),
    ]);

    if (coursesRes.data) courses = coursesRes.data as Course[];
    if (projectsRes.data) projects = projectsRes.data as Project[];
  } catch {
    // If Supabase tables are empty, defaults to 0
  }

  const publishedCourses = courses.filter((c) => c.status === 'published').length;
  const draftCourses = courses.filter((c) => c.status === 'draft').length;
  const publishedProjects = projects.filter((p) => p.status === 'published').length;
  const draftProjects = projects.filter((p) => p.status === 'draft').length;

  const totalCourses = courses.length;
  const totalProjects = projects.length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2.5">
            <Shield className="h-7 w-7 text-cyan-400" />
            <span>Dashboard Overview</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage your courses, live projects, publication statuses, and platform metrics.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/courses"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 px-4 py-2.5 text-xs font-semibold text-cyan-400 hover:bg-cyan-500/20 transition-all"
          >
            <Plus className="h-4 w-4" />
            <span>New Course</span>
          </Link>
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 px-4 py-2.5 text-xs font-semibold text-indigo-400 hover:bg-indigo-500/20 transition-all"
          >
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </Link>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Courses */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Courses</span>
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <BookOpen className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">{totalCourses}</div>
          <div className="text-[11px] text-slate-500">
            {publishedCourses} published, {draftCourses} draft
          </div>
        </div>

        {/* Total Projects */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Projects</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Layers className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">{totalProjects}</div>
          <div className="text-[11px] text-slate-500">
            {publishedProjects} published, {draftProjects} draft
          </div>
        </div>

        {/* Total Published */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Published Content</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">{publishedCourses + publishedProjects}</div>
          <div className="text-[11px] text-slate-500">Live on public website</div>
        </div>

        {/* Draft Items */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Draft Content</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <FileEdit className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">{draftCourses + draftProjects}</div>
          <div className="text-[11px] text-slate-500">Hidden from public views</div>
        </div>
      </div>

      {/* Quick Navigation Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Course Quick Link Card */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="h-4 w-4" /> Course Directory Management
            </div>
            <h3 className="text-xl font-bold text-white">Manage All Courses</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Add new courses, edit pricing, update level difficulty tags, and change publication status between draft and published.
            </p>
          </div>
          <Link
            href="/admin/courses"
            className="inline-flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 hover:bg-slate-800 transition-all"
          >
            <span>Open Course Manager</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Project Quick Link Card */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Layers className="h-4 w-4" /> Project Showcase Management
            </div>
            <h3 className="text-xl font-bold text-white">Manage Live Projects</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Add new live demos, configure GitHub repositories, update technology stack tags, and set featured project flags.
            </p>
          </div>
          <Link
            href="/admin/projects"
            className="inline-flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400 hover:bg-slate-800 transition-all"
          >
            <span>Open Project Manager</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
