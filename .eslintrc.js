module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier", "tailwindcss"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "lf" }],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "tailwindcss/no-custom-classname": "off",
  },
};
