import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Server,
  Database,
  Terminal,
  FileCode2,
  Globe2,
} from 'lucide-react';

export function TechStackSection() {
  const techCategories = [
    {
      category: 'Frontend & UI',
      icon: Globe2,
      color: 'from-cyan-500 to-sky-500',
      items: [
        { name: 'Next.js 15', desc: 'App Router, Server Actions & SSR' },
        { name: 'React 19', desc: 'Hooks, Suspense & Concurrent UI' },
        { name: 'TypeScript', desc: 'Strict End-to-End Type Safety' },
        { name: 'Tailwind CSS', desc: 'Glassmorphism & Responsive Grids' },
      ],
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      color: 'from-sky-500 to-indigo-500',
      items: [
        { name: 'Python', desc: 'Data Structures & Microservices' },
        { name: 'Django & FastAPI', desc: 'REST APIs & Async Controllers' },
        { name: 'Spring Boot', desc: 'Enterprise Java Services' },
        { name: 'Node.js', desc: 'Event-driven Async Backend' },
      ],
    },
    {
      category: 'Database & Systems',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { name: 'Supabase & Postgres', desc: 'RLS Policies & Realtime Sync' },
        { name: 'C / C++', desc: 'System Programming & Optimization' },
        { name: 'DSA & Networking', desc: 'Algorithms & Socket Protocols' },
        { name: 'Data Analysis', desc: 'Pandas, NumPy & Insights' },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 border-t border-slate-800/80 bg-slate-950 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400">
            <Cpu className="h-3.5 w-3.5" />
            <span>Tech Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Tech Stack & Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Every course and project on CodeWithSukh is built using enterprise-grade software tools and modern engineering practices.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((group) => {
            const CategoryIcon = group.icon;
            return (
              <div
                key={group.category}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${group.color} text-slate-950 shadow-md`}>
                      <CategoryIcon className="h-5 w-5 stroke-[2.5]" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                  </div>

                  {/* Items List */}
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-cyan-500/30 transition-all"
                      >
                        <div className="text-sm font-semibold text-slate-200 flex items-center justify-between">
                          <span>{item.name}</span>
                          <Sparkles className="h-3 w-3 text-cyan-400/60" />
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
