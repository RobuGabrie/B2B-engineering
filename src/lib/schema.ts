// Schema.org JSON-LD for the home page: the company as a ProfessionalService (a LocalBusiness),
// plus one Service per vertical. All company details come from src/config/site.ts.
import { site } from '../config/site';
import { homePath, useTranslations, type Lang } from '../i18n/utils';

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
        url: new URL('/', base).href,
        logo: new URL('/favicon.svg', base).href,
        image: new URL(`/og-${lang}.png`, base).href,
        description: t.meta.description,
        telephone: site.phone.replace(/\s+/g, ''),
        email: site.email,
        taxID: site.cui,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
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
        '@id': `${url}#${item.id}`,
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
