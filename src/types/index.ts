export type NavTab = 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  logo?: string;
  highlights: string[];
  tags: string[];
  reportUrl?: string;
  reportLabel?: string;
}

export interface ProjectCaseStudy {
  about: string[];
  background: string[];
  objectives: string[];
  methodology: string[];
  challenge: string[];
  images?: string[];
  reportUrl?: string;
  reportLabel?: string;
}

export type ProjectCategory = 'IoT & Embedded' | 'Computer Vision & AI' | 'Web Platform';

export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  logo?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface SkillGroup {
  category: string;
  code: string;
  description: string;
  items: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    shortName: string;
    role: string;
    degree: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    status: string;
    avatarLogo: string;
    bioParagraphs: string[];
    metrics: { label: string; value: string; detail: string }[];
    resumes: { label: string; sublabel: string; url: string }[];
    socials: SocialLink[];
  };
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
}
