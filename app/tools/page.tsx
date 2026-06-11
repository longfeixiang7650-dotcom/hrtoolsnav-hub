import Link from "next/link";
import { Star, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { ALL_TOOLS } from "@/data/tools";

const ALL_CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category))).sort();

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export const metadata = {
  title: "HR Tools Directory — Compare Top HR Software 2026",
  description: `Browse ${ALL_TOOLS.length} HR tools. Compare top-rated HRIS, payroll, recruiting, and performance management platforms with verified reviews and pricing.`,
};

export default function ToolsPage() {
  const tools = ALL_TOOLS.sort((a, b) => b.rating - a.rating);

  return (
    <div className="relative pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#4A6380] mb-8">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#8BA3BE]">HR Tools Directory</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#22D3EE]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight">
                HR Tools Directory
              </h1>
              <p className="text-base text-[#8BA3BE] mt-1">
                Browse all {tools.length} HR tools — independent reviews, ratings, and pricing.
              </p>
            </div>
          </div>
        </header>

        {/* Category Quick Links */}
        <section className="mb-10">
          <div className="flex flex-wrap gap-3">
            {ALL_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/best/${slugify(cat)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1D32] border border-[#1E3A5F] text-[#8BA3BE] hover:text-[#F0F4F8] hover:border-[#3B82F6] text-sm font-medium rounded-full transition-colors"
              >
                Best {cat} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </section>

        {/* All Tools Grid */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6">All {tools.length} Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  href={`/tools/${tool.id}`}
                  key={tool.id}
                  className="group bg-[#0F1D32] border border-[#1E3A5F] rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#162440] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#F0F4F8] group-hover:text-[#3B82F6] transition-colors truncate">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                        <span className="text-xs font-bold text-[#F0F4F8]">{tool.rating}</span>
                        <span className="text-xs text-[#4A6380]">({tool.reviewCount.toLocaleString()})</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#8BA3BE] leading-relaxed line-clamp-2 mb-3">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#1E3A5F]">
                    <span className="text-xs text-[#4A6380]">{tool.pricing}</span>
                    <span className="text-sm text-[#3B82F6] font-semibold group-hover:text-[#22D3EE] transition-colors flex items-center">
                      Read Review <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
