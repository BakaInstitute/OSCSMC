import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft 一站式解决方案",
  description: "Minecraft All in One Solution",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '即刻开始', link: '/guide/' },
      { text: '启动器列表', link: '/launchers/' },
      { text: '鸣谢', link: '/thanks/' }
    ],

    sidebar: [
      {
        text: '初入 Minecraft',
        items: [
          { text: '简单介绍', link: '/guide/' },
          { text: '我都需要什么', link: '/guide/what-i-needed' },
        ]
      },
      {
        text: '启动器集合',
        items: [
          { text: '有什么启动器', link: '/launchers/' },
          { text: 'Minecraft Launcher', link: '/launchers/minecraft-launcher' },
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
