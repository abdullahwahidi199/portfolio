
import myPhoto from '../assets/my photo.jpeg'
import atsCvUrl from '../assets/Abdullah_Wahidi_ATS_Resume.pdf?url'
import standardCvUrl from '../assets/CV.pdf?url'

export const profile = {
  name: "Abdullah Wahidi",
  title: "Full-Stack Developer · Software Engineering Student · AI/ML Enthusiast",
  location: "Kabul, Afghanistan",
  email: "abdullahwahidi875@gmail.com",
  github: "https://github.com/abdullahwahidi199",
  linkedin: "https://www.linkedin.com/in/abdullah-wahidi-8b9b52321/",
  x: "",
  resumeUrl: atsCvUrl,
  avatar: myPhoto,
  avatarInitials: "AW",
}

export const cvDownload = {
  heading: "Download my CV",
  description: "Choose the version that works best for you.",
  options: [
    {
      label: "ATS CV",
      description: "Optimized for applicant tracking systems.",
      href: atsCvUrl,
      filename: "Abdullah_Wahidi_ATS_Resume.pdf",
    },
    {
      label: "Standard CV",
      description: "My original CV layout.",
      href: standardCvUrl,
      filename: "Abdullah_Wahidi_CV.pdf",
    },
  ],
}

export const hero = {
  eyebrow: "FULL-STACK DEVELOPER",

  h1: "I build software that helps businesses run.",

  subtext:
    "I'm Abdullah Wahidi, a full-stack developer in Kabul. I build restaurant, property, and healthcare systems with Django, React, and PostgreSQL.",

  primaryCta: {
    label: "Explore My Projects",
    href: "#projects",
  },

  secondaryCta: {
    label: "Let's Connect",
    href: "#contact",
  },

  tertiaryCta: {
    label: "Download My CV",
  },
}

export const about = {
  label: "ABOUT ME",

  heading: "Building software with purpose.",

  paragraphs: [
    "I\u0027m a Software Engineering student at Kabul University and a full-stack developer based in Kabul. My work spans restaurant operations, property management, and healthcare software.",
    "I work across interfaces, APIs, databases, and deployment. Alongside client projects, I\u0027m exploring large language models and developing an AI Requirements Engineering Assistant.",
  ],

  quickFacts: [
    "Based in Kabul, Afghanistan",
    "Software Engineering \u00b7 Kabul University",
    "Exploring AI and large language models",
  ],
}

export const skills = {
  label: "TECHNICAL SKILLS",

  heading: "Technologies I work with.",

  groups: [
    {
      name: "Programming Languages",
      items: [
        "Python",
        "JavaScript",
        "SQL",
        "Dart",
      ],
    },

    {
      name: "Frontend Development",
      items: [
        "React",
        "Vite",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "i18next",
      ],
    },

    {
      name: "Backend Development",
      items: [
        "Django",
        "Django REST Framework",
        "REST APIs",
        "JWT Authentication",
        "Python",
      ],
    },

    {
      name: "Databases & Real-Time Systems",
      items: [
        "PostgreSQL",
        "SQLite",
        "Redis",
        "Django Channels",
        "WebSockets",
      ],
    },

    {
      name: "Mobile Development",
      items: [
        "Flutter",
        "Dart",
      ],
    },

    {
      name: "AI / Machine Learning",
      items: [
        "Large Language Models",
        "Ollama",
        "Qwen",
        "Prompt Engineering",
        "AI Integration",
        "Model Fine-Tuning",
      ],
    },

    {
      name: "Tools & Deployment",
      items: [
        "Git",
        "GitHub",
        "Linux",
        "Nginx",
        "Gunicorn",
        "Daphne",
        "Docker",
        "VPS Deployment",
      ],
      spanTwoColumns: true,
    },
  ],
}


export const projects = {
  label: "PROJECTS",

  heading: "Things I've built.",

  intro:
    "A collection of software products and real-world systems I've designed and developed to solve practical problems for businesses.",

  items: [
    {
      featured: true,

      slug: "pakhlai",

      title: "Pakhlai",

      subtitle: "Restaurant Management & SaaS Platform",

      description:
        "A comprehensive restaurant management platform designed to help restaurants manage their daily operations. It includes sales and order management, inventory, purchasing, suppliers, kitchen operations, staff management, financial tracking, branch management, and real-time operational updates. Built with a modern full-stack architecture and designed to support multiple restaurant businesses.",

      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "React",
        "PostgreSQL",
        "Redis",
        "Django Channels",
        "WebSockets",
        "Flutter",
      ],

      links: [
        {
          label: "Live Demo",
          href: "https://app.pakhlai.com",
          external: true,
          primary: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/abdullahwahidi199/Restaurant-system",
          external: true,
        },
      ],
    },

    {
      slug: "construction-management",

      title: "Construction Management System",

      subtitle: "Custom Software for Lalander Group",

      description:
        "A construction and real estate management system developed for Lalander Group to streamline apartment sales and business operations. The platform manages apartment information, customer records, sales, payment tracking, and recurring apartment service charges. It provides centralized financial visibility, supports individual and bulk payment management, and helps administrators oversee apartment-related operations.",

      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
      ],

      links: [],
    },

    {
      slug: "clinic-management",

      title: "Clinic Management System",

      subtitle: "Custom Healthcare Software · Kabul, Afghanistan",

      description:
        "A clinic management system developed for a local clinic based in Kabul, Afghanistan. The platform is designed to streamline daily healthcare operations, including patient registration, appointments, billing, partial payments, laboratory operations, pharmacy workflows, and staff responsibilities. It features role-based access control and dedicated interfaces for different clinic departments.",

      tags: [
        "Python",
        "Django REST Framework",
        "React",
        "PostgreSQL",
        "JWT Authentication",
        "Role-Based Access Control",
      ],

      links: [],
    },
  ],
}


