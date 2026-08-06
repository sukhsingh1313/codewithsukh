import { Metadata } from 'next';
import Link from 'next/link';
import { RefreshCw, ArrowLeft, CheckCircle2, Clock, HelpCircle, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Policy | CodeWithSukh',
  description:
    'Learn about our transparent refund and cancellation policy for premium courses and software engineering resources on CodeWithSukh.',
};

export default function RefundPolicyPage() {
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
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Satisfaction Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm text-slate-400">
            Last updated: <span className="text-slate-300 font-medium">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Card */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-md space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* Guarantee Banner */}
          <div className="rounded-xl border border-emerald-500/30 bg-slate-950/80 p-5 space-y-2">
            <h3 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              7-Day Money-Back Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              We want you to be completely satisfied with your learning experience on <strong>CodeWithSukh</strong>. We offer a transparent 7-day refund guarantee for eligible paid courses.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">1</span>
              Eligibility Criteria
            </h2>
            <p>To qualify for a full refund on a course purchase, the following conditions must be met:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li>The refund request is submitted within <strong>7 days</strong> from the original date of purchase.</li>
              <li>You have consumed less than <strong>25%</strong> of the total course video lectures or content.</li>
              <li>You have not previously requested a refund for the same course.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">2</span>
              Non-Refundable Items & Services
            </h2>
            <p>Refunds are not applicable under the following circumstances:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
              <li>Custom software development, consulting, or 1-on-1 mentorship sessions already delivered.</li>
              <li>Standalone downloadable project source code packages that have been fully downloaded.</li>
              <li>Refund requests submitted after the 7-day policy window has elapsed.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">3</span>
              How to Request a Refund
            </h2>
            <p className="text-slate-400">
              Submitting a refund request is straightforward. Simply reach out via our contact page with your purchase details:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-2 text-slate-400">
              <li>Go to our <Link href="/contact" className="text-cyan-400 underline underline-offset-2">Contact Form</Link>.</li>
              <li>Provide your registered email address and payment/transaction ID.</li>
              <li>Select <strong>Course Inquiry / Billing</strong> as the subject and briefly state your reason for the refund.</li>
            </ol>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold">4</span>
              Processing Time
            </h2>
            <p className="text-slate-400 flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400 flex-shrink-0" />
              Once approved, refunds are processed within <strong>5-7 business days</strong> back to your original payment method (Credit/Debit Card, UPI, or NetBanking).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
