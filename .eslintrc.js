const config = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:react-hooks/recommended'],
  plugins: ['testing-library'],
  env: {
    jest: true
  },
  overrides: [// Only uses Testing Library lint rules in test files
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    extends: ['plugin:testing-library/react']
  }]
};
export default config;
export const extends = ["plugin:storybook/recommended"];