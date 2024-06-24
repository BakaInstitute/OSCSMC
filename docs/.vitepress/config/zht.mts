import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const zht = defineConfig({
  title: "Minecraft 一站式解决方案",
  description: "Minecraft All in One Solution",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/zht/' },
      { text: '即刻开始', link: '/zht/guide/' },
      { text: '启动器列表', link: '/zht/launchers/' },
      { text: '鸣谢', link: '/zht/thanks/' }
    ],

    sidebar: [
      {
        text: '初入 Minecraft',
        items: [
          { text: '简单介绍', link: '/zht/guide/' },
          { text: '我都需要什么', link: '/zht/guide/what-i-needed' },
        ]
      },
      {
        text: '启动器集合',
        items: [
          { text: '有什么启动器', link: '/zht/launchers/' },
          { text: 'Minecraft Launcher', link: '/zht/launchers/minecraft-launcher' },
        ]
      },
      {
        text: '资源网站',
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
