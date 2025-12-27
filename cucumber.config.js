const { defineConfig } = require('@cucumber/cucumber');

module.exports = defineConfig({
  default: {
    paths: ['src/**/*.feature'],
    require: ['src/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'json:reports/cucumber-report.json'],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    publishQuiet: true,
    dryRun: false,
    failFast: false,
    parallel: 1
  }
});
