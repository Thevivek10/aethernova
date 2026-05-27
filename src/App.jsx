import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  CloudCog,
  Code2,
  Compass,
  Cuboid,
  Gem,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Palette,
  Phone,
  Rocket,
  ServerCog,
  Smartphone,
  Sparkles,
  Workflow,
  X,
  Zap
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const services = [
  {
    title: "Web Development",
    description: "High-performance websites and web applications built with modern stacks.",
    icon: Code2
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS, Android, and connected devices.",
    icon: Smartphone
  },
  {
    title: "SaaS Product Development",
    description: "Multi-tenant SaaS platforms with architecture, billing, analytics, and scale.",
    icon: Layers3
  },
  {
    title: "AI Development & Automation",
    description: "Custom AI workflows, agents, model integration, and automation pipelines.",
    icon: BrainCircuit
  },
  {
    title: "Custom Software & Internal Tools",
    description: "Operational systems, dashboards, and workflows tailored to how teams work.",
    icon: Boxes
  },
  {
    title: "DevOps & Cloud Services",
    description: "Cloud architecture, CI/CD, observability, security, and reliable deployment.",
    icon: CloudCog
  },
  {
    title: "UI/UX & Branding",
    description: "Product design, interface systems, brand identity, and conversion-focused journeys.",
    icon: Palette
  }
];

const processSteps = [
  ["01", "Discover", "Clarify the business model, product surface, user jobs, and technical risk.", Compass],
  ["02", "Define", "Shape architecture, scope, sprint rhythm, and success metrics before build.", MessageSquare],
  ["03", "Design & Build", "Create elegant interfaces and robust systems with weekly usable progress.", Code2],
  ["04", "Automate", "Integrate AI, data flows, and internal workflows that remove manual drag.", BrainCircuit],
  ["05", "Deploy", "Ship through secure cloud infrastructure, release checks, and observability.", Rocket],
  ["06", "Evolve", "Measure, optimize, and extend the platform as your company grows.", Zap]
];

const proofItems = [
  { label: "Strategy to shipped product", value: "12 weeks" },
  { label: "Automation workflows designed", value: "80+" },
  { label: "Launch and scale disciplines", value: "24/7" }
];

const partners = [
  "Startup Founders",
  "SaaS Teams",
  "E-commerce Brands",
  "Real Estate Firms",
  "Healthcare Teams",
  "Education Platforms",
  "Fintech Products",
  "Growth Agencies"
];

const heroVideos = [
  "/videos/aethernova-bg-1.mp4",
  "/videos/aethernova-bg-2.mp4"
];

const heroTypePhrases = [
  "Builds for You",
  "Scales for You",
  "Drives Growth"
];

const projectTypes = [
  "Web Development",
  "Mobile App Development",
  "SaaS Product Development",
  "AI Development & Automation",
  "Custom Software & Internal Tools",
  "DevOps & Cloud Services",
  "UI/UX & Branding"
];

function useAetherMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const ctx = gsap.context(() => {
      gsap.from("[data-nav]", {
        y: -28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
      });

      gsap.from("[data-hero-word]", {
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.15
      });

      gsap.to(".accent-text", {
        textShadow: "0 0 28px rgba(25, 214, 255, 0.58)",
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.from("[data-hero-copy], [data-hero-cta]", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.45
      });

      gsap.from("[data-hero-node]", {
        scale: 0.82,
        opacity: 0,
        y: 26,
        duration: 1,
        stagger: 0.08,
        ease: "back.out(1.35)",
        delay: 0.35
      });

      gsap.to("[data-orbit]", {
        rotate: 360,
        transformOrigin: "50% 50%",
        duration: 36,
        repeat: -1,
        ease: "none"
      });

      gsap.to("[data-pulse]", {
        opacity: 0.25,
        scale: 1.08,
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.18
      });

      const videoLayers = gsap.utils.toArray("[data-hero-video]");
      if (videoLayers.length > 1) {
        gsap.set(videoLayers, { opacity: 0 });
        gsap.set(videoLayers[0], { opacity: 1 });

        const videoTimeline = gsap.timeline({ repeat: -1 });
        videoTimeline
          .to(videoLayers[0], { opacity: 0, duration: 1.4, ease: "power2.inOut" }, 5)
          .to(videoLayers[1], { opacity: 1, duration: 1.4, ease: "power2.inOut" }, 5)
          .to(videoLayers[1], { opacity: 0, duration: 1.4, ease: "power2.inOut" }, 11)
          .to(videoLayers[0], { opacity: 1, duration: 1.4, ease: "power2.inOut" }, 11);
      }

      gsap.utils.toArray("[data-section]").forEach((section) => {
        gsap.from(section.querySelectorAll("[data-reveal]"), {
          scrollTrigger: {
            trigger: section,
            start: "top 74%"
          },
          y: 34,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out"
        });
      });

      gsap.utils.toArray("[data-service-row]").forEach((row) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 84%"
          },
          x: -24,
          opacity: 0,
          duration: 0.72,
          ease: "power3.out"
        });
      });

      gsap.utils.toArray("[data-process-step]").forEach((step, index) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 86%"
          },
          y: 30,
          opacity: 0,
          duration: 0.72,
          delay: index * 0.03,
          ease: "power3.out"
        });
      });

      gsap.utils.toArray("[data-button]").forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, { y: -3, scale: 1.015, duration: 0.28, ease: "power2.out" });
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, { y: 0, scale: 1, duration: 0.28, ease: "power2.out" });
        });
      });

      gsap.utils.toArray("[data-field]").forEach((field, index) => {
        gsap.from(field, {
          scrollTrigger: {
            trigger: field,
            start: "top 88%"
          },
          y: 18,
          opacity: 0,
          duration: 0.55,
          delay: index * 0.025,
          ease: "power2.out"
        });
      });
    });

    return () => ctx.revert();
  }, []);
}

function useSmoothAnchorScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();

      if (reduceMotion.matches) {
        target.scrollIntoView();
        window.history.pushState(null, "", hash);
        return;
      }

      const header = document.querySelector(".site-header");
      const offsetY = (header?.offsetHeight ?? 0) + 12;

      gsap.to(window, {
        duration: 1,
        ease: "power3.inOut",
        scrollTo: {
          y: target,
          offsetY
        },
        onComplete: () => window.history.pushState(null, "", hash)
      });
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);
}

function useTypewriterSequence(phrases, startDelay = 0) {
  const [started, setStarted] = useState(startDelay === 0);
  const [typeState, setTypeState] = useState({
    deleting: false,
    phraseIndex: 0,
    text: ""
  });

  useEffect(() => {
    if (started) return undefined;

    const startTimeoutId = window.setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => window.clearTimeout(startTimeoutId);
  }, [startDelay, started]);

  useEffect(() => {
    if (!started) return undefined;

    const fullText = phrases[typeState.phraseIndex];
    let delay = typeState.deleting ? 70 : 125;

    if (!typeState.deleting && typeState.text === fullText) delay = 1200;
    if (typeState.deleting && typeState.text === "") delay = 420;

    const timeoutId = window.setTimeout(() => {
      setTypeState((current) => {
        const currentFullText = phrases[current.phraseIndex];

        if (!current.deleting && current.text === currentFullText) {
          return { ...current, deleting: true };
        }

        if (current.deleting && current.text === "") {
          return {
            deleting: false,
            phraseIndex: (current.phraseIndex + 1) % phrases.length,
            text: ""
          };
        }

        const nextLength = current.deleting
          ? current.text.length - 1
          : current.text.length + 1;

        return {
          ...current,
          text: currentFullText.slice(0, nextLength)
        };
      });
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [phrases, started, typeState]);

  return typeState.text;
}

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="AetherNova home">
      <span className="brand-mark" aria-hidden="true">
        <span />
      </span>
     <span>AetherNova</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;
    gsap.to(menuRef.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.36,
      ease: "power3.out"
    });
  }, [open]);

  return (
    <header className="site-header" data-nav>
      <div className="header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Proof</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          data-button
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      <div className="mobile-nav" ref={menuRef}>
        <a onClick={() => setOpen(false)} href="#services">Services</a>
        <a onClick={() => setOpen(false)} href="#process">Process</a>
        <a onClick={() => setOpen(false)} href="#work">Proof</a>
        <a onClick={() => setOpen(false)} href="#contact">Contact</a>
      </div>
    </header>
  );
}

function HeroSystem() {
  return (
    <div className="hero-system" aria-hidden="true">
      <div className="orbit orbit-one" data-orbit />
      <div className="orbit orbit-two" data-orbit />
      <div className="system-layer layer-top" data-hero-node data-pulse>
        <div className="layer-label">AI Agents</div>
        <div className="layer-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="system-layer layer-mid" data-hero-node>
        <div className="core-chip" data-pulse>
          <Sparkles size={20} />
        </div>
        <div className="layer-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="system-layer layer-base" data-hero-node>
        <div className="layer-label">Cloud Foundation</div>
        <div className="mini-bars">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="connector connector-left" data-hero-node />
      <div className="connector connector-right" data-hero-node />
      <div className="floating-note note-one" data-hero-node>
        <span>Data Layer</span>
        Unified. Processed. Activated.
      </div>
      <div className="floating-note note-two" data-hero-node>
        <span>Product Layer</span>
        Web, Mobile, SaaS and Tools.
      </div>
    </div>
  );
}

