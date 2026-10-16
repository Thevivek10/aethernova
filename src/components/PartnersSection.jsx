import React from "react";
import { CheckCircle2, Sparkles, Users } from "lucide-react";

/**
 * PartnersSection
 * Retained and elevated partner section with dual-track infinite holographic marquee,
 * real client logos & links, luminous cyber-pills, and interactive hover illumination.
 */
export default function PartnersSection() {
  const realPartners = [
    {
      src: "/images/citewise-logo.png",
      link: "https://citewise.in/",
      name: "CiteWise"
    },
    {
      src: "/images/32dental.png",
      link: "https://www.32dentalavenue.in/",
      name: "32 Dental"
    },
    {
      src: "/images/coderev-ai.png",
      link: "https://coderev.app/",
      name: "CodeRev AI"
    },
    {
      src: "/images/finance-ai.png",
      link: "https://www.pfinance.ai/",
      name: "Finance AI"
    },
    {
      src: "/images/courierbuddy.png",
      link: "https://www.courierbuddy.in/",
      name: "CourierBuddy"
    }
  ];

  const sectorPartners = [
    "Startup Founders",
    "SaaS Scaleups",
    "Global Enterprises",
    "Fintech Pioneers",
    "Healthcare Innovators",
    "E-Commerce Brands",
    "AI Research Labs",
    "Venture Studios"
  ];

  const loop1 = [...realPartners, ...realPartners, ...realPartners, ...realPartners];
  const loop2 = [...sectorPartners, ...sectorPartners, ...sectorPartners];

  return (
    <section className="partners-section" id="partners" aria-labelledby="partners-title" data-section>
      <div className="partners-cosmic-glow" aria-hidden="true" />

      <div className="partners-inner">
        <div className="partners-heading" data-reveal>
          <div className="section-badge">
            <Users size={13} />
            <span>ORBITAL ALLIANCE</span>
          </div>
          <h2 id="partners-title">Built for teams ready to dominate.</h2>
          <p>
            We partner with visionary founders, venture-backed scaleups, and enterprise teams to engineer unfair technical advantage.
          </p>
        </div>

        {/* Dual Marquee Track 1: Real Partner Client Logos & Links */}
        <div className="partners-marquee" data-reveal>
          <div className="partners-track partners-track-forward">
            {loop1.map((partner, idx) => (
              <a
                href={partner.link}
                target="_blank"
                rel="noreferrer"
                className="partner-pill partner-pill-logo"
                key={`p1-${partner.name}-${idx}`}
                title={`Visit ${partner.name}`}
              >
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className="partner-logo-img"
                  loading="lazy"
                />
                <span className="partner-pill-text">{partner.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Dual Marquee Track 2: Industry Categories */}
        <div className="partners-marquee partners-marquee-reverse" data-reveal>
          <div className="partners-track partners-track-reverse">
            {loop2.map((sector, idx) => (
              <div className="partner-pill partner-pill-alt" key={`p2-${sector}-${idx}`}>
                <span className="partner-pill-icon"><Sparkles size={13} /></span>
                <span className="partner-pill-text">{sector}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Trust Metrics */}
        <div className="partners-trust-strip" data-reveal>
          <div className="trust-pill">
            <CheckCircle2 size={16} />
            <span>Dedicated Full-Stack Squad</span>
          </div>
          <div className="trust-pill">
            <CheckCircle2 size={16} />
            <span>100% IP Ownership Guarantee</span>
          </div>
          <div className="trust-pill">
            <CheckCircle2 size={16} />
            <span>Sub-Second SLA Response</span>
          </div>
        </div>
      </div>
    </section>
  );
}
