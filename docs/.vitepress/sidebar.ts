import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "前言",
    collapsed: false,
    items: [{ text: "序章", link: "/" }],
  },
  {
    text: "氧化工艺",
    collapsed: true,
    items: [
      {
        text: "安全生产法律法规",
        collapsed: true,
        items: [
          {
            text: "习近平关于安全生产的重要论述",
            link: "/Oxidation-process/1-1",
          },
          {
            text: "习近平关于安全生产的重要论述",
            link: "/Oxidation-process/1-1",
          },
          {
            text: "习近平关于安全生产的重要论述",
            link: "/Oxidation-process/1-1",
          },
          {
            text: "习近平关于安全生产的重要论述",
            link: "/Oxidation-process/1-1",
          },
        ],
      },
      { text: "氧化工艺安全基础知识", collapsed: true, items: [] },
      { text: "氧化工艺作业安全操作", collapsed: true, items: [] },
      { text: "设备安全技术", collapsed: true, items: [] },
      { text: "自动化安全控制技术", collapsed: true, items: [] },
      { text: "电气安全技术", collapsed: true, items: [] },
      { text: "直接作业环节控制安全技术", collapsed: true, items: [] },
      { text: "职业健康", collapsed: true, items: [] },
      { text: "安全设备设施", collapsed: true, items: [] },
      { text: "事故预防与应急处置", collapsed: true, items: [] },
      { text: "事故案例分析", collapsed: true, items: [] },
      { text: "个体防护知识", collapsed: true, items: [] },
      { text: "消气防知识", collapsed: true, items: [] },
      { text: "环境保护", collapsed: true, items: [] },
    ],
  },
];
