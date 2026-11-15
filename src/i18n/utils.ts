import { ro, type Dictionary } from './ro';
import { en } from './en';

export const languages = { ro: 'Română', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ro';

const dictionaries: Record<Lang, Dictionary> = { ro, en };

export function getLang(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Every page in both languages. Slugs are translated, so the language switch maps page to page. */
export const pages = {
  home: { ro: '/', en: '/en/' },
  privacy: { ro: '/confidentialitate/', en: '/en/privacy/' },
  // One page per vertical; keys match the ids in solutions.items and services.items.
  iot: { ro: '/servicii/monitorizare-productie-iot/', en: '/en/services/industrial-iot-monitoring/' },
  vision: { ro: '/servicii/computer-vision/', en: '/en/services/computer-vision/' },
  rnd: { ro: '/servicii/proiectare-pcb-firmware/', en: '/en/services/pcb-firmware-development/' },
  automation: { ro: '/servicii/automatizari-logistica-agricultura/', en: '/en/services/logistics-agriculture-automation/' },
} as const satisfies Record<string, Record<Lang, string>>;
export type Page = keyof typeof pages;
export const serviceIds = ['iot', 'vision', 'rnd', 'automation'] as const;
export type ServiceId = (typeof serviceIds)[number];

/** The last path segment of a page in a language (for getStaticPaths). */
export function slugOf(page: Page, lang: Lang): string {
  return pages[page][lang].split('/').filter(Boolean).at(-1)!;
}

/** Home path for a language: `/` for RO, `/en/` for EN. */
export function homePath(lang: Lang): string {
  return pages.home[lang];
}

/** Link to a section of the home page. Includes the path, so it also works from other pages. */
export function sectionHref(lang: Lang, section: keyof Dictionary['anchors']): string {
  return `${homePath(lang)}#${dictionaries[lang].anchors[section]}`;
}
