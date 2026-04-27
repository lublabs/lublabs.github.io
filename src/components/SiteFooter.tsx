import React from "react";

interface SiteFooterProps {
  year?: number;
}

export default function SiteFooter({ year = new Date().getFullYear() }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 px-[5%] py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-5 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
        <div className="font-display text-lg font-extrabold tracking-[-0.02em] text-[#EEE9E0]">
          Lub<span className="text-[#3EFFC8]">Labs</span>
        </div>
        <p className="max-w-[520px] text-xs leading-relaxed text-[#7A8499] md:max-w-none">
          Copyright {year} LubLabs. Building software for founders across the US.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#7A8499] md:justify-end md:gap-6">
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
      </div>
    </footer>
  );
}