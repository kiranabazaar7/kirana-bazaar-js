/**
 * @license
 * Copyright &copy 2019 Kirana Bazaar
 *
 * @author Sai Kalyan Moguloju
 */

const path = require('path');
const aggregateTranslations = require('terra-toolkit/scripts/aggregate-translations/aggregate-translations');
const terraI18nSupportedLocales = require('terra-toolkit/scripts/aggregate-translations/i18nSupportedLocales');

const aggregateOptions = {
  baseDir: path.resolve(__dirname, '../'),
  directories: ['./translations'],
  locales: terraI18nSupportedLocales,
  outputDir: './aggregated-translations',
};

aggregateTranslations(aggregateOptions);
