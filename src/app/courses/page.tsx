import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CourseList } from '@/components/courses/CourseList';
import { createClient } from '@/lib/supabase/server';
import { BookOpen, Sparkles } from 'lucide-react';
import type { Course } from '@/types/database.types';

export const metadata = {
  title: 'All Courses | CodeWithSukh',
  description:
    'Explore comprehensive web development courses covering Next.js, React, TypeScript, Supabase, and Tailwind CSS.',
};

export default async function CoursesPage() {
  let courses: Course[] = [];

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (!error && data) {
      courses = data as Course[];
    }
  } catch {
    // If Supabase connection fails or credentials aren't set, CourseList handles fallback data cleanly
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Hero Banner */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Interactive Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Master Web Development with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Hands-on Courses
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Step-by-step video courses, production-ready source code, and real-world architectures built for beginner to advanced developers.
            </p>
          </div>

          {/* Interactive Course List with Search & Filtering */}
          <CourseList initialCourses={courses} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
