import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  CheckCircle,
  CloudCog,
  Code2,
  Compass,
  FileText,
  Globe,
  Layers3,
  Mail,
  Menu,
  MessageSquare,
  Palette,
  Phone,
  Rocket,
  Shield,
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

const siteUrl = "https://aethernova.com";
const companyName = "AetherNova";
const contactEmail = "support@aethernova.com";
const contactPhone = "+91 7992332371";

const servicePages = [
  {
    slug: "ai-development",
    title: "AI Development Services",
    shortTitle: "AI Development",
    icon: BrainCircuit,
    metaTitle: "AI Development Services | Custom AI Solutions Company | AetherNova",
    metaDescription:
      "AetherNova builds custom AI applications, AI agents, machine learning workflows, LLM integrations, and business-ready AI products for growing companies.",
    keywords:
      "AI development services, custom AI development company, AI software development, LLM app development, AI agent development, machine learning solutions, generative AI development, AI product development",
    hero:
      "Build practical AI products, agents, and intelligent workflows that turn company knowledge, data, and repetitive operations into measurable business advantage.",
    showcase: [
      {
        src: "/images/ai-development.png",
        label: "Nexus AI Assistant",
        tag: "AI Knowledge Base",
        desc: "Private AI assistant with document retrieval, role-based access, and cited source answers."
      },
      {
        src: "/images/saas-dashboard.png",
        label: "DataFlow Pro Analytics",
        tag: "AI-Powered SaaS Dashboard",
        desc: "Real-time analytics dashboard with AI insights, forecasting, and anomaly detection."
      }
    ],
    intro: [
      "AetherNova helps founders and teams move from AI curiosity to dependable production systems. Our AI development services cover strategy, product design, model selection, prompt architecture, retrieval systems, workflow automation, API integrations, evaluation, and deployment. The goal is simple: build AI software that is useful, secure, fast, and aligned with the way your business actually operates.",
      "We focus on practical use cases such as customer support assistants, internal knowledge copilots, lead qualification systems, document processing tools, forecasting workflows, AI dashboards, and intelligent SaaS features. Instead of chasing vague automation, we identify the decisions, handoffs, and information bottlenecks that slow your team down, then design AI systems that fit into existing processes with clear guardrails.",
      "Every engagement balances product thinking and engineering discipline. That means clean user experiences, reliable backend architecture, model observability, data privacy, testing, and a launch plan your team can understand. Whether you need an MVP, a private AI assistant, or a scalable AI feature inside an existing product, we build with long-term maintainability in mind."
    ],
    benefits: [
      "Custom AI applications designed around your data, users, and operational goals.",
      "LLM integrations, retrieval augmented generation, AI agents, and automation flows that reduce manual work.",
      "Secure architecture with access control, audit-friendly prompts, evaluation checks, and monitoring.",
      "Clear product roadmap so the AI system launches quickly and improves with real usage.",
      "Better customer experience through instant answers, smarter recommendations, and guided workflows.",
      "Lower operational cost by automating repetitive research, support, reporting, and data entry tasks."
    ],
    process: [
      "AI opportunity mapping: we define high-value workflows, user journeys, required data sources, and success metrics.",
      "Prototype and evaluation: we create a focused proof of concept, test model behavior, and measure answer quality.",
      "Product design: we turn the AI capability into a clean interface with permissions, feedback loops, and fallbacks.",
      "Engineering and integration: we connect models, databases, APIs, business tools, and cloud infrastructure.",
      "Safety and launch: we add logging, monitoring, human review paths, rate limits, and release checks.",
      "Optimization: we improve prompts, retrieval, latency, cost, and adoption after real users interact with the system."
    ],
    caseStudy: {
      title: "Case Study: AI knowledge assistant for a services team",
      body:
        "A growing consulting team needed faster access to proposals, delivery notes, pricing rules, and support documents. We designed a private AI knowledge assistant with searchable sources, role-based access, citations, and feedback scoring. The team reduced internal research time, improved answer consistency, and created a repeatable foundation for future AI automation across sales and delivery."
    },
    faqs: [
      ["What types of AI products can AetherNova build?", "We build AI assistants, AI agents, document automation tools, recommendation systems, internal copilots, data analysis workflows, and AI features for SaaS platforms."],
      ["Can you integrate AI with our existing tools?", "Yes. We connect AI workflows with CRMs, databases, websites, dashboards, email, chat, payment systems, and custom internal software."],
      ["How do you keep AI outputs reliable?", "We use scoped prompts, retrieval from trusted data, evaluation tests, logging, fallback states, human review paths, and ongoing optimization."],
      ["Do we need a large dataset to start?", "Not always. Many useful AI systems begin with structured documents, business rules, examples, and APIs, then improve as usage data grows."]
    ]
  },
  {
    slug: "web-development",
    title: "Web Development Services",
    shortTitle: "Web Development",
    icon: Code2,
    metaTitle: "Web Development Services | Fast SEO-Friendly Websites | AetherNova",
    metaDescription:
      "AetherNova creates fast, responsive, SEO-friendly websites and web applications for startups, agencies, SaaS teams, and growth-focused businesses.",
    keywords:
      "web development services, website development company, custom web development, responsive website design, SEO friendly website development, React development agency, business website development",
    hero:
      "Launch a fast, modern, conversion-focused website or web application that looks polished, loads quickly, ranks cleanly, and supports real business growth.",
    showcase: [
      {
        src: "/images/website-design.png",
        label: "Nexora Solutions",
        tag: "B2B Corporate Website",
        desc: "High-converting corporate website with clean UX, SEO-optimised pages, and strong CTA architecture."
      },
      {
        src: "/images/saas-dashboard.png",
        label: "DataFlow Pro",
        tag: "SaaS Web Application",
        desc: "Feature-rich SaaS platform with authentication, user dashboards, and data visualisation."
      }
    ],
    intro: [
      "Your website is often the first serious proof a buyer sees. AetherNova builds web experiences that combine clean design, strong messaging, technical SEO, fast performance, and reliable engineering. We create marketing websites, landing pages, dashboards, portals, booking systems, e-commerce experiences, and custom web applications for teams that need more than a generic template.",
      "Our web development process starts with the business goal. We clarify who the site must persuade, what keywords matter, what actions visitors should take, and which technical constraints need to be handled from day one. Then we design pages that are easy to scan, mobile responsive, accessible, and optimized for conversion without feeling cluttered.",
      "On the engineering side, we build clean components, structured content, optimized assets, schema markup, fast routes, and maintainable code. The result is a website that looks premium on launch day and remains easy to improve as your offer, audience, and product grow."
    ],
    benefits: [
      "Responsive web design that works smoothly across desktop, tablet, and mobile devices.",
      "SEO-friendly page structure with clear headings, metadata, schema, sitemap, and clean URLs.",
      "Fast loading pages built with optimized assets, lean components, and performance-minded delivery.",
      "Conversion-focused layouts for lead generation, sales calls, demo bookings, and product signups.",
      "Custom functionality such as forms, dashboards, CMS integrations, APIs, payment flows, and portals.",
      "Maintainable codebase that can evolve with your marketing campaigns and product roadmap."
    ],
    process: [
      "Discovery: define audience, offer, pages, keywords, conversion goals, and technical requirements.",
      "Information architecture: plan clean navigation, page hierarchy, service pages, and calls to action.",
      "UI design: create a polished visual system with responsive layouts and reusable components.",
      "Development: build the frontend, connect APIs or CMS tools, optimize assets, and implement tracking.",
      "SEO and QA: check metadata, schema, mobile usability, accessibility, speed, and browser behavior.",
      "Launch and improve: deploy, monitor analytics, review search performance, and refine content."
    ],
    caseStudy: {
      title: "Case Study: High-converting service website rebuild",
      body:
        "A B2B services company had a generic one-page website that did not explain its offers clearly. We rebuilt the site with dedicated service sections, stronger CTAs, improved technical SEO, structured data, and a cleaner design system. The new experience made the company easier to understand, easier to contact, and better positioned for organic search growth."
    },
    faqs: [
      ["Do you build only landing pages or full websites?", "We build both. We can create focused landing pages, complete business websites, web portals, dashboards, and custom web applications."],
      ["Will the website be SEO friendly?", "Yes. We include clean URLs, metadata, heading structure, schema markup, sitemap, robots.txt, responsive design, and performance best practices."],
      ["Can you redesign an existing website?", "Yes. We can audit the current site, improve structure and messaging, redesign the interface, and rebuild the technical foundation."],
      ["Which technologies do you use?", "We choose technology based on the project. Common stacks include React, Vite, Node.js, modern CMS tools, API integrations, and cloud hosting."]
    ]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development Services",
    shortTitle: "Mobile App Development",
    icon: Smartphone,
    metaTitle: "Mobile App Development Services | iOS Android App Company | AetherNova",
    metaDescription:
      "AetherNova designs and develops mobile apps for iOS, Android, startups, marketplaces, SaaS products, internal teams, and AI-powered mobile experiences.",
    keywords:
      "mobile app development services, iOS app development, Android app development, custom mobile app development, app development company, cross platform app development, startup app development",
    hero:
      "Design and develop mobile apps that feel intuitive, perform reliably, and give users a reason to return after the first download.",
    showcase: [
      {
        src: "/images/mobile-app.png",
        label: "PocketFlow Fintech App",
        tag: "iOS & Android App",
        desc: "Consumer fintech app with real-time balance, smart budgeting, transaction history, and analytics."
      },
      {
        src: "/images/ui-ux-design.png",
        label: "ShopX Mobile Commerce",
        tag: "E-Commerce Mobile App",
        desc: "End-to-end shopping experience with product discovery, cart, and seamless checkout."
      }
    ],
    intro: [
      "AetherNova builds mobile applications for startups, service businesses, SaaS teams, and organizations that need reliable software in the hands of customers or employees. We help turn a rough idea, workflow, or existing web product into a mobile experience that is easy to use, fast to load, and simple to maintain.",
      "Mobile success depends on more than screens. Users expect smooth onboarding, clear navigation, quick actions, secure accounts, notifications that matter, offline-aware behavior, and a product that respects their time. We design the core journey first, then build the technical foundation around the features that create retention and business value.",
      "Our mobile app development work can include iOS and Android apps, cross-platform builds, API integration, AI features, admin dashboards, payment flows, push notifications, analytics, and release support. We keep the product focused so you can launch quickly, learn from real users, and scale the app with confidence."
    ],
    benefits: [
      "Clean iOS and Android user experiences designed for repeat usage and simple navigation.",
      "Cross-platform development options that reduce cost while keeping performance strong.",
      "Secure authentication, APIs, payment systems, notifications, and analytics integrations.",
      "AI-powered app features such as assistants, recommendations, smart search, and automated workflows.",
      "Launch support for testing, app store preparation, versioning, and post-release improvements.",
      "Scalable backend architecture so your mobile app can grow beyond the first MVP."
    ],
    process: [
      "Product strategy: define the audience, core use case, app scope, platform needs, and success metrics.",
      "UX mapping: design onboarding, navigation, user flows, permissions, empty states, and retention loops.",
      "Visual design: create polished screens, reusable components, and mobile-friendly interaction patterns.",
      "App development: build the mobile frontend, backend APIs, admin tools, integrations, and analytics.",
      "Testing: validate usability, device behavior, performance, security, notifications, and release readiness.",
      "Launch and iteration: ship to users, review feedback, improve retention, and expand the roadmap."
    ],
    caseStudy: {
      title: "Case Study: Field operations mobile app",
      body:
        "A service company needed to replace spreadsheet-based field reporting. We designed a mobile app with job assignments, status updates, photo uploads, customer notes, and an admin dashboard. The app reduced reporting delays, improved visibility for managers, and created a cleaner operating system for teams working outside the office."
    },
    faqs: [
      ["Can you build both iOS and Android apps?", "Yes. We can build cross-platform apps or platform-specific experiences depending on the budget, performance needs, and product roadmap."],
      ["Can my mobile app include AI features?", "Yes. We can add AI assistants, smart search, automation, recommendations, image workflows, document processing, and personalized experiences."],
      ["Do you help with app store launch?", "Yes. We help with testing, release builds, store assets, app descriptions, compliance checks, and launch planning."],
      ["Can you connect the app to my existing website or backend?", "Yes. We can integrate with existing APIs, databases, CRM systems, dashboards, payment providers, and authentication services."]
    ]
  },
  {
    slug: "ai-automation",
    title: "AI Automation Services",
    shortTitle: "AI Automation",
    icon: Workflow,
    metaTitle: "AI Automation Services | Business Workflow Automation | AetherNova",
    metaDescription:
      "AetherNova builds AI automation systems for lead handling, operations, reporting, document workflows, CRM updates, customer support, and internal productivity.",
    keywords:
      "AI automation services, business automation, workflow automation company, AI workflow automation, automation agency, process automation, CRM automation, document automation",
    hero:
      "Automate repetitive business workflows with AI systems that save time, reduce errors, and keep teams focused on high-value work.",
    showcase: [
      {
        src: "/images/ai-automation.png",
        label: "FlowAI Automation Platform",
        tag: "AI Workflow Builder",
        desc: "Visual drag-and-drop automation builder connecting forms, CRMs, email, Slack, and AI classification."
      },
      {
        src: "/images/custom-software.png",
        label: "OpsCore Command Centre",
        tag: "Operations Automation Dashboard",
        desc: "Automated ops dashboard with live status tracking, AI-assigned tasks, and reporting workflows."
      }
    ],
    intro: [
      "AI automation is most powerful when it is aimed at a real operational bottleneck. AetherNova helps companies identify repetitive tasks, information handoffs, manual reporting, CRM updates, support queues, document reviews, and approval workflows that can be simplified with a thoughtful mix of AI, APIs, and automation logic.",
      "We do not treat automation as a collection of disconnected shortcuts. We map the full process, define triggers and rules, design human review points, and build the system so your team can trust it. That may include AI classification, data extraction, lead scoring, email drafting, ticket routing, dashboard updates, document generation, or multi-step workflows across existing tools.",
      "The result is a cleaner operating rhythm. Teams spend less time copying data, checking spreadsheets, rewriting the same messages, or hunting for context. Leaders gain better visibility, customers receive faster responses, and the business can scale without adding unnecessary manual workload."
    ],
    benefits: [
      "Lower manual workload by automating repetitive admin, sales, support, and reporting tasks.",
      "Faster response times for leads, customers, internal requests, and approval workflows.",
      "Better data quality through structured extraction, validation, deduplication, and CRM updates.",
      "AI-assisted decisions with human checkpoints for sensitive actions and quality control.",
      "Integrations with tools such as websites, CRMs, email, forms, databases, calendars, and dashboards.",
      "Clear automation documentation so your team understands how every workflow runs."
    ],
    process: [
      "Workflow audit: identify slow steps, repeated decisions, manual data movement, and measurable savings.",
      "Automation design: define triggers, inputs, outputs, exceptions, permissions, and review points.",
      "AI and integration build: connect models, APIs, databases, forms, CRMs, and notification channels.",
      "Testing: simulate real cases, edge cases, failures, and approval paths before launch.",
      "Deployment: roll out automation gradually with logs, alerts, ownership, and fallback behavior.",
      "Optimization: measure time saved, accuracy, adoption, and opportunities for deeper automation."
    ],
    caseStudy: {
      title: "Case Study: Automated lead qualification workflow",
      body:
        "A sales team was losing time sorting inbound inquiries and manually updating its CRM. We built an AI automation flow that captured form submissions, scored fit, summarized the need, drafted a reply, assigned the lead, and updated the pipeline. The team responded faster and focused conversations on the best opportunities."
    },
    faqs: [
      ["What business processes can be automated?", "Common workflows include lead qualification, CRM updates, document extraction, customer support routing, reporting, onboarding, reminders, and internal approvals."],
      ["Will automation replace our team?", "The best automation removes repetitive work so your team can focus on judgment, relationships, creative problem solving, and higher-value tasks."],
      ["Can you work with our existing software?", "Yes. We design automations around your current tools where possible, including CRMs, forms, email, spreadsheets, databases, websites, and dashboards."],
      ["How do you prevent automation mistakes?", "We use validation rules, human approval steps, logs, permissions, alerts, fallback paths, and staged rollout before full automation."]
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design Services",
    shortTitle: "UI/UX Design",
    icon: Palette,
    metaTitle: "UI UX Design Services | Product Design Agency | AetherNova",
    metaDescription:
      "AetherNova creates UI/UX design systems, app interfaces, SaaS dashboards, conversion-focused websites, wireframes, prototypes, and product experiences.",
    keywords:
      "UI UX design services, product design agency, UX design company, UI design services, SaaS dashboard design, mobile app UI design, website UX design, design system",
    hero:
      "Create clean product experiences that feel simple, look premium, and help users complete important tasks without confusion.",
    showcase: [
      {
        src: "/images/ui-ux-design.png",
        label: "ShopX Design System",
        tag: "Mobile UI/UX Design",
        desc: "Complete mobile e-commerce design system with components, flows, and developer-ready handoff."
      },
      {
        src: "/images/website-design.png",
        label: "Nexora Corporate Redesign",
        tag: "Website UX Redesign",
        desc: "Full UX redesign of a B2B website, improving conversion paths, navigation, and messaging clarity."
      }
    ],
    intro: [
      "AetherNova designs interfaces for websites, SaaS platforms, mobile apps, internal dashboards, AI tools, and custom software products. Our UI/UX design services turn complex ideas into clear journeys, polished screens, reusable components, and product systems that are easier for users and developers to understand.",
      "Good design is not decoration. It is the structure that helps a buyer trust your brand, helps a user find the next action, and helps a team ship features consistently. We study the audience, product goals, information hierarchy, content, technical constraints, and conversion paths before choosing the visual treatment.",
      "The result is a design that feels clean, useful, and commercially sharp. We create wireframes, user flows, prototypes, design systems, responsive layouts, dashboard patterns, landing pages, and handoff-ready UI. If you already have a product, we can audit the existing experience and redesign the parts that slow users down."
    ],
    benefits: [
      "Clear user flows that reduce friction across onboarding, discovery, checkout, booking, or core app usage.",
      "Modern visual interfaces that improve trust, perceived quality, and brand consistency.",
      "Responsive layouts for desktop and mobile so the product feels intentional everywhere.",
      "Reusable components and design systems that make future development faster and more consistent.",
      "Conversion-focused page design for demos, inquiries, signups, purchases, and activation.",
      "Developer-friendly handoff with states, spacing, interaction notes, and practical component logic."
    ],
    process: [
      "Research and UX audit: understand users, goals, pain points, analytics, competitors, and current friction.",
      "Information architecture: organize pages, screens, content hierarchy, and navigation patterns.",
      "Wireframes: map key flows quickly before spending time on visual polish.",
      "Visual design: create the interface system, components, responsive layouts, and interaction states.",
      "Prototype and review: test flow clarity, content, handoffs, and usability risks with stakeholders.",
      "Design handoff: prepare assets, specs, components, and implementation guidance for development."
    ],
    caseStudy: {
      title: "Case Study: SaaS dashboard UX redesign",
      body:
        "A SaaS product had powerful features but users struggled to find reports and complete setup. We redesigned navigation, dashboard hierarchy, empty states, filters, and onboarding prompts. The cleaner experience reduced support questions, improved feature discovery, and gave the product a more enterprise-ready feel."
    },
    faqs: [
      ["Can you redesign an existing product?", "Yes. We can audit the current UX, identify friction, redesign key flows, and prepare developer-ready components."],
      ["Do you provide only design or also development?", "We provide both. You can hire us for UI/UX design alone or continue into web, mobile, SaaS, and custom software development."],
      ["What deliverables do we receive?", "Typical deliverables include user flows, wireframes, high-fidelity screens, responsive layouts, prototypes, design system components, and handoff notes."],
      ["Do you design for conversion and SEO?", "Yes. For websites and landing pages we align layout, copy hierarchy, CTAs, speed, mobile usability, and search-friendly structure."]
    ]
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development Services",
    shortTitle: "Custom Software",
    icon: Boxes,
    metaTitle: "Custom Software Development Services | Business Software Company | AetherNova",
    metaDescription:
      "AetherNova builds custom software, internal tools, SaaS platforms, dashboards, portals, workflow systems, and cloud applications for growing businesses.",
    keywords:
      "custom software development, software development company, business software development, internal tool development, SaaS development, custom dashboard development, cloud software development",
    hero:
      "Build custom software that matches how your business works instead of forcing your team into tools that were never designed for your process.",
    showcase: [
      {
        src: "/images/custom-software.png",
        label: "OpsCore Enterprise Platform",
        tag: "Custom Operations Software",
        desc: "End-to-end project management and client portal system replacing 4 disconnected tools."
      },
      {
        src: "/images/saas-dashboard.png",
        label: "DataFlow Pro SaaS Platform",
        tag: "Custom SaaS Product",
        desc: "Multi-tenant SaaS platform with billing, admin dashboard, analytics, and role-based access control."
      }
    ],
    intro: [
      "AetherNova develops custom software for companies that have outgrown spreadsheets, disconnected tools, manual approvals, or rigid off-the-shelf platforms. We design and build internal systems, client portals, SaaS products, dashboards, workflow applications, reporting tools, booking systems, and automation-ready platforms.",
      "The strongest custom software starts with a clear understanding of operations. We map how work moves through your team, where data lives, which decisions matter, and where errors or delays occur. Then we shape a product that simplifies those flows with the right mix of interface design, backend architecture, integrations, permissions, and analytics.",
      "Our approach keeps the build focused and scalable. We prioritize the workflows that create measurable business value first, then create a foundation that can grow into more advanced automation, AI features, mobile access, reporting, and customer-facing experiences. The software becomes an asset, not another fragile tool."
    ],
    benefits: [
      "Software designed around your exact workflow, roles, data, and business logic.",
      "Internal tools and dashboards that improve visibility, reporting, approvals, and team productivity.",
      "Client portals, booking systems, SaaS features, and operational platforms built for growth.",
      "Secure authentication, role-based access, database design, APIs, and cloud deployment.",
      "Integration with existing tools such as CRM, payment systems, email, analytics, and spreadsheets.",
      "Future-ready foundation for AI automation, mobile apps, and advanced reporting."
    ],
    process: [
      "Operations discovery: understand users, workflows, data, pain points, and measurable outcomes.",
      "Product blueprint: define scope, roles, permissions, data model, screens, integrations, and roadmap.",
      "Design: create clear interfaces for repeated daily use, fast scanning, and fewer errors.",
      "Development: build backend, frontend, database, APIs, automation, and secure infrastructure.",
      "Testing and migration: validate workflows, import data, test permissions, and train key users.",
      "Launch and support: deploy, monitor, improve, and expand the system as operations evolve."
    ],
    caseStudy: {
      title: "Case Study: Custom operations dashboard",
      body:
        "A growing company managed projects, client updates, and internal tasks across multiple tools. We built a custom dashboard with project status, team ownership, document links, notes, reminders, and reporting views. The system reduced scattered communication and gave leadership a single source of operational truth."
    },
    faqs: [
      ["When should a business choose custom software?", "Custom software makes sense when manual work, disconnected tools, or generic platforms slow down operations, reporting, customer experience, or scale."],
      ["Can custom software integrate with our current tools?", "Yes. We can connect CRMs, payment providers, email, spreadsheets, databases, analytics, calendars, and other APIs."],
      ["Can you build a SaaS product?", "Yes. We build SaaS MVPs and scalable SaaS platforms with authentication, billing, dashboards, tenant-aware data, analytics, and admin tools."],
      ["How do you keep the project focused?", "We define the core workflow, launch the highest-value version first, and plan future releases around real user feedback and business impact."]
    ]
  }
];

const services = servicePages.map(({ title, hero, icon, slug }) => ({
  title,
  description: hero,
  icon,
  slug
}));

const servicePageMap = Object.fromEntries(servicePages.map((page) => [`/${page.slug}`, page]));

const processSteps = [
  ["01", "Discover", "Clarify goals, audience, workflows, search intent, and technical risk.", Compass],
  ["02", "Position", "Shape messaging, SEO structure, page hierarchy, and the product roadmap.", MessageSquare],
  ["03", "Design", "Create clean interfaces that make the offer easy to trust and act on.", Palette],
  ["04", "Build", "Develop fast web, mobile, AI, automation, and software systems.", Code2],
  ["05", "Launch", "Deploy with analytics, structured data, performance checks, and QA.", Rocket],
  ["06", "Improve", "Use data, feedback, and automation to keep growing after launch.", Zap]
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

const workProjects = [
  {
    id: "velo",
    src: "/images/work-preview-1.png",
    name: "Velo Commerce",
    type: "Web Development",
    label: "High-converting e-commerce website with SEO-optimised product pages, fast checkout, and analytics.",
    tag: "Website",
    accent: "#0aa7ff"
  },
  {
    id: "lumina",
    src: "/images/work-preview-2.png",
    name: "Lumina AI Dashboard",
    type: "AI Development",
    label: "AI-powered SaaS analytics platform with intelligent insights, anomaly alerts, and forecasting.",
    tag: "SaaS",
    accent: "#7c5cff"
  },
  {
    id: "feast",
    src: "/images/work-preview-3.png",
    name: "Feast Now App",
    type: "Mobile App",
    label: "iOS and Android food delivery app with real-time order tracking, maps, and smart recommendations.",
    tag: "Mobile App",
    accent: "#16f5a4"
  }
];

const heroTypePhrases = [
  "AI development",
  "web development",
  "mobile app development",
  "workflow automation",
  "custom software"
];

const projectTypes = servicePages.map((page) => page.shortTitle);

const contactFeatures = [
  "Reply within 1 business day",
  "No commitment required",
  "Free initial consultation",
  "NDA available on request"
];

const termsContent = `
<h2>Terms & Conditions</h2>
<p><strong>Last Updated: May 2026</strong></p>
<h3>1. Acceptance of Terms</h3>
<p>By accessing or using AetherNova's website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>
<h3>2. Services</h3>
<p>AetherNova provides digital product development services including web development, mobile applications, SaaS platforms, AI automation, UI/UX design, and DevOps solutions. The scope of each engagement is defined in a separate Statement of Work (SOW) or project agreement.</p>
<h3>3. Intellectual Property</h3>
<p>Upon full payment, all custom-developed work product created specifically for the client transfers to the client. AetherNova retains rights to general frameworks, libraries, methodologies, and tools used in delivering services. We may display project work in our portfolio unless otherwise agreed.</p>
<h3>4. Confidentiality</h3>
<p>AetherNova treats all client information as confidential. We will not disclose proprietary business information to third parties without written consent. A formal NDA is available upon request.</p>
<h3>5. Payment Terms</h3>
<p>Payment schedules are outlined in each project agreement. Typically, a deposit is required before work commences. Late payments may incur interest at 2% per month. AetherNova reserves the right to pause or terminate work for non-payment.</p>
<h3>6. Warranties & Disclaimers</h3>
<p>AetherNova warrants that services will be performed with reasonable skill and care. We do not guarantee specific business outcomes such as revenue growth or user acquisition. Services are provided "as is" beyond the defined scope.</p>
<h3>7. Limitation of Liability</h3>
<p>AetherNova's total liability for any claim shall not exceed the total fees paid by the client in the three months preceding the claim. We are not liable for indirect, consequential, or incidental damages.</p>
<h3>8. Termination</h3>
<p>Either party may terminate a project agreement with 14 days written notice. The client is responsible for payment for all work completed up to the termination date.</p>
<h3>9. Governing Law</h3>
<p>These Terms are governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with Indian arbitration law.</p>
<h3>10. Changes to Terms</h3>
<p>AetherNova reserves the right to update these Terms at any time. Continued use of our services constitutes acceptance of revised terms.</p>
<h3>11. Contact</h3>
<p>For questions regarding these Terms, contact us at <a href="mailto:support@aethernova.com">support@aethernova.com</a>.</p>
`;

const privacyContent = `
<h2>Privacy Policy</h2>
<p><strong>Last Updated: May 2026</strong></p>
<h3>1. Introduction</h3>
<p>AetherNova ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services.</p>
<h3>2. Information We Collect</h3>
<p><strong>Information you provide directly:</strong> When you fill out a contact form, we collect your name, email address, company name, and project details.</p>
<p><strong>Technical data:</strong> We may collect IP addresses, browser type, pages visited, and time spent on pages to improve our website experience.</p>
<p><strong>Communications:</strong> Any emails or messages you send us are stored to maintain our business relationship.</p>
<h3>3. How We Use Your Information</h3>
<p>We use your information to respond to inquiries, provide and improve services, send project updates, and comply with legal obligations. We do not sell personal data to third parties.</p>
<h3>4. Data Storage & Security</h3>
<p>Your data is stored securely on encrypted servers. We implement SSL/TLS encryption, access controls, and reasonable security practices. No transmission over the internet is guaranteed to be completely secure.</p>
<h3>5. Cookies</h3>
<p>Our website may use essential cookies for functionality and analytics cookies such as Google Analytics to understand website usage. You can disable cookies in your browser settings.</p>
<h3>6. Third-Party Services</h3>
<p>We may use trusted third-party providers for hosting, analytics, and communication tools. These providers process data only as instructed by us and are bound by their own privacy policies.</p>
<h3>7. Your Rights</h3>
<p>You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at <a href="mailto:support@aethernova.com">support@aethernova.com</a>.</p>
<h3>8. Data Retention</h3>
<p>We retain personal data for as long as necessary to provide services and comply with legal obligations, typically no longer than 7 years after the end of a business relationship.</p>
<h3>9. Children's Privacy</h3>
<p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
<h3>10. Contact Us</h3>
<p>For privacy-related inquiries, contact us at <a href="mailto:support@aethernova.com">support@aethernova.com</a> or +91 7992332371.</p>
`;

function buildHomeSeo() {
  return {
    title: "AetherNova | AI Development, Web Development & Automation Agency",
    description:
      "AetherNova is an AI development, web development, mobile app development, automation, UI/UX design, and custom software company for growth-focused businesses.",
    keywords:
      "AI development agency, web development company, mobile app development services, AI automation agency, UI UX design services, custom software development company, SaaS development, digital product agency",
    canonical: siteUrl,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: companyName,
      url: siteUrl,
      email: contactEmail,
      telephone: contactPhone,
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contactEmail,
        telephone: contactPhone,
        availableLanguage: ["English", "Hindi"]
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Product Development Services",
        itemListElement: servicePages.map((page) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: page.title,
            url: `${siteUrl}/${page.slug}`
          }
        }))
      }
    }
  };
}

