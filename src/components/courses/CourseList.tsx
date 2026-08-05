'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, Clock, BookOpen, ArrowUpRight, RotateCcw, Sparkles } from 'lucide-react';
import type { Course, CourseLevel } from '@/types/database.types';

interface CourseListProps {
  initialCourses?: Course[];
}

const fallbackCourses: Course[] = [
  {
    id: '1',
    title: 'Full-Stack Next.js 15 & Supabase Masterclass',
    slug: 'nextjs-15-supabase-masterclass',
    description:
      'Build scalable, high-performance web applications with Next.js App Router, Supabase Auth, Row Level Security, and Tailwind CSS.',
    thumbnail_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '8 Hours',
    level: 'Advanced',
    enrollment_link: 'https://github.com',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Modern TypeScript & React Design Patterns',
    slug: 'typescript-react-design-patterns',
    description:
      'Master modern frontend development with type-safe state management, reusable component libraries, and clean architectural principles.',
    thumbnail_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '6 Hours',
    level: 'Intermediate',
    enrollment_link: 'https://github.com',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Tailwind CSS & UI/UX Design for Engineers',
    slug: 'tailwind-css-ui-ux-design',
    description:
      'Learn how to build sleek, dark-mode accessible interfaces with glassmorphism, responsive grids, and micro-interactions.',
    thumbnail_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '4.5 Hours',
    level: 'Beginner',
    enrollment_link: 'https://github.com',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'REST API & Backend Architecture with Node.js & Express',
    slug: 'node-express-backend-architecture',
    description:
      'Understand API design principles, authentication JWT tokens, database modeling, rate limiting, and production deployment.',
    thumbnail_url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=80',
    price: 29.99,
    duration: '10 Hours',
    level: 'Intermediate',
    enrollment_link: 'https://github.com',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Python & Django Web Development Fundamentals',
    slug: 'python-django-web-dev',
    description:
      'Complete guide to building database-driven applications with Python, Django ORM, HTML templates, and admin controls.',
    thumbnail_url: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&auto=format&fit=crop&q=80',
    price: 0,
    duration: '7 Hours',
    level: 'Beginner',
    enrollment_link: 'https://github.com',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Advanced Web Performance & Core Web Vitals',
    slug: 'web-performance-core-web-vitals',
    description:
      'Optimize image loading, JavaScript bundles, server-side rendering, and caching strategies to achieve 100/100 Lighthouse scores.',
    thumbnail_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80',
    price: 49.99,
    duration: '5 Hours',
    level: 'Advanced',
    enrollment_link: 'https://github.com',
    status: 'published',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export function CourseList({ initialCourses }: CourseListProps) {
  const courses = initialCourses && initialCourses.length > 0 ? initialCourses : fallbackCourses;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<string>('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const priceOptions = ['All', 'Free', 'Paid'];

  // Real-time filtering logic
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (course.description && course.description.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

      const matchesPrice =
        selectedPrice === 'All' ||
        (selectedPrice === 'Free' && course.price === 0) ||
        (selectedPrice === 'Paid' && course.price > 0);

      return matchesSearch && matchesLevel && matchesPrice;
    });
  }, [courses, searchQuery, selectedLevel, selectedPrice]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedLevel('All');
    setSelectedPrice('All');
  };

  const levelColorMap: Record<string, string> = {
    Beginner: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    Intermediate: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    Advanced: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-5 shadow-xl">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses by title, topic, or technology..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
          />
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
          {/* Level Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="h-3.5 w-3.5 text-cyan-400" /> Level:
            </span>
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedLevel === lvl
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Price Filter Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1">Price:</span>
            {priceOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedPrice(opt)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedPrice === opt
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail Wrapper */}
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

                  {/* Level Badge */}
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

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60 mt-auto">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  <Clock className="h-3.5 w-3.5 text-slate-500" />
                  <span>{course.duration || 'Self-paced'}</span>
                </div>

                {course.enrollment_link ? (
                  <a
                    href={course.enrollment_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Enroll Now</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-semibold text-cyan-400 hover:underline">
                    View Details
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-800/80 text-slate-400">
            <BookOpen className="h-7 w-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">No courses found matching your criteria</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try adjusting your search terms, changing selected levels, or clearing price filters.
            </p>
          </div>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-cyan-400 hover:bg-slate-700 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
