/**
 * Site Data Configuration for CodeWithSukh
 * Sukhchain Singh - Full-Stack Developer & Educator
 */

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  skills: string[];
}

export interface ContactInfo {
  name: string;
  email: string;
  location: string;
  availability: string;
  responseTime: string;
  whatsappUrl: string;
  whatsappNumber: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface SocialLinks {
  whatsapp: string;
  email: string;
  github: string;
  linkedin: string;
  youtube?: string;
  twitter?: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  brandName: string;
  role: string;
  bio: string;
  experienceYears: number;
  location: string;
}

export interface SiteData {
  developer: DeveloperProfile;
  techStack: readonly string[];
  projects: Project[];
  services: Service[];
  contact: ContactInfo;
  socials: SocialLinks;
}

// -----------------------------------------------------------------------------
// 1. Tech Stack
// -----------------------------------------------------------------------------
export const techStack: readonly string[] = [
  'Next.js',
  'React',
  'Python',
  'Django',
  'Tailwind CSS',
  'Supabase',
  'TypeScript',
  'PostgreSQL',
] as const;

// -----------------------------------------------------------------------------
// 2. Real Projects
// -----------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: 'codewithsukh-platform',
    title: 'CodeWithSukh Platform',
    tagline: 'Developer education & portfolio portal',
    description:
      'A full-featured developer education ecosystem and portfolio portal offering specialized technical courses, project showcases, interactive tech blogs, and developer mentorship roadmaps.',
    tech: ['Next.js', 'Tailwind', 'Vercel'],
    liveUrl: 'https://codewithsukh.vercel.app',
    githubUrl: 'https://github.com/sukhsingh1313/codewithsukh',
    category: 'EdTech / Web Platform',
    featured: true,
    highlights: [
      'Next.js App Router with server-side rendering for optimal SEO and rapid loading',
      'Modern, accessible UI styled with Tailwind CSS supporting dynamic dark and light mode',
      'Automated zero-downtime CI/CD deployment pipeline on Vercel',
      'Integrated course directory, student inquiries, and admin content management',
    ],
  },
  {
    id: 'divyasaathi',
    title: 'DivyaSaathi',
    tagline: 'Social networking & matrimonial application',
    description:
      'A trusted social networking and matrimonial platform designed to bring communities together through privacy-centric matchmaking, profile verifications, preference filtering, and real-time chat.',
    tech: ['Django REST', 'React Native', 'Expo'],
    liveUrl: 'https://github.com/sukhsingh1313/DivyaSaathi',
    githubUrl: 'https://github.com/sukhsingh1313/DivyaSaathi',
    category: 'Mobile / Social Networking',
    featured: true,
    highlights: [
      'Secure backend built with Django REST framework featuring JWT authentication and role-based permissions',
      'Cross-platform iOS and Android mobile frontend crafted using React Native and Expo',
      'Custom matchmaking search engine supporting granular lifestyle and location filters',
      'Encrypted direct messaging channel and media upload pipeline with cloud storage',
    ],
  },
  {
    id: 'mybooklab',
    title: 'MyBookLab',
    tagline: 'Digital library management web app',
    description:
      'A robust digital library and bookstore management system allowing readers to browse catalogs, preview publications, bookmark favorites, and manage reading lists with an intuitive administrative dashboard.',
    tech: ['Python', 'Django', 'Render'],
    liveUrl: 'https://mybooklab.onrender.com',
    githubUrl: 'https://github.com/sukhsingh1313/MyBookLab',
    category: 'Web Application / Library Management',
    featured: true,
    highlights: [
      'Python and Django MVC architecture with relational data modeling and search indexes',
      'Catalog management supporting book categories, ratings, reviews, and digital previews',
      'Admin control center for automated loan tracking, membership tier status, and inventory metrics',
      'Production deployment configured with PostgreSQL and container services on Render',
    ],
  },
  {
    id: 'studypowerhub',
    title: 'StudyPowerHub',
    tagline: 'AI-driven learning portal with PDF integration',
    description:
      'An intelligent study accelerator that transforms complex textbooks and lecture PDFs into interactive learning modules, contextual question-answering engines, flashcards, and synthesized revision summaries.',
    tech: ['Next.js', 'Tailwind', 'Gemini API'],
    liveUrl: 'https://studypowerhub.vercel.app',
    githubUrl: 'https://github.com/sukhsingh1313/StudyPowerHub',
    category: 'AI / EdTech',
    featured: true,
    highlights: [
      'Deep document parsing and semantic chunking for multi-page educational PDF files',
      'Integration with Google Gemini API for fast contextual reasoning and chapter summaries',
      'Automatic generation of high-yield quiz questions and interactive flashcards for active recall',
      'Responsive, distraction-free study layout with split-screen PDF reader built with Tailwind CSS',
    ],
  },
];

