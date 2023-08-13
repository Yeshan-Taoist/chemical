import { defineConfig } from "vitepress";
import { nav } from "./nav";
import { sidebar } from "./sidebar";

export default defineConfig({
  base: "/chemical/",
  lang: "en-US",
  title: "化工之路",
  description: "孜孜以求大道，以致人生通达。",
  lastUpdated: true,
  cleanUrls: true,
  // 忽略死链
  ignoreDeadLinks: true,
  //暗黑模式
  appearance: "dark",

  // head: [["link", { rel: "icon", href: "favicon.ico" }]],

  //markdown定义
  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,
    config(md) {
      md.use(require("markdown-it-task-lists")).use(
        require("markdown-it-latex").use(require("markdown-it-sub"))
      );
    },
  },

  themeConfig: {
    outline: "deep",
    outlineTitle: "目录",
    lastUpdatedText: "更新时间",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav,
    sidebar,
    editLink: {
      pattern: "https://github.com/Yeshan-Taoist/chemical",
      text: "在 GitHub 上编辑本章内容",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Yeshan-Taoist/chemical",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Yeshan Taoist",
    },
    search: {
      provider: "local",
    },
  },
});
