import Link from 'next/link';
import { ArrowRight, Sparkles, Code2, Shield, Mail } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-16 md:py-20 border-t border-slate-800/80 bg-slate-950 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-sky-500/15 to-indigo-500/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-8 sm:p-12 md:p-16 backdrop-blur-2xl text-center space-y-6 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ready to Elevate Your Developer Skills?</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Start Building Modern Full-Stack Projects Today
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers mastering Next.js 15, Python, Supabase, and TypeScript on <strong>CodeWithSukh</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Browse All Courses</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-slate-900 px-8 py-4 text-sm font-semibold text-slate-200 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800 hover:text-white transition-all shadow-md"
            >
              <Mail className="h-4 w-4 text-cyan-400" />
              <span>Contact Sukhchain</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
