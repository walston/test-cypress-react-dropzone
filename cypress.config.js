const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1536,
  e2e: { baseUrl: "http://localhost:8080", supportFile: false },
});
