import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Code2,
  Cpu,
  Globe,
  Terminal,
  Sparkles,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Server,
  Database,
  Layers,
  Network,
  Binary,
  BrainCircuit,
  Smartphone,
  BarChart3,
  Rocket,
  ShieldCheck,
} from 'lucide-react';

export const metadata = {
  title: 'About | CodeWithSukh - Sukhchain Singh',
  description:
    'Learn about Sukhchain Singh (CodeWithSukh), experienced full-stack engineer proficient in C/C++, Python, JavaScript, React, React Native, Django, FastAPI, Spring Boot, Data Analysis, Prompt Engineering, DSA, and Networking.',
};

export default function AboutPage() {
  const skillsPills = [
    'C / C++',
    'Python',
    'JavaScript & TypeScript',
    'React & React Native',
    'Next.js (App Router)',
    'Django & FastAPI',
    'Spring Boot',
    'Data Analysis',
    'Prompt Concepts & AI',
    'DSA (Algorithms)',
    'Computer Networking',
    'Supabase & PostgreSQL',
  ];

  const techCategories = [
    {
      title: 'Core CS & Algorithms',
      desc: 'Strong foundation in C/C++, Data Structures & Algorithms (DSA), System Design, and Computer Networking protocols.',
      icon: Binary,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      badge: 'C/C++ • DSA • Networking',
    },
    {
      title: 'Backend & Microservices',
      desc: 'Building high-throughput APIs and web services using Python (Django, FastAPI), Java (Spring Boot), and Node.js.',
      icon: Server,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      badge: 'Django • FastAPI • Spring Boot',
    },
    {
      title: 'Web & Mobile Frontend',
      desc: 'Crafting responsive Web and Mobile applications with React, Next.js, React Native, and Tailwind CSS.',
      icon: Smartphone,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      badge: 'React • React Native • Next.js',
    },
    {
      title: 'Data Analysis & AI Prompts',
      desc: 'Extracting data insights with Python analytics tools and designing advanced LLM prompt engineering pipelines.',
      icon: BrainCircuit,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      badge: 'Data Analysis • Prompt Engineering',
    },
  ];

  const timeline = [
    {
      period: '2024 - Present',
      role: 'Principal Engineer & Platform Architect',
      company: 'CodeWithSukh Platform',
      description:
        'Architected full-stack systems and cross-platform mobile prototypes utilizing Next.js, React Native, FastAPI microservices, Spring Boot backends, and Supabase RLS security.',
    },
    {
      period: '2023 - 2024',
      role: 'Full-Stack Developer & Technical Educator',
      company: 'Tech Learning Hub',
      description:
        'Taught advanced Data Structures & Algorithms in C/C++, web development with Django & React, Data Analysis workflows, and AI prompt engineering concepts.',
    },
    {
      period: '2022 - 2023',
      role: 'Software Systems Engineer',
      company: 'Software Systems Lab',
      description:
        'Engineered backend API endpoints using Spring Boot and FastAPI, optimized database queries, and implemented low-level networking socket modules.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
                <Sparkles className="h-3.5 w-3.5" />
                <span>About Sukhchain Singh</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Full-Stack Engineer & <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Systems Specialist
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
                Hi, I’m <strong>Sukhchain Singh</strong> (CodeWithSukh). Experienced software developer specialized in low-level programming with <strong>C/C++</strong>, core Computer Science fundamentals (<strong>DSA, Computer Networking</strong>), modern backend frameworks (<strong>Django, FastAPI, Spring Boot</strong>), full-stack web & mobile (<strong>React, React Native, Next.js</strong>), <strong>Data Analysis</strong>, and advanced <strong>AI Prompt Engineering</strong>.
              </p>

              {/* Skills Tags Grid */}
              <div className="pt-2 flex flex-wrap gap-2">
                {skillsPills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5 shadow-sm hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Profile Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
                <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-xl shadow-cyan-500/20">
                  <div className="h-full w-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-400">
                    <Terminal className="h-12 w-12 stroke-[2]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Sukhchain Singh</h3>
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Full-Stack & Systems Developer
                  </p>
                </div>

                {/* Tech Pills Highlight */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-slate-300 rounded-lg">
                    C/C++
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-slate-300 rounded-lg">
                    DSA
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-slate-300 rounded-lg">
                    FastAPI
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-slate-300 rounded-lg">
                    Spring Boot
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-slate-300 rounded-lg">
                    React Native
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-white">10+</div>
                    <div className="text-[11px] text-slate-500 font-medium">Core Tech Domains</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">100%</div>
                    <div className="text-[11px] text-slate-500 font-medium">Production Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Categories */}
          <div className="space-y-8 pt-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white">Technical Architecture & Stack</h2>
              <p className="text-sm text-slate-400">
                End-to-end expertise spanning low-level algorithms, backend frameworks, mobile apps, and data analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCategories.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 backdrop-blur-xl space-y-4 transition-all hover:-translate-y-1"
                  >
                    <div className={`p-3 rounded-xl inline-block border ${item.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <div className="text-[10px] font-mono font-semibold text-cyan-400">
                        {item.badge}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 pt-8 border-t border-slate-800/80">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider border border-indigo-500/20">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Professional Experience</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">Career Milestones</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 inline-block">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <p className="text-xs font-semibold text-slate-300">{item.company}</p>
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
