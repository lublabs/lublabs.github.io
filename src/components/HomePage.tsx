import React from "react";
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
  services: string[];
  href: string;
  image: string;
};

type CaseStudyLink = {
  title: string;
  href: string;
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

interface HomePageProps {
  currentPath?: string;
  featuredCaseStudy?: FeaturedCaseStudy;
  caseStudyLinks?: CaseStudyLink[];
}

export default function HomePage({ currentPath = "/", featuredCaseStudy, caseStudyLinks = [] }: HomePageProps) {
  const featured = featuredCaseStudy;
  const featuredTags = featured?.services ?? [];

  return (
    <>
      <SiteNav isHome currentPath={currentPath} activeKey={null} />

      <section className="relative flex min-h-[86vh] flex-col justify-center overflow-hidden px-[5%] pb-14 pt-24 md:min-h-screen md:pb-20 md:pt-28">
        <div
          className="hero-grid-mask absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(62,255,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(62,255,200,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[-20%] h-[500px] w-[700px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse, rgba(62,255,200,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <h1 className="fade-up max-w-[860px] font-display text-[clamp(2.35rem,9.2vw,5.5rem)] font-extrabold leading-[1.04] tracking-[-0.03em] [animation-delay:0.2s]">
            We build software for founders
            <br className="hidden sm:block" />
            with <span className="text-[#3EFFC8]">something to prove.</span>
          </h1>

          <p className="fade-up mt-6 max-w-[540px] text-base leading-relaxed text-[#7A8499] md:text-lg [animation-delay:0.3s]">
            From mobile apps to full SaaS platforms, we take your vision from whiteboard to working
            product. No fluff, no agencies in the middle. Just builders who care about your results.
          </p>

          <div className="fade-up mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-10 [animation-delay:0.4s]">
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="cta-primary inline-flex w-full items-center justify-center sm:w-auto"
            >
              {CONSULTATION_CTA_TEXT}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-[5%] grid border-y border-white/10 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="border-b border-white/10 px-5 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:py-9 sm:last:border-r-0 lg:px-8 lg:py-10">
            <div className="font-display text-[2.25rem] font-extrabold leading-none tracking-[-0.03em] text-[#3EFFC8] sm:text-[2.6rem] lg:text-[2.75rem]">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-[#7A8499]">{stat.label}</div>
          </div>
        ))}
      </div>

      <section className="px-[5%] py-16 md:py-24">
        <div className="mb-10 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">Who We Work With</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            We work with founders
            <br className="hidden sm:block" />
            who have something to build.
          </h2>
          <p className="mt-4 max-w-[620px] text-[0.98rem] text-[#7A8499] sm:text-[1.05rem]">
            We do not work with everyone. We work best with people who have a real problem, a clear
            vision, and the drive to see it through.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {personas.map((persona) => (
            <article key={persona.title} className="bg-[#0C1220] p-6 transition hover:bg-[#111A2E] md:p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#3EFFC833] bg-[#3EFFC81F]">
                {persona.icon}
              </div>
              <h3 className="font-display text-[1.1rem] font-bold">{persona.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7A8499]">{persona.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="px-[5%] py-16 md:py-24">
        <div className="mb-10 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">Featured Work</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Featured builds from
            <br className="hidden sm:block" />
            real client work.
          </h2>
        </div>

        {featured ? (
          <>
            <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#0C1220] lg:grid-cols-2">
              <div className="p-6 sm:p-8 md:p-12 lg:p-14">
                <span className="inline-block rounded bg-[#3EFFC81F] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#3EFFC8]">
                  Case Study - {featured.industry}
                </span>
                <h3 className="mt-6 font-display text-[1.55rem] font-extrabold leading-[1.15] tracking-[-0.025em] sm:text-[1.75rem] md:text-[1.85rem]">
                  {featured.title}
                </h3>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-[#7A8499] sm:text-[0.95rem]">
                  {featured.summary}
                </p>

                <div className="mt-7 grid gap-2 text-sm text-[#9CA4B5] sm:grid-cols-2">
                  <p>
                    <span className="text-[#7A8499]">Client:</span> {featured.client}
                  </p>
                  <p>
                    <span className="text-[#7A8499]">Industry:</span> {featured.industry}
                  </p>
                </div>

                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7A8499]">
                    Services Delivered
                  </p>
                  {featuredTags.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {featuredTags.map((tag) => (
                        <span key={tag} className="rounded border border-white/10 bg-[#111A2E] px-2.5 py-1 text-xs text-[#C0C7D5]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm text-[#9CA4B5]">
                      Product strategy and full-stack execution.
                    </p>
                  )}
                </div>

                <a
                  href={featured.href}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-white/10 px-5 py-2.5 font-display text-sm font-semibold text-[#EEE9E0] transition hover:border-white/20 hover:bg-white/5 sm:w-auto"
                >
                  Read full case study
                </a>
              </div>

              <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D1525] to-[#0A1930] p-6 sm:p-8 md:p-12">
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
                  className="case-study-image relative z-10 border-[#3EFFC833] shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                  loading="lazy"
                />
              </div>
            </div>

            {caseStudyLinks.length > 1 && (
              <div className="mt-5 sm:mt-6">
                <a
                  href="/case-studies/"
                  className="inline-flex items-center rounded-md border border-[#3EFFC855] bg-[#3EFFC814] px-4 py-2 text-sm font-semibold text-[#3EFFC8] transition hover:bg-[#3EFFC82A]"
                >
                  More case studies
                </a>
              </div>
            )}
          </>
        ) : (
          <article className="rounded-2xl border border-white/10 bg-[#0C1220] p-6 sm:p-8 md:p-14">
            <h3 className="font-display text-[1.4rem] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-[1.6rem] md:text-[1.7rem]">
              No case studies published yet.
            </h3>
            <p className="mt-3 max-w-[680px] text-[0.98rem] leading-relaxed text-[#7A8499]">
              Add markdown files under src/content/case-studies and this section will update automatically.
            </p>
            <a
              href="/case-studies/"
              className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-white/10 px-5 py-2.5 font-display text-sm font-semibold text-[#EEE9E0] transition hover:border-white/20 hover:bg-white/5 sm:w-auto"
            >
              View case studies
            </a>
          </article>
        )}
      </section>

      <section id="services" className="px-[5%] py-16 md:py-24">
        <div className="mb-10 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">What We Build</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Software that ships.
            <br className="hidden sm:block" />
            Results that stick.
          </h2>
          <p className="mt-4 max-w-[640px] text-[0.98rem] text-[#7A8499] sm:text-[1.05rem]">
            You tell us the problem. We design and build the right software path to measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="bg-[#0C1220] p-6 transition hover:bg-[#111A2E] md:p-8">
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

      <section id="about" className="px-[5%] pb-16 md:pb-24">
        <div className="mb-9 md:mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">How We Work</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Our process is simple
            <br className="hidden sm:block" />
            because yours is complex enough.
          </h2>
          <p className="mt-4 max-w-[620px] text-[0.98rem] text-[#7A8499] sm:text-[1.05rem]">
            We keep things lean, transparent, and focused on shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-4 xl:gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative pr-2 xl:pr-6">
              <div className="mb-3 font-display text-4xl font-extrabold leading-none text-[#111A2E] sm:text-5xl">
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

      <section className="px-[5%] pb-16 md:pb-24">
        <div className="mb-8 md:mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#3EFFC8]">What Clients Say</p>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            Do not take our word for it.
          </h2>
          <p className="mt-4 max-w-[520px] text-[0.98rem] text-[#7A8499] sm:text-[1.05rem]">Real feedback from real founders.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-xl border border-white/10 bg-[#0C1220] p-6 md:p-8">
              <div className="mb-1 text-[0.7rem] tracking-[1px] text-[#3EFFC8]">★★★★★</div>
              <div className="mb-3 font-serif text-5xl leading-[0.7] text-[#3EFFC84D] sm:text-6xl">"</div>
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
        className="relative mx-[5%] mb-14 overflow-hidden rounded-[20px] border border-[#3EFFC826] px-5 py-12 text-center sm:px-8 md:mb-20 md:px-16 md:py-16"
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
          <h2 className="mx-auto max-w-[680px] font-display text-[clamp(1.85rem,7.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
            You have the vision.
            <br className="hidden sm:block" />
            We have the engineers.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-sm text-[#7A8499] sm:text-base">
            No pitch decks, no sales process. Just an honest conversation about what you are building and
            whether we are the right fit.
          </p>
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="cta-primary mt-8 inline-flex w-full items-center justify-center sm:w-auto"
          >
            {CONSULTATION_CTA_TEXT}
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
