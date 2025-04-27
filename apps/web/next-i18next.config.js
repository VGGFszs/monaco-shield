const { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } = require('@monaco-shield/config');

module.exports = {
  i18n: {
    defaultLocale: DEFAULT_LANGUAGE,
    locales: SUPPORTED_LANGUAGES,
    localeDetection: true,
  },
}; 