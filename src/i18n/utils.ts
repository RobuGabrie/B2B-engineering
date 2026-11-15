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
} as const satisfies Record<string, Record<Lang, string>>;
export type Page = keyof typeof pages;

/** Home path for a language: `/` for RO, `/en/` for EN. */
export function homePath(lang: Lang): string {
  return pages.home[lang];
}

/** Link to a section of the home page. Includes the path, so it also works from other pages. */
export function sectionHref(lang: Lang, section: keyof Dictionary['anchors']): string {
  return `${homePath(lang)}#${dictionaries[lang].anchors[section]}`;
}
