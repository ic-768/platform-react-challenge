import eslint from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  reactPlugin.configs.flat.recommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  prettierRecommended,
  {
    rules: {
      "prettier/prettier": ["warn"],
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "react/react-in-jsx-scope": "off",
      "no-prototype-builtins": "off",
      "no-useless-catch": "off",
      "react/prop-types": "off",
      "react/no-children-prop": "off",
      "react/display-name": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    plugins: {
      "unused-imports": unusedImports,
      "react-hooks": hooksPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Packages, react related packages come first.
            ["^react", "^@?\\w"],
            ["^@(?!/features)(/.*|$)"],
            // Side effect imports.
            ["^\\u0000"],
            // Parent imports. Put .. last.
            // Other relative imports. Put same-folder imports and . last.
            [
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$",
            ],
            // Style imports.
            ["^.+\\.?(css)$"],
          ],
        },
      ],

      ...hooksPlugin.configs.recommended.rules,
    },
    ignores: ["*.test.tsx"],
  },
];
