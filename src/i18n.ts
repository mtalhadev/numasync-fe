/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from 'src/lang/en/common.json';
import esTranslation from 'src/lang/es/common.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
});

export default i18n;
