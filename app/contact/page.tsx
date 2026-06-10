"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">Contact Us</h1>
        <p className="text-lg text-stone-600 max-w-2xl">
          Questions about an HR tool? Want to suggest a new addition? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center">
                <Mail className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">Email</p>
                <p className="text-sm text-stone-500">info@hrtoolsnav.net</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">Location</p>
                <p className="text-sm text-stone-500">Florence, Italy</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center">
                <Clock className="w-4 h-4 text-rose-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">Response Time</p>
                <p className="text-sm text-stone-500">Within 24-48 hours</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            HR Tools Nav is a project by <strong>Bison Layer</strong>. For partnership inquiries, contact Elise Smit at elise@hrtoolsnav.net.
          </p>
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Send className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Thanks for reaching out!</h3>
              <p className="text-sm text-green-600">We typically respond within 24-48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 text-sm" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 text-sm" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Subject</label>
                <input type="text" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 text-sm" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Message</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 text-sm resize-none" placeholder="Tell us more..." />
              </div>
              <button type="submit" className="w-full sm:w-auto px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
