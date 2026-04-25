import React from "react";
import { CONSULTATION_CTA_TEXT, CONSULTATION_URL } from "../constants/cta";

type NavKey = "work" | "services" | "about" | "blog";

interface SiteNavProps {
  isHome?: boolean;
  currentPath?: string;
  activeKey?: NavKey | null;
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
  const resolvedActive: NavKey | null =
    activeKey !== undefined
      ? activeKey
      : normalizedPath.startsWith("/blog")
        ? "blog"
        : normalizedPath.startsWith("/services")
          ? "services"
          : null;

  const navLinkClass = (key: NavKey) =>
    `text-sm transition ${
      resolvedActive === key
        ? "text-[#EEE9E0] border-b border-[#3EFFC8] pb-0.5"
        : "text-[#7A8499] hover:text-[#EEE9E0]"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(7,12,22,0.85)] px-[5%] py-4 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6">
        <a href="/" className="font-display text-2xl font-extrabold tracking-[-0.02em] text-[#EEE9E0] md:text-[2rem]">
          Lub<span className="text-[#3EFFC8]">Labs</span>
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <a href={workHref} className={navLinkClass("work")}>
            Work
          </a>
          <a href={servicesHref} className={navLinkClass("services")}>
            Services
          </a>
          <a href={aboutHref} className={navLinkClass("about")}>
            About
          </a>
          <a href="/blog" className={navLinkClass("blog")}>
            Blog
          </a>
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="cta-primary hidden items-center justify-center md:inline-flex"
          >
            {CONSULTATION_CTA_TEXT}
          </a>
        </div>
      </div>
    </nav>
  );
}