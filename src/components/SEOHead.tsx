import { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_KEYWORDS = [
  'Bangladesh Bank IT job preparation',
  'Combined Bank Officer IT question',
  'Bank Non-IT exam questions',
  'Senior Officer General bank job',
  'Computer Operator bank exam',
  'BPSC Non-Cadre IT question',
  'Bank written question solution Bangladesh',
  'Bank Assistant Programmer solved question',
  'Senior Officer IT question bank',
  'Officer Cash question paper Bangladesh',
  'Data Entry Operator bank exam',
  'Bangladesh Bank MCQ written solutions 2010 2026'
].join(', ');

const BASE_URL = 'https://debbairagi.com.bd/jobprep';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  keywords = DEFAULT_KEYWORDS,
  ogType = 'website',
  jsonLd
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Compute canonical URL
    const canonicalUrl = canonicalPath
      ? `${BASE_URL}/${canonicalPath.replace(/^\//, '')}`
      : `${BASE_URL}/`;

    // Helper to safely set meta tag content
    const setMeta = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set link tags
    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setLink('canonical', canonicalUrl);

    // OpenGraph Meta
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', 'Govt IT & BankPrep Portal');
    setMeta('property', 'og:image', `${BASE_URL}/og-image.svg`);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:locale', 'en_US');
    setMeta('property', 'og:locale:alternate', 'bn_BD');

    // Twitter Card Meta
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', `${BASE_URL}/og-image.svg`);

    // Dynamic JSON-LD Structured Data
    let scriptTag = document.getElementById('seo-dynamic-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-dynamic-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchemas: Array<Record<string, unknown>> = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Govt IT & BankPrep Portal',
        alternateName: 'GovtICT & BankPrep National Portal',
        url: BASE_URL,
        description: 'Complete solved question bank for Bangladesh Bank, Combined Banks & Ministry exams (2010–2026).',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${BASE_URL}/?page=questions&search={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Govt IT & BankPrep Portal',
        url: BASE_URL,
        logo: `${BASE_URL}/favicon.svg`,
        description: 'Educational exam preparation platform for Bangladesh Bank, Combined Govt Banks, and Ministry IT and Non-IT recruitment exams.'
      }
    ];

    const schemasToInject = jsonLd
      ? Array.isArray(jsonLd)
        ? [...defaultSchemas, ...jsonLd]
        : [...defaultSchemas, jsonLd]
      : defaultSchemas;

    scriptTag.textContent = JSON.stringify(schemasToInject);
  }, [title, description, canonicalPath, keywords, ogType, jsonLd]);

  return null;
};
