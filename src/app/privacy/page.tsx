import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowLeft, Lock, Eye, FileCheck, Server, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | CodeWithSukh',
  description:
    'Learn how CodeWithSukh collects, uses, and protects your personal data when using our educational courses and developer showcase platform.',
};

export default function PrivacyPolicyPage() {
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
            <Shield className="h-3.5 w-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last updated: <span className="text-slate-300 font-medium">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Card */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-md space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* Summary Box */}
          <div className="rounded-xl border border-cyan-500/20 bg-slate-950/80 p-4 sm:p-5 space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Privacy Commitment
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              At <strong>CodeWithSukh</strong>, we prioritize the protection of your personal information. We do not sell your personal data to third parties and only collect information required to deliver high-quality developer education.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">1</span>
              Information We Collect
            </h2>
            <p>
              When you use <strong>CodeWithSukh (codewithsukh.online)</strong>, we may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li><strong className="text-slate-200">Personal Communications:</strong> Name, email address, and message contents submitted through our contact inquiry form.</li>
              <li><strong className="text-slate-200">Account & Enrollment Data:</strong> Information provided during course enrollment or newsletter registration.</li>
              <li><strong className="text-slate-200">Technical Usage Logs:</strong> IP address, browser type, device information, and pages visited for security and performance optimization.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">2</span>
              How We Use Your Information
            </h2>
            <p>We use the collected information strictly for legitimate operational purposes:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li>To respond to your inquiries regarding full-stack courses or custom software projects.</li>
              <li>To maintain website security, prevent fraud, and monitor platform performance.</li>
              <li>To store user preferences, such as selected color themes or UI font choices locally in your browser.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">3</span>
              Data Protection & Third-Party Services
            </h2>
            <p>
              We implement industry-standard security measures, including HTTPS encryption and secure cloud infrastructure powered by <strong>Supabase</strong> and <strong>Vercel</strong>.
            </p>
            <p className="text-slate-400">
              We never share your personal information with third-party advertisers. Third-party infrastructure providers only process data as necessary to maintain platform uptime and database integrity.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">4</span>
              Cookies & Local Storage
            </h2>
            <p className="text-slate-400">
              We use minimal cookies and browser local storage to save your UI theme preferences (e.g., Cyber Neon, Dark Mode) and authentication session tokens. You can clear your browser storage at any time.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">5</span>
              Your Rights & Contacting Us
            </h2>
            <p className="text-slate-400">
              You have the right to request access to, correction of, or deletion of any personal data submitted to us.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
              >
                <UserCheck className="h-4 w-4" />
                <span>Contact Us Regarding Privacy</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
