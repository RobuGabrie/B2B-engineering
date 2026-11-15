import { site } from '../config/site';
import { useTranslations, type Lang } from '../i18n/utils';

export const telHref = `tel:${site.phone.replace(/\s+/g, '')}`;
export const mailHref = `mailto:${site.email}`;

/** WhatsApp click-to-chat link with a prefilled greeting in the page language. */
export function whatsappHref(lang: Lang): string {
  const text = useTranslations(lang).contact.whatsappMessage;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
