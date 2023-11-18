const { resolve } = require("node:path");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "@neri/eslint-config-custom/base",
  ].map(require.resolve),
  globals: {
    React: true,
    JSX: true,
  },
};
