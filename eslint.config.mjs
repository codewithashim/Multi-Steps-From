import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-console": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-constant-condition": "off",
      "no-prototype-builtins": "off",
      "no-useless-escape": "off",
      "no-async-promise-executor": "off",
      "no-irregular-whitespace": "off",
      "no-unsafe-optional-chaining": "off",
      "no-unsafe-negation": "off",
      "any-rule": "off",
      "no-unsafe-optional-chaining": "off",
      "no-unsafe-negation": "off",
      "no-prototype-builtins": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
