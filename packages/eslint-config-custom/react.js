/*
 * This is a custom ESLint configuration for use an application
 * or library that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [].map(require.resolve),
  parserOptions: {},
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {},
  },
  ignorePatterns: ["node_modules/", "dist/", "**/*.css"],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    "unicorn/filename-case": "off",
  },
};
