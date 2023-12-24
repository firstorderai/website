const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    // locales: ['en-US', 'de-DE'],
    locales: ['en-US', 'zh-CN'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};
