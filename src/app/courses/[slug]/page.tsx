import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ExternalLink,
  ArrowLeft,
  Shield,
  Layers,
  Award,
  Sparkles,
  Code2,
} from 'lucide-react';
import type { Course } from '@/types/database.types';

const fallbackCourses: Record<string, Course> = {
  'python-basics-fundamentals': {
    id: '1',
    title: 'Python Basics & Programming Fundamentals',
    slug: 'python-basics-fundamentals',
    description:
      'Master core Python concepts, control flow, functions, data structures (lists, dicts, tuples), object-oriented programming (OOP), and file handling.',
    thumbnail_url: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '6 Hours',
    level: 'Beginner',
    enrollment_link: 'https://github.com/sukhsingh1313',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  'advance-python-frameworks-django-fastapi-flask': {
    id: '2',
    title: 'Advanced Python & Web Frameworks (Django, FastAPI & Flask)',
    slug: 'advance-python-frameworks-django-fastapi-flask',
    description:
      'Deep dive into asynchronous Python, generators, decorators, REST APIs, microservices, ORM database integrations, and web frameworks (Django, FastAPI, Flask).',
    thumbnail_url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '12 Hours',
    level: 'Advanced',
    enrollment_link: 'https://github.com/sukhsingh1313',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  'django-full-stack-web-development': {
    id: '3',
    title: 'Django Full-Stack Web Development Masterclass',
    slug: 'django-full-stack-web-development',
    description:
      'Build end-to-end production web applications with Django ORM, authentication, admin dashboard, PostgreSQL database, HTML templates, and REST APIs.',
    thumbnail_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '10 Hours',
    level: 'Intermediate',
    enrollment_link: 'https://github.com/sukhsingh1313',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  'frontend-development-react-nextjs': {
    id: '4',
    title: 'Modern Frontend Development with React, Next.js & Tailwind',
    slug: 'frontend-development-react-nextjs',
    description:
      'Master responsive UI design, component architecture, state management, Next.js App Router, TypeScript, and modern CSS techniques.',
    thumbnail_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '8 Hours',
    level: 'Intermediate',
    enrollment_link: 'https://github.com/sukhsingh1313',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  'backend-development-api-architecture': {
    id: '5',
    title: 'Production Backend Engineering & REST API Architecture',
    slug: 'backend-development-api-architecture',
    description:
      'Understand backend system design, database modeling, JWT authentication, rate limiting, microservices, and server deployment.',
    thumbnail_url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '9 Hours',
    level: 'Advanced',
    enrollment_link: 'https://github.com/sukhsingh1313',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  'c-cpp-systems-programming-dsa': {
    id: '6',
    title: 'C / C++ Systems Programming & Data Structures (DSA)',
    slug: 'c-cpp-systems-programming-dsa',
    description:
      'Master low-level memory management, pointers, memory allocation, object-oriented C++, and core Data Structures & Algorithms (Trees, Graphs, Sorting).',
    thumbnail_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '14 Hours',
    level: 'Intermediate',
    enrollment_link: 'https://github.com/sukhsingh1313',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  'dbms-sql-postgresql-masterclass': {
    id: '7',
    title: 'Database Management Systems (DBMS) & SQL / PostgreSQL',
    slug: 'dbms-sql-postgresql-masterclass',
    description:
      'Master relational database architecture, SQL query optimization, indexing, ACID transactions, normalization, PostgreSQL, and Supabase Row Level Security.',
    thumbnail_url: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '7 Hours',
    level: 'Beginner',
    enrollment_link: 'https://github.com/sukhsingh1313',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = fallbackCourses[slug];
  if (course) {
    return {
      title: `${course.title} | CodeWithSukh`,
      description: course.description,
    };
  }
  return {
    title: 'Course Details | CodeWithSukh',
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let course: Course | null = null;

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('courses')
      .select('*')
      .eq('slug', slug)
      .single();

    if (data) {
      course = data as Course;
    }
  } catch {
    // Fallback if Supabase not configured
  }

  if (!course && fallbackCourses[slug]) {
    course = fallbackCourses[slug];
  }

  if (!course) {
    // Check if fallback array matches first fallback item
    course = Object.values(fallbackCourses)[0];
  }

  const enrollUrl = course.enrollment_link || 'https://github.com/sukhsingh1313';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back Navigation */}
          <div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Courses</span>
            </Link>
          </div>

          {/* Hero Header Card */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 p-6 md:p-10 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {course.level} Level
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <Clock className="h-4 w-4 text-slate-500" />
                <span>{course.duration}</span>
              </div>
              <span className="px-3 py-1 text-xs font-bold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {course.price === 0 ? 'FREE ACCESS' : `$${course.price.toFixed(2)}`}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {course.description}
            </p>

            {/* CTA Button Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={enrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-all"
              >
                <span>Enroll & Access Full Course</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="https://github.com/sukhsingh1313"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                <Code2 className="h-4 w-4 text-cyan-400" />
                <span>View GitHub Repositories</span>
              </a>
            </div>
          </div>

          {/* Curriculum & Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-6">
              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-cyan-400" />
                  <span>What You Will Learn</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>In-depth hands-on projects with production-grade architecture and clean code.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Comprehensive coverage of core fundamentals, advanced algorithms, and real-world tools.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Step-by-step guidance on deployment, database design, and performance optimizations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Direct access to open-source GitHub repositories maintained by Sukhchain Singh.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar Instructor Summary */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-cyan-400 tracking-wider">
                  <Shield className="h-4 w-4" /> Instructor
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Sukhchain Singh</h4>
                  <p className="text-xs text-slate-400 mt-1">Full-Stack Software Engineer & Open-Source Creator</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-3">
                  Specialized in Python, C/C++, Django, Next.js, FastAPI, Node.js, and Systems Architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