export const PROJECTS_DATA = projects;

// -----------------------------------------------------------------------------
// 3. Services
// -----------------------------------------------------------------------------
export const services: Service[] = [
  {
    id: 'full-stack-web-development',
    title: 'Full-Stack Web Development',
    tagline: 'High-performance, scalable web applications built from concept to launch.',
    description:
      'Architecting and developing modern, responsive web applications with clean code, scalable database architectures, and secure RESTful/GraphQL APIs. Focused on optimal performance, Core Web Vitals, and seamless user experiences.',
    deliverables: [
      'Custom SaaS & Web Portal Development (Next.js, React)',
      'Backend Architecture & Robust REST APIs (Python, Django, Node.js)',
      'Database Modeling & Query Optimization (PostgreSQL, Supabase)',
      'Third-party API & Payment Gateway Integrations',
      'Cloud Deployment, Domain Configuration & CI/CD Pipelines',
    ],
    skills: ['Next.js', 'React', 'Python', 'Django', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    tagline: 'Cross-platform iOS and Android mobile experiences that engage users.',
    description:
      'Designing and engineering cross-platform mobile apps using React Native and Expo. Delivering native-like fluidity, reliable offline functionality, push notifications, and unified codebases for faster time-to-market.',
    deliverables: [
      'Cross-Platform iOS & Android Application Development',
      'Expo Application Services (EAS) Build & Release Workflows',
      'State Management, Offline Data Caching & Local Storage',
      'Push Notifications, Geolocation & Camera/Media Integrations',
      'App Store & Google Play Store Submission Guidance',
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'Mobile UI/UX', 'REST API Integration'],
  },
  {
    id: 'technical-mentorship',
    title: 'Technical Mentorship',
    tagline: 'Practical, project-based engineering guidance for aspiring developers.',
    description:
      'One-on-one and cohort-based mentorship helping developers master full-stack software development, Data Structures & Algorithms, real-world project development, clean architecture, and technical interview preparation.',
    deliverables: [
      '1-on-1 Code Reviews and Architectural Critiques',
      'DSA & Problem Solving Mastery in Python and C/C++',
      'Full-Stack Project Building from Scratch to Production',
      'Resume Review, Portfolio Polish & Mock Technical Interviews',
      'Structured Learning Roadmaps tailored to career goals',
    ],
    skills: ['Mentorship', 'DSA', 'Code Review', 'System Design', 'Career Coaching', 'Python', 'JavaScript'],
  },
];

// -----------------------------------------------------------------------------
// 4. Social & Contact Information
// -----------------------------------------------------------------------------
export const contactInfo: ContactInfo = {
  name: 'Sukhchain Singh',
  email: 'codersukh@gmail.com',
  location: 'Rajasthan, India (Available for Global Remote Work)',
  availability: 'Open for Freelance Projects, Remote Roles & Mentorship',
  responseTime: 'Within 24 hours',
  whatsappUrl: 'https://wa.me/919782083293?text=Hi%20Sukhchain%2C%20I%20came%20across%20CodeWithSukh%20and%20would%20like%20to%20connect!',
  whatsappNumber: '+91 97820 83293',
  githubUrl: 'https://github.com/sukhsingh1313',
  linkedinUrl: 'https://www.linkedin.com/in/sukhsingh1313',
};

export const socialLinks: SocialLinks = {
  whatsapp: contactInfo.whatsappUrl,
  email: `mailto:${contactInfo.email}`,
  github: contactInfo.githubUrl,
  linkedin: contactInfo.linkedinUrl,
  youtube: 'https://youtube.com/@codewithsukh',
  // twitter: 'https://twitter.com/codewithsukh',
};

// -----------------------------------------------------------------------------
// 5. Developer Profile & Combined Site Data
// -----------------------------------------------------------------------------
export const developerProfile: DeveloperProfile = {
  name: 'Sukhchain Singh',
  brandName: 'CodeWithSukh',
  title: 'Full-Stack Developer & Educator',
  role: 'Software Engineer, Educator & Open-Source Contributor',
  bio: 'Full-Stack Software Engineer and Tech Educator specializing in scalable web ecosystems, cross-platform mobile apps, and developer education. Passionate about Python, modern JavaScript/TypeScript, system architecture, and mentoring the next generation of engineers.',
  experienceYears: 4,
  location: 'India (Remote)',
};

export const siteData: SiteData = {
  developer: developerProfile,
  techStack,
  projects,
  services,
  contact: contactInfo,
  socials: socialLinks,
};

export default siteData;

