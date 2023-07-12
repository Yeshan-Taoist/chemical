import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "前言",
    collapsed: false,
    items: [{ text: "序章", link: "/" }],
  },
  {
    text: "日常安全",
    collapsed: true,
    items: [
      {
        text: "每周一考",
        collapsed: true,
        items: [
          {
            text: "第一期 20230507",
            link: "/One-week/20230507",
          },
          {
            text: "第二期 20230513",
            link: "/One-week/20230513",
          },
          {
            text: "第三期 20230521",
            link: "/One-week/20230521",
          },
          {
            text: "第四期 20230528",
            link: "/One-week/20230528",
          },
          {
            text: "第五期 20230605",
            link: "/One-week/20230605",
          },
          {
            text: "第六期 20230611",
            link: "/One-week/20230611",
          },
          {
            text: "第七期 20230618",
            link: "/One-week/20230618",
          },
          {
            text: "第九期 20230702",
            link: "/One-week/20230702",
          },
        ],
      },
    ],
  },
  {
    text: "氧化工艺考试题库",
    collapsed: true,
    items: [
      {
        text: "理论题库",
        collapsed: true,
        items: [
          {
            text: "单选题",
            link: "/Oxidation-process/Exam-question-bank-single",
          },
          {
            text: "判断题",
            link: "/Oxidation-process/Exam-question-bank-judgment",
          },
        ],
      },
      {
        text: "实操题库",
        collapsed: true,
        items: [
          {
            text: "创伤包扎习题",
            link: "/Oxidation-process/baozhachuangshangti",
          },
          {
            text: "科目三-离心泵",
            link: "/Oxidation-process/Hands-on-3-1",
          },
          {
            text: "科目三-离心压缩机",
            link: "/Oxidation-process/Hands-on-3-2",
          },
          {
            text: "科目三-釜式反应器",
            link: "/Oxidation-process/Hands-on-3-3",
          },
          {
            text: "科目三-固定床反应器",
            link: "/Oxidation-process/Hands-on-3-4",
          },
          {
            text: "科目三-换热器",
            link: "/Oxidation-process/Hands-on-3-5",
          },
          {
            text: "科目三-精馏塔",
            link: "/Oxidation-process/Hands-on-3-6",
          },
          {
            text: "科目四-釜式反应器",
            link: "/Oxidation-process/Hands-on-4-1",
          },
          {
            text: "科目四-固定床反应器",
            link: "/Oxidation-process/Hands-on-4-2",
          },
          {
            text: "科目四-换热器",
            link: "/Oxidation-process/Hands-on-4-3",
          },
          {
            text: "科目四-精馏塔",
            link: "/Oxidation-process/Hands-on-4-4",
          },
          {
            text: "科目四-离心泵",
            link: "/Oxidation-process/Hands-on-4-5",
          },
          {
            text: "科目四-离心压缩机",
            link: "/Oxidation-process/Hands-on-4-6",
          },
        ],
      },
    ],
  },
  {
    text: "氧化工艺知识点",
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
            text: "《中华人民共和国安全生产法》主要修正内容解读",
            link: "/Oxidation-process/1-2",
          },
          {
            text: "《中华人民共和国职业病防治法》",
            link: "/Oxidation-process/1-3",
          },
          {
            text: "危险化学品安全管理条例",
            link: "/Oxidation-process/1-4",
          },
          {
            text: "《使用有毒物品作业场所劳动保护条例》",
            link: "/Oxidation-process/1-5",
          },
          {
            text: "特种设备安全监察条例",
            link: "/Oxidation-process/1-6",
          },
          {
            text: "危险化学品生产企业安全生产许可证实施办法",
            link: "/Oxidation-process/1-7",
          },
        ],
      },
      {
        text: "氧化工艺安全基础知识",
        collapsed: true,
        items: [
          {
            text: "氧化工艺基本知识",
            link: "/Oxidation-process/2-1",
          },
          {
            text: "氧化工艺的危险特点及危害因素分析",
            link: "/Oxidation-process/2-2",
          },
          {
            text: "化学品安全技术说明",
            link: "/Oxidation-process/2-3",
          },
          {
            text: "危险化学品重大危险源管理",
            link: "/Oxidation-process/2-4",
          },
        ],
      },
      {
        text: "氧化工艺作业安全操作",
        collapsed: true,
        items: [
          {
            text: "氧化工艺作业安全操作",
            link: "/Oxidation-process/3-1",
          },
        ],
      },
      {
        text: "设备安全技术",
        collapsed: true,
        items: [
          {
            text: "氧化工艺设备安全技术",
            link: "/Oxidation-process/4-1",
          },
        ],
      },
      {
        text: "自动化安全控制技术",
        collapsed: true,
        items: [
          {
            text: "自动化安全控制技术",
            link: "/Oxidation-process/5-1",
          },
        ],
      },
      {
        text: "电气安全技术",
        collapsed: true,
        items: [
          {
            text: "电气安全基础知识",
            link: "/Oxidation-process/6-1",
          },
          {
            text: "电气防火安全技术",
            link: "/Oxidation-process/6-2",
          },
          {
            text: "雷电防护",
            link: "/Oxidation-process/6-3",
          },
          {
            text: "静电防护",
            link: "/Oxidation-process/6-4",
          },
          {
            text: "案例分析",
            link: "/Oxidation-process/6-5",
          },
        ],
      },
      {
        text: "直接作业环节控制安全技术",
        collapsed: true,
        items: [
          {
            text: "化工检修作业",
            link: "/Oxidation-process/7-1",
          },
          {
            text: "动火作业安全技术",
            link: "/Oxidation-process/7-2",
          },
          {
            text: "受限空间作业安全技术",
            link: "/Oxidation-process/7-3",
          },
          {
            text: "盲板抽堵作业安全技术",
            link: "/Oxidation-process/7-4",
          },
          {
            text: "高处作业安全技术",
            link: "/Oxidation-process/7-5",
          },
          {
            text: "吊装作业安全技术",
            link: "/Oxidation-process/7-6",
          },
          {
            text: "临时用电作业安全技术",
            link: "/Oxidation-process/7-7",
          },
          {
            text: "动土作业安全技术",
            link: "/Oxidation-process/7-8",
          },
          {
            text: "断路作业安全技术",
            link: "/Oxidation-process/7-9",
          },
        ],
      },
      {
        text: "安全设备设施",
        collapsed: true,
        items: [
          {
            text: "安全附件",
            link: "/Oxidation-process/9-1",
          },
          {
            text: "安全泄放系统",
            link: "/Oxidation-process/9-2",
          },
          {
            text: "安全联锁系统",
            link: "/Oxidation-process/9-3",
          },
        ],
      },
      {
        text: "职业健康",
        collapsed: true,
        items: [
          {
            text: "生产性毒物及其危害和控制措施",
            link: "/Oxidation-process/10-1",
          },
          {
            text: "噪声、振动、高温、辐射及其危害和控制措施",
            link: "/Oxidation-process/10-2",
          },
        ],
      },
      {
        text: "事故预防与应急处置",
        collapsed: true,
        items: [
          {
            text: "危险化学品事故应急管理",
            link: "/Oxidation-process/11-1",
          },
        ],
      },
      {
        text: "事故案例分析",
        collapsed: true,
        items: [
          {
            text: "事故案例分析视频",
            link: "/Oxidation-process/12-1",
          },
        ],
      },
      {
        text: "个体防护知识",
        collapsed: true,
        items: [
          {
            text: "个体防护装备及其分类",
            link: "/Oxidation-process/13-1",
          },
          {
            text: "呼吸防护用品及选用",
            link: "/Oxidation-process/13-2",
          },
          {
            text: "眼面部防护用品及选用",
            link: "/Oxidation-process/13-3",
          },
        ],
      },
      {
        text: "消气防知识",
        collapsed: true,
        items: [
          {
            text: "消防和气防安全知识",
            link: "/Oxidation-process/14-1",
          },
          {
            text: "消防和气防器材使用和维护",
            link: "/Oxidation-process/14-2",
          },
          {
            text: "事故现场急救基础知识",
            link: "/Oxidation-process/14-3",
          },
          {
            text: "自动苏生器的原理及使用",
            link: "/Oxidation-process/14-4",
          },
          {
            text: "中毒窒息事故急救",
            link: "/Oxidation-process/14-5",
          },
          {
            text: "常见急救措施(止血、心肺复苏、伤员搬运、人工呼吸、骨折临时固定、包扎)",
            link: "/Oxidation-process/14-6",
          },
        ],
      },
      {
        text: "环境保护",
        collapsed: true,
        items: [
          {
            text: "危险化学品的危害和防护",
            link: "/Oxidation-process/15-1",
          },
          {
            text: "泄露控制与销毁处置技术",
            link: "/Oxidation-process/15-2",
          },
        ],
      },
    ],
  },
];
