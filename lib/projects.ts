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
}

export const projects: Project[] = [
  {
    id: 11,
    slug: "fonitix-ai",
    title: "Fonitix AI (SaaS Voice Platform)",
    description:
      "AI-powered voice agent platform for restaurants - automated phone ordering system with real-time menu management and POS integration",
    thumbnail: "/images/fonitix_cover.jpg",
    fullImage: "/images/fonitix_cover.jpg",
    year: "2025",
    client: "Fonitix AI",
    role: "Full-Stack Developer & Product Designer",
    tags: ["AI", "Voice Technology", "SaaS", "Restaurant Tech", "Next.js", "OpenAI", "Telnyx", "Convex"],
    content: {
      overview:
        "Fonitix AI is an intelligent voice agent platform that allows restaurants to create AI-powered phone assistants for automated order taking. Built as a SaaS solution with dark theme dashboard, real-time menu management, and seamless POS integration using modern tech stack including Next.js, Convex, and OpenAI GPT-4.",
      challenge:
        "Restaurants lose thousands monthly due to missed calls (30-40% go unanswered), high staff costs ($15-20/hour), human errors, limited hours, and language barriers. Average restaurant loses $50,000-100,000 annually in missed orders and labor costs. Existing solutions like Retell AI cost $450/month vs our $60/month target.",
      solution:
        "Developed comprehensive SaaS platform with 5-minute setup, real-time menu management system, AI-powered conversation flow using GPT-4, Telnyx telephony integration (87% cost savings vs Twilio), ElevenLabs voice synthesis, and Convex real-time database. Features include dark theme dashboard, order tracking, analytics, and multi-restaurant support.",
      outcome:
        "Built full-stack MVP in 4 weeks with 87% cost reduction vs competitors. Created scalable architecture supporting 1000+ restaurants with projected $125K MRR by year-end. Delivered intuitive dark-theme dashboard, real-time order processing, and comprehensive menu management system. Successfully demonstrated modern SaaS development with AI integration and cost optimization.",
    },
    images: [
      "/images/fonitix_cover.jpg",
      "/placeholder.svg?height=600&width=800&text=Menu+Management+System",
      "/placeholder.svg?height=600&width=800&text=Order+Processing+Interface",
      "/placeholder.svg?height=600&width=800&text=AI+Voice+Configuration",
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
    role: "AI Full-Stack Web Developer & Designer",
    tags: ["AI-Assisted Development", "Lovable.dev", "Full-Stack", "E-Commerce", "Booking System"],
    content: {
      overview:
        "Tesla VIP Trip is a premium electric vehicle transfer service operating in Vienna and Bratislava. The project showcases innovative AI-assisted development using Lovable.dev for rapid prototyping, followed by conversion to a production-ready website with custom booking system.",
      challenge:
        "Extremely tight timeline of 5 days to create a complete website from concept to production. The challenge was to deliver a premium, luxury brand experience that reflects Tesla's eco-friendly values while providing seamless online booking functionality for 6 core services across multiple languages (EN, DE, RU, SK).",
      solution:
        "Implemented a revolutionary 5-day development process: Days 1-2 used Lovable.dev for AI-assisted design generation, Day 3 converted React prototype to deployment, Day 4 integrated client editing capabilities, and Day 5 built complete booking system with React and Resend email service. The approach reduced development time from 2 weeks to 5 days while maintaining professional quality.",
      outcome:
        "Successfully delivered a fully functional website with dark elegant theme, gold accent colors, 6 detailed service pages, online booking system with admin panel, responsive design, and multilingual support. The innovative AI-assisted approach demonstrates how modern developers can leverage AI tools to dramatically accelerate development while maintaining quality standards.",
    },
    images: [
      "/images/teslaviptrip_cover.jpg",
      "/placeholder.svg?height=600&width=800&text=Tesla+Services+Section",
      "/placeholder.svg?height=600&width=800&text=Booking+System",
      "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
    ],
  },
  {
    id: 9,
    slug: "linkshop-ai",
    title: "LinkShop AI",
    description:
      "AI-powered platform 'from Linktree to E-commerce' - integrated SAAS combining personal link pages with full online store and AI assistant for business automation",
    thumbnail: "/images/linkshop_cover.jpg",
    fullImage: "/images/linkshop_cover.jpg",
    year: "2025",
    client: "LinkShop",
    role: "Lead Product Designer, UX/UI Designer, Full-Stack Developer",
    tags: ["AI", "E-Commerce", "SaaS", "Linktree Alternative", "Ukrainian Market", "Creator Economy"],
    content: {
      overview:
        "LinkShop is an integrated SAAS platform that revolutionarily combines the creation of personal link pages (similar to Linktree) with a full-fledged online store and an AI assistant for business process automation. The platform targets content creators, influencers, and Ukrainian entrepreneurs who lost their physical stores due to war or economic difficulties but still have product inventories to quickly move online.",
      challenge:
        "Fragmentation of tools: content creators use Linktree for links, Shopify for the store, and various chatbots for support. High fees and complexity: Shopify + payment processing + separate AI tools = $100+ per month + complicated setup. Critical problem for Ukraine: thousands of entrepreneurs lost their physical points of sale due to war but kept product inventories, needing urgent migration online without technical knowledge or large investments.",
      solution:
        "Created an AI-first platform that transforms a simple link page into an AI-supported automated business tool allowing anyone to create a full online store in just 10 minutes. Features include: 'Clearance Mode' for fast bulk upload of discounted products, UAH payments with local banks and MonoBank API, Express setup with 5-minute onboarding, AI translator for automatic Ukrainian translation, and extended 6-month free trial for businesses affected by war.",
      outcome:
        "Delivered a fully functional MVP with real product data (Nike sneakers, pricing, inventory), AI Business Intelligence with Claude API integration for pricing analysis and automated insights, real-time architecture with Convex database, and professional Instagram-style UI. The platform successfully addresses the critical need for Ukrainian businesses to quickly move online while providing content creators with monetization tools.",
    },
    images: [
      "/images/linkshop_cover.jpg",
      "/images/linkshop1.jpg",
      "/images/linkshop2.jpg",
      "/images/linkshop3.jpg",
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
        "Mria CRM is a comprehensive customer relationship management solution built exclusively for Jira Cloud using Atlassian's Forge technology. It seamlessly integrates with Jira to simplify sales pipelines, enhance collaboration, and align teams by unifying customer and project management workflows.",
      challenge:
        "Sales teams needed a CRM that works natively within Jira Cloud, eliminating the need for external tools and data silos. The challenge was creating a solution that provides full CRM functionality while maintaining seamless integration with existing Jira workflows and ensuring top-tier security and scalability.",
      solution:
        "Built a complete CRM solution using Atlassian's Forge platform featuring contact & company management, lead & deal tracking, activity logging, Gmail & calendar integration, role-based access control, and comprehensive reporting. The system includes product modules, sales dashboards, and real-time collaboration tools all within the Jira environment.",
      outcome:
        "Delivered the first fully-featured CRM built exclusively for Jira Cloud, providing teams with native integration, enhanced security through Forge technology, and scalable architecture. The solution eliminates external tool dependencies while offering comprehensive sales management capabilities directly within Jira workflows.",
    },
    images: [
      "/images/mriacrm_cover.jpg",
      "/images/mriacrm1.jpg",
      "/images/mriacrm2.jpg",
      "/images/mriacrm3.jpg",
    ],
  },
  {
    id: 1,
    slug: "ai-ecommerce-chatbot",
    title: "E-Commerce AI Chatbot",
    description:
      "SaaS chatbot automating customer engagement and increasing conversions by 15%",
    thumbnail: "/images/dashboard-chatbot.jpg",
    fullImage: "/images/dashboard-chatbot.jpg",
    year: "2024-2025",
    client: "B2Stack",
    role: "UX/UI Designer, Product Designer",
    tags: ["AI", "E-Commerce", "SAAS", "Dashboard"],
    content: {
      overview:
        "Created a SAAS project with an AI e-commerce chatbot, featuring a comprehensive dashboard for metrics, usage tracking, and bot configuration.",
      challenge:
        "Businesses needed a solution to automate customer interactions and streamline the checkout process while maintaining a personalized shopping experience, with powerful analytics and configuration tools.",
      solution:
        "Designed an intuitive dashboard interface with real-time metrics, cash flow tracking, and bot configuration options. Implemented AI-driven checkout flows that could understand customer intent and guide them through the purchasing process.",
      outcome:
        "Increased conversions by 15%, improved customer retention, and significantly reduced support requests. The dashboard enabled businesses to track key metrics and optimize their chatbot performance in real-time.",
    },
    images: [
      "/images/dashboard-chatbot.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    role: "Frontend Developer (Flutter), UX/UI Designer",
    tags: [
      "3D Visualization",
      "Inventory Management",
      "Flutter",
      "Time Tracking",
    ],
    content: {
      overview:
        "Developed a SaaS-based warehouse inventory management app with real-time delivery tracking and task management capabilities for Fortune 500 clients.",
      challenge:
        "Large enterprises needed a more intuitive way to manage complex warehouse operations, track delivery times, and monitor task completion across multiple locations, with better visual representation of time-sensitive data.",
      solution:
        "Created an intuitive interface with a focus on time tracking and task management. Implemented a delivery duration tracker, task status monitoring, and critical alerts for time-sensitive operations. Built with Flutter for cross-platform compatibility.",
      outcome:
        "Enhanced warehouse efficiency with real-time task tracking, resulting in 30% faster delivery times and improved coordination between warehouse staff. The system's critical alerts helped prevent delays and optimize resource allocation.",
    },
    images: [
      "/images/laps_cover.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
        "Designed a comprehensive B2C/B2B delivery platform that connects businesses and consumers with real-time order tracking, multiple payment options, and an intuitive interface for both customers and delivery partners.",
      challenge:
        "The delivery market needed a solution that could serve both business clients and individual consumers while providing a seamless experience for delivery drivers. Existing platforms were either too consumer-focused or too business-oriented, creating inefficiencies.",
      solution:
        "Created a dual-interface platform with specialized flows for B2B and B2C users, while maintaining a consistent experience. Implemented real-time tracking, optimized route planning, and a flexible payment system that accommodated both business accounts and individual transactions.",
      outcome:
        "The platform successfully bridged the gap between business and consumer delivery needs, resulting in 40% faster delivery times, 35% increase in driver satisfaction, and a 28% growth in business client retention.",
    },
    images: [
      "/images/foodcore.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    role: "UX/UI Designer",
    tags: ["Invoicing", "Financial Management", "Business Tools", "Automation"],
    content: {
      overview:
        "Developed a comprehensive invoicing application that streamlines billing processes, automates payment tracking, and provides real-time financial insights for businesses.",
      challenge:
        "Businesses struggled with manual invoicing processes, leading to delayed payments, accounting errors, and inefficient financial management. They needed a modern solution to automate and simplify their billing workflows.",
      solution:
        "Created an intuitive invoicing platform with automated billing cycles, payment tracking, and financial reporting. Implemented real-time notifications for payment status and automated reminders for overdue invoices.",
      outcome:
        "Reduced invoice processing time by 60%, improved payment collection rates by 40%, and significantly decreased accounting errors. The automated system helped businesses maintain better cash flow and financial organization.",
    },
    images: [
      "/images/invoice_cover.jpg",

      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    role: "UX/UI Designer",
    tags: [
      "Dashboard",
      "Analytics",
      "Financial Management",
      "Data Visualization",
    ],
    content: {
      overview:
        "Led the redesign of Global Blue's legacy back-office system, focusing on improving the management of merchants and shops in their tax-free shopping services. The project aimed to modernize the interface while enhancing operational efficiency.",
      challenge:
        "The existing back-office system suffered from poor usability, complex workflows, and inefficient merchant management processes. Users struggled with searching, editing, and managing merchant and shop information, leading to reduced productivity and potential errors.",
      solution:
        "Developed a modern, intuitive dashboard interface that streamlined merchant and shop management workflows. Implemented advanced search capabilities, simplified editing processes, and improved data visualization for better decision-making. Created a responsive design that works efficiently across different devices.",
      outcome:
        "The redesigned system significantly improved user efficiency, reducing the time spent on merchant management tasks by 40%. The new interface led to a 60% reduction in user errors and a 45% improvement in task completion rates. User satisfaction scores increased by 70% compared to the legacy system.",
    },
    images: [
      "/images/gb_cover.jpg",
      "/images/chat10.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
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
    role: "UX/UI Designer",
    tags: ["Fashion", "Rental Platform", "Mobile App", "E-Commerce"],
    content: {
      overview:
        "Designed a modern fashion rental platform that connects fashion enthusiasts with high-end designer clothes, making luxury fashion more accessible and sustainable.",
      challenge:
        "The fashion rental market lacked a user-friendly platform that could handle the complexities of clothes rental, including size matching, delivery scheduling, and condition tracking.",
      solution:
        "Created an intuitive mobile app with features like virtual fitting rooms, automated size recommendations, real-time availability tracking, and seamless booking management for both renters and lenders.",
      outcome:
        "Platform achieved 40% month-over-month growth in active users, 85% booking completion rate, and significantly contributed to sustainable fashion by reducing individual clothing purchases.",
    },
    images: [
      "/images/frentify_cover.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 7,
    slug: "hotel-aggregator-booking-app",
    title: "Hotel Aggregator Booking App",
    description:
      "Modern hotel booking platform that aggregates multiple providers and offers seamless reservation experience.",
    thumbnail: "/images/hoteller_cover.jpg",
    fullImage: "/images/hoteller_cover.jpg",
    year: "2022",
    client: "Hoteller",
    role: "UX/UI Designer",
    tags: ["Travel", "Booking Platform", "Mobile App", "Aggregator"],
    content: {
      overview:
        "Designed a comprehensive hotel booking platform that aggregates multiple providers, offering users a seamless way to compare and book accommodations worldwide.",
      challenge:
        "Travelers needed a unified platform to compare hotel offerings across different providers, with transparent pricing and real-time availability, while dealing with complex booking processes and varied cancellation policies.",
      solution:
        "Created an intuitive mobile app that aggregates multiple booking providers, featuring smart search filters, price comparison tools, interactive maps, and a streamlined booking process with unified cancellation policies.",
      outcome:
        "The platform achieved a 65% increase in booking completions, 45% higher user retention rates, and became a preferred choice for travelers with its transparent pricing and unified booking experience.",
    },

    images: [
      "/images/hoteller_cover.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
];
