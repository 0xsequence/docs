import { defineConfig } from 'vocs'
import { sidebar, topNav } from './nav'

export default defineConfig({
  title: 'Sequence',

  iconUrl: { light: '/img/favicon.ico', dark: '/img/favicon.ico' },
  logoUrl: {
    light: '/img/sequence-composite-light.svg',
    dark: '/img/sequence-composite-dark.svg',
  },

  // rootDir: '.',
  basePath: '/',

  topNav,
  sidebar,

  theme: {
    // accentColor: {
    //   light: '#442CA8',
    //   dark: '#99ADED',
    // },
    colorScheme: 'dark',
    variables: {
      fontFamily: {
        default: 'Inter',
        // mono: 'Roboto Mono'
      },
      color: {
        background: {
          light: '#f0f0f0',
          dark: '#111111',
        },
        // background5: {
        //   light: '#dddddd',
        //   dark: '#111111',
        // }

        // backgroundDark: {
        //   light: '#dddddd',
        //   dark: '#151515'
        // }
      },
    },
  },
})
