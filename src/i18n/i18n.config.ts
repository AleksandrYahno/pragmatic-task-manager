import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './lang';

const resources = {
  en,
};

void i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  debug: import.meta.env.DEV,
});

export default i18n;
