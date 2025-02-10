import { defineConfig } from '@lingui/cli'

export default defineConfig({
  sourceLocale: 'en',
  locales: ['en', 'ja'],
  catalogs: [
    {
      path: 'docs/locales/{locale}',
      include: ['docs/components'],
    },
  ],
})
