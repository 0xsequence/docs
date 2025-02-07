import { defineConfig } from 'vocs'
import tsconfigPaths from 'vite-tsconfig-paths'
import { sidebar, topNav } from './nav'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import react from '@vitejs/plugin-react'
import { lingui } from '@lingui/vite-plugin'

export default defineConfig({
  title: 'Sequence',
  iconUrl: { light: '/img/favicon.ico', dark: '/img/favicon.ico' },
  logoUrl: {
    light: '/img/sequence-composite-light.svg',
    dark: '/img/sequence-composite-dark.svg',
  },
  vite: {
    esbuild: { target: 'esnext' },
    ssr: { noExternal: ['@docsearch/react'] },
    plugins: [
      tsconfigPaths(),
      ViteYaml(),
      react({ babel: { plugins: ['@lingui/babel-plugin-lingui-macro'] } }),
      lingui(),
    ],
  },
  basePath: '/',
  topNav,
  sidebar,
  theme: {
    colorScheme: 'dark',
    variables: { fontFamily: { default: 'Inter' } },
  },
  defaultLocale: {
    label: 'English',
    lang: 'en',
  },
  locales: {
    ja: {
      label: '日本語',
      lang: 'ja',
    },
  },
  description: {
    '/': 'Sequence is a modern, cloud-native, and low-code platform for building and deploying data pipelines.',
    '/ja':
      'Sequence は、データパイプラインを構築してデプロイするためのモダンでクラウドネイティブでローコードのプラットフォームです。',
  },
})
