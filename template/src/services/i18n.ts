import i18 from 'i18next';
import {initReactI18next} from 'react-i18next';
import { resources } from '../locales';


i18.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: resources,
});

export default i18;
