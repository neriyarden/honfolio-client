const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: ["eslint-config-turbo"].map(require.resolve),
  plugins: ["simple-import-sort"],
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
    "unicorn/filename-case": "off",
    "no-console": "warn",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages. react related packages come first.
          ["^react", "^node", "^@?\\w"],
          // "@neri/" shared packages.
          ["^@neri/.*"],
          // Side effects imports.
          ["\\u0000"],
          // "@/" internal imports
          ["^@/.*"],
          // Parent imports. Put `..` last.
          [("^\\.\\.(?!/?$)", "^\\.\\./?$")],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "import/order": "off",
  },
};
