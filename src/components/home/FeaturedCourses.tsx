import Link from 'next/link';
import { Clock, BookOpen, ArrowUpRight, Sparkles } from 'lucide-react';
import type { Course } from '@/types/database.types';

interface FeaturedCoursesProps {
  initialCourses?: Course[];
}

const fallbackCourses: Course[] = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];

export function FeaturedCourses({ initialCourses }: FeaturedCoursesProps) {
  const courses = initialCourses && initialCourses.length > 0 ? initialCourses : fallbackCourses;

  const levelColorMap = {
    Beginner: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    Intermediate: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    Advanced: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  };

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-950/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Learn & Grow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Courses
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Comprehensive, project-driven video tutorials and guides designed to accelerate your full-stack career.
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>View All Courses</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail Image Wrapper */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  {course.thumbnail_url ? (
                    <img
                      src={course.thumbnail_url}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-900 text-slate-700 font-semibold text-lg">
                      CodeWithSukh
                    </div>
                  )}

                  {/* Level Badge Overlay */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full border backdrop-blur-md ${
                        levelColorMap[course.level] || levelColorMap.Beginner
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3">
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg bg-slate-950/80 border border-slate-800 text-cyan-400 backdrop-blur-md shadow-md">
                      {course.price === 0 ? 'FREE' : `$${course.price.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60 mt-auto">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <Clock className="h-3.5 w-3.5 text-slate-500" />
                  <span>{course.duration || 'Self-paced'}</span>
                </div>

                <a
                  href={course.enrollment_link || 'https://github.com/sukhsingh1313'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Enroll Now</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
