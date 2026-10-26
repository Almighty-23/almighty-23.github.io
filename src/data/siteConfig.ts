export interface IdentityLens {
  id: string;
  label: string;
  headline: string;
  manifesto: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'engineering' | 'design' | 'ai';
  categoryLabel: string;
  year: string;
  role: string;
  summary: string;
  impact: string;
  tech: string[];
  link: string;
  repo?: string;
  accentColor: string;
  visualType: 'kinetic-grid' | 'neural-topology' | 'type-specimen' | 'audio-synth';
}

export interface NoteItem {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  readingTime: string;
  featured?: boolean;
  excerpt: string;
  content: string[];
}

export const siteConfig = {
  // ===== 基础个人信息（直接修改此处即可更新全站） =====
  name: 'LIN XIAO',
  nameCn: '林骁',
  monogram: 'LX—26',
  issueNumber: 'ISSUE NO. 01 · AUTUMN 2026',
  location: 'SHANGHAI / REMOTE',
  timezone: 'Asia/Shanghai',
  status: '开放独立合作与创造性项目交流',
  email: 'hello@linxiao.studio',
  github: 'https://github.com',
  twitter: 'https://x.com',
  rss: '/notes/design-against-templates',

  // ===== 首页 Hero 多维身份切换器 =====
  identities: [
    {
      id: 'all',
      label: '全域视角 · Overview',
      headline: '在代码秩序与视觉张力之间，构建有呼吸感的数字作品。',
      manifesto:
        '我是一名游走于工程实现与平面排印之间的独立开发者与设计作者。拒绝千篇一律的模板化界面，着迷于将瑞士网格系统、高帧率微交互与现代 AI 工具流熔铸为好用的产品。',
      highlights: ['Full-Stack TypeScript', 'Editorial UI Systems', 'Agentic Workflows', 'Creative Coding'],
    },
    {
      id: 'engineering',
      label: '工程架构 · Builder',
      headline: '追求零冗余的架构设计与毫秒级响应的交互手感。',
      manifesto:
        '好代码应当像精密机械表芯一样诚实。从 Astro 岛屿架构、React 状态机到本地优先（Local-First）的数据同步，我关注软件在极端边界下的稳定性与性能底线。',
      highlights: ['Astro / Next.js / React', 'Rust & Node Tooling', 'Local-First Architecture', 'WebGL & Canvas 2D'],
    },
    {
      id: 'design',
      label: '视觉排印 · Designer',
      headline: '排版即信息结构，克制的留白胜过廉价的渐变装饰。',
      manifesto:
        '深受纸质独立杂志与瑞士国际主义平面设计影响。我相信字体的字重对比、网格线的呼吸节奏与真实的材质触感，能够让数字界面重新拥有值得被长久凝视的审美价值。',
      highlights: ['Typography & Grid', 'Design Tokens System', 'Micro-Interactions', 'Bespoke SVG Graphics'],
    },
    {
      id: 'writing',
      label: '思考随笔 · Writer',
      headline: '通过写作对抗上下文遗忘，记录技术演进与审美切片。',
      manifesto:
        '写作是我整理心智模型的方式。在这里我会持续更新关于人机协作范式、独立开发复盘、设计系统剖析以及日常阅读的深度札记。',
      highlights: ['Tech Essays', 'Design Teardowns', 'Reading Notes', 'Monthly Field Logs'],
    },
  ] as IdentityLens[],

  // ===== 精选作品集（Selected Works） =====
  projects: [
    {
      id: 'monograph-ui',
      index: 'ARCHIVE 01',
      title: 'Monograph Design System',
      subtitle: '面向内容创作者与数字出版物的排版优先组件库',
      category: 'design',
      categoryLabel: 'Design System',
      year: '2026',
      role: 'Creator & Lead Designer',
      summary:
        '打破传统 SaaS 组件库的同质化圆角卡片，将印刷品的基线网格（Baseline Grid）、旁注（Marginalia）与动态字号缩放引入现代 Web 组件。',
      impact: 'GitHub 2.4k+ Stars · 被 30+ 独立博客与数字杂志采用',
      tech: ['Astro', 'Tailwind CSS', 'CSS Houdini', 'TypeScript'],
      link: 'https://github.com',
      repo: 'https://github.com',
      accentColor: '#1D39C4',
      visualType: 'type-specimen',
    },
    {
      id: 'loom-agent',
      index: 'ARCHIVE 02',
      title: 'LoomAgent Studio',
      subtitle: '本地优先的多智能体工作流编排与可视化调试画布',
      category: 'ai',
      categoryLabel: 'AI & Tooling',
      year: '2026',
      role: 'Solo Architect',
      summary:
        '针对复杂的 SKILL.md 与 MCP 工具链调用场景，提供无限画布式的执行轨迹回放、Token 消耗热力图与断点重放能力。',
      impact: '平均缩短复杂 Agent 提示词与工具链调试耗时 65%',
      tech: ['React 19', 'Canvas 2D', 'MCP Protocol', 'SQLite WASM'],
      link: 'https://github.com',
      repo: 'https://github.com',
      accentColor: '#D8FF38',
      visualType: 'neural-topology',
    },
    {
      id: 'kinetix-lab',
      index: 'ARCHIVE 03',
      title: 'Kinetix Field Synthesizer',
      subtitle: '基于 WebAudio 与着色器的生成式视听实验场',
      category: 'engineering',
      categoryLabel: 'Creative Coding',
      year: '2025',
      role: 'Creative Technologist',
      summary:
        '将布朗运动粒子场与环境合成器包络线实时耦合，支持通过鼠标物理动量或 MIDI 控制器演奏网页端生成式声景。',
      impact: 'FWA 提名实验作品 · 60fps 零主线程阻塞渲染',
      tech: ['WebGL Shader', 'WebAudio API', 'Vanilla TS', 'GLSL'],
      link: 'https://github.com',
      repo: 'https://github.com',
      accentColor: '#1D39C4',
      visualType: 'audio-synth',
    },
    {
      id: 'folio-press',
      index: 'ARCHIVE 04',
      title: 'FolioPress CLI',
      subtitle: '将本地 Markdown 笔记一键编译为精装双语小册子与静态站点',
      category: 'engineering',
      categoryLabel: 'Open Source CLI',
      year: '2025',
      role: 'Maintainer',
      summary:
        '专为双语写作者打造的排版引擎，自动处理中英文混排盘古之白、标点挤压、代码高亮与 Paged.js 印刷级 PDF 导出。',
      impact: '周下载量 8,000+ · 零配置即插即用',
      tech: ['Node.js', 'Unified / Remark', 'Paged.js', 'Rust N-API'],
      link: 'https://github.com',
      repo: 'https://github.com',
      accentColor: '#141413',
      visualType: 'kinetic-grid',
    },
  ] as ProjectItem[],

  // ===== 博客 / 思考札记（支持点击进入完整阅读页） =====
  notes: [
    {
      slug: 'design-against-templates',
      title: '反模板宣言：为什么我们的网页越来越像同一个模子刻出来的？',
      subtitle: '剖析当代生成式 UI 的五个视觉套路，以及如何从纸质出版物中重拾数字排版的个性。',
      date: '2026.10.18',
      category: 'DESIGN ESSAY',
      readingTime: '6 MIN READ',
      featured: true,
      excerpt:
        '当所有产品主页都充斥着一模一样的毛玻璃圆角卡片、紫色渐变光晕与居中大字号标语时，真正的设计辨识度反而来自于克制的结构线与大胆的字体对比。',
      content: [
        '打开如今的十个新产品发布页，你大概率会看到九个采用完全相同的视觉配方：深黑背景上漂浮着微弱的紫蓝色径向渐变、四篇一律的 16px 圆角半透明卡片、全大写的字距拉宽小标题，以及某一个被刻意标成斜体或彩色渐变的核心形容词。',
        '这种被称为“SaaS 卡片套件（The SaaS-Card Kit）”的趋势本身并非错误——它是安全、稳妥且在工程上极易复用的默认值。但当它成为所有主题（无论是个人作品集、金融分析工具还是独立艺术项目）的唯一解答时，界面就失去了传递作者性格的能力。',
        '在构思这个个人主页时，我给自己定下了三条纪律：第一，用真实的编辑部网格线（Structural Hairlines）代替廉价的阴影来划分信息层级；第二，让字体本身成为画面的主角，通过高对比衬线体与无衬线正文的节奏切换建立呼吸感；第三，把鲜艳的高饱和色彩（如克莱因钴蓝与信号荧光黄）控制在极小面积的交互焦点上。',
        '网页不必永远模仿移动应用里的抽屉与卡片。它同样可以是一本随时翻阅的实验刊物、一张带有温度的活版印刷海报，或者一座不断生长的数字花园。',
      ],
    },
    {
      slug: 'agent-skills-architecture',
      title: '从超长 Prompt 到模块化 SKILL.md：我是如何构建个人 Agent 工具箱的',
      subtitle: '当系统提示词膨胀到上万 Token 后，按需加载的领域技能包才是可维护的演进方向。',
      date: '2026.09.29',
      category: 'ENGINEERING',
      readingTime: '8 MIN READ',
      featured: true,
      excerpt:
        '与其把所有规则塞进一个臃肿的全局系统提示词，不如将前端审美、系统化调试与文档处理封装为独立的按需技能卡片。',
      content: [
        '在过去一年里，我见过太多开发者试图用一份长达数千行的超级系统提示词（Mega-Prompt）来规训自己的 AI 编程助手。结果往往事与愿违：上下文窗口被无关规则占满，注意力被稀释，写前端代码时混入了后端数据库迁移的教条。',
        'Agent Skills（基于 YAML Frontmatter + Markdown 指令的模块化规范）之所以优雅，是因为它引入了操作系统的“按需动态链接”思想：平时只暴露几十个字的触发描述（Description），只有当任务真正命中前端设计、PPT 构建或调试工作流时，才把对应的深度指南与脚本挂载进上下文。',
        '更重要的是，这种文件级解耦让“工程经验”第一次变成了可以像 npm 包一样在 GitHub 上自由分发、组合与复审的资产。把你踩过的坑沉淀成清晰、克制的 SKILL.md，是当下回报率最高的技术投资之一。',
      ],
    },
    {
      slug: 'astro-islands-in-practice',
      title: '为什么我选择 Astro 作为个人数字花园的长期基座',
      subtitle: '零默认客户端 JavaScript 与渐进式交互孤岛的平衡术。',
      date: '2026.08.14',
      category: 'ARCHITECTURE',
      readingTime: '5 MIN READ',
      featured: false,
      excerpt:
        '个人网站最怕两件事：一是第一天搭建时过度工程化，二是半年后因为依赖过重而懒得打开维护。Astro 恰好解开了这个死结。',
      content: [
        '很多工程师的个人博客死于“重写综合症”——花了两周配置复杂的状态管理、SSR 缓存与自定义构建管线，结果一年只写了一篇《Hello World》。',
        'Astro 的魅力在于它的诚实：默认输出纯粹、极速的 HTML 与 CSS，同时允许你在任何需要丰富动效的地方无缝嵌入 React、Vue 或原生脚本孤岛。对于个人主页而言，这意味着首页首屏可以在几十毫秒内完成绘制，而作品集筛选器、实时时钟与文章页依然拥有丝滑的现代交互体验。',
      ],
    },
  ] as NoteItem[],

  // ===== 当前状态切片（Now / Modular Bento 块，后续可随时增删模块） =====
  nowSlice: {
    updatedAt: '2026.10',
    building: '正在打磨一套面向个人创作者的杂志风 Astro 主题与自动化内容管线。',
    reading: '《The Elements of Typographic Style》— Robert Bringhurst',
    exploring: 'Agentic Design Systems · 本地小模型辅助排版引擎 · WebGPU 粒子排版',
    metrics: [
      { label: '开源项目星标', value: '3.2k+' },
      { label: '已发表长文', value: '42 篇' },
      { label: '独立构建产品', value: '9 个' },
    ],
  },

  // ===== 社交与外部链接 =====
  socials: [
    { label: 'GitHub', handle: '@linxiao-dev', url: 'https://github.com' },
    { label: 'X / Twitter', handle: '@linxiao_studio', url: 'https://x.com' },
    { label: 'Jike / 即刻', handle: '@林骁_LX', url: 'https://okjk.co' },
    { label: 'RSS 订阅', handle: 'Atom / XML', url: '/notes/design-against-templates' },
  ],
};
