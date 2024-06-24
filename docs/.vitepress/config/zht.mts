import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zht = defineConfig({
  title: "Minecraft 一站式解决方案",
  description: "Minecraft All in One Solution",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/zht/' },
      { text: '即時開始', link: '/zht/guide/' },
      { text: '啟動器列表', link: '/zht/launchers/' },
      { text: '貢獻指南', link: '/zht/contribute/contributing' },
      { text: '愛發電', link: 'https://afdian.net/a/BakaInstitute' }
    ],

    sidebar: [
      {
        text: '初入 Minecraft',
        items: [
          { text: '簡單介紹', link: '/zht/guide/' },
        ]
      },
      {
        text: '啟動器集合',
        items: [
          { text: '有什麼啟動器', link: '/zht/launchers/' },
          { text: 'Minecraft Launcher', link: '/zht/launchers/minecraft-launcher' },
          { text: 'PCL (Plain Craft Launcher)', link: '/zht/launchers/plain-craft-launcher' },
          { text: 'HMCL (Hello Minecraft! Launcher)', link: '/zht/launchers/hello-minecraft-launcher' },
          { text: 'BakaXL', link: '/zht/launchers/bakaxl' },
          { text: 'MultiMC', link: '/zht/launchers/multimc' },
          { text: 'Prism Launcher', link: '/zht/launchers/prism-launcher' },
          { text: 'PolyMC', link: '/zht/launchers/polymc' },
          { text: 'GDLauncher', link: '/zht/launchers/gdlauncher' },
        ]
      },
      {
        text: '資源網站',
        items: [
          { text: '我上哪找资源', link: '/zht/addons/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BakaInstitute/OSCSMC' }
    ]
  }
})
