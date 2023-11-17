const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: ["eslint-config-turbo"].map(require.resolve),
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    "import/no-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
  },
};
