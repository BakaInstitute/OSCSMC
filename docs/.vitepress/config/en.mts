import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: "Minecraft All in One Solution",
  description: "Minecraft All in One Solution",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Get Started', link: '/en/guide/' },
      { text: 'Launcher List', link: '/en/launchers/' },
      { text: 'Contribution Guidelines', link: '/en/contribute/contributing' },
      { text: 'AFDian', link: 'https://afdian.net/a/BakaInfinityHub' }
    ],

    sidebar: [
      {
        text: 'Getting started with Minecraft',
        items: [
          { text: 'Brief introduction', link: '/en/guide/' },
        ]
      },
      {
        text: 'Launcher List',
        items: [
          { text: 'What launcher is there?', link: '/en/launchers/' },
          { text: 'Minecraft Launcher', link: '/en/launchers/minecraft-launcher' },
          { text: 'PCL (Plain Craft Launcher)', link: '/en/launchers/plain-craft-launcher' },
          { text: 'HMCL (Hello Minecraft! Launcher)', link: '/en/launchers/hello-minecraft-launcher' },
          { text: 'BakaXL', link: '/en/launchers/bakaxl' },
          { text: 'MultiMC', link: '/en/launchers/multimc' },
          { text: 'Prism Launcher', link: '/en/launchers/prism-launcher' },
          { text: 'PolyMC', link: '/en/launchers/polymc' },
          { text: 'GDLauncher', link: '/en/launchers/gdlauncher' },
        ]
      },
      {
        text: 'Resource Website',
        items: [
          { text: '我上哪找资源', link: '/en/addons/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BakaInstitute/OSCSMC' }
    ]
  }
})
