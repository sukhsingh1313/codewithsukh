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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-theme pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-theme-main flex items-center gap-2.5">
            <Shield className="h-7 w-7 text-accent-theme" />
            <span>Dashboard Overview</span>
          </h1>
          <p className="text-xs sm:text-sm text-theme-muted mt-1">
            Manage your courses, live projects, publication statuses, and platform metrics.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/courses"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-theme/10 border border-accent-theme/30 px-4 py-2.5 text-xs font-semibold text-accent-theme hover:bg-accent-theme/20 transition-all"
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
        <div className="p-6 rounded-2xl bg-theme-card border border-theme backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-theme-muted">Total Courses</span>
            <div className="p-2 rounded-xl bg-accent-theme/10 text-accent-theme">
              <BookOpen className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-theme-main">{totalCourses}</div>
          <div className="text-[11px] text-theme-muted">
            {publishedCourses} published, {draftCourses} draft
          </div>
        </div>

        {/* Total Projects */}
        <div className="p-6 rounded-2xl bg-theme-card border border-theme backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-theme-muted">Total Projects</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Layers className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-theme-main">{totalProjects}</div>
          <div className="text-[11px] text-theme-muted">
            {publishedProjects} published, {draftProjects} draft
          </div>
        </div>

        {/* Total Published */}
        <div className="p-6 rounded-2xl bg-theme-card border border-theme backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-theme-muted">Published Content</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-theme-main">{publishedCourses + publishedProjects}</div>
          <div className="text-[11px] text-theme-muted">Live on public website</div>
        </div>

        {/* Draft Items */}
        <div className="p-6 rounded-2xl bg-theme-card border border-theme backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-theme-muted">Draft Content</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <FileEdit className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-theme-main">{draftCourses + draftProjects}</div>
          <div className="text-[11px] text-theme-muted">Hidden from public views</div>
        </div>
      </div>

      {/* Quick Navigation Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Course Quick Link Card */}
        <div className="p-6 rounded-2xl bg-theme-card/60 border border-theme flex flex-col justify-between space-y-4 hover:border-accent-theme/40 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent-theme text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="h-4 w-4" /> Course Directory Management
            </div>
            <h3 className="text-xl font-bold text-theme-main">Manage All Courses</h3>
            <p className="text-xs text-theme-muted leading-relaxed">
              Add new courses, edit pricing, update level difficulty tags, and change publication status between draft and published.
            </p>
          </div>
          <Link
            href="/admin/courses"
            className="inline-flex items-center justify-between p-3 rounded-xl bg-theme-card border border-theme text-xs font-semibold text-accent-theme hover:bg-theme-secondary transition-all"
          >
            <span>Open Course Manager</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Project Quick Link Card */}
        <div className="p-6 rounded-2xl bg-theme-card/60 border border-theme flex flex-col justify-between space-y-4 hover:border-accent-theme/40 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Layers className="h-4 w-4" /> Project Showcase Management
            </div>
            <h3 className="text-xl font-bold text-theme-main">Manage Live Projects</h3>
            <p className="text-xs text-theme-muted leading-relaxed">
              Add new live demos, configure GitHub repositories, update technology stack tags, and set featured project flags.
            </p>
          </div>
          <Link
            href="/admin/projects"
            className="inline-flex items-center justify-between p-3 rounded-xl bg-theme-card border border-theme text-xs font-semibold text-indigo-400 hover:bg-theme-secondary transition-all"
          >
            <span>Open Project Manager</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
