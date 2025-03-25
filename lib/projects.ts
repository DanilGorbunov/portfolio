export interface Project {
  id: number
  slug: string
  title: string
  description: string
  thumbnail: string
  fullImage: string
  year: string
  client: string
  role: string
  tags: string[]
  content: {
    overview: string
    challenge: string
    solution: string
    outcome: string
  }
  images: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ai-ecommerce-chatbot",
    title: "AI E-Commerce Chatbot",
    description: "SAAS project with an AI e-commerce chatbot automating business processes and engagement.",
    thumbnail: "/images/dashboard-chatbot.jpg",
    fullImage: "/images/dashboard-chatbot.jpg",
    year: "2022-Present",
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
    description: "SaaS-based warehouse inventory management app with 3D data visualization for Fortune 500 clients.",
    thumbnail: "/images/laps_cover.jpg",
    fullImage: "/images/laps_cover.jpg",
    year: "2022",
    client: "Twinzo 3D",
    role: "Frontend Developer (Flutter), UX/UI Designer",
    tags: ["3D Visualization", "Inventory Management", "Flutter", "Time Tracking"],
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
      "Comprehensive food and goods delivery platform connecting businesses and consumers with real-time tracking.",
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
      "Modern invoicing application with real-time financial tracking and automated billing workflows.",
    thumbnail: "/images/invoice_cover.jpg",
    fullImage: "/images/invoice_cover.jpg",
    year: "2013-2022",
    client: "Decodexin (Krasiva)",
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
    description: "Comprehensive back office dashboard for financial analytics and merchant management with real-time data visualization.",
    thumbnail: "/images/gb_cover.jpg",
    fullImage: "/images/gb_cover.jpg",
    year: "2010-2013",
    client: "Global Blue",
    role: "UX/UI Designer",
    tags: ["Dashboard", "Analytics", "Financial Management", "Data Visualization"],
    content: {
      overview:
        "Designed and developed a powerful back office dashboard that provides comprehensive financial analytics, merchant management, and real-time data visualization for business operations.",
      challenge:
        "Organizations needed a centralized solution to manage merchants, track financial metrics, and analyze business performance across multiple dimensions. Existing tools were fragmented and lacked real-time insights.",
      solution:
        "Created an intuitive dashboard interface with advanced analytics capabilities, merchant profiles, transaction monitoring, and detailed financial reporting. Implemented interactive charts and data visualization tools for better decision-making.",
      outcome:
        "The dashboard significantly improved operational efficiency, reducing data analysis time by 50% and enabling real-time monitoring of key business metrics. Merchant management became streamlined with improved visibility into performance metrics.",
    },
    images: [
      "/images/gb_cover.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 6,
    slug: "renting-clothes-app",
    title: "Renting Clothes App",
    description: "Fashion rental platform enabling users to rent and lend designer clothes with seamless booking and delivery.",
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
    description: "Modern hotel booking platform that aggregates multiple providers and offers seamless reservation experience.",
    thumbnail: "/images/hoteller_cover.jpg",
    fullImage: "/images/hoteller_cover.jpg",
    year: "2020",
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
]

