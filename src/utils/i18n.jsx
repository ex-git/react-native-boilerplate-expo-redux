import React from 'react';
import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './locales/en.json';
import zh from './locales/zh.json';

const translations = {
  en,
  zh,
};

const i18n = new I18n(translations);
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;

export const setLocale = (locale) => {
  i18n.locale = locale;
};

export const LocalizationContext = React.createContext({
  setLocale,
  t: i18n.t,
  locale: i18n.locale,

});
export default i18n;
