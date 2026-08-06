import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft, ShieldCheck, Scale, AlertCircle, Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | CodeWithSukh',
  description:
    'Read the terms and conditions governing the use of CodeWithSukh platform, developer tutorials, courses, and software projects.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'August 6, 2026';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-slate-800/80 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <FileText className="h-3.5 w-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400">
            Last updated: <span className="text-slate-300 font-medium">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Card */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-md space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">1</span>
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using <strong>CodeWithSukh (codewithsukh.online)</strong>, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue using our website and learning services immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">2</span>
              Intellectual Property Rights
            </h2>
            <p>
              All course materials, code examples, text, graphics, logos, video tutorials, and showcase projects on this website are the intellectual property of <strong>Sukhchain Singh / CodeWithSukh</strong>, unless explicitly marked otherwise.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li>You may use code snippets and sample projects for personal learning and portfolio building.</li>
              <li>Re-distributing, reselling, or mirroring our course videos or full source code repositories as your own paid product without written authorization is strictly prohibited.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">3</span>
              User Conduct & Code of Ethics
            </h2>
            <p>When interacting with the platform or submitting contact inquiries, you agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li>Submit abusive, defamatory, or spam messages.</li>
              <li>Attempt to breach the security or integrity of our website, database, or admin infrastructure.</li>
              <li>Use automated bots or scrapers to extract platform data without permission.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">4</span>
              Disclaimer of Warranties
            </h2>
            <div className="rounded-xl border border-amber-500/20 bg-slate-950/80 p-4 space-y-1 text-xs sm:text-sm text-slate-400">
              <p className="font-semibold text-amber-400 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Educational Use Disclaimer
              </p>
              <p>
                All educational contents, tutorials, and code templates are provided "as is" without warranty of any kind. While we strive for technical precision, CodeWithSukh is not liable for errors or unintended outcomes when deploying code into production environments.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">5</span>
              Modifications to Terms
            </h2>
            <p className="text-slate-400">
              We reserve the right to revise these Terms of Service at any time. Updated terms will take effect immediately upon posting to this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
