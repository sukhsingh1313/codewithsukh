import Link from 'next/link';
import { ArrowRight, ExternalLink, Sparkles, Code2, Zap, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Welcome Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md text-xs font-semibold text-cyan-400 shadow-xl shadow-cyan-950/20 hover:border-slate-700 transition-colors">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          <span>🚀 Welcome to CodeWithSukh | Learn & Build Live Projects</span>
        </div>

        {/* Hero Main Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            Master Full-Stack Dev with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Real-World Projects & Courses
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-400 font-normal leading-relaxed">
            Elevate your coding skills with production-ready Next.js, TypeScript, and Supabase tutorials. Explore live interactive showcases and comprehensive web development courses.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:opacity-95 transition-all duration-200"
          >
            <span>Explore Courses</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-200 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-200 shadow-md"
          >
            <span>View Live Projects</span>
            <ExternalLink className="h-4 w-4 text-slate-400" />
          </Link>
        </div>

        {/* Feature Highlights Badges */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md text-xs font-medium text-slate-300">
            <Zap className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>100% Practical Learning</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md text-xs font-medium text-slate-300">
            <Code2 className="h-4 w-4 text-indigo-400 shrink-0" />
            <span>Live Interactive Demos</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md text-xs font-medium text-slate-300">
            <Rocket className="h-4 w-4 text-purple-400 shrink-0" />
            <span>Free Learning Resources</span>
          </div>
        </div>
      </div>
    </section>
  );
}
