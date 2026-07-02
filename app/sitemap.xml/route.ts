import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "best-hr-software-2026-comparison",
    "top-hris-platforms-2026",
    "payroll-software-comparison-2026",
    "top-no-code-tools-for-hr-teams-2026",
    "hr-software-buyers-guide-2026-bamboohr-vs-workday-vs-gusto-vs-rippling",
    "why-your-ats-isnt-delivering-quality-hires",
    "lattice-vs-15five-vs-culture-amp-vs-betterworks-2026",
    "build-integrated-performance-management-stack-2026",
    "employee-performance-management-tools-2026",
    "ai-in-recruitment-reducing-bias-improving-hire-quality-2026",
    "people-analytics-in-2026-from-dashboards-to-predictive-workforce-intelligence",
    "employee-wellbeing-mental-health-2026",
    "employee-engagement-software-2026-comparison",
    "learning-and-development-platforms-2026-comparison",
    "small-business-hr-buyers-guide-2026-bamboohr-vs-gusto-vs-workable-vs-rippling",
    "hr-analytics-people-analytics-tools-2026-comparison",
    "payroll-automation-trends-2026",
    "skills-gap-analysis-tools-2026",
    "hr-tech-stack-integration-people-analytics-ecosystem-2026",
    "onboarding-automation-hr-tech-2026-experience",
    "employee-experience-platforms-rise-2026",
    "compensation-management-software-2026-trends",
    "revamped-performance-review-continuous-feedback-tools",
    "measuring-what-matters-deib-analytics-implementation",
    "people-analytics-workforce-planning-retention-prediction-2026",
    "building-continuous-listening-culture-employee-feedback-tools",
    "ai-powered-performance-management-platforms-2026",
] as const;

const TOOL_SLUGS = [
  "bamboohr",
    "workday",
    "gusto",
    "rippling",
    "lever",
    "greenhouse",
    "workable",
    "smartrecruiters",
    "lattice",
    "15five",
    "culture-amp",
    "betterworks",
    "officevibe",
    "peakon",
    "tiny-pulse",
    "motivosity",
    "adp",
    "paychex",
    "trinet",
    "linkedin-learning",
    "coursera-for-teams",
    "udemy-business",
    "docebo",
    "toggl-track",
    "clockify",
    "deputy",
    "homebase",
    "visier",
    "chart-hop",
    "one-model",
    "crunchr",
] as const;

const CATEGORY_SLUGS = [
  "app-builders",
    "automation-and-workflow",
    "crm-and-marketing",
    "database-and-backend",
    "design-and-prototyping",
    "e-commerce",
    "education-and-e-learning",
    "website-builders",
] as const;

export async function GET() {
  const baseUrl = "https://hrtoolsnav.net";

  const urls: string[] = [];

  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);

  for (const slug of CATEGORY_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/category/${slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  }

  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }

  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
