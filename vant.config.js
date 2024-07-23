
const dynamicNavs = require('./config/nav')

module.exports = {
  name: 'mobile-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/mobile-ui/',
    },
  },
  site: {
    title: 'mobile-ui',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
          {
            path: 'changelog',
            title: '更新日志',
          },
        ],
      },
      {
        title: '基础组件',
        items: dynamicNavs.navs
      },
    ],
  },
};
