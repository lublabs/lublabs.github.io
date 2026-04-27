import React from "react";

interface SiteFooterProps {
  year?: number;
}

export default function SiteFooter({ year = new Date().getFullYear() }: SiteFooterProps) {
  return (
    <footer className="border-t border-black/10 px-[5%] py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-5 text-center md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
        <div className="font-display text-lg font-extrabold tracking-[-0.02em] text-[#1F1A14] md:justify-self-start">
          Lub<span className="text-[#0F766E]">Labs</span>
        </div>
        <p className="max-w-[520px] text-center text-xs leading-relaxed text-[#6F6557] md:max-w-none">
          Copyright {year} LubLabs LLC. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6F6557] md:justify-self-end md:gap-6">
          <a href="https://www.linkedin.com/company/lublabs/" className="transition hover:text-[#1F1A14]" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/lublabs-official" className="transition hover:text-[#1F1A14]" target="_blank" rel="noreferrer">
            Twitter / X
          </a>
          <a href="mailto:info@lublabs.com" className="transition hover:text-[#1F1A14]">
            info@lublabs.com
          </a>
        </div>
      </div>
    </footer>
  );
}