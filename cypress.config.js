const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseurl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
