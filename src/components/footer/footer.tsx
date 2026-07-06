import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] w-full pt-16 flex flex-col overflow-hidden">
      <div className="w-full border-t border-b border-white/10 py-6 px-6 md:px-12 flex flex-col xl:flex-row items-center justify-between gap-6 text-sm font-medium">
        {/* Social Icons */}
        <div className="flex items-center gap-6 text-white w-full xl:w-auto justify-center xl:justify-start">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Linkedin className="w-[1.125rem] h-[1.125rem]" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <svg viewBox="0 0 24 24" className="w-[1.125rem] h-[1.125rem] fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Facebook className="w-[1.125rem] h-[1.125rem]" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Instagram className="w-[1.125rem] h-[1.125rem]" />
          </a>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-gray-400 text-xs md:text-sm">
          <span>&copy; {new Date().getFullYear()} Profit Agentz - All rights reserved</span>
          <Link href="/coppa" className="hover:text-white transition-colors">COPPA</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/saas-agreement" className="hover:text-white transition-colors">SaaS Agreement</Link>
          <Link href="/certifications" className="hover:text-white transition-colors">Certifications</Link>
        </div>

        {/* Right Info */}
        <div className="text-gray-400 flex-shrink-0 w-full xl:w-auto text-center xl:text-right text-xs md:text-sm">
          Site by NOOON
        </div>
      </div>

      {/* Huge Text */}
      <div className="w-full flex justify-center pt-10 md:pt-16 pb-0 overflow-hidden">
        <span 
          className="text-[#b094ff] font-black tracking-tighter whitespace-nowrap select-none"
          style={{ 
            fontSize: 'clamp(3rem, 14.5vw, 25rem)',
            lineHeight: '0.75',
            marginBottom: '-2%'
          }}
        >
          Profit Agentz
        </span>
      </div>
    </footer>
  );
}
