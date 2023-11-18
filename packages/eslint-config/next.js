const { resolve } = require("node:path");

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "@neri/eslint-config/base",
  ].map(require.resolve),
  globals: {
    React: true,
    JSX: true,
  },
};
