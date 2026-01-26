import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Securescale</span>,
  project: {
    link: 'https://github.com/safayetjamil647/securescale',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/safayetjamil647/securescale',
  footer: {
    text: `Securescale © ${new Date().getFullYear()}`,
  },
}

export default config
