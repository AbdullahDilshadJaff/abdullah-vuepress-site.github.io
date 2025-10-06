// docs/.vuepress/config.js
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

module.exports = ({
base: '/',
  title: "Abdullah's VuePress Site",
  description: "A static site built with VuePress v2",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    
  ],
  
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/about.md' },
      { text: 'Projects', link: '/projects/projects.md' },
      { text: 'Contact', link: '/contact/contact.md' },
    ],
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
  }),

  bundler: viteBundler(),
})

