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

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: './logs-merge',
    charts: true,
    overwrite: false,
    reportPageTitle: 'Cypress - Web Argo',
    reportTitle: 'PROJETO WEB - CYPRESS',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: false,
    saveJson: true,
    saveHtml: false,
  },

  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib')
      on('before:run', async (details) => {
        console.log('override before:run')
        await beforeRunHook(details)
      }),
        on('after:run', async () => {
          console.log('override after:run')
          await afterRunHook()
        })
      return cloudPlugin(on, config)
    },
  },
});
