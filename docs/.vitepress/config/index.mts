import { defineConfig } from 'vitepress'
import { en } from './en.mts'
import { zhs } from './zhs.mts'
import { zht } from './zht.mts'

export default defineConfig({
  locales: {
    root: { label: '简体中文', ...zhs },
    en: { label: 'English', ...en },
    zht: { label: '繁體中文', ...zht },
  }
})