function buildServiceSeo(page) {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    canonical: `${siteUrl}/${page.slug}`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.title,
        provider: {
          "@type": "Organization",
          name: companyName,
          url: siteUrl
        },
        areaServed: "Worldwide",
        serviceType: page.shortTitle,
        description: page.metaDescription,
        url: `${siteUrl}/${page.slug}`
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer
          }
        }))
      }
    ]
  };
}

function buildDepthParagraphs(page) {
  const service = page.shortTitle.toLowerCase();

  return [
    `A strong ${service} page should help a buyer understand the outcome, the delivery method, and the reason to trust the team before a sales conversation ever begins. That is how AetherNova writes and structures every service page. We connect search intent with practical business language, then support the promise with benefits, process, FAQs, proof, and a clear call to action. This gives visitors enough context to compare options without making the page feel heavy or unfocused.`,
    `For ${service}, the most important work happens before production begins. We define the audience, the problems they are trying to solve, the terms they are likely to search, the objections they may have, and the proof points that make the offer credible. That strategy shapes headings, page sections, content depth, internal links, and conversion points. It also prevents the common mistake of building a beautiful page that does not answer the questions buyers and search engines are actually asking.`,
    `AetherNova keeps the page experience clean because clarity is part of SEO. Search visibility is not only about adding keywords. It also depends on fast loading, readable content, semantic HTML, mobile responsiveness, accessible navigation, helpful internal links, and structured data that explains the page. When those fundamentals are handled well, visitors spend more time reading and taking action, while search engines receive stronger signals about the page topic and usefulness.`,
    `The delivery model is intentionally practical. We start with a focused scope, build the foundation, test the user journey, and launch a version that can be measured. After launch, we use analytics, form submissions, search impressions, and user feedback to keep improving the page or product. This is especially useful for companies that want to rank for competitive service keywords while still presenting a premium brand experience that feels trustworthy to real people.`,
    `Every ${service} engagement can also connect with the rest of the AetherNova growth stack. A dedicated service page can lead into a landing page, a custom web application, a mobile app, an AI workflow, a dashboard, or an internal automation system. That means the project is not treated as an isolated design task. It becomes part of a larger digital system where messaging, product experience, operations, and data work together.`,
    `We write in a way that is search-friendly but human first. The page includes relevant service keywords, but it also explains benefits, tradeoffs, decisions, timelines, and next steps in plain language. That matters because buyers are not looking for a wall of repeated phrases. They are looking for a team that understands their goal and can turn it into a reliable product, workflow, or website. Clean copy, clean design, and clean engineering all support that trust.`,
    `Technical quality supports the content strategy. For ${service}, we check the route structure, metadata, canonical URL, internal links, mobile layout, structured data, loading behavior, and conversion form before launch. We also keep the design restrained so the page feels credible rather than noisy. Those details help the page perform as a real business asset instead of a brochure that looks good but fails to generate qualified conversations.`,
    `If your company needs ${service}, the best next step is a focused strategy conversation. We can review your current website or product, identify missing pages, map keyword opportunities, define the conversion path, and recommend the fastest build plan. From there, AetherNova can design, develop, launch, and optimize the experience so it has a stronger chance to rank, convert, and support long-term growth.`
  ];
}

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function useSeo(seo) {
  useEffect(() => {
    document.title = seo.title;
    setMeta('meta[name="description"]', { name: "description", content: seo.description });
    setMeta('meta[name="keywords"]', { name: "keywords", content: seo.keywords });
    setMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:url"]', { property: "og:url", content: seo.canonical });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.canonical);

    let structuredData = document.getElementById("aethernova-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "aethernova-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(seo.structuredData);
  }, [seo]);
}

function useCurrentPath() {
  const normalizePath = () => window.location.pathname.replace(/\/+$/, "") || "/";
  const [path, setPath] = useState(normalizePath);

  useEffect(() => {
    const handleLocationChange = () => setPath(normalizePath());
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("aethernova:navigate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("aethernova:navigate", handleLocationChange);
    };
  }, []);

  return path;
}

function useAetherMotion(routeKey) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const ctx = gsap.context(() => {
      gsap.from("[data-nav]", {
        y: -22,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out"
      });

      gsap.from("[data-hero-word]", {
        y: 18,
        opacity: 0,
        duration: 0.72,
        stagger: 0.08,
        ease: "power2.out"
      });

      gsap.from("[data-hero-copy], [data-hero-cta], [data-hero-visual]", {
        y: 24,
        opacity: 0,
        duration: 0.82,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.utils.toArray("[data-section]").forEach((section) => {
        gsap.from(section.querySelectorAll("[data-reveal]"), {
          scrollTrigger: {
            trigger: section,
            start: "top 78%"
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out"
        });
      });

      gsap.utils.toArray("[data-service-row]").forEach((row) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 86%"
          },
          x: -18,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out"
        });
      });

      gsap.utils.toArray("[data-process-step]").forEach((step, index) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 88%"
          },
          y: 24,
          opacity: 0,
          duration: 0.65,
          delay: index * 0.025,
          ease: "power3.out"
        });
      });

      gsap.utils.toArray("[data-button]").forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, { y: -2, duration: 0.22, ease: "power2.out" });
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, { y: 0, duration: 0.22, ease: "power2.out" });
        });
      });
    });

    return () => ctx.revert();
  }, [routeKey]);
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
        duration: 0.9,
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

