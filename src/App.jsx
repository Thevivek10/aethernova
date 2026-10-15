import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  CheckCircle,
  Code2,
  Compass,
  FileText,
  Globe,
  Layers,
  Mail,
  Menu,
  Palette,
  Phone,
  Radio,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
  Zap
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CosmicMotionCanvas from "./components/CosmicMotionCanvas";
import OrbitalCraft from "./components/OrbitalCraft";
import TelemetryHUD from "./components/TelemetryHUD";
import PartnersSection from "./components/PartnersSection";

gsap.registerPlugin(ScrollTrigger);

const siteUrl = "https://aethernova.in";
const companyName = "AetherNova";
const contactEmail = "support@aethernova.in";
const contactPhone = "+91 8707559685 / 7992332371";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);
  const [activeSectorName, setActiveSectorName] = useState("LAUNCH");
  const [modal, setModal] = useState(null);
  const [selectedService, setSelectedService] = useState("AI Neural Systems");
  const [archTab, setArchTab] = useState("ai");
  const [formStatus, setFormStatus] = useState("");

  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  // Real-time Scroll & Velocity Tracker for Spacecraft & Starfield
  useEffect(() => {
    let decayTimer;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(currentScrollY / maxScroll, 0), 1);
      setScrollProgress(progress);

      const now = Date.now();
      const dt = Math.max((now - lastTime.current) / 1000, 0.016);
      const dy = Math.abs(currentScrollY - lastScrollY.current);
      const speed = Math.min(dy / (dt * 60), 30); // Normalized speed factor

      setScrollSpeed(speed);
      lastScrollY.current = currentScrollY;
      lastTime.current = now;

      // Update active sector based on scroll position
      const sectorIds = ["top", "capabilities", "impact", "partners", "protocol", "contact"];
      const sectorNames = ["LAUNCH", "CAPABILITIES", "IMPACT", "PARTNERS", "PROTOCOL", "TRANSMIT"];

      for (let i = sectorIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectorIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSectorIndex(i);
            setActiveSectorName(sectorNames[i]);
            break;
          }
        }
      }

      // Smoothly decay scroll speed
      clearTimeout(decayTimer);
      decayTimer = setTimeout(() => {
        setScrollSpeed(0);
      }, 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(decayTimer);
    };
  }, []);

  // GSAP Reveal Animations
  useEffect(() => {
    const reveals = document.querySelectorAll("[data-reveal]");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  const handleSectorSelect = (sectorId) => {
    const el = document.getElementById(sectorId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") || "Visionary";
    setFormStatus(`Transmission received, ${name}. Our flight squad will initiate contact within 4 business hours.`);
    e.currentTarget.reset();
  };

  return (
    <>
      {/* ─── Fixed Cosmic Background & Warp Starfield Engine ─── */}
      <CosmicMotionCanvas
        scrollProgress={scrollProgress}
        scrollSpeed={scrollSpeed}
      />

      {/* ─── Fixed Telemetry HUD & Sector Rail ─── */}
      <TelemetryHUD
        scrollProgress={scrollProgress}
        scrollSpeed={scrollSpeed}
        activeSectorIndex={activeSectorIndex}
        onSectorSelect={handleSectorSelect}
      />

      {/* ─── Header Navigation Dock ─── */}
      <header className={`header-dock ${scrollProgress > 0.04 ? "header-dock-scrolled" : ""}`}>
        <div className="header-inner">
          <a href="#top" className="header-brand">
            <div className="brand-logo-frame">
              <img src="/images/logo2.png" alt="AetherNova Logo" className="brand-logo-img" />
            </div>
            <span>AETHERNOVA</span>
          </a>

          <nav className="header-nav" aria-label="Main menu">
            <a href="#capabilities" className="nav-link">Capabilities</a>
            <a href="#impact" className="nav-link">Impact</a>
            <a href="#partners" className="nav-link">Alliance</a>
            <a href="#protocol" className="nav-link">Protocol</a>
            <a href="#contact" className="nav-link">Transmission</a>
          </nav>

          <div className="header-cta-group">
            <a href="#contact" className="btn-primary">
              <Zap size={15} />
              <span>INITIALIZE MISSION</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ─── SECTOR 01: HERO LAUNCH ─── */}
        <section id="top" className="hero-sector">
          <div className="hero-sector-inner">
            <div className="hero-copy" data-reveal>
              <div className="section-badge">
                <Radio size={13} />
                <span>ORBITAL INTELLIGENCE · ENTERPRISE SYSTEMS</span>
              </div>

              <h1 className="hero-title">
                Autonomous Systems.<br />
                <span className="gradient-text">Exponential Scale.</span>
              </h1>

              <p className="hero-subtitle">
                AetherNova architects custom AI neural pipelines, ultra-high-performance web ecosystems, and self-driving business automations for high-growth enterprises.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn-primary">
                  <span>Start a Project</span>
                  <ArrowRight size={17} />
                </a>
                <a href="#capabilities" className="btn-secondary">
                  <span>Inspect Capabilities</span>
                </a>
              </div>

              {/* Proven Live Telemetry Metrics */}
              <div className="hero-telemetry-strip">
                <div className="telemetry-stat">
                  <span className="telemetry-num">$52M+</span>
                  <span className="telemetry-label">Pipeline Value</span>
                </div>
                <div className="telemetry-stat">
                  <span className="telemetry-num">80+</span>
                  <span className="telemetry-label">Systems Shipped</span>
                </div>
                <div className="telemetry-stat">
                  <span className="telemetry-num">3.4×</span>
                  <span className="telemetry-label">Avg. Pipeline Surge</span>
                </div>
                <div className="telemetry-stat">
                  <span className="telemetry-num">40h</span>
                  <span className="telemetry-label">Saved / Week</span>
                </div>
              </div>
            </div>

            {/* ─── Fully Motion Spacecraft with Atmospheric Corona & HUD ─── */}
            <div className="hero-craft-column">
              <OrbitalCraft
                scrollProgress={scrollProgress}
                scrollSpeed={scrollSpeed}
                activeSector={activeSectorName}
              />
            </div>
          </div>
        </section>

        {/* ─── SECTOR 02: WHAT AETHERNOVA DOES IN BUSINESS (CAPABILITIES) ─── */}
        <section id="capabilities" className="sector-wrap">
          <div className="sector-inner">
            <div className="sector-heading" data-reveal>
              <div className="section-badge">
                <Sparkles size={13} />
                <span>CORE BUSINESS CAPABILITIES</span>
              </div>
              <h2>What AetherNova builds for your enterprise.</h2>
              <p>
                We do not sell hours. We deliver complete, autonomous engineering assets that drive revenue, cut operational overhead, and outpace competitors.
              </p>
            </div>

            <div className="capabilities-grid">
              {/* Pillar 1: Autonomous AI Systems */}
              <article className="capability-card" data-reveal>
                <div className="capability-icon-box">
                  <BrainCircuit size={28} />
                </div>
                <h3>Autonomous AI Neural Systems</h3>
                <p>
                  Deploy custom LLMs, autonomous multi-agent swarms, and intelligent copilots that handle customer qualification, document intelligence, and predictive workflows 24/7 with zero human latency.
                </p>
                <div className="capability-tags">
                  <span className="cap-tag">Custom LLM Pipelines</span>
                  <span className="cap-tag">Multi-Agent Swarms</span>
                  <span className="cap-tag">Automated Lead Scoring</span>
                  <span className="cap-tag">Zero-Leak Security</span>
                </div>
              </article>

              {/* Pillar 2: Next-Gen Web & Spatial Engineering */}
              <article className="capability-card" data-reveal>
                <div className="capability-icon-box">
                  <Code2 size={28} />
                </div>
                <h3>Next-Gen Web & Spatial Engineering</h3>
                <p>
                  Ultra-fast, conversion-dominant web applications built with cinematic motion, sub-second TTFB, and flawless responsiveness. Designed to position your brand in the top 1% of your market.
                </p>
                <div className="capability-tags">
                  <span className="cap-tag">High-Speed React/Vite</span>
                  <span className="cap-tag">WebGL 3D Interaction</span>
                  <span className="cap-tag">Conversion Architecture</span>
                  <span className="cap-tag">Technical SEO Dominance</span>
                </div>
              </article>

              {/* Pillar 3: End-to-End Workflow Automations */}
              <article className="capability-card" data-reveal>
                <div className="capability-icon-box">
                  <Workflow size={28} />
                </div>
                <h3>End-to-End Workflow Automations</h3>
                <p>
                  Eliminate 20–40 hours of manual team drag per week. We interconnect CRMs, payment systems, communication channels, and internal databases into self-healing autonomous pipelines.
                </p>
                <div className="capability-tags">
                  <span className="cap-tag">CRM & Lead Sync</span>
                  <span className="cap-tag">Automated Ops</span>
                  <span className="cap-tag">Financial Reconciliations</span>
                  <span className="cap-tag">Instant API Glue</span>
                </div>
              </article>

              {/* Pillar 4: Enterprise Mobile & Cloud Systems */}
              <article className="capability-card" data-reveal>
                <div className="capability-icon-box">
                  <Smartphone size={28} />
                </div>
                <h3>Enterprise Mobile Ecosystems</h3>
                <p>
                  Native iOS & Android experiences engineered for massive user retention. Scalable backend microservices, real-time sync, offline-first reliability, and seamless in-app AI features.
                </p>
                <div className="capability-tags">
                  <span className="cap-tag">iOS & Android Native</span>
                  <span className="cap-tag">Real-Time Data Streams</span>
                  <span className="cap-tag">Offline-First UX</span>
                  <span className="cap-tag">99.99% Reliability SLA</span>
                </div>
              </article>
            </div>

            {/* Interactive Architecture Sandbox */}
            <div className="arch-sandbox" data-reveal>
              <div className="arch-sandbox-header">
                <div>
                  <h4 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "4px" }}>
                    System Architecture Telemetry
                  </h4>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>
                    Interactive view of how AetherNova engineering modules connect
                  </span>
                </div>
                <div className="arch-tabs">
                  <button
                    type="button"
                    className={`arch-tab-btn ${archTab === "ai" ? "arch-tab-active" : ""}`}
                    onClick={() => setArchTab("ai")}
                  >
                    AI Agent Swarm
                  </button>
                  <button
                    type="button"
                    className={`arch-tab-btn ${archTab === "web" ? "arch-tab-active" : ""}`}
                    onClick={() => setArchTab("web")}
                  >
                    Spatial Web Core
                  </button>
                  <button
                    type="button"
                    className={`arch-tab-btn ${archTab === "ops" ? "arch-tab-active" : ""}`}
                    onClick={() => setArchTab("ops")}
                  >
                    Autonomous Ops
                  </button>
                </div>
              </div>

              {archTab === "ai" && (
                <div className="arch-diagram-grid">
                  <div className="arch-node">
                    <span className="arch-node-title"><Layers size={14} /> 01. Ingestion Layer</span>
                    <span className="arch-node-desc">Captures unstructured client queries, form leads & real-time telemetry.</span>
                  </div>
                  <div className="arch-node">
                    <span className="arch-node-title"><BrainCircuit size={14} /> 02. Neural Reasoning</span>
                    <span className="arch-node-desc">Fine-tuned LLM agents classify, evaluate urgency, and generate tailored logic.</span>
                  </div>
                  <div className="arch-node">
                    <span className="arch-node-title"><Zap size={14} /> 03. Execution Swarm</span>
                    <span className="arch-node-desc">Triggers automated booking, CRM dispatch, and customized notifications instantly.</span>
                  </div>
                </div>
              )}

              {archTab === "web" && (
                <div className="arch-diagram-grid">
                  <div className="arch-node">
                    <span className="arch-node-title"><Code2 size={14} /> 01. Edge Delivery</span>
                    <span className="arch-node-desc">Sub-second CDN routing worldwide with optimized asset caching and compression.</span>
                  </div>
                  <div className="arch-node">
                    <span className="arch-node-title"><Sparkles size={14} /> 02. Motion After-Effects</span>
                    <span className="arch-node-desc">GPU-accelerated Canvas & WebGL shaders that immerse users without battery drain.</span>
                  </div>
                  <div className="arch-node">
                    <span className="arch-node-title"><TrendingUp size={14} /> 03. Conversion Funnel</span>
                    <span className="arch-node-desc">Dynamic CTA routing that maximizes lead capture and sales conversion rates.</span>
                  </div>
                </div>
              )}

              {archTab === "ops" && (
                <div className="arch-diagram-grid">
                  <div className="arch-node">
                    <span className="arch-node-title"><Workflow size={14} /> 01. Event Listener</span>
                    <span className="arch-node-desc">Monitors webhooks, email triggers, payment events, and customer support tickets.</span>
                  </div>
                  <div className="arch-node">
                    <span className="arch-node-title"><Shield size={14} /> 02. Validation Filter</span>
                    <span className="arch-node-desc">Ensures data hygiene, deduplication, and zero-hallucination compliance.</span>
                  </div>
                  <div className="arch-node">
                    <span className="arch-node-title"><Rocket size={14} /> 03. Sync & Automation</span>
                    <span className="arch-node-desc">Updates CRMs, ERPs, accounting ledgers, and sends team summaries in real-time.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── SECTOR 03: MISSION TELEMETRY (IMPACT METRICS) ─── */}
        <section id="impact" className="sector-wrap">
          <div className="sector-inner">
            <div className="sector-heading" data-reveal>
              <div className="section-badge">
                <TrendingUp size={13} />
                <span>MISSION TELEMETRY</span>
              </div>
              <h2>Engineered for measurable business impact.</h2>
              <p>
                Every line of code and every AI agent we deploy is tied to hard revenue metrics, operational efficiency, and scalable growth.
              </p>
            </div>

            <div className="impact-grid">
              <div className="impact-card" data-reveal>
                <span className="impact-stat-big">+320%</span>
                <h3>Pipeline Surge for Fintech SaaS</h3>
                <p>
                  Re-engineered the digital architecture and automated lead-qualification engine, yielding 3.2x more booked demos with 0.3s page speed.
                </p>
              </div>

              <div className="impact-card" data-reveal>
                <span className="impact-stat-big">42 hrs</span>
                <h3>Weekly Team Overhead Eliminated</h3>
                <p>
                  Built a multi-agent customer operations copilot that resolves 91% of routine tier-1 inquiries and routes complex cases directly to founders.
                </p>
              </div>

              <div className="impact-card" data-reveal>
                <span className="impact-stat-big">$18M+</span>
                <h3>Enterprise Valuation Lift</h3>
                <p>
                  Delivered end-to-end spatial product design and enterprise software for a venture-backed scaleup heading into a Series A raise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTOR 04: ORBITAL ALLIANCE (PARTNERS SECTION - PRESERVED & ELEVATED) ─── */}
        <PartnersSection />

        {/* ─── SECTOR 05: EXECUTION PROTOCOL (HOW WE WORK) ─── */}
        <section id="protocol" className="sector-wrap">
          <div className="sector-inner">
            <div className="sector-heading" data-reveal>
              <div className="section-badge">
                <Compass size={13} />
                <span>EXECUTION PROTOCOL</span>
              </div>
              <h2>From zero to orbital deployment in 4 steps.</h2>
              <p>
                A battle-tested engineering sprint protocol that guarantees speed, precision, and zero wasted motion.
              </p>
            </div>

            <div className="protocol-track">
              <article className="protocol-card" data-reveal>
                <span className="protocol-num">01 // RECON</span>
                <h3>Scope & Architecture</h3>
                <p>
                  Deep audit of bottlenecks, technical constraints, data assets, and high-impact revenue targets.
                </p>
              </article>

              <article className="protocol-card" data-reveal>
                <span className="protocol-num">02 // DESIGN</span>
                <h3>Neural Prototyping</h3>
                <p>
                  Crafting high-fidelity interactive systems, conversion flows, and agent prompt architectures.
                </p>
              </article>

              <article className="protocol-card" data-reveal>
                <span className="protocol-num">03 // BUILD</span>
                <h3>Rapid Orbital Sprint</h3>
                <p>
                  Full-stack engineering, AI pipeline training, API integration, and automated stress testing.
                </p>
              </article>

              <article className="protocol-card" data-reveal>
                <span className="protocol-num">04 // SCALE</span>
                <h3>Launch & Telemetry</h3>
                <p>
                  Production deployment with 24/7 telemetry monitoring, conversion tracking, and continuous scaling.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ─── SECTOR 06: TRANSMISSION TERMINAL (CONTACT & INQUIRY) ─── */}
        <section id="contact" className="sector-wrap">
          <div className="sector-inner">
            <div className="sector-heading" data-reveal>
              <div className="section-badge">
                <Radio size={13} />
                <span>TRANSMISSION DOCK</span>
              </div>
              <h2>Initiate mission with AetherNova.</h2>
              <p>
                Tell us about your project objectives. Our engineering leads analyze your requirements and reply with a strategic action plan within 24 hours.
              </p>
            </div>

            <div className="transmission-grid" data-reveal>
              {/* Left Column: Interactive Form */}
              <form className="transmission-form" onSubmit={handleContactSubmit}>
                <div className="form-field-group">
                  <label className="form-label">System Requirement</label>
                  <div className="service-capsules">
                    {[
                      "AI Neural Systems",
                      "Web Engineering",
                      "Workflow Automation",
                      "Mobile App",
                      "Complete Ecosystem"
                    ].map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        className={`service-capsule-btn ${selectedService === svc ? "capsule-active" : ""}`}
                        onClick={() => setSelectedService(svc)}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="service" value={selectedService} />
                </div>

                <div className="form-field-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Mercer"
                    className="form-input"
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label">Mission Objectives & Timeline</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us what you need built, target launch date, and current technical hurdles..."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "8px" }}>
                  <Zap size={16} />
                  <span>TRANSMIT MISSION BRIEF</span>
                </button>

                {formStatus && (
                  <div className="form-status">
                    {formStatus}
                  </div>
                )}
              </form>

              {/* Right Column: Direct Channels */}
              <div className="transmission-direct">
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "8px" }}>
                    Direct Command Channels
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
                    Prefer a direct transmission? Reach out directly to our engineering leadership.
                  </p>
                </div>

                <div className="direct-contact-item">
                  <div className="direct-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4>Direct Email</h4>
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  </div>
                </div>

                <div className="direct-contact-item">
                  <div className="direct-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4>Command Line</h4>
                    <a href={`tel:${contactPhone.split('/')[0].trim().replace(/\s+/g, "")}`}>{contactPhone}</a>
                  </div>
                </div>

                <div className="direct-contact-item">
                  <div className="direct-icon">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4>Global Deployment</h4>
                    <p>Remote-First · Serving Visionary Teams Worldwide</p>
                  </div>
                </div>

                <div style={{ marginTop: "auto", padding: "18px", borderRadius: "8px", background: "rgba(0,242,254,0.06)", border: "1px solid rgba(0,242,254,0.18)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "var(--cyan-core)", fontWeight: 700 }}>
                    GUARANTEE
                  </span>
                  <p style={{ fontSize: "0.86rem", color: "var(--text-stellar)", marginTop: "4px" }}>
                    All engagements protected by strict mutual NDAs and full intellectual property assignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="cosmic-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              AETHERNOVA // ORBITAL SYSTEMS
            </div>
            <div style={{ display: "flex", gap: "24px" }}>
              <a href="#capabilities" className="nav-link">Capabilities</a>
              <a href="#impact" className="nav-link">Impact</a>
              <a href="#partners" className="nav-link">Alliance</a>
              <a href="#contact" className="nav-link">Transmission</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 AetherNova Agency. All rights reserved.</span>
            <div className="footer-legal-links">
              <button
                type="button"
                className="footer-legal-btn"
                onClick={() => setModal("privacy")}
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                type="button"
                className="footer-legal-btn"
                onClick={() => setModal("terms")}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Legal Modals ─── */}
      {modal && (
        <div className="legal-modal-backdrop" onClick={() => setModal(null)}>
          <div className="legal-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="legal-modal-header">
              <h3 style={{ color: "#fff" }}>
                {modal === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h3>
              <button
                type="button"
                onClick={() => setModal(null)}
                style={{ color: "#fff", display: "grid", placeItems: "center" }}
              >
                <X size={20} />
              </button>
            </div>
            <div className="legal-modal-body">
              {modal === "privacy" ? (
                <div>
                  <p>
                    AetherNova respects your digital sovereignty and data privacy. We collect only information necessary to deliver enterprise engineering and consult on digital product builds.
                  </p>
                  <br />
                  <p>
                    Any telemetry, form inputs, or corporate briefs submitted through this terminal are encrypted in transit and never commercialized, resold, or shared with third parties.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    All services provided by AetherNova Agency are executed under bilateral agreements with client ownership of all intellectual property, source code, and neural models upon final delivery.
                  </p>
                  <br />
                  <p>
                    For project inquiries, direct SLAs, and contractual terms, please contact legal@aethernova.in or support@aethernova.in.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
