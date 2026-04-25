---
name: LubLabs Conversion System
version: 1.0.0
brand:
  company: LubLabs
  tone: bold modern credible premium
  personality: outcome oriented direct trustworthy
  differentiator: higher quality engineering with reliable execution
goals:
  primaryConversion: contact form submission
  primaryCTA: Get a Free Consultation
  audience:
    - startup founders
    - startup product teams
    - smb decision makers
  regions:
    us: Oklahoma based positioning
    international: US and Jordan positioning
colors:
  primary: "#0A6BFF"
  primary-hover: "#0858D2"
  accent: "#FF6A2A"
  background: "#F5F8FF"
  surface: "#FFFFFF"
  surface-strong: "#0F1C2D"
  text: "#13233B"
  text-muted: "#4D6280"
  text-on-strong: "#F3F7FF"
  border: "#D6E0F0"
  success: "#0E9F6E"
  error: "#D63C4A"
typography:
  display:
    fontFamily: Sora
    fontSize: 56px
    lineHeight: 1.1
    fontWeight: 700
  h1:
    fontFamily: Sora
    fontSize: 44px
    lineHeight: 1.15
    fontWeight: 700
  h2:
    fontFamily: Sora
    fontSize: 32px
    lineHeight: 1.2
    fontWeight: 700
  body-lg:
    fontFamily: Manrope
    fontSize: 20px
    lineHeight: 1.5
    fontWeight: 500
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    lineHeight: 1.6
    fontWeight: 400
  label-sm:
    fontFamily: Manrope
    fontSize: 13px
    lineHeight: 1.4
    fontWeight: 600
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
radius:
  sm: 8px
  md: 14px
  lg: 20px
  pill: 999px
elevation:
  card: "0 12px 30px rgba(13, 36, 70, 0.08)"
  cta: "0 18px 40px rgba(10, 107, 255, 0.26)"
motion:
  duration-fast: 150ms
  duration-base: 280ms
  duration-slow: 450ms
  easing-standard: cubic-bezier(0.2, 0.8, 0.2, 1)
layout:
  maxWidth: 1200px
  gridColumnsDesktop: 12
  gridColumnsMobile: 4
  contentWidth: 72ch
components:
  button-primary:
    background: "{colors.primary}"
    textColor: "#FFFFFF"
    radius: "{radius.pill}"
    padding: "12px 22px"
  button-secondary:
    background: transparent
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    radius: "{radius.pill}"
  input:
    background: "{colors.surface}"
    border: "1px solid {colors.border}"
    textColor: "{colors.text}"
    radius: "{radius.md}"
  card:
    background: "{colors.surface}"
    border: "1px solid {colors.border}"
    shadow: "{elevation.card}"
    radius: "{radius.lg}"
contentAnchors:
  metrics:
    - "8+ years of experience"
    - ">95% client retention"
  testimonials:
    - author: Danny Kawok
      quote: LubLabs has been highly professional, responsive, and detail-oriented. They resolved a critical integration issue quickly with an innovative solution.
    - author: Janette Habashi, PhD
      quote: LubLabs exceeded expectations from exploration through implementation. The team was attentive, skilled, and delivery was smooth and effective.
  contact:
    email: info@lublabs.com
    socials:
      - LinkedIn
      - Twitter/X
---

# Design System

## Overview

This system defines a high-conversion visual language for LubLabs, a software agency serving startups and SMBs.
The design should feel confident, modern, and execution-focused, with clear hierarchy and minimal friction to contact submission.

## What This Gives The Agent

- Consistent tokens for color, typography, spacing, and components.
- A shared conversion pattern across Home, Services, and Contact.
- Guardrails that keep generated screens on-brand and implementation-ready.

## Conversion Philosophy

- The contact form is the only primary conversion action.
- Trust appears before every major ask.
- CTA repetition is intentional, not noisy.
- Copy prioritizes outcomes, specificity, and confidence.

## Page Blueprints

### Homepage

- Sticky header with navigation and a single primary CTA.
- Hero with clear value proposition and contact CTA.
- Proof strip with trust metrics and client confidence cues.
- Services preview for web, mobile, and AI/automation.
- 3-step delivery process section.
- Testimonials section.
- Final CTA panel with response-time reassurance.
- Footer with email and social links.

### Services

- Outcomes-led hero.
- Three service panels: web app development, mobile app development, AI and automation solutions.
- Quality standards section explaining delivery rigor.
- Trust metrics and short proof recap.
- CTA to Contact form.

### Contact

- Friction-light form and concise trust context.
- Fields: Name, Email, Company (optional), Project summary, How did you hear about us? (optional).
- Reassurance near submit button: Expected response within 24 hours.
- Explicit success state after submission.

## Geo Messaging

Use the same hero layout with two text variants:

- US variant: Oklahoma-based software agency positioning.
- Non-US variant: US and Jordan partner positioning.

## Visual Direction

- Bold and modern, without generic agency templates.
- High contrast, clear typography hierarchy, and disciplined whitespace.
- Use gradients or subtle abstract background shapes for depth.
- Avoid purple-heavy palettes.

## Components

- Buttons: primary action is dominant and visually consistent.
- Inputs: clean borders, clear focus states, strong readability.
- Cards: structured for scanning with concise copy blocks.
- Testimonials: quote-first layout with author credibility line.

## Motion

- Page-load reveal on major sections.
- Staggered card entrances for service/proof groups.
- Subtle CTA emphasis on hover/focus only.
- Motion should support clarity, never distract from conversion.

## Accessibility

- Maintain WCAG-friendly text contrast.
- Body text should remain at comfortable reading sizes on mobile.
- Touch targets should be easy to tap and spaced consistently.
- Form labels and validation states must be explicit.

## Do And Do Not

- Do keep the primary CTA wording consistent: Get a Free Consultation.
- Do keep trust metrics visible near high-intent actions.
- Do keep copy concise and outcome-oriented.
- Do not introduce a second primary CTA pattern.
- Do not mix conflicting corner styles in the same screen.
- Do not overcrowd above-the-fold content.
