export interface ProfileData {
  name: string;
  tagline: string;
  image: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface InterestItem {
  name: string;
  description: string;
  icon?: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface ToolItem {
  name: string;
  icon: string;
}

export interface LanguageItem {
  code: string;
  name: string;
  proficiency: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  paper?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  links: ProjectLinks;
}

export interface ContactData {
  email: string;
  location: string;
  availability: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    googleScholar: string;
  };
}

export interface PortfolioData {
  profile: ProfileData;
  education: EducationItem[];
  interests: InterestItem[];
  skills: SkillItem[];
  tools: ToolItem[];
  languages: LanguageItem[];
  projects: ProjectItem[];
  contact: ContactData;
}
