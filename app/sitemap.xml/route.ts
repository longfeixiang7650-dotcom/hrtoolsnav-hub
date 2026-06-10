import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "best-hr-software-2026-comparison",
    "top-hris-platforms-2026",
    "payroll-software-comparison-2026",
    "hr-software-buyers-guide-2026-bamboohr-vs-workday-vs-gusto-vs-rippling",
    "why-your-ats-isnt-delivering-quality-hires",
] as const;

const TOOL_SLUGS = [
  "webflow",
    "bubble",
    "wix",
    "squarespace",
    "weebly",
    "carrd",
    "framer",
    "unbounce",
    "duda",
    "softr",
    "dorik",
    "tilda",
    "pixpa",
    "zyro",
    "bookmark",
    "flutterflow",
    "draftbit",
    "adalo",
    "glide",
    "thunkable",
    "bravo-studio",
    "appgyver",
    "zapier",
    "make",
    "n8n",
    "pipedream",
    "parabola",
    "tray-io",
    "workato",
    "relay-app",
    "figma",
    "canva",
    "penpot",
    "balsamiq",
    "sketch",
    "lunacy",
    "creatie",
    "ecwid",
    "gumroad",
    "selldone",
    "shift4shop",
    "printful",
    "podia",
    "payhip",
    "sambercart",
    "airtable",
    "nocodb",
    "supabase",
    "firebase",
    "xano",
    "backendless",
    "rowy",
    "budibase",
    "hubspot-crm",
    "mailchimp",
    "activecampaign",
    "convertkit",
    "intercom",
    "freshsales",
    "teachable",
    "thinkific",
    "kajabi",
    "learnworlds",
    "mighty-networks",
    "circle",
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
