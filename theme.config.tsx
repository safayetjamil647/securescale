import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      <span style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>SECURESCALE</span>
    </>
  ),
  project: {
    link: 'https://github.com/safayetjamil647/securescale',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/safayetjamil647/securescale',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://securescale.dev" target="_blank">
          SecureScale
        </a>
        . Hardened by default.
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SecureScale: Curated CVE-Free Docker Images" />
      <meta property="og:description" content="Hardened, distroless, and zero-CVE base images for FastAPI, Django, and Node.js." />
    </>
  ),
}

export default config
