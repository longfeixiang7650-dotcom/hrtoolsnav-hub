import Link from "next/link";
import { Star, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { ALL_TOOLS } from "@/data/tools";

const ALL_CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category))).sort();

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export const metadata = {
  title: "Best HR Tools 2026 — Top HR Software Compared",
  description:
    "Discover the best HR software tools in 2026. Compare top-rated HRIS, payroll, recruiting, and performance management platforms with verified reviews and expert analysis.",
  keywords: [
    "best HR software 2026",
    "top HR tools",
    "HR software comparison",
    "HRIS reviews",
    "best HR platforms",
  ],
  openGraph: {
    title: "Best HR Tools 2026 — Top HR Software Compared",
    description: `Compare ${ALL_TOOLS.length} top-rated HR software solutions. Expert comparisons, verified reviews, and detailed pricing.`,
  },
};

export default function BestToolsPage() {
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
          <span className="text-[#8BA3BE]">Best HR Tools 2026</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#22D3EE]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight">
                Best HR Tools 2026
              </h1>
              <p className="text-base text-[#8BA3BE] mt-1">
                Our expert picks for the top {tools.length} HR platforms —
                compared with ratings, pricing, and key features.
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

        {/* All Tools Comparison Table */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#3B82F6]" />
            All Tools Compared
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1E3A5F]">
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold">Tool</th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold">Category</th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold">Rating</th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold hidden md:table-cell">Pricing</th>
                  <th className="text-right py-3 px-4 text-[#8BA3BE] font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <tr
                      key={tool.id}
                      className="border-b border-[#1E3A5F]/60 hover:bg-[#0F1D32]/80 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#162440] flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-[#3B82F6]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#F0F4F8] whitespace-nowrap">
                                {tool.name}
                              </span>
                              {idx === 0 && (
                                <span className="text-[10px] font-bold bg-[#F59E0B]/20 text-[#F59E0B] px-1.5 py-0.5 rounded">
                                  #1
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-xs text-[#4A6380] bg-[#162440] px-2 py-1 rounded border border-[#1E3A5F]">
                          {tool.category}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                          <span className="font-bold text-[#F0F4F8]">{tool.rating}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#8BA3BE] hidden md:table-cell">{tool.pricing}</td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href={`/tools/${tool.id}`}
                          className="inline-flex items-center gap-1 text-[#3B82F6] hover:text-[#22D3EE] transition-colors text-xs font-semibold"
                        >
                          Review <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* All Tools Grid */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6">Browse All {tools.length} Tools</h2>
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
                    <span className="text-xs text-[#4A6380] capitalize">{tool.pricing}</span>
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
