import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: "Minecraft All in One Solution",
  description: "Minecraft All in One Solution",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/en/' },
      { text: '即刻开始', link: '/en/guide/' },
      { text: '启动器列表', link: '/en/launchers/' },
      { text: '鸣谢', link: '/en/thanks/' }
    ],

    sidebar: [
      {
        text: '初入 Minecraft',
        items: [
          { text: '简单介绍', link: '/en/guide/' },
          { text: '我都需要什么', link: '/en/guide/what-i-needed' },
        ]
      },
      {
        text: '启动器集合',
        items: [
          { text: '有什么启动器', link: '/en/launchers/' },
          { text: 'Minecraft Launcher', link: '/en/launchers/minecraft-launcher' },
        ]
      },
      {
        text: '资源网站',
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
