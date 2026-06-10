import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — HR Tools Nav",
  description:
    "HR Tools Nav is an independent directory of human resources software. Built by Bison Layer, a boutique software studio in Florence, Italy.",
};

const TEAM = [
  {
    name: "Elise Smit",
    role: "Founder & CEO",
    bio: "Elise founded Bison Layer in 2016 after a decade leading HR technology projects at European enterprises. She started HR Tools Nav to help HR leaders cut through the noise and find software that actually works for their teams.",
  },
  {
    name: "Giovanni Giordano",
    role: "Co-Founder & CTO",
    bio: "Giovanni brings deep experience in building scalable SaaS platforms. He leads the technical development of HR Tools Nav, focusing on data accuracy, search performance, and a clean user experience.",
  },
  {
    name: "David Quinn",
    role: "Technical Lead",
    bio: "David oversees data integration and quality assurance. He ensures every tool listing is verified against official sources and that our comparison data stays current as products evolve.",
  },
  {
    name: "Henry O'Sullivan",
    role: "QA Engineer",
    bio: "Henry is responsible for reviewing each HR platform on the site. He tests user workflows, verifies pricing claims, and reads through hundreds of user reviews to compile honest pros and cons.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <section className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
          About HR Tools Nav
        </h1>
        <div className="prose prose-stone max-w-none">
          <p className="text-lg text-stone-600 leading-relaxed mb-4">
            HR Tools Nav was built to solve a simple problem: there&apos;s too much noise in the HR software
            market. Every vendor claims to be the best. Every review site seems to favor whoever pays them most.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            We take a different approach. <strong>HR Tools Nav</strong> is maintained by <strong>Bison Layer</strong>,
            a small software studio based in <strong>Florence, Italy</strong>. We don&apos;t accept payment for listings,
            we don&apos;t inflate ratings, and we don&apos;t play favorites.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Every tool on this site is evaluated the same way: we look at feature depth, pricing transparency,
            real user satisfaction (from G2, Capterra, and TrustRadius), and how well the product delivers on
            its promises. If a tool is overhyped and underdelivers, we say so.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Whether you&apos;re a startup setting up your first payroll system or an enterprise rolling out a
            global HRIS, our goal is to help you make an informed decision — not the most marketed one.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-stone-900 mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="bg-white border border-stone-200 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-orange-600">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-semibold text-stone-900">{member.name}</h3>
              <p className="text-sm text-orange-600 font-medium mb-3">{member.role}</p>
              <p className="text-sm text-stone-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-8">
        <h2 className="text-xl font-bold text-stone-900 mb-3">
          Built by Bison Layer
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          HR Tools Nav is a project by <strong>Bison Layer</strong>, a boutique software studio in
          Florence, Italy. Founded in 2016, our team of 5 specializes in building mobile apps and SaaS
          platforms with a focus on user experience and data integrity.
        </p>
        <div className="flex items-center gap-4 text-sm text-stone-500">
          <span>📍 Florence, Italy</span>
          <span>📅 Founded 2016</span>
          <span>👥 Team of 5</span>
        </div>
      </section>
    </div>
  );
}
