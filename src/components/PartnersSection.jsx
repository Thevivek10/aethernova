import React from "react";
import { Award, CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";

/**
 * PartnersSection
 * Retained and elevated partner section with dual-track infinite holographic marquee,
 * luminous cyber-pills, and interactive hover illumination.
 */
export default function PartnersSection() {
  const partnersRow1 = [
    "Startup Founders",
    "SaaS Scaleups",
    "Global Enterprises",
    "Fintech Pioneers",
    "Healthcare Innovators",
    "E-Commerce Brands",
    "AI Research Labs",
    "Venture Studios"
  ];

  const partnersRow2 = [
    "Autonomous Logistics",
    "High-Growth Agencies",
    "Cloud Infrastructure",
    "Web3 Protocols",
    "B2B Platforms",
    "Digital Marketplaces",
    "Robotics Engineering",
    "Spatial Computing"
  ];

  const loop1 = [...partnersRow1, ...partnersRow1, ...partnersRow1];
  const loop2 = [...partnersRow2, ...partnersRow2, ...partnersRow2];

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

        {/* Dual Marquee Track 1 (Left to Right) */}
        <div className="partners-marquee" data-reveal>
          <div className="partners-track partners-track-forward">
            {loop1.map((partner, idx) => (
              <div className="partner-pill" key={`p1-${partner}-${idx}`}>
                <span className="partner-pill-icon"><Sparkles size={13} /></span>
                <span className="partner-pill-text">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Marquee Track 2 (Right to Left) */}
        <div className="partners-marquee partners-marquee-reverse" data-reveal>
          <div className="partners-track partners-track-reverse">
            {loop2.map((partner, idx) => (
              <div className="partner-pill partner-pill-alt" key={`p2-${partner}-${idx}`}>
                <span className="partner-pill-icon"><ShieldCheck size={13} /></span>
                <span className="partner-pill-text">{partner}</span>
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
