module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      // Add other ESLint configurations as needed
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': process.env.CI ? 'error' : 'warn',
      // Add other rules as needed
    },
  };
  
