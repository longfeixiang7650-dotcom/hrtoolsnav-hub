"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is HR software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HR software (also known as HRIS or HRMS) is a digital platform that helps organizations manage human resources functions like payroll, benefits, recruitment, performance management, time tracking, and compliance. These tools automate administrative tasks, centralize employee data, and provide insights through analytics.",
      },
    },
    {
      "@type": "Question",
      name: "How do you choose the right HR tool for your business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choosing the right HR tool involves defining your requirements, budgeting, evaluating features, reading verified user reviews from platforms like G2 and Capterra, considering integration capabilities, testing with free trials or demos, and assessing vendor support and scalability. Always prioritize tools that solve your specific HR pain points.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between HRIS, HRMS, and HCM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HRIS (Human Resource Information System) focuses on employee data management and reporting. HRMS (Human Resource Management System) adds payroll and benefits administration. HCM (Human Capital Management) is the broadest category, encompassing talent management, workforce planning, and analytics. Small businesses typically start with HRIS, while enterprises invest in comprehensive HCM suites.",
      },
    },
    {
      "@type": "Question",
      name: "How much should a small business spend on HR software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HR software costs vary widely. Basic payroll-only solutions start at $40/month plus $6/employee. Comprehensive HRIS platforms for mid-market companies range from $99-$500/month. Enterprise-level HCM suites can cost $50-$150 per employee per month. Most vendors offer tiered pricing based on company size and feature requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular HR software categories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular HR software categories include HRIS/HRMS (BambooHR, Workday), Payroll (Gusto, ADP), Recruitment/ATS (Greenhouse, Lever), Performance Management (Lattice, 15Five), Employee Engagement (Culture Amp, Officevibe), Time Tracking (Toggl, Clockify), Benefits Administration (Zenefits, Rippling), and Learning Management (Cornerstone, Docebo).",
      },
    },
    {
      "@type": "Question",
      name: "What is employee churn and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Employee churn (or turnover) refers to the rate at which employees leave an organization. High turnover costs companies 1.5-2x the employee's annual salary in recruiting, onboarding, and lost productivity. Top HR tools help track turnover metrics, identify flight risks through engagement surveys, and implement retention strategies.",
      },
    },
    {
      "@type": "Question",
      name: "How do HR software pricing models work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HR software pricing models vary widely. Common models include per-employee-per-month pricing (the most common), base fee + per-employee pricing, tiered plans (Starter/Growth/Enterprise), and all-inclusive flat-rate pricing. Many vendors offer annual discounts of 15-25% compared to monthly billing. Enterprise plans often include custom pricing and dedicated support.",
      },
    },
    {
      "@type": "Question",
      name: "What is an HR tool marketplace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An HR tool marketplace is a platform where businesses can discover, compare, and evaluate HR software tools. Examples include G2, Capterra, TrustRadius, and GetApp. These marketplaces aggregate user reviews, feature comparisons, and pricing information to help HR buyers make informed decisions. HR Tools Nav provides independent, curated comparisons to simplify your decision process.",
      },
    },
    {
      "@type": "Question",
      name: "How important are integrations when choosing HR tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Integrations are extremely important. An HR tool that doesn't integrate with your existing tech stack can create data silos and manual workarounds. Look for tools that offer native integrations with popular platforms (like payroll, benefits providers, Slack, Google Workspace, or Microsoft 365), support APIs for custom connections, and have a marketplace of third-party add-ons.",
      },
    },
    {
      "@type": "Question",
      name: "What should I look for in an HR software contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key items to review in an HR software contract include the service level agreement (SLA) guaranteeing uptime (typically 99.9%+), data ownership and portability clauses, security compliance certifications (SOC 2, ISO 27001), termination and refund policies, auto-renewal terms, pricing escalation limits, and data processing agreements for GDPR compliance.",
      },
    },
    {
      "@type": "Question",
      name: "How does HR software onboarding work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HR software onboarding typically involves account setup, employee data import (from spreadsheets or previous systems), configuration of payroll and benefits settings, user training sessions, and integration setup. The best HR providers offer dedicated onboarding specialists for enterprise plans, knowledge bases with tutorials, and interactive setup wizards.",
      },
    },
    {
      "@type": "Question",
      name: "Is free HR software reliable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free HR software can be reliable for very small teams (under 10 employees) with basic needs. However, free plans typically have significant limitations: fewer integrations, limited reporting, branded output, and minimal support. As your team grows, investing in a paid HR platform becomes essential for compliance, automation, and data security.",
      },
    },
    {
      "@type": "Question",
      name: "How do HR companies handle data security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reputable HR software companies implement encryption at rest and in transit, SOC 2 Type II audits, ISO 27001 certification, GDPR compliance, regular penetration testing, multi-factor authentication (MFA), role-based access controls (RBAC), and data backup & disaster recovery procedures. Always verify a vendor's security posture before committing. HR data is among the most sensitive in any organization.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical HR software purchase process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HR software purchase process typically involves: 1) Defining requirements with stakeholders, 2) Researching vendors through directories like HR Tools Nav, 3) Requesting demos from 3-5 vendors, 4) Evaluating pricing and features, 5) Checking references and user reviews, 6) Negotiating contracts, 7) Pilot testing with a subset of users, and 8) Full rollout. Mid-market deals typically take 2-4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Should we build or buy HR tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unless your organization has unique, complex requirements that no off-the-shelf solution can address, buying is almost always better than building. Building a payroll system, performance management platform, or time tracking tool from scratch costs 10-100x more than subscribing to a proven HR SaaS solution. Invest your engineering resources in your core product, not HR infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What is HR tech stack sprawl and how to avoid it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HR tech stack sprawl is the proliferation of disconnected HR tools across an organization, leading to wasted spending, duplicate data entry, and compliance risks. The average company uses 8-12 HR-related tools. To prevent sprawl, conduct quarterly HR software audits, consolidate overlapping tools, implement a centralized HRIS as your system of record, and establish approval workflows for new tool purchases.",
      },
    },
    {
      "@type": "Question",
      name: "How do HR tool reviews and ratings work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HR tool reviews are typically collected by third-party platforms like G2, Capterra, and TrustRadius. Users submit ratings (usually 1-5 stars) and written feedback. These platforms verify reviewers and moderate content for authenticity. Reviews cover criteria like ease of use, customer support, value for money, and feature set. Always read recent reviews and look for patterns rather than outliers.",
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "What is HR software?",
    answer:
      "HR software (also known as HRIS or HRMS) is a digital platform that helps organizations manage human resources functions like payroll, benefits, recruitment, performance management, time tracking, and compliance. These tools automate administrative tasks, centralize employee data, and provide insights through analytics.",
  },
  {
    question: "How do you choose the right HR tool for your business?",
    answer:
      "Choosing the right HR tool involves defining your requirements, budgeting, evaluating features, reading verified user reviews from platforms like G2 and Capterra, considering integration capabilities, testing with free trials or demos, and assessing vendor support and scalability. Always prioritize tools that solve your specific HR pain points.",
  },
  {
    question: "What's the difference between HRIS, HRMS, and HCM?",
    answer:
      "HRIS (Human Resource Information System) focuses on employee data management and reporting. HRMS (Human Resource Management System) adds payroll and benefits administration. HCM (Human Capital Management) is the broadest category, encompassing talent management, workforce planning, and analytics. Small businesses typically start with HRIS, while enterprises invest in comprehensive HCM suites.",
  },
  {
    question: "How much should a small business spend on HR software?",
    answer:
      "HR software costs vary widely. Basic payroll-only solutions start at $40/month plus $6/employee. Comprehensive HRIS platforms for mid-market companies range from $99-$500/month. Enterprise-level HCM suites can cost $50-$150 per employee per month. Most vendors offer tiered pricing based on company size and feature requirements.",
  },
  {
    question: "What are the most popular HR software categories?",
    answer:
      "Popular HR software categories include HRIS/HRMS (BambooHR, Workday), Payroll (Gusto, ADP), Recruitment/ATS (Greenhouse, Lever), Performance Management (Lattice, 15Five), Employee Engagement (Culture Amp, Officevibe), Time Tracking (Toggl, Clockify), Benefits Administration (Zenefits, Rippling), and Learning Management (Cornerstone, Docebo).",
  },
  {
    question: "What is employee churn and why does it matter?",
    answer:
      "Employee churn (or turnover) refers to the rate at which employees leave an organization. High turnover costs companies 1.5-2x the employee's annual salary in recruiting, onboarding, and lost productivity. Top HR tools help track turnover metrics, identify flight risks through engagement surveys, and implement retention strategies.",
  },
  {
    question: "How do HR software pricing models work?",
    answer:
      "HR software pricing models vary widely. Common models include per-employee-per-month pricing (the most common), base fee + per-employee pricing, tiered plans (Starter/Growth/Enterprise), and all-inclusive flat-rate pricing. Many vendors offer annual discounts of 15-25% compared to monthly billing.",
  },
  {
    question: "What is an HR tool marketplace?",
    answer:
      "An HR tool marketplace is a platform where businesses can discover, compare, and evaluate HR software tools. Examples include G2, Capterra, TrustRadius, and GetApp. HR Tools Nav provides independent, curated comparisons to simplify your decision process.",
  },
  {
    question: "How important are integrations when choosing HR tools?",
    answer:
      "Integrations are extremely important. An HR tool that doesn't integrate with your existing tech stack can create data silos and manual workarounds. Look for tools that offer native integrations with popular platforms, support APIs for custom connections, and have a marketplace of third-party add-ons.",
  },
  {
    question: "What should I look for in an HR software contract?",
    answer:
      "Key items to review in an HR software contract include the SLA guaranteeing uptime (typically 99.9%+), data ownership and portability clauses, security compliance certifications (SOC 2, ISO 27001), termination and refund policies, auto-renewal terms, pricing escalation limits, and data processing agreements for GDPR compliance.",
  },
  {
    question: "How does HR software onboarding work?",
    answer:
      "HR software onboarding typically involves account setup, employee data import, configuration of payroll and benefits settings, user training sessions, and integration setup. The best HR providers offer dedicated onboarding specialists for enterprise plans and knowledge bases with tutorials.",
  },
  {
    question: "Is free HR software reliable?",
    answer:
      "Free HR software can be reliable for very small teams (under 10 employees) with basic needs. However, free plans typically have significant limitations: fewer integrations, limited reporting, and minimal support. As your team grows, investing in a paid HR platform becomes essential.",
  },
  {
    question: "How do HR companies handle data security?",
    answer:
      "Reputable HR software companies implement encryption at rest and in transit, SOC 2 Type II audits, ISO 27001 certification, GDPR compliance, regular penetration testing, multi-factor authentication, role-based access controls, and data backup procedures. HR data is among the most sensitive in any organization.",
  },
  {
    question: "What is the typical HR software purchase process?",
    answer:
      "The HR software purchase process typically involves: defining requirements with stakeholders, researching vendors, requesting demos from 3-5 vendors, evaluating pricing and features, checking references and user reviews, negotiating contracts, pilot testing, and full rollout.",
  },
  {
    question: "Should we build or buy HR tools?",
    answer:
      "Unless your organization has unique, complex requirements, buying is almost always better than building. Building a payroll system or performance management platform from scratch costs 10-100x more than subscribing to a proven HR SaaS solution.",
  },
  {
    question: "What is HR tech stack sprawl and how to avoid it?",
    answer:
      "HR tech stack sprawl is the proliferation of disconnected HR tools leading to wasted spending and duplicate data entry. To prevent it, conduct quarterly HR software audits, consolidate overlapping tools, and implement a centralized HRIS as your system of record.",
  },
  {
    question: "How do HR tool reviews and ratings work?",
    answer:
      "HR tool reviews are typically collected by third-party platforms like G2 and Capterra. Users submit ratings (1-5 stars) and written feedback. These platforms verify reviewers and moderate content for authenticity. Always read recent reviews and look for patterns rather than outliers.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8B5CF6] bg-[#2a1a4e] px-3 py-1.5 rounded-md mb-4">
              FAQ
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#e8e0f7] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#c4b5fd] max-w-xl mx-auto leading-relaxed">
              Everything you need to know about HR tools and software — from choosing the right
              platform to understanding pricing, security, and industry trends.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1233] border border-[#3b2566] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#2a1a4e] transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[#e8e0f7] font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8B5CF6] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-[#c4b5fd] leading-relaxed text-sm border-t border-[#3b2566] pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-[#a78bfa] text-sm">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-[#8B5CF6] hover:underline font-medium"
              >
                Contact our team
              </a>{" "}
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
