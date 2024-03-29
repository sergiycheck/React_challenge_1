const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  retries: {
    runMode: 5,
    openMode: 0,
  },
});
