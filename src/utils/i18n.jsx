import React from 'react';
import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './locales/en';
import zh from './locales/zh';

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;
i18n.translations = {
  en,
  zh,
};
export const setLocale = (locale) => {
  i18n.locale = locale;
};
export const LocalizationContext = React.createContext();
export default i18n;
