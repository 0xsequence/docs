import { defineConfig } from "vocs";
import tsconfigPaths from "vite-tsconfig-paths";
import { sidebar, topNav } from "./nav";
import ViteYaml from "@modyfi/vite-plugin-yaml";

export default defineConfig({
  title: "Sequence",

  iconUrl: { light: "/img/favicon.ico", dark: "/img/favicon.ico" },
  logoUrl: {
    light: "/img/sequence-composite-light.svg",
    dark: "/img/sequence-composite-dark.svg",
  },
  vite: {
    ssr: {
      noExternal: ["@docsearch/react"],
    },
    plugins: [tsconfigPaths(), ViteYaml()],
  },

  // rootDir: '.',
  basePath: "/",

  topNav,
  sidebar,

  theme: {
    // accentColor: {
    //   light: '#442CA8',
    //   dark: '#99ADED',
    // },
    colorScheme: "dark",
    variables: {
      fontFamily: {
        default: "Inter",
        // mono: 'Roboto Mono'
      },
      color: {
        background: {
          light: "#f0f0f0",
          dark: "#111111",
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
});
