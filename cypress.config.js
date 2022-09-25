const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: "junit",
  reporterOptions: {
    mochaFile: "test-results/test-output-[hash].xml",
  },
  BaseURL: "https://www.hudl.com/login",
  defaultCommandTimeout: 5000,
  retries: 0,
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/e2e/features/*.{feature,features}",
  },
});
