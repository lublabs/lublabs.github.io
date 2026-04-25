import React, { useEffect, useRef } from "react";
import { CONSULTATION_CTA_TEXT, CONSULTATION_URL } from "../constants/cta";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

type Stat = {
  value: string;
  label: string;
};

type Persona = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
};

type Step = {
  number: string;
  title: string;
  description: string;
};

type Testimonial = {
  initials: string;
  author: string;
  role: string;
  quote: string;
};

type FeaturedCaseStudy = {
  title: string;
  summary: string;
  client: string;
  industry: string;
  status: string;
  services: string[];
  href: string;
  image: string;
};

const stats: Stat[] = [
  { value: "8+", label: "Years building software" },
  { value: ">95%", label: "Client retention rate" },
  { value: "3", label: "Mobile apps shipped" },
];

const personas: Persona[] = [
  {
    title: "Startup Founders",
    description:
      "You have an idea and need a technical partner who moves fast, thinks like an owner, and delivers a product you can actually ship.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 2L13.5 8H20L14.5 12L16.5 18.5L11 14.5L5.5 18.5L7.5 12L2 8H8.5L11 2Z"
          stroke="#3EFFC8"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Service Business Owners",
    description:
      "You run an agency, brokerage, or consultancy and want to build software that scales your operations or creates a new revenue stream.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="18" height="12" rx="1.5" stroke="#3EFFC8" strokeWidth="1.5" />
        <path
          d="M7 7V5.5C7 3.567 8.567 2 10.5 2H11.5C13.433 2 15 3.567 15 5.5V7"
          stroke="#3EFFC8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M2 12H20" stroke="#3EFFC8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="12" r="1.5" fill="#3EFFC8" />
      </svg>
    ),
  },
  {
    title: "Mobile App Builders",
    description:
      "You need a cross-platform mobile app built and deployed properly. Built to last and ready for production users.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="5" y="2" width="12" height="18" rx="2" stroke="#3EFFC8" strokeWidth="1.5" />
        <circle cx="11" cy="16.5" r="1" fill="#3EFFC8" />
        <path
          d="M8 6H14M8 9.5H14M8 13H12"
          stroke="#3EFFC8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "AI-Powered Product Builders",
    description:
      "You want to add ML, AI features, or intelligent automation to your product and need engineers who have done it before.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="3" stroke="#3EFFC8" strokeWidth="1.5" />
        <path d="M11 2V5M11 17V20M2 11H5M17 11H20" stroke="#3EFFC8" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M4.93 4.93L7.05 7.05M14.95 14.95L17.07 17.07M17.07 4.93L14.95 7.05M7.05 14.95L4.93 17.07"
          stroke="#3EFFC8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const services: Service[] = [
  {
    title: "SaaS Development",
    description:
      "Turn your business process or idea into a scalable software product with paying customers.",
    bullets: [
      "Multi-tenant architecture",
      "Payment and subscription billing",
      "Third-party API integrations",
      "Admin dashboards and analytics",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="#3EFFC8" strokeWidth="1.5" />
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="#3EFFC8" strokeWidth="1.5" strokeDasharray="2 2" />
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="#3EFFC8" strokeWidth="1.5" strokeDasharray="2 2" />
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="#3EFFC8" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps built for real users and long-term product growth.",
    bullets: [
      "React Native and cross-platform",
      "App Store and Play Store deployment",
      "Performance-optimized UX",
      "Push notifications and offline support",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="7" y="2" width="14" height="24" rx="3" stroke="#3EFFC8" strokeWidth="1.5" />
        <circle cx="14" cy="21" r="1.25" fill="#3EFFC8" />
        <path d="M10 7H18M10 11H18M10 15H15" stroke="#3EFFC8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI and Machine Learning",
    description:
      "Add intelligence to your product with recommendations, predictions, automation, and NLP workflows.",
    bullets: [
      "Predictive analytics and forecasting",
      "Recommendation systems",
      "Natural language processing",
      "AI-powered feature integration",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C8.48 4 4 8.48 4 14s4.48 10 10 10 10-4.48 10-10S19.52 4 14 4z" stroke="#3EFFC8" strokeWidth="1.5" />
        <path d="M9 14c0-1.5.8-2.8 2-3.5M19 14c0 1.5-.8 2.8-2 3.5" stroke="#3EFFC8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2.5" fill="#3EFFC8" fillOpacity="0.3" stroke="#3EFFC8" strokeWidth="1.5" />
        <path d="M14 4V7M14 21V24M4 14H7M21 14H24" stroke="#3EFFC8" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Your software runs reliably at scale, deployed and automated with confidence.",
    bullets: [
      "Kubernetes and containerization",
      "CI/CD pipeline automation",
      "Scalability and reliability by design",
      "Ongoing maintenance and monitoring",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M7 18a4.5 4.5 0 01-.5-9 6 6 0 0111.6-1.5A4 4 0 0121 16"
          stroke="#3EFFC8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 18v6M11 21l3 3 3-3" stroke="#3EFFC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "30 minutes to understand your vision, your users, and what success looks like.",
  },
  {
    number: "02",
    title: "Scoped Proposal",
    description:
      "A clear Phase 1 scope with defined deliverables, timeline, and pricing.",
  },
  {
    number: "03",
    title: "Build and Iterate",
    description:
      "Regular updates, demos, and feedback loops so you are never waiting in the dark.",
  },
  {
    number: "04",
    title: "Launch and Grow",
    description:
      "We ship, support launch, and stay on as your long-term technical partner.",
  },
];

const testimonials: Testimonial[] = [
  {
    initials: "DK",
    author: "Danny Kawok",
    role: "Founder",
    quote:
      "LubLabs has been highly professional, responsive, and detail-oriented. They quickly resolved a critical integration issue with an innovative solution and consistently turn our vision into a functional product.",
  },
  {
    initials: "JH",
    author: "Janette Habashi, PhD",
    role: "Founder",
    quote:
      "LubLabs exceeded my expectations. From thorough exploration and thoughtful design to seamless implementation, their team was attentive, professional, and highly skilled. Their expertise made the entire process smooth and effective.",
  },
];

const formatStatus = (status: string) =>
  status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const mobileShowcase = [
  {
    name: "Gametime",
    image: "/assets/gametime.png",
    alt: "Gametime mobile app screenshot",
  },
  {
    name: "App 2",
    image: "",
    alt: "Second mobile app screenshot placeholder",
  },
  {
    name: "App 3",
    image: "",
    alt: "Third mobile app screenshot placeholder",
  },
];

interface HomePageProps {
  currentPath?: string;
  featuredCaseStudy?: FeaturedCaseStudy;
}

export default function HomePage({ currentPath = "/", featuredCaseStudy }: HomePageProps) {
  const featured = featuredCaseStudy;
  const featuredTags = featured?.services ?? [];

  const heroSectionRef = useRef<HTMLElement | null>(null);
  const shapeOneRef = useRef<HTMLDivElement | null>(null);
  const shapeTwoRef = useRef<HTMLDivElement | null>(null);
  const shapeThreeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroSectionRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;
    let x = 0;
    let y = 0;

    const clamp = (value: number, min: number, max: number) =>
      Math.max(min, Math.min(max, value));

    const applyTransforms = (mx: number, my: number) => {
      if (shapeOneRef.current) {
        shapeOneRef.current.style.transform = `translate3d(${mx * 28}px, ${my * 20}px, 0) rotateX(${my * -14}deg) rotateY(${mx * 18}deg)`;
      }

      if (shapeTwoRef.current) {
        shapeTwoRef.current.style.transform = `translate3d(${mx * -22}px, ${my * 18}px, 0) rotateX(${my * 10}deg) rotateY(${mx * -15}deg)`;
      }

      if (shapeThreeRef.current) {
        shapeThreeRef.current.style.transform = `translate3d(${mx * 16}px, ${my * -24}px, 0) rotateX(${my * -8}deg) rotateY(${mx * 12}deg)`;
      }
    };

    const frame = () => {
      raf = 0;
      applyTransforms(x, y);
    };

    const handleMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      x = clamp(normalizedX, -1, 1);
      y = clamp(normalizedY, -1, 1);

      if (!raf) {
        raf = window.requestAnimationFrame(frame);
      }
    };

    const handleLeave = () => {
      x = 0;
      y = 0;

      if (!raf) {
        raf = window.requestAnimationFrame(frame);
      }
    };

    hero.addEventListener("pointermove", handleMove);
    hero.addEventListener("pointerleave", handleLeave);

    return () => {
      hero.removeEventListener("pointermove", handleMove);
      hero.removeEventListener("pointerleave", handleLeave);
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <>
      <SiteNav isHome currentPath={currentPath} activeKey={null} />

      <section ref={heroSectionRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden px-[5%] pb-20 pt-28">
        <div
          className="hero-grid-mask absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(62,255,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(62,255,200,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />
        <div className="hero-3d-stage absolute inset-0" aria-hidden="true">
          <div ref={shapeOneRef} className="hero-shape left-[6%] top-[18%] z-[1] h-[170px] w-[170px] md:h-[210px] md:w-[210px]">
            <div
              className="hero-shape-a h-full w-full rounded-[34%_66%_61%_39%/44%_33%_67%_56%] border border-[#3EFFC866]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(62,255,200,0.34), rgba(11,22,42,0.2) 60%, rgba(14,28,54,0.15) 100%)",
                boxShadow:
                  "0 24px 54px rgba(62,255,200,0.2), inset -18px -18px 30px rgba(7,12,22,0.38)",
              }}
            />
          </div>

          <div ref={shapeTwoRef} className="hero-shape right-[8%] top-[14%] z-[1] h-[140px] w-[140px] md:h-[180px] md:w-[180px]">
            <div
              className="hero-shape-b h-full w-full rounded-[58%_42%_36%_64%/41%_62%_38%_59%] border border-[#7BC6FF66]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(123,198,255,0.42), rgba(16,30,59,0.3) 65%, rgba(8,18,36,0.2) 100%)",
                boxShadow:
                  "0 20px 50px rgba(123,198,255,0.16), inset -14px -14px 26px rgba(7,12,22,0.35)",
              }}
            />
          </div>

          <div ref={shapeThreeRef} className="hero-shape bottom-[12%] right-[16%] z-[1] h-[120px] w-[120px] md:h-[150px] md:w-[150px]">
            <div
              className="hero-shape-c h-full w-full rounded-[50%_50%_38%_62%/58%_44%_56%_42%] border border-[#3EFFC84D]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(62,255,200,0.25), rgba(17,28,50,0.22) 60%, rgba(11,20,37,0.18) 100%)",
                boxShadow:
                  "0 18px 36px rgba(62,255,200,0.16), inset -12px -12px 22px rgba(6,12,22,0.34)",
              }}
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute left-1/2 top-[-20%] h-[500px] w-[700px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse, rgba(62,255,200,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <h1 className="fade-up max-w-[860px] font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.04] tracking-[-0.03em] [animation-delay:0.2s]">
            We build software for founders
            <br />
            with <span className="text-[#3EFFC8]">something to prove.</span>
          </h1>

          <p className="fade-up mt-6 max-w-[540px] text-lg leading-relaxed text-[#7A8499] [animation-delay:0.3s]">
            From mobile apps to full SaaS platforms, we take your vision from whiteboard to working
            product. No fluff, no agencies in the middle. Just builders who care about your results.
          </p>

          <div className="fade-up mt-10 flex flex-wrap items-center gap-4 [animation-delay:0.4s]">
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="cta-primary inline-flex items-center justify-center"
            >
              {CONSULTATION_CTA_TEXT}
            </a>
            <a
              href="#work"
              className="rounded-md border border-white/10 px-6 py-2.5 font-display text-sm font-semibold transition hover:border-white/25 hover:bg-white/5"
            >
              See our work
            </a>
          </div>
        </div>
      </section>

      <div className="mx-[5%] flex flex-wrap border-y border-white/10">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-[180px] flex-1 border-r border-white/10 px-8 py-10 last:border-r-0 md:min-w-[220px]">
            <div className="font-display text-[2.75rem] font-extrabold leading-none tracking-[-0.03em] text-[#3EFFC8]">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-[#7A8499]">{stat.label}</div>
          </div>
        ))}
      </div>

      <section className="px-[5%] py-24">
        <div className="mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">Who We Work With</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            We work with founders
            <br />
            who have something to build.
          </h2>
          <p className="mt-4 max-w-[620px] text-[1.05rem] text-[#7A8499]">
            We do not work with everyone. We work best with people who have a real problem, a clear
            vision, and the drive to see it through.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {personas.map((persona) => (
            <article key={persona.title} className="bg-[#0C1220] p-8 transition hover:bg-[#111A2E]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#3EFFC833] bg-[#3EFFC81F]">
                {persona.icon}
              </div>
              <h3 className="font-display text-[1.1rem] font-bold">{persona.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7A8499]">{persona.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="px-[5%] py-24">
        <div className="mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">Featured Work</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Featured builds from
            <br />
            real client work.
          </h2>
        </div>

        {featured ? (
          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#0C1220] lg:grid-cols-2">
            <div className="p-8 md:p-14">
              <span className="inline-block rounded bg-[#3EFFC81F] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#3EFFC8]">
                Case Study - {featured.industry}
              </span>
              <h3 className="mt-6 font-display text-[1.85rem] font-extrabold leading-[1.15] tracking-[-0.025em]">
                {featured.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-[#7A8499]">
                {featured.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <div className="font-display text-[1.75rem] font-extrabold leading-none tracking-[-0.02em] text-[#3EFFC8]">
                    {formatStatus(featured.status)}
                  </div>
                  <div className="mt-1 text-xs text-[#7A8499]">Current status</div>
                </div>
                <div>
                  <div className="font-display text-[1.75rem] font-extrabold leading-none tracking-[-0.02em] text-[#3EFFC8]">
                    {featured.client}
                  </div>
                  <div className="mt-1 text-xs text-[#7A8499]">Client</div>
                </div>
                <div>
                  <div className="font-display text-[1.75rem] font-extrabold leading-none tracking-[-0.02em] text-[#3EFFC8]">
                    {featured.services.length}
                  </div>
                  <div className="mt-1 text-xs text-[#7A8499]">Services delivered</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {featuredTags.map((tag) => (
                  <span key={tag} className="rounded border border-white/10 bg-[#111A2E] px-2.5 py-1 text-xs text-[#7A8499]">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={featured.href}
                className="mt-8 inline-flex rounded-md border border-white/10 px-5 py-2.5 font-display text-sm font-semibold text-[#EEE9E0] transition hover:border-white/20 hover:bg-white/5"
              >
                Read full case study
              </a>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D1525] to-[#0A1930] p-8 md:p-12">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(62,255,200,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(62,150,255,0.06) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
              <img
                src={featured.image}
                alt={`${featured.title} screenshot`}
                className="relative z-10 w-full rounded-xl border border-[#3EFFC833] object-cover shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <article className="rounded-2xl border border-white/10 bg-[#0C1220] p-8 md:p-14">
            <h3 className="font-display text-[1.7rem] font-extrabold leading-[1.15] tracking-[-0.02em]">
              No case studies published yet.
            </h3>
            <p className="mt-3 max-w-[680px] text-[0.98rem] leading-relaxed text-[#7A8499]">
              Add markdown files under src/content/case-studies and this section will update automatically.
            </p>
            <a
              href="/case-studies/"
              className="mt-8 inline-flex rounded-md border border-white/10 px-5 py-2.5 font-display text-sm font-semibold text-[#EEE9E0] transition hover:border-white/20 hover:bg-white/5"
            >
              View case studies
            </a>
          </article>
        )}

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {mobileShowcase.map((app) => (
            <div key={app.name} className="flex flex-col items-center gap-4">
              <div className="flex h-[220px] w-[110px] flex-col rounded-[22px] border-2 border-[#3EFFC833] bg-[#0C1525] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] md:h-[260px] md:w-[130px]">
                <div className="mx-auto mb-2 h-1.5 w-9 rounded bg-[#3EFFC826]" />
                {app.image ? (
                  <img
                    src={app.image}
                    alt={app.alt}
                    className="h-full w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-1 items-center justify-center rounded-xl border-2 border-dashed border-[#3EFFC84D] bg-[#3EFFC805] text-center">
                    <div>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <rect x="4" y="1" width="10" height="16" rx="2" stroke="rgba(62,255,200,0.5)" strokeWidth="1.5" />
                        <circle cx="9" cy="14" r="0.75" fill="rgba(62,255,200,0.5)" />
                      </svg>
                      <div className="mt-1 font-display text-xs font-bold text-[#3EFFC880]">{app.name}</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="font-display text-xs font-semibold tracking-[0.05em] text-[#7A8499]">{app.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-[5%] py-24">
        <div className="mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">What We Build</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Software that ships.
            <br />
            Results that stick.
          </h2>
          <p className="mt-4 max-w-[640px] text-[1.05rem] text-[#7A8499]">
            You tell us the problem. We design and build the right software path to measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="bg-[#0C1220] p-8 transition hover:bg-[#111A2E]">
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-display text-[1.15rem] font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7A8499]">{service.description}</p>
              <div className="mt-5 space-y-1.5">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-2 text-[0.8rem] text-[#7A8499]">
                    <span className="mt-0.5 text-[0.75rem] text-[#3EFFC8]">-&gt;</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="px-[5%] pb-24">
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">How We Work</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Our process is simple
            <br />
            because yours is complex enough.
          </h2>
          <p className="mt-4 max-w-[620px] text-[1.05rem] text-[#7A8499]">
            We keep things lean, transparent, and focused on shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative pr-2 xl:pr-6">
              <div className="mb-3 font-display text-5xl font-extrabold leading-none text-[#111A2E]">
                {step.number}
              </div>
              <div className="font-display text-base font-bold">{step.title}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#7A8499]">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute right-[-20px] top-7 hidden h-10 w-px bg-white/10 xl:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="px-[5%] pb-24">
        <div className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">What Clients Say</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Do not take our word for it.
          </h2>
          <p className="mt-4 max-w-[520px] text-[1.05rem] text-[#7A8499]">Real feedback from real founders.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-xl border border-white/10 bg-[#0C1220] p-8">
              <div className="mb-1 text-[0.7rem] tracking-[1px] text-[#3EFFC8]">★★★★★</div>
              <div className="mb-3 font-serif text-6xl leading-[0.7] text-[#3EFFC84D]">"</div>
              <p className="mb-6 text-[0.95rem] italic leading-relaxed text-[#EEE9E0]">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111A2E] font-display text-xs font-bold text-[#3EFFC8]">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{testimonial.author}</div>
                  <div className="text-xs text-[#7A8499]">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="relative mx-[5%] mb-20 overflow-hidden rounded-[20px] border border-[#3EFFC826] px-8 py-16 text-center md:px-16"
        style={{ background: "linear-gradient(135deg, #0C1220 0%, #111A2E 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(62,255,200,0.07) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <h2 className="mx-auto max-w-[680px] font-display text-[clamp(2rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            You have the vision.
            <br />
            We have the engineers.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[#7A8499]">
            No pitch decks, no sales process. Just an honest conversation about what you are building and
            whether we are the right fit.
          </p>
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="cta-primary mt-8 inline-flex items-center justify-center"
          >
            {CONSULTATION_CTA_TEXT}
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
