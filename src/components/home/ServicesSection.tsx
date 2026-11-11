import Link from 'next/link';
import { services, contactInfo } from '@/data/siteData';
import {
  Code2,
  Smartphone,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

const serviceIcons: Record<string, typeof Code2> = {
  'full-stack-web-development': Code2,
  'mobile-apps': Smartphone,
  'technical-mentorship': GraduationCap,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Professional Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Can Help Your Product & Career
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Specialized engineering and mentorship solutions crafted to take your ideas from zero to production scale.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = serviceIcons[service.id] || Code2;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 p-7 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                <div className="space-y-5">
                  {/* Service Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-500/10 via-sky-500/10 to-indigo-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/40 transition-all">
                      <Icon className="h-6 w-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                      Available
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-1 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-semibold text-slate-400 rounded-md bg-slate-950/80 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp & Inquire Buttons */}
                <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-col gap-2.5">
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-md hover:opacity-95 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-all text-center"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

