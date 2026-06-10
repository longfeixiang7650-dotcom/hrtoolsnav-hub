"use client";

import { useState, useMemo } from "react";
import { Search, Star, ArrowUpRight, ChevronRight, Building2, Briefcase, HeartHandshake, TrendingUp } from "lucide-react";
import Link from "next/link";

const TOOLS = [
  { id: "bamboohr", name: "BambooHR", category: "HRIS", rating: 4.6, reviews: 8500, description: "All-in-one HR platform for mid-sized companies. Employee lifecycle management from hire to retire." },
  { id: "workday", name: "Workday", category: "HRIS", rating: 4.3, reviews: 12000, description: "Enterprise-grade HCM platform with AI-powered workforce planning and global compliance." },
  { id: "gusto", name: "Gusto", category: "Payroll", rating: 4.5, reviews: 20000, description: "Modern payroll, benefits, and HR for small businesses. Automated tax filings included." },
  { id: "rippling", name: "Rippling", category: "HRIS", rating: 4.5, reviews: 4200, description: "Unified HR + IT platform. Manage payroll, devices, apps, and compliance in one place." },
  { id: "hibob", name: "HiBob", category: "HRIS", rating: 4.5, reviews: 1800, description: "People-first HR platform with strong engagement tools and culture analytics." },
  { id: "personio", name: "Personio", category: "HRIS", rating: 4.4, reviews: 2100, description: "Leading European HRIS for SMEs with strong GDPR compliance." },
  { id: "adp", name: "ADP Workforce Now", category: "Payroll", rating: 4.2, reviews: 15000, description: "Comprehensive payroll and HR for mid-to-large enterprises. Multi-state compliance." },
  { id: "paychex", name: "Paychex Flex", category: "Payroll", rating: 4.1, reviews: 8500, description: "Full-service payroll with PEO options. Ideal for growing businesses." },
  { id: "lever", name: "Lever", category: "Recruitment", rating: 4.4, reviews: 1600, description: "Applicant tracking system with built-in CRM and collaborative hiring tools." },
  { id: "greenhouse", name: "Greenhouse", category: "Recruitment", rating: 4.4, reviews: 4200, description: "Structured hiring platform used by leading tech companies for data-driven recruitment." },
  { id: "lattice", name: "Lattice", category: "Performance", rating: 4.5, reviews: 3800, description: "Performance management platform with continuous feedback, reviews, and OKR tracking." },
  { id: "culture-amp", name: "Culture Amp", category: "Engagement", rating: 4.4, reviews: 2500, description: "People analytics platform for employee engagement surveys and performance insights." },
];

const CATEGORIES = ["All", "HRIS", "Payroll", "Recruitment", "Performance", "Engagement"];

const HIGHLIGHTS = [
  { icon: Building2, label: "HRIS Platforms", count: 8, color: "bg-orange-100 text-orange-600" },
  { icon: Briefcase, label: "Payroll Solutions", count: 6, color: "bg-amber-100 text-amber-600" },
  { icon: HeartHandshake, label: "Recruitment Tools", count: 5, color: "bg-rose-100 text-rose-600" },
  { icon: TrendingUp, label: "Performance & Engagement", count: 6, color: "bg-emerald-100 text-emerald-600" },
];

const BLOG_HIGHLIGHTS = [
  { slug: "best-hr-software-2026-comparison", title: "Best HR Software 2026", excerpt: "BambooHR vs Workday vs Gusto — which platform fits your organization?", date: "June 2026" },
  { slug: "top-hris-platforms-2026", title: "Top 10 HRIS Platforms", excerpt: "Compare the leading HRIS platforms for growing companies.", date: "May 2026" },
  { slug: "payroll-software-comparison-2026", title: "Payroll Software Guide", excerpt: "Gusto vs ADP vs Paychex — a head-to-head comparison.", date: "May 2026" },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return TOOLS.filter(
      (t) =>
        (category === "All" || t.category === category) &&
        (t.name.toLowerCase().includes(search.toLowerCase()) ||
          t.description.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, category]);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.08)_0%,transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-sm font-medium text-orange-700">69+ HR Tools Reviewed</span>
              <span className="text-stone-300 mx-1">|</span>
              <span className="text-sm font-medium text-stone-500">Updated June 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
              Find the Best{" "}
              <span className="gradient-text">HR Software</span>
              <br />
              for Your Team
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Independent reviews of HR, payroll, recruitment, and performance management platforms.
              Real data. Honest comparisons. No fluff.
            </p>

            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search HR tools..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 shadow-sm text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Grid */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((h) => (
              <Link
                key={h.label}
                href={`/category/${h.label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="bg-white border border-stone-200 rounded-xl p-5 card-hover hover:border-orange-200 group"
              >
                <div className={`w-10 h-10 rounded-lg ${h.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <h.icon className="w-5 h-5" />
                </div>
                <p className="font-semibold text-stone-900 text-sm">{h.label}</p>
                <p className="text-xs text-stone-500 mt-1">{h.count} tools</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Browse All HR Tools</h2>
            <Link href="/tools" className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:text-stone-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group bg-white border border-stone-200 rounded-xl p-5 card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-stone-900 group-hover:text-orange-600 transition-colors">{tool.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-stone-700">{tool.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-stone-500 line-clamp-2 mb-3">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400 bg-stone-50 px-2 py-0.5 rounded border border-stone-100">{tool.category}</span>
                  <span className="text-xs text-stone-400">{tool.reviews.toLocaleString()} reviews</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts - different layout (horizontal cards) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Latest Guides</h2>
            <Link href="/blog" className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
              All Articles <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {BLOG_HIGHLIGHTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white border border-stone-200 rounded-xl p-5 card-hover group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="text-xs text-stone-400 mb-1">{post.date}</p>
                    <h3 className="font-semibold text-stone-900 group-hover:text-orange-600 transition-colors">{post.title}</h3>
                    <p className="text-sm text-stone-500 mt-1">{post.excerpt}</p>
                  </div>
                  <span className="flex-shrink-0 text-orange-600 group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
