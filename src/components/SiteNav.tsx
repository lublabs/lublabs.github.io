import React from "react";
import { CONSULTATION_CTA_TEXT, CONSULTATION_URL } from "../constants/cta";

type NavKey = "work" | "services" | "about" | "blog";
type ExtendedNavKey = NavKey | "caseStudies";

interface SiteNavProps {
  isHome?: boolean;
  currentPath?: string;
  activeKey?: ExtendedNavKey | null;
}

export default function SiteNav({
  isHome = false,
  currentPath = "/",
  activeKey,
}: SiteNavProps) {
  const workHref = isHome ? "#work" : "/#work";
  const servicesHref = isHome ? "#services" : "/#services";
  const aboutHref = isHome ? "#about" : "/#about";

  const normalizedPath = currentPath || "/";
  const resolvedActive: ExtendedNavKey | null =
    activeKey !== undefined
      ? activeKey
      : normalizedPath.startsWith("/blog")
        ? "blog"
        : normalizedPath.startsWith("/case-studies")
          ? "caseStudies"
        : normalizedPath.startsWith("/services")
          ? "services"
          : null;

  const navLinkClass = (key: ExtendedNavKey) =>
    `text-base font-medium transition ${
      resolvedActive === key
        ? "text-[#EEE9E0] border-b border-[#3EFFC8] pb-0.5"
        : "text-[#7A8499] hover:text-[#EEE9E0]"
    }`;

  const mobileNavLinkClass = (key: ExtendedNavKey) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
      resolvedActive === key
        ? "bg-[#3EFFC81A] text-[#EEE9E0]"
        : "text-[#A7B0C2] hover:bg-white/5 hover:text-[#EEE9E0]"
    }`;

  const navItems: Array<{ key: ExtendedNavKey; label: string; href: string }> = [
    { key: "work", label: "Work", href: workHref },
    { key: "services", label: "Services", href: servicesHref },
    { key: "about", label: "About", href: aboutHref },
    { key: "caseStudies", label: "Case Studies", href: "/case-studies" },
    { key: "blog", label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(7,12,22,0.9)] px-[5%] py-3 backdrop-blur-md md:py-4">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3 md:gap-6">
        <a href="/" className="font-display text-xl font-extrabold tracking-[-0.02em] text-[#EEE9E0] sm:text-2xl md:text-[2rem]">
          Lub<span className="text-[#3EFFC8]">Labs</span>
        </a>

        <div className="hidden items-center gap-4 md:flex md:gap-8">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className={navLinkClass(item.key)}>
              {item.label}
            </a>
          ))}
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="cta-primary hidden items-center justify-center md:inline-flex"
          >
            {CONSULTATION_CTA_TEXT}
          </a>
        </div>

        <details className="relative md:hidden">
          <summary className="nav-summary flex list-none items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-[#EEE9E0] transition hover:border-white/30 hover:bg-white/5">
            <span>Menu</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M3 6L7.5 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>

          <div className="absolute right-0 top-[calc(100%+10px)] w-[min(86vw,280px)] rounded-xl border border-white/10 bg-[#0C1220F5] p-2 shadow-[0_18px_48px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a key={item.key} href={item.href} className={mobileNavLinkClass(item.key)}>
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="cta-primary mt-2 inline-flex w-full items-center justify-center"
            >
              {CONSULTATION_CTA_TEXT}
            </a>
          </div>
        </details>
      </div>
    </nav>
  );
}