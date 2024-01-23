module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "(useDeepCompareEffect|useDeepCompareCallback|useDeepCompareMemo)"
    }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false,
        },
      },
    ],
  },
}
