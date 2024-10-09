import { fixupPluginRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import importRecommended from "eslint-plugin-import/config/recommended.js";
import jsdoc from "eslint-plugin-jsdoc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.{js,ts}"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintPluginPrettierRecommended,
  jsdoc.configs["flat/recommended"],
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    plugins: {
      import: fixupPluginRules(importPlugin),
    },
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
    rules: {
      ...importRecommended.rules,
      "import/no-unresolved": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
