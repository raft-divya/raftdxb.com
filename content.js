// ═══════════════════════════════════════════════════════════════════════════
//  RAFT CONSULTING — WEBSITE CONTENT FILE
//  Edit anything between the quotes " " or inside the [ ] lists.
//  DO NOT delete commas, brackets, or braces — only change the text values.
//  Save this file, then refresh your browser to see changes.
// ═══════════════════════════════════════════════════════════════════════════

const RAFT = {

  // ─── COMPANY INFO ──────────────────────────────────────────────────────────
  company: {
    name:        "RAFT Consulting",
    tagline:     "Enterprise AI Advisory, Solutions & Captive Services",
    email:       "connect@raftdxb.com",
    phone:       "+971 (0)4 375 8046",                          // e.g. "+971 4 000 0000"
    location:    "PO Box No. 941940, Dubai, United Arab Emirates",
    website:     "www.raftdxb.com",
    founded:     "2023",
    copyright:   "2025–2026 RAFT Consulting. All rights reserved.",
    linkedin:    "https://www.linkedin.com/company/raftdxb/",                          // paste your LinkedIn URL here
  },

  // ─── HERO SECTION ──────────────────────────────────────────────────────────
  hero: {
    eyebrow:    "Enterprise AI Advisory and Solutions",
    line1:      "Augment, Automate and Replace legacy Applications.",
    line2:      "Deploy AI-native.",
    line3:      "Transform in weeks.",
    lead:       "RAFT designed solutions enhances or replaces your best in class legacy enterprise applications and SaaS based systems with AI-native solutions — deployed in 3-8 weeks, with up to 80% TCO reduction.", 
    cta1_text:  "Explore Services",
    cta1_link:  "#services",
    cta2_text:  "Talk to RAFT",
    cta2_link:  "#contact",
    // White glyph PNG (white circles on black background)
    // — used large in hero LEFT column, and inverted (CSS filter) for black nav glyph
    // Save as: images/raft-logo-white.png
    logo_white:      "images/raft-logo-white.png",
  },

  // ─── STATS BAR ─────────────────────────────────────────────────────────────
  stats: [
    { number: "80%",  label: "Max TCO Reduction"   },
    { number: "3–8",  label: "Weeks to Deploy"      },
    { number: "100%", label: "Fit to Requirement"    },
    { number: "10",   label: "Industries Served"    },
  ],

  // ─── ABOUT SECTION ─────────────────────────────────────────────────────────
  about: {
    eyebrow: "About RAFT",
    title:   "Strategic AI Transformation Partner for Enterprises",
    body1:   "Established in the UAE in 2023, RAFT Consulting is a strategic advisory and solutions firm helping organizations transform supply chain, finance, and enterprise operations through AI-powered innovation.",
    body2:   "We partner with enterprises to solve complex process, integration, and performance challenges — combining deep domain expertise with advanced Agentic AI solutions. Our approach helps clients Augment, Automate, or Replace legacy enterprise applications with intelligent, scalable and future-ready capabilities.",
    // ── ABOUT IMAGES ──────────────────────────────────────────────────────────
    // 1. Small RAFT glyph (4-circle logo) — shown as 40px icon above heading
    //    Save as: images/raft-logo-glyph.png
    image_glyph:       "images/raft-logo-glyph.png",
    // 2. RAFT Collective infographic (6 service-pillar cards, white background)
    //    Shown as main right-column visual — Save as: images/raft-collective-infographic.png
    image:             "images/raft-collective-infographic.png",
    image_alt:         "RAFT Collective Ecosystem",
    // 3. Blue layered lightbulb icon (dark background)
    //    Shown below the collective infographic — Save as: images/raft-lightbulb.png
    image_lightbulb:   "images/raft-lightbulb.png",
    pillars: [
      { letter: "R", word: "Research",  desc: "Evidence-based advisory grounded in domain expertise" },
      { letter: "A", word: "Advisory",  desc: "Strategy, solution design, and transformation roadmaps" },
      { letter: "F", word: "Fulcrum",   desc: "The execution pivot — connecting design to delivery" },
      { letter: "T", word: "Technology",desc: "AI-native platforms and bespoke Agentic AI solutions" },
    ],
  },

  // ─── SERVICES ──────────────────────────────────────────────────────────────
  services: [
    {
      eyebrow: "Supply Chain AI",
      title:   "Planning, Procurement, Logistics,  Order to Cash and Manufacturing Intelligence",
      desc:    "AI-native solutions built on the SCOR™ model — covering every tier of supply chain from demand sensing to order-to-cash. Deploy in 3–8 weeks and achieve up to 80% TCO reduction over traditional planning suites.",
      tags:    ["AI Demand & Supply Planning","Inventory Optimization","AI SCM Execution, S&OP","AI Procurement","AI Logistics","AI Asset Intelligence","SCM Collaboration Network","Network Risk", "AI O2C", "AI Manufacturing"],
    },
    {
      eyebrow: "Finance AI",
      title:   "Operations Finance & CFO Intelligence Suite",
      desc:    "AP/AR, budgeting, compliance, and OPEX risk — powered by Agentic AI. Replace manual finance workflows and legacy EPM systems with real-time financial governance and autonomous reporting.",
      tags:    ["Working Capital Optimization","Budget Compliance & Risk","AI Contract Performance","Cash Flow Management","OPEX Management","AI AP/AR", "AI ICV Governance", "AI Sustenance", "AI Risk Suite"],
    },
    {
      eyebrow: "AI Advisory & Consulting",
      title:   "Strategy, Design & Transformation Roadmaps",
      desc:    "Senior SMEs from MBB and Big 4 firms design your AI transformation strategy, solution architecture, and execution roadmap before a single line of code is written.",
      tags:    ["AI Readiness Assessment","Process Transformation","Solution Architecture","LLM & NLP Modeling","Augmented AI (Legacy)"],
    },
    {
      eyebrow: "Sovereign AI Platform & Services",
      title:   "In-House AI Center of Excellence, Sovereign Platform",
      desc:    "End-to-end advisory and execution for enterprises that want a dedicated, in-house AI platform, complete infrastructure, agents and data ecosystem — without large investments. Managed by fully dedicated or shared services model aligned to your OPEX budget.",
      tags:    ["Sovereign AI Platform","Tailored LLM/SLM", "Orchestration, Data, Integration", "Agents and Agent Evaluation", "Managed AI Services","AI CoE","Product Engineering"],
    },
  ],

  // ─── DELIVERY PROMISES ─────────────────────────────────────────────────────
  promises: [
    { icon: "📈", stat: "30–80%", title: "Max Return on Investment",   desc: "TCO reduction vs. enterprise application approach. Benchmarked against SAP, Oracle, and Dynamics." },
    { icon: "⚡", stat: "3–8 wks", title: "Very Fast Time to Value",   desc: "Pre-built solution stacks requiring configuration only. Most clients go live in under two months." },
    { icon: "🎯", stat: "~100%",  title: "Maximum Business Fit",       desc: "Agentic AI agents deliver near-complete requirement coverage. Modular, scalable, and evolvable." },
    { icon: "🔗", stat: "Any",    title: "Integrates with Any App",    desc: "Real-time data sync with any system. Auto-cleaning for inconsistencies. Smallest IT footprint design." },
  ],

  // ─── DATASHEETS ────────────────────────────────────────────────────────────
  // Each entry = one clickable card. Clicking opens the infographic image full screen.
  // "image" = the file in your images/ folder to show in the popup.
  // "group" controls which tab the card appears under.
  datasheets: [
    // ── Supply Chain: Planning ──
    {
      group:    "Supply Chain AI",
      id:       "PLO-01",
      title:    "AI Demand & Supply Planning",
      desc:     "High-confidence demand forecasting using AI-cleaned data, finer segmentation, and new unstructured data sources.",
      deploy:   "4–8 weeks",
      fit:      "80%",
      image:    "images/AI DemandSupplyPlanning.png",
    },
    {
      group:    "Supply Chain AI",
      id:       "PLO-02",
      title:    "AI Inventory & Raw Material Optimization",
      desc:     "AI-driven inventory accuracy, reduced stock-outs, and better raw material planning across the supply network.",
      deploy:   "4–8 weeks",
      fit:      "85%",
      image:    "images/AI InventoryRAWMat.png",
    },
    {
      group:    "Supply Chain AI",
      id:       "PLO-03",
      title:    "AI Sales & Operations Planning",
      desc:     "Integrated S&OP with financial impact analysis, AI-cleaned data, and automated decision support.",
      deploy:   "4–8 weeks",
      fit:      "90%",
      image:    "images/AISnOP.png",   // swap with correct slide image
    },
    {
      group:    "Supply Chain AI",
      id:       "PLO-04",
      title:    "AI Planning Decision Automation",
      desc:     "Integrated planning to automate decisions and automated decision support.",
      deploy:   "4–12 weeks",
      fit:      "90%",
      image:    "images/AIPlanningdecision.png",   // swap with correct slide image
    },
    {
      group:    "Supply Chain AI",
      id:       "PAN-01",
      title:    "AI Asset Management & Intelligence",
      desc:     "Full asset lifecycle management — financials, maintenance, ordering, and autonomous workflows in one AI solution.",
      deploy:   "6 weeks",
      fit:      "90%",
      image:    "images/AIAssetManagement.png",
    },
    {
      group:    "Supply Chain AI",
      id:       "PAN-02",
      title:    "AI Multi-party Collaboration",
      desc:     "Automate P2P, invoices, sales orders, and logistics document exchange across your entire trading network.",
      deploy:   "3 weeks",
      fit:      "90%",
      image:    "images/AICollaboration.png",
    },
    {
      group:    "Supply Chain AI",
      id:       "PAN-03",
      title:    "AI Real-Time Tracking",
      desc:     "Live stock movement tracking internally and externally, with exception management and automated communications.",
      deploy:   "4 weeks",
      fit:      "90%",
      image:    "images/AIRealtimetracking.png",
    },
    {
      group:    "Supply Chain AI",
      id:       "PAN-04",
      title:    "AI Network Risk",
      desc:     "Early risk detection across your supply network — segmentation, mitigation planning, and real-time audit readiness.",
      deploy:   "4 weeks",
      fit:      "90%",
      image:    "images/AINetworkrisk.png",
    },
    // ── Data Cleaning & Enrichment ──
    {
      group:    "Data & Intelligence",
      id:       "DEC-01",
      title:    "AI MDM Cleaning & Enrichment",
      desc:     "NLP-powered master data classification, deduplication, anomaly detection, and missing value imputation at scale.",
      deploy:   "2–3 weeks",
      fit:      "90%",
      image:    "images/AIMDMCleaning.png",
    },
    {
      group:    "Data & Intelligence",
      id:       "DEC-02",
      title:    "AI Logistics Data Enrichment",
      desc:     "Supply chain visibility, route optimisation, lead time monitoring, and distribution network information sharing.",
      deploy:   "3 weeks",
      fit:      "100%",
      image:    "images/AILogisticsdata.png",
    },
    {
      group:    "Data & Intelligence",
      id:       "DEC-03",
      title:    "Spend & Tail Spend Optimization",
      desc:     "AI-powered spend compression, category management, item classification, and contract adherence monitoring.",
      deploy:   "4 weeks",
      fit:      "85%",
      image:    "images/AISpend.png",
    },
    {
      group:    "Data & Intelligence",
      id:       "DEC-04",
      title:    "AI Planning Data Enrichment",
      desc:     "Rapid data cleaning, merging from diverse source systems, and enrichment with social and public data for planning algorithms.",
      deploy:   "4 weeks",
      fit:      "90%",
      image:    "images/AIPlanningdata.png",
    },
    {
      group:    "Data & Intelligence",
      id:       "DEC-05",
      title:    "AI Predictive SCM Data",
      desc:     "Multiple use cases for decision automation — machine maintenance, material planning, forecast simulation, and working capital optimization.",
      deploy:   "4–8 weeks",
      fit:      "80%",
      image:    "images/AIPredictivedata.png",
    },
    // ── Finance AI ──
    {
      group:    "Finance AI",
      id:       "OFX-01",
      title:    "AI Working Capital & Budget Optimization",
      desc:     "Optimise working capital, simulate cash projections, and monitor CAPEX/OPEX in real time with AI-driven financial insights.",
      deploy:   "3 weeks",
      fit:      "95%",
      image:    "images/AIWorkingcapital.png",
    },
    {
      group:    "Finance AI",
      id:       "OFX-02",
      title:    "AI Contract Performance",
      desc:     "Monitor contract terms, manage disputes in real time, streamline SLA/penalty execution, and increase spend under contract.",
      deploy:   "3–4 weeks",
      fit:      "100%",
      image:    "images/AIContract performance.png",
    },
    {
      group:    "Finance AI",
      id:       "OFX-03",
      title:    "AI Contract & Cashflow Risk for Distributors",
      desc:     "Balance cashflow commitments against SLA or profit priority, efficiently react to disruptions, and extend contract performance to customer contracts.",
      deploy:   "4–6 weeks",
      fit:      "100%",
      image:    "images/AIContract fordistributors.png",
    },
    {
      group:    "Finance AI",
      id:       "OFX-04",
      title:    "AI Budget Compliance & Risk",
      desc:     "Real-time budget vs actual tracking, malpractice detection, DoA enforcement, project budget control, and autonomous audit evidence generation.",
      deploy:   "3–10 weeks",
      fit:      "95%",
      image:    "images/AICompliance.png",
    },
  ],

  // ─── INDUSTRIES ────────────────────────────────────────────────────────────
  // Each industry has an icon, name, and a list of AI highlights shown on click.
  industries: [
    {
      icon: "🏭",
      name: "Manufacturing",
      highlights: [
        "AI-driven production planning & S&OP optimization",
        "Predictive maintenance & asset intelligence",
        "Industrial automation & IoT integration",
        "AI inventory & raw material optimisation",
        "Supply chain risk detection & mitigation",
      ],
    },
    {
      icon: "🛒",
      name: "Retail & E-Commerce",
      highlights: [
        "AI demand forecasting & replenishment",
        "Omni-channel inventory optimization",
        "AI commerce & order-to-cash automation",
        "Spend & tail spend optimization",
        "Real-time logistics tracking",
      ],
    },
    {
      icon: "💊",
      name: "Pharma & Life Sciences",
      highlights: [
        "Serialization & cold chain compliance",
        "AI supply planning for regulated environments",
        "Supplier hub & collaboration automation",
        "MDM cleaning & enrichment for regulatory data",
        "Contract performance & spend management",
      ],
    },
    {
      icon: "⚡",
      name: "Energy & Utilities",
      highlights: [
        "AI asset management for critical infrastructure",
        "Predictive maintenance & reliability",
        "Procurement & source-to-contract automation",
        "Network risk monitoring & mitigation",
        "Sustainability & circular economy solutions",
      ],
    },
    {
      icon: "🏦",
      name: "BFSI",
      highlights: [
        "AI budget compliance & risk governance",
        "AP/AR automation & cashflow optimisation",
        "Malpractice & fraud detection",
        "Contract performance monitoring",
        "AI-powered regulatory reporting",
      ],
    },
    {
      icon: "🚚",
      name: "Logistics & Distribution",
      highlights: [
        "AI trade route planning & TMS",
        "Real-time shipment & stock tracking",
        "Multi-party collaboration for P2P & invoicing",
        "Distribution OPEX optimisation",
        "Contract & cashflow risk for distributors",
      ],
    },
    {
      icon: "🏗️",
      name: "Real Estate & Construction",
      highlights: [
        "Project budget compliance & control",
        "AI procurement & source-to-contract",
        "Asset management & lifecycle tracking",
        "Cashflow risk for long-cycle projects",
        "Spend optimisation & vendor management",
      ],
    },
    {
      icon: "🏛️",
      name: "Public Sector",
      highlights: [
        "Sovereign AI platform deployment",
        "In-house AI Center of Excellence (Micro GCC)",
        "Spend & procurement compliance",
        "Contract performance & audit readiness",
        "AI-powered policy & regulatory reporting",
      ],
    },
    {
      icon: "🏥",
      name: "Healthcare",
      highlights: [
        "Medical supply chain optimization",
        "Asset & equipment management",
        "MDM cleaning for patient & clinical data",
        "Procurement & vendor compliance",
        "Budget compliance & OPEX tracking",
      ],
    },
    {
      icon: "🌐",
      name: "Professional Services",
      highlights: [
        "AI advisory & transformation roadmaps",
        "Resource & capacity planning with AI",
        "Contract performance & billing intelligence",
        "Spend & tail spend management",
        "AI-powered business development insights",
      ],
    },
  ],

  // ─── PARTNERS ──────────────────────────────────────────────────────────────
  partners: [
    {
      name:  "Techsaga (Techsaga IT UAE)",
      role:  "In-House SI & Product Engineering Partner",
      desc:  "RAFT's in-house capability center delivering GCC, system integration, and product engineering. Diverse skillsets across SAP, Oracle, ServiceNow, Data, AI, Workday, Microsoft, and full web & mobile stack.",
      meta:  "800+ Consultants · UAE, India, UK, US · ISO 9001 & 27001",
      image: "images/aboutraft_slide8_1.png",   // ← swap to correct logo/image
      dark:  false,
    },
    {
      name:  "ITHENA",
      role:  "SCM AI Solutions Engineering Partner",
      desc:  "Exclusive SCM AI engineering partner. RAFT designs the process and solution architecture — ITHENA engineers and delivers. Specialists in custom LLM development for complex supply chain AI.",
      meta:  "In-house development · HQ: USA · India  · 50+ Marquee Clients",
      image: "images/aboutraft_slide8_2.png",   // ← swap to correct logo/image
      dark:  false,
    },
    {
      name:  "Origon",
      role:  "Sovereign AI Platform Partner",
      desc:  "AI platform partner for sovereign deployments with complete Agentic AI self-building capabilities. Wall-to-wall coverage of localized cloud infra, SLM, LLM, orchestration, and agent build.",
      meta:  "HQ: USA · Operations: India",
      image: "images/aboutraft_slide8_5.png",  // ← swap to correct logo/image
      dark:  false,
    },
    {
      name:  "SimplAI",
      role:  "Agentic AI Platform Partner",
      desc:  "Agentic AI platform bundled with RAFT offerings — enabling clients to kickstart self-build Agentic AI applications. Powers the AI agent layer across RAFT's bespoke and shelf solution portfolio.",
      meta:  "HQ: USA · Operations: India",
      image: "images/aboutraft_slide8_4.png",  // ← swap to correct logo/image
      dark:  false,
    },
    {
      name:  "Turing Enterprises",
      role:  "Strategic AI Initiative Partner",
      desc:  "For large or strategic programs where best-in-class enterprise AI solutions and data modeling are the objective. RAFT is a partner to Turing for SME and solution design services.",
      meta:  "HQ: USA · Global Operations",
      image: "images/aboutraft_slide8_3.png",  // ← swap to correct logo/image
      dark:  false,
    },
    
  ],

  // ─── INSIGHTS ──────────────────────────────────────────────────────────────
  // "coming_soon: true" shows a Coming Soon badge. Set to false when content is live.
  // "link" = path to the blog HTML file, or a full URL when published externally.
  insights: [
    {
      category:     "Supply Chain & Finance AI",
      title:        "SCOR-linked SCM and Finance AI",
      excerpt:      "RAFT's SCM and Finance AI design starts from the SCOR model, then turns process coverage into measurable customer utility — every agent tied to a defined outcome.",
      coming_soon:  false,
      link:         "blog-1-scor-agent-metrics.pdf",
      image:        "",
    },
    {
      category:     "Solution Design",
      title:        "Enhance the Core, Replace Where It Counts",
      excerpt:      "Should you enhance an existing system, automate around it, or replace it entirely with native AI? RAFT's practical framework for getting the design mix right.",
      coming_soon:  false,
      link:         "blog-2-solution-design-mix.pdf",
      image:        "",
    },
    {
      category:     "Engagement Model",
      title:        "Enterprise-grade AI, Configured Fast",
      excerpt:      "RAFT's engagement model delivers enterprise-grade AI outcomes without the timeline and organizational weight of a traditional SaaS program.",
      coming_soon:  false,
      link:         "blog-3-engagement-model.pdf",
      image:        "",
    },
    {
      category:     "RAFT Framework",
      title:        "Role, Assessment, Fit, Transformation",
      excerpt:      "The RAFT framework moves customers from AI ambition to an executable portfolio — practical, governed, and deployable from day one.",
      coming_soon:  false,
      link:         "blog-4-raft-framework.pdf",
      image:        "",
    },
  ],

  // ─── APPROACH STEPS ────────────────────────────────────────────────────────
  approach: {
    eyebrow:  "Design-Led Delivery",
    title:    "Requirement Design is 50% of the Solution",
    lead:     "RAFT architects every solution before execution begins. Our partners build what we design — not the other way around.",
    callout:  "Our pre-built building blocks mean you get an off-the-shelf solution tailored to your exact requirements — with negligible IT footprint and limited change management.",
    steps: [
      { num: "01", title: "Process & Solution Design",           desc: "RAFT SMEs define process workflows, AI use case architecture, and solution requirements." },
      { num: "02", title: "Technical Architecture & LLM Modeling", desc: "Solution and technical design with LLM tuning, integration design, and platform selection." },
      { num: "03", title: "Partner Engineering & Delivery",      desc: "ITHENA, Techsaga, and platform partners execute against RAFT's design — no improvisation." },
      { num: "04", title: "Solution Evolution & Scale",          desc: "Modular architecture enables continuous improvement and on-demand scaling aligned to your OPEX." },
    ],
  },

  // ─── CONTACT SECTION ───────────────────────────────────────────────────────
  contact: {
    eyebrow:  "Get in Touch",
    title:    "Start Your AI Transformation",
    lead:     "Tell us your challenge. We'll tell you exactly how we'll solve it — and what it'll cost.",
    // Interest dropdown options
    interests: [
      "Supply Chain AI",
      "Finance AI",
      "AI Advisory & Strategy",
      "Sovereign AI / Micro GCC",
      "Agentic AI Platform",
      "Other",
    ],
    // Image shown beside contact info (RAFT wordmark logo)
    image:    "images/styleguide_slide2_3.png",
  },

};
// ═══════════════════════════════════════════════════════════════════════════
//  END OF CONTENT FILE
// ═══════════════════════════════════════════════════════════════════════════