export const pakhlaiCaseStudy = {
  "summaryLabel": "View case study",
  "dialogTitle": "Pakhlai case study",
  "eyebrow": "THE PAKHLAI STORY",
  "category": "PRODUCT ENGINEERING",
  "title": "A semester project.",
  "titleAccent": "A real-world product.",
  "intro": "I started Pakhlai with a classroom brief and a bigger ambition: software restaurants could actually use. It became my first project used in the market.",
  "facts": [
    {
      "label": "My role",
      "value": "Full-stack developer"
    },
    {
      "label": "Time to MVP",
      "value": "Around 8 months"
    },
    {
      "label": "Product",
      "value": "Restaurant SaaS"
    }
  ],
  "problem": {
    "heading": "Built around a working restaurant.",
    "body": "Orders, kitchen operations, stock, purchasing, and finances are parts of the same business. The goal was to bring them into one platform built for everyday restaurant work."
  },
  "contribution": {
    "heading": "What I worked on",
    "items": [
      "React interfaces and Flutter mobile work.",
      "Django APIs and PostgreSQL business data.",
      "Connected workflows and real-time updates."
    ]
  },
  "challenge": {
    "heading": "Beyond the semester brief",
    "body": "Moving beyond coursework meant bringing the interface, APIs, business data, and live updates together into an MVP for real restaurant operations."
  },
  "architecture": {
    "heading": "Under the hood",
    "label": "SYSTEM OVERVIEW",
    "layers": [
      {
        "label": "Interfaces",
        "technology": "React + Flutter"
      },
      {
        "label": "Application",
        "technology": "Django + DRF"
      },
      {
        "label": "Database",
        "technology": "PostgreSQL"
      }
    ],
    "realtimeTitle": "Live operational updates",
    "realtimeTechnology": "Channels · Redis · WebSockets"
  },
  "engineering": {
    "heading": "Engineering choices",
    "decisions": [
      {
        "title": "Connect the workflows",
        "body": "Bring orders, inventory, purchasing, and finances into the same product."
      },
      {
        "title": "Keep responsibilities clear",
        "body": "Keep business rules behind Django REST APIs shared by the interfaces."
      },
      {
        "title": "Support live operations",
        "body": "Deliver live operational updates alongside the platform's REST APIs."
      }
    ]
  },
  "result": {
    "label": "THE OUTCOME",
    "heading": "My first product used in the market.",
    "body": "A restaurant management MVP connecting orders, stock, purchasing, staff, finances, and branches.",
    "closeLabel": "Close case study"
  }
}

export const experience = {
  label: "BACKGROUND",

  heading: "My academic & development journey.",

  entries: [
    {
      role: "Software Engineering Student",

      company: "Kabul University",

      dates: "Present",

      location: "Kabul, Afghanistan",

      bullets: [
        "Studying software engineering, programming, algorithms, software development methodologies, and system design.",
        "Exploring Artificial Intelligence and Machine Learning through academic research and practical projects.",
        "Developing an AI Requirements Engineering Assistant as an academic project.",
      ],
    },

    {
      role: "Full-Stack Developer",

      company: "Independent & Client Projects",

      dates: "Ongoing",

      location: "Kabul, Afghanistan",

      bullets: [
        "Designing and developing full-stack web applications using Django, Django REST Framework, React, and PostgreSQL.",
        "Building practical business management systems for restaurant, construction, and healthcare operations.",
        "Developing REST APIs and integrating frontend and backend systems.",
        "Deploying and maintaining production applications on Linux VPS environments using Nginx and application servers.",
        "Working with real-time communication technologies, including Redis, Django Channels, and WebSockets.",
        "Exploring AI-powered applications and open-source large language models.",
      ],
    },
  ],
}

export const contact = {
  label: "CONTACT",

  heading: "Have an idea? Let's build it.",

  body:
    "I'm always interested in building meaningful software, exploring new technologies, and collaborating on challenging projects. Whether you have a project idea, a collaboration opportunity, or simply want to connect, feel free to reach out.",

  primaryCta: {
    label: "Email Me",
    href: "mailto:abdullahwahidi875@gmail.com",
  },

  links: [
    {
      label: "GitHub",
      href: "https://github.com/abdullahwahidi199",
      external: true,
    },

    {
      label: "LinkedIn",
      href: profile.linkedin,
      external: true,
    },

    {
      label: "WhatsApp",
      href: "https://wa.me/93780029197",
      external: true,
    },
  ],
}

export const footer = {
  copyrightTemplate: "© {year} Abdullah Wahidi. Built with React and Tailwind.",

  backToTop: "Back to top ↑",
}

export const nav = {
  links: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Background", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  resumeCta: {
    label: "Download CV",
  },
}

export const ui = {
  skipToContent: "Skip to content",

  toggleTheme: "Toggle theme",

  openMenu: "Open menu",

  closeMenu: "Close menu",

  navigation: "Main navigation",

  featured: "FEATURED",

  projectImageAlt: "Project preview",

  opensNewTab: "opens in new tab",

  email: "Email",

  scrollToProjects: "Scroll to Projects",
}
