import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "前言",
    collapsed: false,
    items: [{ text: "序章", link: "/" }],
  },
  {
    text: "氧化工艺 Oxidation process",
    collapsed: false,
    items: [
      { text: "章节一", link: "/Oxidation-process/" },
      {
        text: "章节二",
        link: "/Oxidation-process/",
      },
    ],
  },
];
