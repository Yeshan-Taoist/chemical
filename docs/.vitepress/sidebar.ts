import type { DefaultTheme } from "vitepress";
import { ChemicalEngineering } from "./ChemicalEngineering";
import { ChemicalSafety } from "./ChemicalSafety";
import { CompanyRelated } from "./CompanyRelated";
import { OxidationProcess } from "./OxidationProcess";
export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "前言",
    collapsed: false,
    items: [{ text: "序章", link: "/" }],
  },
  {
    text: "化工学习",
    collapsed: true,
    items: ChemicalEngineering,
  },
  {
    text: "化工安全",
    collapsed: true,
    items: ChemicalSafety,
  },
  {
    text: "公司相关",
    collapsed: true,
    items: CompanyRelated,
  },
  {
    text: "氧化工艺",
    collapsed: true,
    items: OxidationProcess,
  },
  {
    text: "加氢工艺",
    collapsed: true,
    items: [],
  },
  {
    text: "合成氨工艺",
    collapsed: true,
    items: [],
  },
  {
    text: "煤气作业",
    collapsed: true,
    items: [],
  },
];
