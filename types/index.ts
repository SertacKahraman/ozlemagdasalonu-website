export type SEOFields = {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  keywords: string[];
  noIndex: boolean;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  priceText: string;
  duration: string;
  isFeatured: boolean;
  seo: SEOFields;
  faqs: FAQ[];
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  sections?: BlogSection[];
  faqs?: FAQ[];
  internalLinks?: BlogInternalLink[];
  cta?: BlogCTA;
  image: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  seo: SEOFields;
  category: string;
  tags: string[];
};

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  subsections?: BlogSubsection[];
};

export type BlogSubsection = {
  title: string;
  paragraphs: string[];
};

export type BlogInternalLink = {
  label: string;
  href: string;
  description: string;
};

export type BlogCTA = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type BusinessInfo = {
  name: string;
  slogan: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  district: string;
  country: string;
  instagram: string;
  workingHours: string;
  mapEmbedUrl: string;
  logoUrl: string;
  baseUrl: string;
  defaultOgImage: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};
