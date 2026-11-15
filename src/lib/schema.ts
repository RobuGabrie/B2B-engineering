// Schema.org JSON-LD for the home page: the company as a ProfessionalService (a LocalBusiness),
// plus one Service per vertical. All company details come from src/config/site.ts.
import { site } from '../config/site';
import { homePath, pages, useTranslations, type Lang, type ServiceId } from '../i18n/utils';

export function homeJsonLd(lang: Lang, base: URL) {
  const t = useTranslations(lang);
  const url = new URL(homePath(lang), base).href;
  const orgId = new URL('/#organization', base).href;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: site.name,
        legalName: site.legalName,
        url: new URL('/', base).href,
        logo: new URL('/logo.png', base).href,
        image: new URL(`/og-${lang}.png`, base).href,
        description: t.meta.description,
        telephone: site.phoneIntl,
        email: site.email,
        taxID: site.cui,
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        areaServed: { '@type': 'Country', name: 'Romania' },
        award: t.hero.badge,
        knowsLanguage: ['ro', 'en'],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang,
        about: { '@id': orgId },
      },
      ...t.solutions.items.map((item) => ({
        '@type': 'Service',
        '@id': `${new URL(pages[item.id as ServiceId][lang], base).href}#service`,
        url: new URL(pages[item.id as ServiceId][lang], base).href,
        name: item.title,
        description: item.solution,
        serviceType: item.tab,
        provider: { '@id': orgId },
        areaServed: { '@type': 'Country', name: 'Romania' },
        inLanguage: lang,
      })),
    ],
  };
}

/** JSON-LD for a service page: the Service, its breadcrumb trail and the FAQ. */
export function serviceJsonLd(lang: Lang, id: ServiceId, base: URL) {
  const t = useTranslations(lang);
  const item = t.solutions.items.find((i) => i.id === id)!;
  const page = t.services.items[id];
  const url = new URL(pages[id][lang], base).href;
  const orgId = new URL('/#organization', base).href;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        url,
        name: item.title,
        description: page.metaDescription,
        serviceType: item.tab,
        provider: { '@id': orgId },
        areaServed: { '@type': 'Country', name: 'Romania' },
        inLanguage: lang,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: site.name, item: new URL(homePath(lang), base).href },
          { '@type': 'ListItem', position: 2, name: t.services.labels.breadcrumb, item: new URL(`${homePath(lang)}#${t.anchors.solutions}`, base).href },
          { '@type': 'ListItem', position: 3, name: item.title, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}
