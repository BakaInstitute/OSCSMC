import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minecraft 一站式社区解决方案",
  description: "面向所有玩家的快速入门指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  locales: {
    root: {
      label: '中文(简体)',
      lang: 'zh_CN',
    },
    en_US: {
      label: 'English (US)',
      lang: 'en_US',
      link: '/en_US/',
    },

    zh_TW: {
      label: '中文(繁體)',
      lang: 'zh_TW',
      link: '/zh_TW/',
    },
  },
})
