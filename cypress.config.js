const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  chromeWebSecurity: false,
  experimentalSourceRewriting: true,
  defaultCommandTimeout: 40000,
  requestTimeout: 40000,
  responseTimeout: 40000,
  viewportWidth: 1366,
  viewportHeight: 768,
  numTestsKeptInMemory: 0,
  waitForAnimations: true,
  animationDistanceThreshold: 1,
  trashAssetsBeforeRuns: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
});
