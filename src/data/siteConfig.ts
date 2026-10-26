export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  summary: string;
  tech: string[];
  link?: string;
  repo?: string;
}

export interface NoteItem {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category: string;
  readingTime?: string;
  excerpt: string;
  content: string[];
}

export const siteConfig = {
  // ===== 基础信息（未填写的字段在页面上均以留白/待添加状态展示，绝不胡编） =====
  name: '岚',
  handle: 'Almighty-23',
  tagline: '', // 个人一句话简介（留空则显示待填写占位）
  bio: '',     // 个人详细介绍（留空则显示待填写占位）
  location: '',
  status: '',
  email: '',
  github: 'https://github.com/Almighty-23',

  // ===== 网站目录结构 =====
  nav: [
    { id: 'about', label: '关于 / About' },
    { id: 'projects', label: '作品集 / Projects' },
    { id: 'notes', label: '文章笔记 / Notes' },
    { id: 'now', label: '当下 / Now' },
    { id: 'contact', label: '联络 / Contact' },
  ],

  // ===== 作品集分类目录 =====
  projectCategories: ['全部', '项目开发', '实验作品', '开源工具'],

  // ===== 作品列表（当前置空，添加对象后自动渲染卡片） =====
  projects: [] as ProjectItem[],

  // ===== 文章与笔记分类目录 =====
  noteCategories: ['全部', '技术笔记', '随笔思考', '阅读归档'],

  // ===== 文章列表（当前置空，添加对象后自动渲染文章行与阅读页） =====
  notes: [] as NoteItem[],

  // ===== 社交与外部链接目录 =====
  socials: [
    { label: 'GitHub', url: 'https://github.com/Almighty-23', value: '@Almighty-23' },
    { label: 'Email', url: '', value: '待添加' },
    { label: 'RSS', url: '', value: '待开启' },
  ],
};
