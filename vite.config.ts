import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // For GitHub Pages project sites, assets must use /<repo>/ as base.
  const base =
    mode === 'production'
      ? (process.env.GITHUB_PAGES_BASE || '/')
      : '/';

  return { base };
});

