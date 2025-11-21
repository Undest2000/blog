import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const base = "/blog/";
export default defineConfig(
  {
    base,
    title: "Undest的博客",
    description: "心得,领悟,成长",
    themeConfig: {
      search: {
        provider: 'local'
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/' },
        { text: '目录', link: '/tech_note' }
      ],

      sidebar: [
        {
          text: '工作中的技术笔记',
          items: [
            { text: '工作中的技术笔记', link: '/tech_note' },
          ]
        },
        {
          text: 'vue3的笔记',
          items: [
            { text: 'vue3的笔记', link: '/vue3' },
          ]
        },
        {
          text: '多线程相关',
          items: [
            { text: '多线程相关', link: '/multi_thread' },
          ]
        },
        {
          text: '事务相关',
          items: [
            { text: '事务相关', link: '/transaction' },
          ]
        },
        {
          text: 'nginx',
          items: [
            { text: 'nginx', link: '/nginx' },
          ]
        },
        {
          text: 'Redis缓存的demo及相关命令',
          items: [
            { text: 'Redis缓存的demo及相关命令', link: '/redis_demo' },
          ]
        },
        {
          text: 'css相关',
          items: [
            { text: 'css相关', link: '/css' },
          ]
        },
        {
          text: 'MYSQL',
          items: [
            { text: 'MYSQL', link: '/mysql' },
          ]
        },
        {
          text: 'Spring',
          items: [
            { text: 'Spring', link: '/spring' },
          ]
        },
        {
          text: 'k8s',
          items: [
            { text: 'k8s', link: '/k8s' },
          ]
        },
        {
          text: 'Java基础',
          items: [
            { text: 'Java基础', link: '/java_base' },
          ]
        },
        {
          text: 'docker',
          items: [
            { text: 'docker相关', link: '/docker' },
          ]
        }
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/Undest2000' },
        {
          icon: {
            svg: '<img src="/blog/segmentFault.svg"/>'
          }, link: 'https://segmentfault.com/u/undest'
        }
      ]
    }
  })
