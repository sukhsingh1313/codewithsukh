'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Code2,
  Zap,
  Rocket,
  Terminal,
  CheckCircle2,
  Star,
  Copy,
  Check,
} from 'lucide-react';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'nextjs' | 'python' | 'supabase'>('nextjs');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    nextjs: `// Next.js 15 App Router + TypeScript
import { createClient } from '@/lib/supabase/server';

export default async function CoursePage() {
  const supabase = await createClient();
  const { data: courses } = await supabase
    .from('courses')
    .select('*')
    .eq('status', 'published');

  return <CourseGrid items={courses} />;
}`,
    python: `# Python FastAPI + Supabase Microservice
from fastapi import FastAPI, Depends
from supabase import create_client

app = FastAPI(title="CodeWithSukh API")

@app.get("/api/v1/projects")
async def get_projects():
    result = supabase.table("projects").select("*").execute()
    return {"status": "success", "data": result.data}`,
    supabase: `-- Row Level Security Policy (PostgreSQL)
CREATE POLICY "Public Published Access"
ON public.courses
FOR SELECT
USING (status = 'published');`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-sky-500/15 to-indigo-600/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Top Hero Layout (Grid on Large Screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Welcome Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md text-xs font-semibold text-cyan-400 shadow-lg shadow-cyan-950/30 hover:border-cyan-500/50 transition-all">
              <div className="relative flex h-5 w-5 overflow-hidden rounded-md border border-cyan-400/40">
                <Image src="/logo.png" alt="Logo" fill className="object-cover" />
              </div>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                CodeWithSukh Platform Live
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Master Full-Stack Dev with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Production Code
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Accelerate your engineering career by building real-world SaaS apps from scratch. Master Next.js 15, Python, TypeScript, and Supabase with zero-fluff tutorials and open-source code by <strong>Sukhchain Singh</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-slate-900/90 px-7 py-3.5 text-sm font-semibold text-slate-200 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800 hover:text-white transition-all duration-200 shadow-md"
              >
                <span>View Live Projects</span>
                <ExternalLink className="h-4 w-4 text-cyan-400" />
              </Link>
            </div>

            {/* Highlights Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>100% Free Code Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                <span>Production Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                <span>Interactive Live Demos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Window */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl shadow-cyan-950/30 overflow-hidden backdrop-blur-xl transition-all hover:border-cyan-500/40">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                    codewithsukh-demo.ts
                  </span>
                </div>

                <button
                  type="button"
                  onClick={copyCode}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy snippet"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>

              {/* Code Language Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-950 px-2 pt-2 gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('nextjs')}
                  className={`px-3 py-1.5 rounded-t-lg font-mono font-medium transition-all ${
                    activeTab === 'nextjs'
                      ? 'bg-slate-900 text-cyan-400 border-t border-x border-slate-800'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Next.js 15
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('python')}
                  className={`px-3 py-1.5 rounded-t-lg font-mono font-medium transition-all ${
                    activeTab === 'python'
                      ? 'bg-slate-900 text-sky-400 border-t border-x border-slate-800'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Python API
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('supabase')}
                  className={`px-3 py-1.5 rounded-t-lg font-mono font-medium transition-all ${
                    activeTab === 'supabase'
                      ? 'bg-slate-900 text-emerald-400 border-t border-x border-slate-800'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  PostgreSQL
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto min-h-[220px]">
                <pre className="text-cyan-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Status */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>TypeScript 5.x Ready</span>
                </div>
                <span className="text-cyan-400">codewithsukh.online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Metrics Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              15+
            </div>
            <div className="text-xs text-slate-400 font-medium">Full-Stack Courses</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              25+
            </div>
            <div className="text-xs text-slate-400 font-medium">Production Projects</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-xs text-slate-400 font-medium">Open Source Code</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              14+
            </div>
            <div className="text-xs text-slate-400 font-medium">Core Tech Stack Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
}
