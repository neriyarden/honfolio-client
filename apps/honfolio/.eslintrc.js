const path = require("node:path");

module.exports = {
  extends: "@neri/eslint-config/next",
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      { packageDir: path.join(__dirname, "./") },
    ],
  },
};