function HeroVideoBackground() {
  return (
    <div className="hero-video-stage" aria-hidden="true">
      {heroVideos.map((src, index) => (
        <video
          className="hero-video"
          data-hero-video
          key={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src={src}
          style={{ opacity: index === 0 ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const typedHeroPhrase = useTypewriterSequence(heroTypePhrases, 1600);

  return (
    <section id="top" className="hero">
      <HeroVideoBackground />
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 aria-label="Builds for you, scales for you, and drives growth.">
            <span className="line">
              <span className="hero-subheadline" data-hero-word>
                {typedHeroPhrase}
                <span className="type-cursor" aria-hidden="true" />
              </span>
            </span>
          </h1>
          <p data-hero-copy>
            We create websites, mobile apps, SaaS platforms, and AI automation systems
            that help your business launch faster, operate smarter, and grow exponentially.
          </p>
         
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services" data-section>
      <div className="section-heading split-heading">
        <div>
          <p data-reveal>Services</p>
          <h2 data-reveal>End-to-end digital solutions. Built around your product.</h2>
        </div>
        <span data-reveal>
          From concept to cloud, AetherNova designs, builds, and automates digital
          experiences that drive measurable outcomes.
        </span>
      </div>
      <div className="service-list">
        {services.map(({ title, description, icon: Icon }) => (
          <a className="service-row" href="#contact" key={title} data-service-row>
            <div className="service-icon"><Icon size={26} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ArrowRight size={22} className="row-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section" id="process" data-section>
      <div className="section-heading split-heading dark-heading">
        <div>
          <p data-reveal>Our Process</p>
          <h2 data-reveal>A proven delivery system for complex products.</h2>
        </div>
        <span data-reveal>
          We combine product strategy, engineering discipline, and AI automation to
          deliver fast with confidence.
        </span>
      </div>
      <div className="process-track">
        {processSteps.map(([number, title, detail, Icon]) => (
          <article className="process-step" key={title} data-process-step>
            <strong>{number}</strong>
            <div className="process-icon"><Icon size={24} /></div>
            <h3>{title}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="section proof-section" id="work" data-section>
      <div className="proof-grid">
        <div className="proof-copy">
          <p data-reveal>Why AetherNova</p>
          <h2 data-reveal>Product taste, AI depth, and deployment discipline in one team.</h2>
          <p data-reveal>
            We partner from strategy through launch, then keep improving the systems that
            make your product faster, smarter, and easier to operate.
          </p>
        </div>
        <div className="proof-panel" data-reveal>
          {proofItems.map((item) => (
            <div className="proof-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partnerLoop = [...partners, ...partners];

  return (
    <section className="partners-section" aria-labelledby="partners-title" data-section>
      <div className="partners-heading">
        <p data-reveal>Our Partners</p>
        <h2 id="partners-title" data-reveal>Built for teams ready to grow.</h2>
        <span data-reveal>
          We collaborate with ambitious teams across industries to build, automate, and scale digital products.
        </span>
      </div>
      <div className="partners-marquee" data-reveal>
        <div className="partners-track">
          {partnerLoop.map((partner, index) => (
            <span
              className="partner-pill"
              key={`${partner}-${index}`}
              aria-hidden={index >= partners.length}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const projectType = form.get("projectType");

    setStatus(
      `Thanks, ${form.get("name") || "there"}. We have your ${projectType} inquiry and will reply within one business day.`
    );
    gsap.fromTo(
      ".form-status",
      { y: 8, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
    event.currentTarget.reset();
  };

  return (
    <section className="section contact-section" id="contact" data-section>
      <div className="contact-grid">
        <div className="contact-copy">
          <p data-reveal>Get in Touch</p>
          <h2 data-reveal>Let’s build what’s next.</h2>
          <span data-reveal>
            Tell us about your project and our team will get back to you within one
            business day.
          </span>
          <div className="contact-methods" data-reveal>
            <a href="mailto:vivekkumarch1@gmail.com"><Mail size={19} /> support@aethernova.com</a>
            <a href="tel:+917992332371"><Phone size={19} /> +91 7992332371</a>
            <span><MapPin size={19} /> Remote-First serving clients worldwide</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <label data-field>
            <span>Name</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label data-field>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label data-field>
            <span>Company</span>
            <input name="company" type="text" autoComplete="organization" />
          </label>
          <label data-field>
            <span>Project Type</span>
            <select name="projectType" defaultValue="" required>
              <option value="" disabled>Select service</option>
              {projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="wide" data-field>
            <span>Budget (₹)</span>
            <select name="budget" defaultValue="">
              <option value="" disabled>Select budget</option>
              <option>10k - 25k</option>
              <option>25k - 75k</option>
              <option>75k - 150k</option>
              <option>150k+</option>
            </select>
          </label>
          <label className="wide" data-field>
            <span>Message</span>
            <textarea name="message" rows="6" autoComplete="off" required />
          </label>
          <button className="button button-primary wide" type="submit" data-button data-field>
            Send Inquiry <ArrowRight size={18} />
          </button>
          {status ? <div className="form-status wide" role="status">{status}</div> : null}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <BrandMark />
      <span>© 2026 AetherNova. All rights reserved.</span>
      <nav aria-label="Footer navigation">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  );
}

export default function App() {
  useAetherMotion();
  useSmoothAnchorScroll();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Proof />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
