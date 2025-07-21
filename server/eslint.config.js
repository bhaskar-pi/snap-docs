const eslintPluginImport = require("eslint-plugin-import");
const tseslint = require("typescript-eslint");

module.exports = [
  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "@config/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@controllers/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@routes/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@models/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@repositories/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@request-validators/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@schemas/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@middlewares/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@email-service/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@dtos/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@events/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@enums/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@interfaces/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@helpers/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
