import superblocksLinter from "@superblocksteam/linter";

export default [
  ...superblocksLinter.config(),
  {
    // we disable these rules because we are allowing use of any
    // for now because many things are not yet typed and we don't want end users
    // in their IDE to see these errors
    rules: {
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
