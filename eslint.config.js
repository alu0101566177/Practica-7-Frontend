// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['dist/', '.astro/', 'node_modules/', 'public/'],
  },

  // Reglas base de JavaScript y TypeScript
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Reglas de Astro + reglas de accesibilidad (jsx-a11y) aplicadas a .astro
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
);
