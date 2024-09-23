import en from '../locales/en/en';
import ta from '../locales/ta/ta';
import languages from '../locales/languages.json';

export const resources = {
    en: {translation: en},
    ta: {translation: ta},
} as const;

export const languageList  = languages;
