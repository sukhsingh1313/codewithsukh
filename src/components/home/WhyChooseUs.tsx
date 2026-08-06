import { Code2, Zap, ShieldCheck, Rocket, GitBranch, Terminal, Award } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: 'Production-First Code',
      description:
        'No basic counter or todo apps. Every tutorial and course walks you through building complex, scalable SaaS products with authentication and databases.',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
    {
      icon: GitBranch,
      title: '100% Open Source Repos',
      description:
        'Get full access to GitHub repositories for all showcased projects. Inspect code architecture, commit history, and deployment workflows freely.',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      icon: Terminal,
      title: 'Modern Tech Stack 2026',
      description:
        'Master the latest industry standards: Next.js 15 App Router, TypeScript 5, Supabase Row Level Security, Python FastAPI, and Tailwind CSS.',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      icon: Award,
      title: 'Practical Developer Portfolio',
      description:
        'Build real-world projects that stand out to tech recruiters and clients. Designed by Sukhchain Singh with clean software architecture principles.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Why CodeWithSukh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Serious Software Engineers
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Accelerate your engineering journey with hands-on, zero-fluff video tutorials and production-ready source code.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl border ${item.color}`}>
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
