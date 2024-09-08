import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <span>Mobenai</span>,
  project: {
    link: "https://github.com/mobenai/mo-ai-stuidio",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Mo AI Studio see future...",
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "中文" },
  ],
}

export default config
