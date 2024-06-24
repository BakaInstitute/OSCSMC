import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zhs = defineConfig({
  title: "Minecraft 一站式解决方案",
  description: "Minecraft All in One Solution",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '即刻开始', link: '/guide/' },
      { text: '启动器列表', link: '/launchers/' },
      { text: '贡献指南', link: '/contribute/contributing' },
      { text: '爱发电', link: 'https://afdian.net/a/BakaInfinityHub' }
    ],

    sidebar: [
      {
        text: '初入 Minecraft',
        items: [
          { text: '简单介绍', link: '/guide/' },
        ]
      },
      {
        text: '启动器集合',
        items: [
          { text: '有什么启动器', link: '/launchers/' },
          { text: 'Minecraft Launcher', link: '/launchers/minecraft-launcher' },
          { text: 'PCL (Plain Craft Launcher)', link: '/launchers/plain-craft-launcher' },
          { text: 'HMCL (Hello Minecraft! Launcher)', link: '/launchers/hello-minecraft-launcher' },
          { text: 'BakaXL', link: '/launchers/bakaxl' },
          { text: 'MultiMC', link: '/launchers/multimc' },
          { text: 'Prism Launcher', link: '/launchers/prism-launcher' },
          { text: 'PolyMC', link: '/launchers/polymc' },
          { text: 'GDLauncher', link: '/launchers/gdlauncher' },
        ]
      },
      {
        text: '资源网站',
        items: [
          { text: '我上哪找资源', link: '/addons/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BakaInstitute/OSCSMC' }
    ]
  }
})
