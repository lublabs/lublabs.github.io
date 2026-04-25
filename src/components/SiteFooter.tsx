import React from "react";

interface SiteFooterProps {
  year?: number;
}

export default function SiteFooter({ year = new Date().getFullYear() }: SiteFooterProps) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-[5%] py-10">
      <div className="font-display text-lg font-extrabold tracking-[-0.02em] text-[#EEE9E0]">
        Lub<span className="text-[#3EFFC8]">Labs</span>
      </div>
      <p className="text-xs text-[#7A8499]">Copyright {year} LubLabs. Building software for founders across the US.</p>
      <div className="flex flex-wrap gap-6 text-xs text-[#7A8499]">
        <a href="https://www.linkedin.com/company/lublabs/" className="transition hover:text-[#EEE9E0]" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://x.com/lublabs-official" className="transition hover:text-[#EEE9E0]" target="_blank" rel="noreferrer">
          Twitter / X
        </a>
        <a href="mailto:info@lublabs.com" className="transition hover:text-[#EEE9E0]">
          info@lublabs.com
        </a>
      </div>
    </footer>
  );
}