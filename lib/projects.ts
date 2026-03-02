export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  fullImage: string;
  year: string;
  client: string;
  role: string;
  tags: string[];
  content: {
    overview: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
  images: string[];
  website?: string;
}

export const projects: Project[] = [
  {
    id: 11,
    slug: "fonitix-ai",
    title: "Fonitix AI (SaaS Voice Platform)",
    description:
      "AI voice agents that answer restaurant calls 24/7 - replacing $3,000/month operators with $249/month automation",
    thumbnail: "/images/fonitix/fonitix_hero.png",
    fullImage: "/images/fonitix/fonitix_hero.png",
    year: "2024-2025",
    client: "Fonitix AI",
    role: "Co-Founder, Lead Product Designer & AI Developer",
    website: "https://fonitix.ai/",
    tags: ["AI", "Voice Technology", "SaaS", "Restaurant Tech", "Next.js", "OpenAI", "Telnyx", "Supabase"],
    content: {
      overview:
        "Led product and technical delivery for a SaaS voice platform that replaces $3K/month human operators with $249/month AI agents. Defined product strategy from problem validation: interviewed restaurant owners, quantified missed-call revenue, and validated the hypothesis that independents would adopt AI at sub-$300/month. Owned end-to-end UX and full-stack build (Next.js 14, Supabase, Telnyx, OpenAI GPT-4); evaluated build-vs-buy and chose custom OpenAI+Telnyx stack for unit economics.",
      challenge:
        "Restaurants faced $2,400–3,200/month for phone staff and $1,500–2,500/month in lost revenue from missed calls; 30–40% miss rate during rush meant 60–80 lost opportunities/week. Hypothesis to validate: independents would pay for AI voice if ROI was clear and price under ~$300/month. Incumbents (Slang.ai, PolyAI) were too expensive; we needed to prove feasibility and willingness to pay.",
      solution:
        "Structured delivery around validated assumptions: (1) AI could handle natural-language orders and POS sync—validated with scripted tests and first pilot. (2) Telnyx + custom OpenAI would keep costs ~80% below Telnyx AI Assistants—validated with usage and cost modeling. Shipped turnkey agents (zero-wait, payments, Clover sync), real-time menu management, and automated provisioning; evaluated trade-offs between feature scope and time-to-pilot and prioritized reliability over extra channels for v1.",
      outcome:
        "First client (Cafe Brie) in beta; $3,639–5,439/month saved (93–95% cost reduction). Hypothesis on unit economics at $249/month confirmed; 100% reliable call handling and zero invalid orders validated quality bar. Used pilot metrics to decide roadmap for 3–5 next restaurants.",
    },
    images: [
      "/images/fonitix/fonitix_compare.png",
      "/images/fonitix/fonitix_prices.png",
      "/images/fonitix/fonitix_menu.png",
      "/images/fonitix/fonitix_order.png",
    ],
  },
  {
    id: 8,
    slug: "mriacrm-crm-system",
    title: "MRIACRM SYSTEM (Figma, AI, CRM)",
    description:
      "Comprehensive CRM platform streamlining business operations and customer management",
    thumbnail: "/images/mriacrm_cover.jpg",
    fullImage: "/images/mriacrm_cover.jpg",
    year: "2025",
    client: "MRIACRM",
    role: "Lead Product Designer, UX/UI Designer",
    tags: ["CRM", "Business Management", "SaaS", "Dashboard", "E-Commerce"],
    content: {
      overview:
        "Led product strategy and design of the first fully-featured CRM for Jira Cloud (Atlassian Forge). Ran stakeholder workshops and requirement discovery to frame the problem and prioritize scope; defined success as 'sales teams manage deals inside Jira without external tools' and used early prototypes to validate that Forge could support the required UX and performance. Reduced delivery cycle from 5–6 months to ~3 months by front-loading validation and de-risking integration assumptions.",
      challenge:
        "Sales teams needed a CRM native to Jira Cloud to eliminate external tools and data silos. Key uncertainties: whether Forge could support full CRM workflows and whether users would adopt an in-Jira experience. Required clear success criteria and phased validation (concept → prototype → build) to avoid overbuilding.",
      solution:
        "Structured work in phases: (1) Discovery—workshops to capture jobs-to-be-done and constraints; (2) Scoping—prioritized contact/company, leads/deals, activities, and reporting; evaluated build scope vs timeline and cut non-critical features for v1. (3) Validation—Figma flows and AI-assisted prototype to test navigation and key flows with stakeholders before engineering. Architected and shipped full CRM on Forge (Gmail/calendar, RBAC, reporting) with design decisions traceable to workshop insights.",
      outcome:
        "Shipped first fully-featured CRM for Jira Cloud. Early validation confirmed Forge feasibility and user acceptance; metrics aligned to initial success criteria (no external CRM dependency, workflows inside Jira). Post-launch feedback used to prioritize next iterations.",
    },
    images: [
      "/images/mriacrm1.jpg",
      "/images/mriacrm2.jpg",
      "/images/mriacrm3.jpg",
    ],
  },
  {
    id: 12,
    slug: "xproid",
    title: "Xproid (AI E-Commerce Platform)",
    description:
      "AI-powered e-commerce platform enabling store owners to manage their business through natural conversation and customers to checkout via chat in 60 seconds",
    thumbnail: "/images/xproid/xproid_main.png",
    fullImage: "/images/xproid/xproid_main.png",
    year: "2024-2025",
    client: "Xproid",
    role: "Senior Product Designer & AI Developer",
    tags: ["AI", "E-Commerce", "SaaS", "Next.js", "TypeScript", "Supabase", "Claude AI", "Conversational Interface"],
    content: {
      overview:
        "Led product and technical architecture for an AI-powered e-commerce platform that replaces dashboards with a conversational interface. Defined hypotheses: (1) store owners would adopt natural-language management if setup was <1 min; (2) conversational checkout would lift conversion vs traditional forms. Validated via early user sessions and A/B-style comparison of checkout completion time. Owned UX and backend integrations; delivered a shippable product in 12 weeks with success metrics defined up front.",
      challenge:
        "Traditional e-commerce had long setup and complex dashboards; industry benchmarks suggested ~70% cart abandonment linked to checkout friction. We needed to test whether conversational UI could reduce time-to-value for merchants and completion time for buyers, and whether AI cost could stay within unit economics at scale.",
      solution:
        "Broke delivery into testable increments: (1) Store creation—hypothesis that template-based setup would get stores live in ~60 seconds; measured time-to-first-product. (2) Conversational checkout—compared 5-min form flow vs chat flow; iterated on prompts and steps until completion time and conversion met targets. (3) AI cost—evaluated hybrid architecture (cached intents, minimal API calls) and validated ~80% cost reduction while preserving quality. Shipped instant stores, natural-language product management, and checkout across Instagram, Telegram, WhatsApp.",
      outcome:
        "Shipped in 12 weeks. Validated: 60-second store creation, ~40% conversion lift on conversational checkout, 80% AI cost reduction. Used these as ongoing success criteria; architecture supports unlimited stores and real-time sync with metrics in place to monitor performance.",
    },
    images: [
      "/images/xproid/xproid_tips.png",
      "/images/xproid/xproid_feed.png",
      "/images/xproid/add_product_voice.png",
      "/images/xproid/xproid_public_page.png",
      "/images/xproid/xproid_orders.png",
    ],
  },
  {
    id: 6,
    slug: "renting-clothes-app",
    title: "Renting Clothes App",
    description:
      "Fashion rental marketplace with seamless booking and delivery",
    thumbnail: "/images/frentify_cover.jpg",
    fullImage: "/images/frentify_cover.jpg",
    year: "2021",
    client: "Frentify",
    role: "Lead Product Designer",
    tags: ["Fashion", "Rental Platform", "Mobile App", "E-Commerce"],
    content: {
      overview:
        "Led product design for a fashion rental marketplace. Started from user and market analysis: interviews and desk research showed that trust (condition, size, returns) and simplicity of booking were the main barriers. Defined success as repeat bookings and completion rate; prioritized size-matching and condition transparency as first-order hypotheses to test in the first release.",
      challenge:
        "No single platform combined size matching, delivery scheduling, and condition tracking with a simple experience for both sides. We needed to validate that (1) renters would complete bookings if size risk was reduced, and (2) lenders would list if condition and returns were clearly handled.",
      solution:
        "Structured design around testable assumptions: (1) Virtual fitting and size recommendations would reduce returns and increase completion—validated through early flows and later metrics. (2) Clear condition and return rules would increase lender supply—reflected in onboarding and policy UX. Ran journey mapping and prioritized flows by impact on completion and retention; iterated on booking and return steps based on usage and feedback. Shipped mobile app with virtual fitting, automated size tips, real-time availability, and distinct flows for renters and lenders.",
      outcome:
        "40% MoM growth in active users and 85% booking completion. Outcomes evaluated against initial success criteria (completion, retention); size and condition features performed as hypothesized. Platform positioned as a reference for sustainable fashion with metrics to guide next iterations.",
    },
    images: [],
  },
  {
    id: 5,
    slug: "back-office-dashboard",
    title: "Back Office Dashboard",
    description:
      "Redesigned Global Blue's legacy system for improved merchant management",
    thumbnail: "/images/gb_cover.jpg",
    fullImage: "/images/gb_cover.jpg",
    year: "2024",
    client: "Global Blue",
    role: "Senior Product Designer",
    tags: [
      "Dashboard",
      "Analytics",
      "Financial Management",
      "Data Visualization",
    ],
    content: {
      overview:
        "Led redesign of Global Blue's legacy back-office system for tax-free shopping. Defined the problem through task analysis and user interviews: identified top pain points (search, edit, cross-device use) and set success criteria (time on task, error rate, task completion, satisfaction). Evaluated redesign options against these criteria and stakeholder constraints before locking scope.",
      challenge:
        "Legacy system had poor usability and complex workflows; users lost time and made errors when searching and editing merchant/shop data. We needed to quantify the gap and validate that a new dashboard would improve outcomes without disrupting operations—requiring clear baselines and measurable targets.",
      solution:
        "Ran discovery: task analysis and interviews to baseline time-on-task, error rate, and satisfaction. Defined success metrics and prioritized features (advanced search, simplified edit, data viz) by impact on those metrics. Prototyped and tested with real users; iterated on information architecture and controls based on completion and errors. Evaluated trade-offs (e.g. density vs clarity) using the same criteria. Shipped responsive dashboard aligned with stakeholder and user validation.",
      outcome:
        "Time on merchant management tasks down 40%, user errors down 60%, task completion up 45%, satisfaction up 70% vs legacy. Results measured against pre-defined success criteria; findings used to prioritize follow-up improvements.",
    },
    images: [
      "/images/chat10.jpg",
    ],
  },
  {
    id: 10,
    slug: "tesla-vip-trip",
    title: "Tesla VIP Trip (AI FullStack)",
    description:
      "Premium Tesla electric vehicle transfer service website built with AI-assisted development - from no-code prototype to production in 5 days",
    thumbnail: "/images/teslaviptrip_cover.jpg",
    fullImage: "/images/teslaviptrip_cover.jpg",
    year: "2025",
    client: "Tesla VIP Trip",
    role: "Senior Product Designer & AI Developer",
    tags: ["AI-Assisted Development", "Lovable.dev", "Full-Stack", "E-Commerce", "Booking System"],
    content: {
      overview:
        "Owned end-to-end product and delivery for a premium Tesla EV transfer service (Vienna/Bratislava) in 5 days. Framed the engagement as a hypothesis: AI-assisted design (Lovable.dev) could compress a 2-week scope to 5 days without sacrificing quality. Defined success as production-ready site with booking and admin, on-brand experience, and multilingual support; used daily checkpoints to evaluate progress and de-risk scope.",
      challenge:
        "Fixed 5-day timeline from concept to production. Key risks: scope creep, quality of AI-generated UI, and integration of booking and emails. Required clear prioritization, defined quality bar, and a process to validate outputs at each step.",
      solution:
        "Structured the 5 days as a mini roadmap with clear outcomes per day. Day 1–2: AI-assisted design in Lovable.dev—evaluated output against brand and usability bar; iterated on prompts and layout until approved. Day 3: React prototype to deployment—validated build and performance. Day 4: Client editing—confirmed content flexibility. Day 5: Booking system (React + Resend)—tested flow end-to-end. At each step, defined what 'done' meant and checked against it; cut or deferred scope that didn’t fit the timeline. Delivered dark theme, gold accents, 6 service pages, admin, multilingual UI.",
      outcome:
        "Production-ready site with booking and admin in 5 days. Hypothesis confirmed: AI-assisted flow reduced timeline from 2 weeks to 5 days while meeting quality bar. Process and checkpoints documented for reuse on similar projects.",
    },
    images: [],
  },
  {
    id: 2,
    slug: "warehouse-inventory-management",
    title: "3D Warehouse Inventory Management",
    description:
      "Enterprise inventory management platform with real-time 3D visualization",
    thumbnail: "/images/laps/cover_laps.jpg",
    fullImage: "/images/laps/cover_laps.jpg",
    year: "2022",
    client: "Twinzo 3D",
    role: "Senior Product Designer, Frontend (Flutter)",
    tags: [
      "3D Visualization",
      "Inventory Management",
      "Flutter",
      "Time Tracking",
    ],
    content: {
      overview:
        "Led product design and frontend implementation for a SaaS warehouse inventory app with real-time 3D visualization and task management (Fortune 500). Rapidly learned the 3D warehouse domain; ran stakeholder and operations interviews to define core jobs (track delivery times, task status, critical alerts). Set success as adoption and measurable efficiency gains; used prototypes to validate that the proposed UX would support daily operations before full build.",
      challenge:
        "Enterprises needed clearer visualization of warehouse operations and delivery times across sites. Uncertainties: whether 3D + task-centric UI would be adopted, and whether we could ship a production-ready MVP in 12 weeks. Required clear scope, validation with real workflows, and criteria to measure impact.",
      solution:
        "Structured work in phases: (1) Discovery—interviews to map current workflows and pain points; (2) Scoping—prioritized time tracking, delivery-duration tracker, task status, and critical alerts; evaluated feature set vs 12-week timeline and trimmed to MVP. (3) Validation—wireframes and prototype tested with operations; iterated on hierarchy and alerts based on feedback. Delivered cross-platform with Flutter; design decisions traceable to discovery insights.",
      outcome:
        "30% faster delivery times and better coordination; critical alerts reduced delays and improved allocation. Delivered production-ready solution in 12 weeks. Adoption and efficiency gains used as success criteria; outcomes informed next-phase roadmap.",
    },
    images: [
      "/images/laps_cover.jpg",
    ],
  },
  {
    id: 1,
    slug: "ai-ecommerce-chatbot",
    title: "E-Commerce AI Chatbot",
    description:
      "SaaS chatbot automating customer engagement and increasing conversions by 15%",
    thumbnail: "/images/chatbot_cover2.jpg",
    fullImage: "/images/chatbot_cover2.jpg",
    year: "2024-2025",
    client: "B2Stack",
    role: "Senior Product Designer",
    tags: ["AI", "E-Commerce", "SAAS", "Dashboard"],
    content: {
      overview:
        "Led product design and AI integration for a SaaS e-commerce chatbot. Framed the product around testable hypotheses: (1) AI-driven checkout would increase conversion vs static flows; (2) a clear dashboard would improve client retention and optimization. Defined success metrics (conversion lift, retention, support load) and used early pilots and analytics to validate assumptions before scaling.",
      challenge:
        "Businesses needed automated customer interactions and streamlined checkout without losing a personalized feel; they also needed to measure and tune the bot. We had to validate that AI could interpret intent reliably and that the dashboard would be actionable for non-technical clients.",
      solution:
        "Structured delivery around validation: (1) Checkout flow—hypothesis that intent-based steps would lift conversion; A/B-style comparison and iteration on prompts and steps; targeted ~15% conversion improvement as success criterion. (2) Dashboard—evaluated information architecture with clients; prioritized real-time metrics, cash flow, and bot configuration. Shipped dashboard and AI-driven flows; iterated based on usage and support feedback. Evaluated trade-offs (e.g. bot flexibility vs complexity) against retention and setup time.",
      outcome:
        "Conversion up 15%, retention improved, support load reduced. Dashboard enabled clients to track and optimize in real time. Results evaluated against initial success criteria; learnings used to prioritize next features (e.g. more channels, deeper analytics).",
    },
    images: [
      "/images/dashboard-chatbot.jpg",
    ],
  },
  {
    id: 3,
    slug: "b2c-b2b-delivery-app",
    title: "B2C/B2B Delivery App",
    description:
      "B2B/B2C delivery platform connecting businesses with real-time tracking",
    thumbnail: "/images/foodcore.jpg",
    fullImage: "/images/foodcore.jpg",
    year: "2020-2022",
    client: "FoodCore",
    role: "Lead Product Designer, UX Researcher",
    tags: ["Mobile App", "Delivery Platform", "UX/UI Design"],
    content: {
      overview:
        "Led product design and research for a B2C/B2B delivery platform. Framed the problem through market and user research: no single product served both B2B and B2C with a seamless driver experience. Defined success as faster delivery times, driver satisfaction, and business retention; formulated hypotheses that a unified platform with role-specific flows would outperform separate tools, and validated through early designs and later metrics.",
      challenge:
        "Market was split between consumer-only and business-only solutions, creating inefficiency for operators and drivers. We needed to validate that (1) one platform could serve both segments without compromising either, and (2) drivers would adopt and use the app if the experience was clear and efficient.",
      solution:
        "Structured work around testable assumptions: (1) Dual interface (B2B vs B2C) would improve retention and operations—validated via journey mapping and prioritization of flows by impact. (2) Real-time tracking and route optimization would improve delivery times and driver satisfaction—reflected in UX and later measured. Ran discovery with businesses, consumers, and drivers; defined success metrics and evaluated design options (e.g. unified vs separate apps) against them. Shipped dual-interface platform with real-time tracking, route optimization, and flexible payments; iterated based on usage and feedback.",
      outcome:
        "40% faster delivery times, 35% higher driver satisfaction, 28% growth in business client retention. Outcomes evaluated against initial success criteria; platform became a reference for B2B/B2C delivery with a clear basis for future iterations.",
    },
    images: [],
  },
  {
    id: 4,
    slug: "invoicing-app-improving",
    title: "Invoicing App Improving",
    description:
      "Financial management tool with automated workflows and real-time tracking",
    thumbnail: "/images/invoice_cover.jpg",
    fullImage: "/images/invoice_cover.jpg",
    year: "2023",
    client: "B2Stack",
    role: "Senior Product Designer",
    tags: ["Invoicing", "Financial Management", "Business Tools", "Automation"],
    content: {
      overview:
        "Led product design and strategy for an invoicing product for SMBs. Defined the problem through user interviews and domain analysis: manual invoicing caused late payments, errors, and poor cash-flow visibility. Set success as reduced processing time, higher collection rate, and fewer errors; evaluated feature scope against these criteria and prioritized automation and clarity over extra complexity.",
      challenge:
        "Clients needed billing automated and simplified without adding complexity. We had to validate that (1) automated cycles and reminders would improve collection without annoying customers, and (2) clearer reporting would support better decisions and reduce errors.",
      solution:
        "Structured delivery around validation: (1) Discovered pain points and current workflows; defined success metrics. (2) Evaluated design options (e.g. level of automation, notification frequency) against collection and error rates; prioritized automated billing, payment tracking, and reporting with configurable reminders. (3) Shipped and iterated based on usage and support feedback. Aligned flows with accounting and finance workflows; trade-offs (e.g. flexibility vs simplicity) made explicit and tied to success criteria.",
      outcome:
        "Invoice processing time down 60%, collection up 40%, accounting errors reduced. Results measured against pre-defined success criteria; product helped clients improve cash flow and organization, with learnings feeding into roadmap (e.g. integrations, more automation).",
    },
    images: [],
  },
  {
    id: 7,
    slug: "hotel-aggregator-booking-app",
    title: "Hotel Booking App",
    description:
      "UX/UI design case study for a modern hotel booking platform that aggregates multiple providers and offers seamless reservation experience with transparent pricing and unified policies.",
    thumbnail: "/images/hoteller_cover.jpg",
    fullImage: "/images/hoteller_cover.jpg",
    year: "2022",
    client: "Hoteller",
    role: "Senior Product Designer",
    tags: ["Travel", "Booking Platform", "Mobile App", "Aggregator", "UX Design", "Case Study"],
    content: {
      overview:
        "Led end-to-end product design for an aggregator hotel-booking platform. Framed the work as a hypothesis-driven case: transparent pricing and unified policies would increase trust and completion. Defined success as booking completions, retention, and reduced abandonment; used research, journey mapping, and iterative prototyping to validate assumptions before locking final UI.",
      challenge:
        "Travelers faced fragmented information, hidden fees, and unclear cancellation policies across sites. We needed to validate that (1) a single place to compare and book with full transparency would increase completions, and (2) progress indicators and simpler forms would reduce abandonment.",
      solution:
        "Structured a user-centered process: (1) Research and personas to understand pain points and decision criteria. (2) Journey mapping to identify drop-off points and opportunities. (3) Hypotheses: transparent price comparison and unified policies would build trust; step-by-step booking and progress indicators would reduce abandonment—tested through wireframes and prototypes with users. Iterated on search, comparison, maps, and booking flow based on completion and feedback. Shipped mobile-first UI with smart search, transparent comparison, interactive maps, and unified policy display; design decisions traceable to research and validation.",
      outcome:
        "Booking completions up 65%, retention up 45%; transparent pricing and clear policies increased trust; progress indicators and simpler forms reduced abandonment. Outcomes evaluated against initial success criteria; structure and visuals improved satisfaction and provided a basis for further iteration.",
    },

    images: [
      "/images/hotteller/Page_3.jpg",
      "/images/hotteller/page_4.jpg",
      "/images/hotteller/research.jpg",
      "/images/hotteller/userjmap.png",
      "/images/hotteller/flow_1.png",
      "/images/hotteller/flow_2.png",
      "/images/hotteller/Group-6.png",
      "/images/hotteller/page_15.jpg",
      "/images/hotteller/Page17 1.png",
      "/images/hotteller/Page17_2.png",
      "/images/hotteller/Page17 3.png",
      "/images/hotteller/Page17 4.png",
      "/images/hotteller/Page17_5.png",
      "/images/hotteller/Page17_6.png",
      "/images/hotteller/page_17.jpg",
    ],
  },
];
