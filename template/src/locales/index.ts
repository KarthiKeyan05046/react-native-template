import en from '../locales/en/en.json';
import ta from '../locales/ta/ta.json';
import languages from '../locales/languages.json';

export const resources = {
    en: {translation: en},
    ta: {translation: ta},
} as const;

export const languageList  = languages;
