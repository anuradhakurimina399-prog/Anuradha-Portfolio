export interface SocialLink {
  name: string;
  url: string;
  label: string;
  iconName: 'linkedin' | 'mail' | 'phone' | 'map-pin' | 'github';
}

export interface MetricHighlight {
  label: string;
  value: string;
  description: string;
  subtext: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend-db' | 'core-cs' | 'tools';
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  tagline: string;
  shortDescription: string;
  techStack: string[];
  problemStatement: string;
  keyContributions: string[];
  outcomes: string[];
  architecturalHighlights: {
    title: string;
    description: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  keyOutcome: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  period: string;
  scoreLabel: string;
  score: string;
  coursework?: string[];
  isCurrent?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  scoreOrAward: string;
  year: string;
  description: string;
  badgeType: 'silver-elite' | 'certification';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialDate?: string;
  verificationNote: string;
}

export interface PortfolioData {
  profile: {
    fullName: string;
    preferredName: string;
    initials: string;
    title: string;
    academicStanding: string;
    institution: string;
    location: string;
    email: string;
    phone: string;
    linkedIn: string;
    summary: string;
    careerObjective: string;
  };
  metrics: MetricHighlight[];
  skills: {
    categories: {
      id: SkillItem['category'];
      label: string;
      description: string;
    }[];
    items: SkillItem[];
  };
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
}

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Kurimina Anuradha",
    preferredName: "Anuradha",
    initials: "KA",
    title: "Computer Science & Engineering Undergraduate · Full-Stack Developer",
    academicStanding: "B.Tech in CSE (2023 – 2027)",
    institution: "GMR Institute of Technology, Rajam",
    location: "Ranasthalam, Andhra Pradesh, India",
    email: "anuradhakurimina399@gmail.com",
    phone: "+91 7013205673",
    linkedIn: "https://www.linkedin.com/in/kurimina-anuradha",
    summary:
      "Passionate Computer Science undergraduate with hands-on experience in full-stack web development, Java, and SQL. Dedicated to engineering responsive, scalable web applications through clean code, modern frameworks, and robust database management. Seeking to leverage strong technical and problem-solving skills to contribute effectively to impactful software projects in collaborative development environments.",
    careerObjective:
      "Aiming to apply strong computational fundamentals, full-stack software development proficiencies, and database engineering to build reliable, high-performance web applications in engineering-focused teams."
  },

  metrics: [
    {
      label: "B.Tech Academic Standing",
      value: "8.8 / 10",
      description: "Cumulative Grade Point Average (CGPA)",
      subtext: "GMR Institute of Technology · Rajam (2023–2027)"
    },
    {
      label: "NPTEL IIT Kharagpur",
      value: "77%",
      description: "Silver Elite Badge Recipient",
      subtext: "The Joy of Computing using Python"
    },
    {
      label: "Intermediate Board Score",
      value: "9.67 / 10",
      description: "AP Model Junior College, Ranasthalam",
      subtext: "Science / MPC Stream (2021–2023)"
    },
    {
      label: "Industry Training",
      value: "June 2025",
      description: "Full Stack Web Development Intern",
      subtext: "DataPro · Visakhapatnam, AP"
    }
  ],

  skills: {
    categories: [
      {
        id: 'languages',
        label: 'Programming Languages',
        description: 'Core algorithmic languages and query engines'
      },
      {
        id: 'backend-db',
        label: 'Backend & Databases',
        description: 'MVT frameworks, relational SQL, and document databases'
      },
      {
        id: 'frontend',
        label: 'Frontend Technologies',
        description: 'Semantic markup, styling systems, and responsive UI'
      },
      {
        id: 'core-cs',
        label: 'Computer Science Foundations',
        description: 'Architectural principles and system fundamentals'
      },
      {
        id: 'tools',
        label: 'Developer Tools',
        description: 'IDE environments and computational notebooks'
      }
    ],
    items: [
      { name: "Java", category: "languages", highlight: true },
      { name: "Python", category: "languages", highlight: true },
      { name: "SQL", category: "languages", highlight: true },
      { name: "Django", category: "backend-db", highlight: true },
      { name: "MongoDB", category: "backend-db", highlight: true },
      { name: "Database Management Systems (DBMS)", category: "backend-db", highlight: true },
      { name: "MVT Architecture", category: "backend-db" },
      { name: "HTML5", category: "frontend", highlight: true },
      { name: "CSS3", category: "frontend", highlight: true },
      { name: "JavaScript", category: "frontend", highlight: true },
      { name: "Bootstrap", category: "frontend" },
      { name: "Responsive Web Design", category: "frontend" },
      { name: "Object-Oriented Programming (OOP)", category: "core-cs", highlight: true },
      { name: "Data Structures & Algorithms", category: "core-cs", highlight: true },
      { name: "Web Development", category: "core-cs" },
      { name: "Visual Studio Code", category: "tools" },
      { name: "Jupyter Notebook", category: "tools" }
    ]
  },

  projects: [
    {
      id: "temple-info-system",
      title: "Online Temple Information System",
      year: "2025",
      category: "Full-Stack Web Application",
      tagline: "Comprehensive cultural heritage data portal with search & MongoDB flexible indexing",
      shortDescription:
        "Developed an online temple information system providing temple details, history, timings, location information, festivals, and search functionality for users.",
      techStack: ["Django", "Python", "MongoDB", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      problemStatement:
        "Devotees and cultural travelers often encounter fragmented, outdated information regarding temple histories, daily darshan timings, annual festival calendars, and exact geographical locations.",
      keyContributions: [
        "Architected end-to-end data schemas utilizing MongoDB's flexible document structure to accommodate varied temple rituals, festive dates, and historical archives.",
        "Built dynamic search and filtering interfaces with JavaScript, allowing users to query shrines by deity, location, and upcoming events.",
        "Created responsive, cross-device templates using Bootstrap and CSS3, ensuring seamless usability on mobile devices and desktops alike.",
        "Implemented Django backend views and routing logic for clean separation of concerns following MVT patterns."
      ],
      outcomes: [
        "Implemented MongoDB for efficient data storage and flexible document retrieval.",
        "Engineered an intuitive, responsive user interface ensuring temple heritage information is universally accessible.",
        "Optimized client-side rendering for quick page loads across mobile networks."
      ],
      architecturalHighlights: [
        {
          title: "Document-Based Heritage Data Model",
          description: "Leveraged MongoDB collections to store nested festival schedules, priest contact points, and historical chronologies without rigid tabular constraints."
        },
        {
          title: "Django MVT Pattern",
          description: "Separated data logic into Django models, user requests through clean views, and dynamic rendering via semantic templates."
        },
        {
          title: "Interactive Search & Discovery",
          description: "Enabled rapid client-side filtering by region, deity classification, and festival schedules."
        }
      ],
      isFeatured: true
    },
    {
      id: "ecommerce-web-app",
      title: "Full-Stack E-Commerce Web Application",
      year: "2025",
      category: "E-Commerce System",
      tagline: "Production-structured retail platform built with Django MVT architecture and responsive layouts",
      shortDescription:
        "Engineered a full-stack e-commerce web application utilizing the Django framework adhering to MVT architecture, featuring responsive cross-device shopping templates.",
      techStack: ["Django", "Python", "HTML5", "CSS3", "Bootstrap", "Relational Database", "JavaScript"],
      problemStatement:
        "Creating a scalable shopping experience requires rigorous database integrity for product catalogs, cart persistence across sessions, and dynamic responsive catalog viewing.",
      keyContributions: [
        "Engineered robust Django backend business logic, database queries, and URL dispatcher routing following agile development workflows.",
        "Designed clean, responsive web templates utilizing HTML5, CSS3, and Bootstrap for optimized cross-device user experience.",
        "Built session-aware shopping cart operations, catalog category filtering, and product detail viewing flows.",
        "Applied database indexing and query optimization for catalog search and item filtering."
      ],
      outcomes: [
        "Delivered full-stack web application adhering strictly to Django's Model-View-Template architecture.",
        "Optimized cross-device browsing experience across smartphone, tablet, and desktop viewports.",
        "Successfully evaluated during the DataPro Full-Stack Web Development internship program."
      ],
      architecturalHighlights: [
        {
          title: "Model-View-Template Clean Architecture",
          description: "Structured codebase into modular Django apps for products, cart sessions, and user navigation."
        },
        {
          title: "Responsive Bootstrap UI System",
          description: "Engineered flexible grid templates with mobile-first breakpoints and accessibility considerations."
        },
        {
          title: "Agile Software Workflow",
          description: "Iterated through sprint tasks with regular code reviews, database query audits, and testing."
        }
      ],
      isFeatured: true
    }
  ],

  experience: [
    {
      id: "datapro-internship",
      role: "Web Development Intern (Full Stack Intern)",
      company: "DataPro",
      location: "Visakhapatnam, AP",
      period: "June 2025",
      type: "Industry Internship",
      responsibilities: [
        "Engineered a full-stack e-commerce web application utilizing the Django framework adhering to MVT architecture.",
        "Built dynamic, responsive web templates using HTML5, CSS3, and Bootstrap for optimized cross-device user experience.",
        "Implemented robust backend business logic and database queries while following agile software development workflows."
      ],
      technologies: ["Django", "Python", "HTML5", "CSS3", "Bootstrap", "SQL / Relational DB", "Agile"],
      keyOutcome:
        "Successfully engineered and deployed the e-commerce application prototype, demonstrating proficiency in Python backend engineering and modern frontend styling."
    }
  ],

  education: [
    {
      id: "gmrit-btech",
      degree: "B.Tech in Computer Science and Engineering",
      field: "Computer Science and Engineering",
      institution: "GMR Institute of Technology",
      location: "Rajam, Andhra Pradesh",
      period: "2023 – 2027",
      scoreLabel: "CGPA",
      score: "8.8 / 10",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Web Development"
      ],
      isCurrent: true
    },
    {
      id: "ap-model-intermediate",
      degree: "Intermediate (Science)",
      field: "Mathematics, Physics, Chemistry (MPC)",
      institution: "AP Model Junior College",
      location: "Ranasthalam, Andhra Pradesh",
      period: "2021 – 2023",
      scoreLabel: "CGPA",
      score: "9.67 / 10"
    },
    {
      id: "ap-model-ssc",
      degree: "Secondary School Certificate (10th Standard)",
      field: "General Secondary Education",
      institution: "AP Model School",
      location: "Ranasthalam, Andhra Pradesh",
      period: "2021",
      scoreLabel: "Board Score",
      score: "584 / 600 (97.3%)"
    }
  ],

  achievements: [
    {
      id: "nptel-silver-elite",
      title: "Silver Elite Badge — The Joy of Computing using Python",
      issuer: "IIT Kharagpur (NPTEL)",
      scoreOrAward: "Consolidated Score: 77%",
      year: "2024",
      description:
        "Attained prestigious Silver Elite Badge awarded by IIT Kharagpur through the Ministry of Education's NPTEL platform for demonstrating exceptional programming proficiency, algorithmic problem solving, and computational thinking in Python.",
      badgeType: "silver-elite"
    }
  ],

  certifications: [
    {
      id: "cert-nptel-python",
      title: "The Joy of Computing using Python",
      issuer: "NPTEL · IIT Kharagpur",
      credentialDate: "Verified",
      verificationNote: "Elite + Silver Certification with 77% consolidated examination and assignment score."
    },
    {
      id: "cert-datapro-fullstack",
      title: "Web Development Internship Certification",
      issuer: "DataPro · Visakhapatnam",
      credentialDate: "June 2025",
      verificationNote: "Awarded for full-stack web application development in Python and Django."
    }
  ]
};
