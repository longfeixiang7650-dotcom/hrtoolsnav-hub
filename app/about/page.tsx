import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — HR Tools Nav",
  description:
    "HR Tools Nav is an independent directory of human resources software, built by Bison Layer in Florence, Italy. We help HR leaders find the right tools for their teams.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero Quote */}
      <section className="mb-16">
        <div className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-10">
          <blockquote className="text-xl sm:text-2xl text-stone-700 leading-relaxed font-medium mb-6">
            &ldquo;The HR software market is flooded with products that all claim to be the best.
            Our job is to cut through the marketing and tell you what actually works.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
              <span className="text-sm font-bold text-orange-600">ES</span>
            </div>
            <div>
              <p className="font-semibold text-stone-900 text-sm">Elise Smit</p>
              <p className="text-xs text-stone-500">Founder, HR Tools Nav — Bison Layer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story - single narrative, no team grid */}
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">Why I Built This</h1>
        <div className="space-y-4 text-stone-600 leading-relaxed">
          <p>
            I spent eight years leading HR technology projects at companies across Europe. From
            startups scrambling to set up their first payroll system to enterprises rolling out
            global HRIS platforms — I&apos;ve been on both sides of the table.
          </p>
          <p>
            What I learned is that most HR software reviews are either shallow listicles or
            affiliate-driven content designed to push you toward one product. There&apos;s very
            little that&apos;s genuinely independent.
          </p>
          <p>
            So in 2024, I started HR Tools Nav with a simple premise: evaluate every HR platform
            the same way. No preferred partners. No sponsored rankings. Just feature depth,
            pricing transparency, and real user feedback — sourced from G2, Capterra, and
            TrustRadius.
          </p>
          <p>
            Today, the site covers payroll, HRIS, recruitment, performance management, and
            engagement tools. Every listing is reviewed by at least two members of our team
            before it goes live.
          </p>
        </div>
      </section>

      {/* The Team — minimal, not card grid */}
      <section className="mb-12 border-t border-stone-200 pt-10">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">The Team Behind It</h2>
        <p className="text-stone-600 mb-6">
          HR Tools Nav is maintained by four people at <strong>Bison Layer</strong>, a software
          studio in Florence, Italy. We&apos;ve been building SaaS products since 2016.
        </p>
        <div className="space-y-5">
          <div className="border-l-4 border-orange-400 pl-4">
            <p className="font-semibold text-stone-900">Elise Smit</p>
            <p className="text-sm text-orange-600 mb-1">Founder & CEO</p>
            <p className="text-sm text-stone-500">Oversees product direction, reviews every tool listing, and writes our comparison guides.</p>
          </div>
          <div className="border-l-4 border-amber-400 pl-4">
            <p className="font-semibold text-stone-900">Giovanni Giordano</p>
            <p className="text-sm text-amber-600 mb-1">Co-Founder & CTO</p>
            <p className="text-sm text-stone-500">Builds and maintains the platform. Ensures data accuracy and performance.</p>
          </div>
          <div className="border-l-4 border-rose-400 pl-4">
            <p className="font-semibold text-stone-900">David Quinn</p>
            <p className="text-sm text-rose-600 mb-1">Technical Lead</p>
            <p className="text-sm text-stone-500">Verifies pricing claims, tests integrations, and fact-checks product documentation.</p>
          </div>
          <div className="border-l-4 border-emerald-400 pl-4">
            <p className="font-semibold text-stone-900">Henry O&apos;Sullivan</p>
            <p className="text-sm text-emerald-600 mb-1">QA Engineer</p>
            <p className="text-sm text-stone-500">Reviews user feedback across platforms and compiles honest pros and cons for each tool.</p>
          </div>
        </div>
      </section>

      {/* Studio — compact */}
      <section className="border-t border-stone-200 pt-10">
        <h2 className="text-2xl font-bold text-stone-900 mb-3">Bison Layer</h2>
        <p className="text-stone-600 text-sm mb-4">
          Founded in Florence, Italy in 2016. Team of 5. We build mobile apps and SaaS platforms
          with a focus on data integrity and user experience.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-stone-500">
          <span>📍 Florence, Italy</span>
          <span>📅 Founded 2016</span>
          <span>👥 Team of 5</span>
          <span>🔧 Mobile Apps & SaaS</span>
        </div>
      </section>
    </div>
  );
}
