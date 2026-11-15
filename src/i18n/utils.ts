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

/** Home path for a language: `/` for RO, `/en/` for EN. */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

/** Link to a section anchor on the home page of a language. */
export function sectionHref(lang: Lang, section: keyof Dictionary['anchors']): string {
  return `#${dictionaries[lang].anchors[section]}`;
}
