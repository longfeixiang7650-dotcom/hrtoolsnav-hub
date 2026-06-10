import { Users } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-orange-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                <Users className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-bold text-stone-800">HR Tools Nav</span>
            </Link>
            <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
              Curated reviews and comparisons of the best HR software. Built by the team at Bison Layer.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-stone-800 uppercase tracking-wider mb-3">Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/category/hris" className="text-sm text-stone-500 hover:text-orange-600">HRIS Platforms</Link></li>
              <li><Link href="/category/payroll" className="text-sm text-stone-500 hover:text-orange-600">Payroll Software</Link></li>
              <li><Link href="/category/recruitment" className="text-sm text-stone-500 hover:text-orange-600">Recruitment Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-stone-800 uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-stone-500 hover:text-orange-600">Blog & Guides</Link></li>
              <li><Link href="/about" className="text-sm text-stone-500 hover:text-orange-600">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-stone-500 hover:text-orange-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-stone-800 uppercase tracking-wider mb-3">Policy</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-stone-500 hover:text-orange-600">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-stone-500 hover:text-orange-600">Terms</Link></li>
              <li><Link href="/disclosure" className="text-sm text-stone-500 hover:text-orange-600">Disclosure</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-orange-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-400">© {new Date().getFullYear()} HR Tools Nav. All rights reserved.</p>
          <p className="text-xs text-stone-400">Made with ❤️ in Florence, Italy</p>
        </div>
      </div>
    </footer>
  );
}
