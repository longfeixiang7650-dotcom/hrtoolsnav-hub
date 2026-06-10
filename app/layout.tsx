import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "HR Tools Nav — Best HR Management Tools & Platform Reviews 2026",
    template: "%s — HR Tools Nav",
  },
  description:
    "Compare 69+ HR tools with verified reviews, pricing breakdowns, and expert comparisons. Find the perfect HR platform for your business. BambooHR, Workday, Gusto and more.",
  keywords: [
    "HR tools",
    "human resources software",
    "HR management",
    "HRIS platforms",
    "payroll software",
    "recruitment tools",
    "performance management",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HR Tools Nav",
    title: "HR Tools Nav — Best HR Management Tools & Platform Reviews 2026",
    description:
      "Compare 69+ HR tools with verified reviews, pricing, and expert comparisons.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-orange-50 text-stone-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