function useHashScroll(path) {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = window.location.hash;
    window.setTimeout(() => {
      document.querySelector(id)?.scrollIntoView();
    }, 80);
  }, [path]);
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
    const startTimeoutId = window.setTimeout(() => setStarted(true), startDelay);
    return () => window.clearTimeout(startTimeoutId);
  }, [startDelay, started]);

  useEffect(() => {
    if (!started) return undefined;

    const fullText = phrases[typeState.phraseIndex];
    let delay = typeState.deleting ? 58 : 105;
    if (!typeState.deleting && typeState.text === fullText) delay = 1050;
    if (typeState.deleting && typeState.text === "") delay = 360;

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

        const nextLength = current.deleting ? current.text.length - 1 : current.text.length + 1;
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

function navigateTo(href) {
  window.history.pushState(null, "", href);
  window.dispatchEvent(new Event("aethernova:navigate"));
}

function AppLink({ href, children, onClick, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (!href?.startsWith("/")) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

    event.preventDefault();
    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

function LegalModal({ title, content, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-panel">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>
        <div className="modal-body" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="modal-footer">
          <button className="button button-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function BrandMark() {
  return (
    <AppLink className="brand" href="/" aria-label="AetherNova home">
      <span className="brand-mark" aria-hidden="true">
        <span />
      </span>
      <span>AetherNova</span>
    </AppLink>
  );
}

function Header({ isHome }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const serviceHref = isHome ? "#services" : "/#services";
  const processHref = isHome ? "#process" : "/#process";
  const proofHref = isHome ? "#work" : "/#work";
  const contactHref = isHome ? "#contact" : "/#contact";

  useEffect(() => {
    if (!menuRef.current) return;
    gsap.to(menuRef.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.32,
      ease: "power3.out"
    });
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header" data-nav>
      <div className="header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <AppLink href={serviceHref}>Services</AppLink>
          <AppLink href={processHref}>Process</AppLink>
          <AppLink href={proofHref}>Proof</AppLink>
          <AppLink href={contactHref}>Contact</AppLink>
        </nav>
        <AppLink href={contactHref} className="header-action" data-button>
          Free Strategy Call
        </AppLink>
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
        <AppLink onClick={closeMenu} href={serviceHref}>Services</AppLink>
        <AppLink onClick={closeMenu} href={processHref}>Process</AppLink>
        <AppLink onClick={closeMenu} href={proofHref}>Proof</AppLink>
        <AppLink onClick={closeMenu} href={contactHref}>Contact</AppLink>
      </div>
    </header>
  );
}

function HeroVisual() {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(card1Ref.current,
      { y: 60, opacity: 0, scale: 0.92 },
      { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo(card2Ref.current,
      { y: -40, x: 40, opacity: 0, scale: 0.92 },
      { y: 0, x: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.75 }
    );
    gsap.fromTo(card3Ref.current,
      { x: -50, opacity: 0, scale: 0.92 },
      { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.9 }
    );

    gsap.to(card1Ref.current, { y: "-12px", duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(card2Ref.current, { y: "10px", duration: 2.8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.6 });
    gsap.to(card3Ref.current, { y: "-8px", duration: 3.6, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.1 });

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      gsap.to(card1Ref.current, { x: dx * 18, rotateY: dx * 6, rotateX: -dy * 4, duration: 0.7, ease: "power2.out", overwrite: "auto" });
      gsap.to(card2Ref.current, { x: dx * -12, y: dy * -10, rotateY: dx * -5, duration: 0.9, ease: "power2.out", overwrite: "auto" });
      gsap.to(card3Ref.current, { x: dx * 8, y: dy * 8, rotateX: dy * 5, duration: 0.8, ease: "power2.out", overwrite: "auto" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hero-visual-scene" data-hero-visual ref={containerRef} aria-label="AetherNova project preview">
      <div className="hv-orb hv-orb-1" aria-hidden="true" />
      <div className="hv-orb hv-orb-2" aria-hidden="true" />

      <div className="hv-card hv-card-main" ref={card1Ref}>
        <div className="hv-card-chrome">
          <span className="hv-chrome-dot" />
          <span className="hv-chrome-dot" />
          <span className="hv-chrome-dot" />
          <span className="hv-chrome-url">lumina.ai/dashboard</span>
        </div>
        <img
          src="/images/work-preview-2.png"
          alt="Lumina AI dashboard product built by AetherNova"
          className="hv-card-img"
          loading="eager"
        />
        <div className="hv-card-badge hv-badge-live">
          <span className="hv-live-dot" />
          Live
        </div>
      </div>

      <div className="hv-card hv-card-mobile" ref={card2Ref}>
        <img
          src="/images/mobile-app.png"
          alt="PocketFlow mobile app by AetherNova"
          className="hv-card-img"
          loading="lazy"
        />
        <div className="hv-card-label">
          <span>PocketFlow</span>
          <small>Mobile App</small>
        </div>
      </div>

      <div className="hv-stat-card" ref={card3Ref}>
        <div className="hv-stat-row">
          <Sparkles size={13} />
          <span>AI workflows automated</span>
        </div>
        <strong className="hv-stat-num">80+</strong>
        <div className="hv-stat-bar">
          <div className="hv-stat-fill" />
        </div>
        <div className="hv-stat-row hv-stat-row--muted">
          <span>&#8593; 34% vs last quarter</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const typedHeroPhrase = useTypewriterSequence(heroTypePhrases, 1000);

  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-badge" data-hero-word>
            <span className="hero-badge-dot" />
            <span>AI, web, mobile, automation and software development</span>
          </div>
          <h1 aria-label="AetherNova AI, Web and Mobile App Development Company">
            <span data-hero-word>AetherNova builds</span>
            <span className="gradient-text" data-hero-word>AI products that rank, convert and scale.</span>
          </h1>
          <div className="hero-typewriter-wrap" data-hero-word>
            <span className="hero-typewriter-label">Focused on</span>
            <span className="hero-subheadline">
              {typedHeroPhrase}
              <span className="type-cursor" aria-hidden="true" />
            </span>
          </div>
          <p data-hero-copy>
            A clean digital product agency for growth teams that need SEO-friendly websites,
            custom AI development, mobile apps, AI automation, UI/UX design, and custom
            software built with speed, clarity, and measurable outcomes.
          </p>
          <div className="hero-actions" data-hero-cta>
            <AppLink href="#contact" className="button button-primary" data-button>
              Start Your Project <ArrowRight size={18} />
            </AppLink>
            <AppLink href="#services" className="button button-secondary" data-button>
              Explore Services
            </AppLink>
          </div>
          <div className="hero-keywords" aria-label="Core AetherNova services" data-hero-cta>
            {projectTypes.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services" data-section>
      <div className="section-heading split-heading">
        <div>
          <p data-reveal>Dedicated Services</p>
          <h2 data-reveal>Focused pages for the services your buyers search for.</h2>
        </div>
        <span data-reveal>
          Each service is positioned with clear benefits, process, FAQs, proof, and
          conversion-focused SEO content so search engines and buyers understand exactly what you offer.
        </span>
      </div>
      <div className="service-list">
        {services.map(({ title, description, icon: Icon, slug }) => (
          <AppLink className="service-row" href={`/${slug}`} key={title} data-service-row>
            <div className="service-icon"><Icon size={26} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ArrowRight size={22} className="row-arrow" />
          </AppLink>
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
          <h2 data-reveal>A focused delivery system for websites, AI, apps, and software.</h2>
        </div>
        <span data-reveal>
          We combine search strategy, product design, engineering discipline, and automation
          so every page and product feature has a clear job.
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

function AnimatedCount({ target, suffix = "" }) {
  const ref = useRef(null);
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(target);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
        const isDecimal = target.includes(".");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numericTarget,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            const v = isDecimal ? obj.val.toFixed(1) : Math.round(obj.val);
            setDisplayed(`${v}${suffix}`);
          },
          onComplete: () => setDisplayed(`${target}${suffix}`)
        });
      }
    });
    return () => trigger.kill();
  }, [target, suffix]);

  return <span ref={ref}>{displayed}</span>;
}

function Proof() {
  return (
    <section className="section proof-section" id="work" data-section>
      <div className="proof-grid">
        <div className="proof-copy">
          <p data-reveal>Why AetherNova</p>
          <h2 data-reveal>Clean design, AI depth, SEO structure, and deployment discipline.</h2>
          <p data-reveal>
            We partner from positioning through launch, then keep improving the systems that
            make your product faster, smarter, easier to find, and easier to operate.
          </p>
        </div>
        <div className="proof-panel" data-reveal>
          {proofItems.map((item) => (
            <div className="proof-item" key={item.label}>
              <strong><AnimatedCount target={item.value} /></strong>
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
        <p data-reveal>Who We Help</p>
        <h2 id="partners-title" data-reveal>Built for teams ready to grow.</h2>
        <span data-reveal>
          We collaborate with ambitious teams across industries to build, automate, rank, and scale digital products.
        </span>
      </div>
      <div className="partners-marquee" data-reveal>
        <div className="partners-track">
          {partnerLoop.map((partner, index) => (
            <span className="partner-pill" key={`${partner}-${index}`} aria-hidden={index >= partners.length}>
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ title = "Let's build what's next.", intro = "Tell us about your project and our team will get back to you within one business day." }) {
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
          <h2 data-reveal>{title}</h2>
          <span data-reveal>{intro}</span>
          <div className="contact-features" data-reveal>
            {contactFeatures.map((feature) => (
              <div className="contact-feature-item" key={feature}>
                <CheckCircle size={16} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="contact-methods" data-reveal>
            <a href={`mailto:${contactEmail}`}><Mail size={19} /> {contactEmail}</a>
            <a href="tel:+917992332371"><Phone size={19} /> {contactPhone}</a>
            <span><Globe size={19} /> Remote-first, serving clients worldwide</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <label data-field>
            <span>Name *</span>
            <input name="name" type="text" autoComplete="name" placeholder="John Smith" required />
          </label>
          <label data-field>
            <span>Email *</span>
            <input name="email" type="email" autoComplete="email" placeholder="john@company.com" required />
          </label>
          <label data-field>
            <span>Company</span>
            <input name="company" type="text" autoComplete="organization" placeholder="Your Company Ltd." />
          </label>
          <label data-field>
            <span>Project Type *</span>
            <select name="projectType" defaultValue="" required>
              <option value="" disabled>Select service</option>
              {projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="wide" data-field>
            <span>Budget (INR)</span>
            <select name="budget" defaultValue="">
              <option value="" disabled>Select budget range</option>
              <option>10k - 25k</option>
              <option>25k - 75k</option>
              <option>75k - 150k</option>
              <option>150k+</option>
            </select>
          </label>
          <label className="wide" data-field>
            <span>Message *</span>
            <textarea name="message" rows="5" autoComplete="off" placeholder="Tell us about your project, goals, timeline, or questions..." required />
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

function ProjectShowcase({ items, serviceTitle }) {
  const [active, setActive] = useState(0);

  return (
    <section className="showcase-section" data-reveal>
      <p className="service-eyebrow">Our Work</p>
      <h2>Real projects we have shipped for clients.</h2>
      <p className="showcase-subtitle">
        These are examples of the kind of {serviceTitle.toLowerCase()} products AetherNova designs and builds
        for founders, SaaS teams, and growing companies.
      </p>
      <div className="showcase-layout">
        <div className="showcase-tabs">
          {items.map((item, index) => (
            <button
              key={item.label}
              className={`showcase-tab${active === index ? " showcase-tab--active" : ""}`}
              onClick={() => setActive(index)}
              type="button"
            >
              <span className="showcase-tab-tag">{item.tag}</span>
              <strong className="showcase-tab-label">{item.label}</strong>
              <p className="showcase-tab-desc">{item.desc}</p>
            </button>
          ))}
        </div>
        <div className="showcase-screen">
          <div className="showcase-browser-bar">
            <span className="showcase-dot" />
            <span className="showcase-dot" />
            <span className="showcase-dot" />
            <span className="showcase-url">{items[active].label} — {items[active].tag}</span>
          </div>
          <div className="showcase-image-wrap">
            {items.map((item, index) => (
              <img
                key={item.src}
                src={item.src}
                alt={`${item.label} — ${item.tag} project by AetherNova`}
                className={`showcase-img${active === index ? " showcase-img--active" : ""}`}
                loading="lazy"
                width="900"
                height="560"
              />
            ))}
          </div>
          <div className="showcase-caption">
            <strong>{items[active].label}</strong>
            <span>{items[active].tag}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePage({ page }) {
  const Icon = page.icon;

  return (
    <>
      <section className="service-hero">
        <div className="service-hero-inner">
          <AppLink href="/" className="breadcrumb">Home / Services / {page.shortTitle}</AppLink>
          <div className="service-hero-grid">
            <div>
              <div className="service-page-icon"><Icon size={28} /></div>
              <h1>{page.title}</h1>
              <p>{page.hero}</p>
              <div className="service-hero-actions">
                <AppLink href="#contact" className="button button-primary" data-button>
                  Request a Strategy Call <ArrowRight size={18} />
                </AppLink>
                <AppLink href="/#services" className="button button-secondary" data-button>
                  View All Services
                </AppLink>
              </div>
            </div>
            <aside className="service-summary" aria-label={`${page.shortTitle} summary`}>
              <span>SEO Focus</span>
              <strong>{page.shortTitle}</strong>
              <p>{page.metaDescription}</p>
              <div>
                {page.keywords.split(", ").slice(0, 5).map((keyword) => (
                  <small key={keyword}>{keyword}</small>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <main className="service-main">
        <article className="service-content" data-section>
          <section data-reveal>
            <p className="service-eyebrow">Overview</p>
            <h2>Built for search visibility, buyer trust, and real delivery.</h2>
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          {page.showcase && page.showcase.length > 0 && (
            <ProjectShowcase items={page.showcase} serviceTitle={page.shortTitle} />
          )}

          <section data-reveal>
            <p className="service-eyebrow">SEO Strategy</p>
            <h2>A dedicated page with depth, clarity, and conversion intent.</h2>
            {buildDepthParagraphs(page).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section data-reveal>
            <p className="service-eyebrow">Benefits</p>
            <h2>What your business gains</h2>
            <div className="service-benefits">
              {page.benefits.map((benefit) => (
                <div className="service-benefit" key={benefit}>
                  <CheckCircle size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section data-reveal>
            <p className="service-eyebrow">Process</p>
            <h2>How we deliver {page.shortTitle.toLowerCase()}</h2>
            <div className="service-process">
              {page.process.map((step, index) => (
                <div className="service-process-step" key={step}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="case-study" data-reveal>
            <p className="service-eyebrow">Case Study</p>
            <h2>{page.caseStudy.title}</h2>
            <p>{page.caseStudy.body}</p>
          </section>

          <section className="service-page-cta" data-reveal>
            <div>
              <p className="service-eyebrow">CTA</p>
              <h2>Ready to plan your {page.shortTitle.toLowerCase()} roadmap?</h2>
              <p>
                Share your goals, current website or product, target audience, and timeline.
                We will respond with a practical next step for strategy, design, development,
                SEO, automation, and launch.
              </p>
            </div>
            <AppLink href="#contact" className="button button-primary" data-button>
              Talk to AetherNova <ArrowRight size={18} />
            </AppLink>
          </section>

          <section data-reveal>
            <p className="service-eyebrow">FAQs</p>
            <h2>Questions before you start</h2>
            <div className="faq-list">
              {page.faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Contact
        title={`Start your ${page.shortTitle.toLowerCase()} project.`}
        intro={`Tell us what you want to build and AetherNova will map the fastest clean path for ${page.shortTitle.toLowerCase()}, SEO, delivery, and launch.`}
      />
    </>
  );
}

function WorkGallery() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const imgRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { y: 60, opacity: 0, scale: 0.96 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
            delay: i * 0.12
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="wg-section" ref={sectionRef} aria-labelledby="wg-title">
      <div className="wg-inner">
        <div className="wg-head">
          <div>
            <p className="wg-eyebrow">Selected Work</p>
            <h2 id="wg-title" className="wg-title">Projects we have shipped for real clients.</h2>
          </div>
          <AppLink href="/#contact" className="button button-secondary" data-button>
            Start Your Project <ArrowRight size={17} />
          </AppLink>
        </div>

        <div className="wg-grid">
          {workProjects.map((project, i) => (
            <article
              key={project.id}
              className={`wg-card${active === i ? " wg-card--active" : ""}`}
              ref={(el) => { imgRefs.current[i] = el; }}
              onMouseEnter={() => setActive(i)}
              style={{ "--accent": project.accent }}
            >
              <div className="wg-card-img-wrap">
                <img
                  src={project.src}
                  alt={`${project.name} — ${project.type} project by AetherNova`}
                  className="wg-card-img"
                  loading="lazy"
                />
                <div className="wg-card-overlay">
                  <span className="wg-card-type-badge">{project.tag}</span>
                </div>
              </div>
              <div className="wg-card-body">
                <div className="wg-card-meta">
                  <span className="wg-card-service">{project.type}</span>
                </div>
                <h3 className="wg-card-name">{project.name}</h3>
                <p className="wg-card-desc">{project.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Proof />
      <Partners />
      <WorkGallery />
      <Contact />
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <section className="service-hero">
        <div className="service-hero-inner">
          <h1>Page not found</h1>
          <p>The page you are looking for is not available. Start from the AetherNova home page or explore our dedicated service pages.</p>
          <AppLink href="/" className="button button-primary" data-button>
            Go Home <ArrowRight size={18} />
          </AppLink>
        </div>
      </section>
    </main>
  );
}

function Footer({ onOpenTerms, onOpenPrivacy }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <BrandMark />
          <p className="footer-tagline">AI, web, mobile, automation, design, and custom software for growth-focused teams.</p>
          <div className="footer-socials">
            <a href={`mailto:${contactEmail}`} aria-label="Email AetherNova"><Mail size={17} /></a>
            <a href="tel:+917992332371" aria-label="Call AetherNova"><Phone size={17} /></a>
            <span aria-label="Global"><Globe size={17} /></span>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Navigation</h4>
          <nav aria-label="Footer navigation">
            <AppLink href="/#services">Services</AppLink>
            <AppLink href="/#process">Process</AppLink>
            <AppLink href="/#work">Why Us</AppLink>
            <AppLink href="/#contact">Contact</AppLink>
          </nav>
        </div>

        <div className="footer-links-col">
          <h4>Services</h4>
          <nav aria-label="Services navigation">
            {servicePages.map((page) => (
              <AppLink href={`/${page.slug}`} key={page.slug}>{page.shortTitle}</AppLink>
            ))}
          </nav>
        </div>

        <div className="footer-links-col">
          <h4>Contact</h4>
          <div className="footer-contact-info">
            <a href={`mailto:${contactEmail}`}><Mail size={14} /> {contactEmail}</a>
            <a href="tel:+917992332371"><Phone size={14} /> {contactPhone}</a>
            <span><Globe size={14} /> Remote-first, worldwide</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright 2026 AetherNova. All rights reserved.</span>
        <div className="footer-legal">
          <button className="footer-legal-btn" onClick={onOpenPrivacy}>
            <Shield size={13} /> Privacy Policy
          </button>
          <span className="footer-divider" />
          <button className="footer-legal-btn" onClick={onOpenTerms}>
            <FileText size={13} /> Terms & Conditions
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const routePath = useCurrentPath();
  const page = servicePageMap[routePath];
  const isHome = routePath === "/";
  const isKnownRoute = isHome || Boolean(page);
  const seo = isHome ? buildHomeSeo() : page ? buildServiceSeo(page) : {
    title: "Page Not Found | AetherNova",
    description: "The requested AetherNova page was not found.",
    keywords: "AetherNova",
    canonical: `${siteUrl}${routePath}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Page Not Found",
      url: `${siteUrl}${routePath}`
    }
  };
  const [modal, setModal] = useState(null);

  useSeo(seo);
  useAetherMotion(routePath);
  useSmoothAnchorScroll();
  useHashScroll(routePath);

  return (
    <>
      <Header isHome={isHome} />
      {isHome ? <HomePage /> : isKnownRoute ? <ServicePage page={page} /> : <NotFoundPage />}
      <Footer onOpenTerms={() => setModal("terms")} onOpenPrivacy={() => setModal("privacy")} />

      {modal === "terms" && (
        <LegalModal title="Terms & Conditions" content={termsContent} onClose={() => setModal(null)} />
      )}
      {modal === "privacy" && (
        <LegalModal title="Privacy Policy" content={privacyContent} onClose={() => setModal(null)} />
      )}
    </>
  );
}
