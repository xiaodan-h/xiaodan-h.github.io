module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.png' }],
    /*['link', { rel: 'manifest', href: '/images/photo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.png' }],*/
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}],
    ['script', {}, `
      var _hmt = _hmt || [];
      window._hmt = _hmt;
      (function() {
      // 引入谷歌,不需要可删除这段
      var hm1 = document.createElement("script");
      hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-166137413-1";
      var s1 = document.getElementsByTagName("script")[0]; 
      s1.parentNode.insertBefore(hm1, s1);
      })();

      // 谷歌加载,不需要可删除
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-166137413-1');`
    ]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置google_analytics
      { text: '我的主页', link: '/'},
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/web/js/' },
          { text: 'VuePress', link: '/web/vuepress/' }
        ]
      },
      {text: 'GA', link: '/ga/'},
      {text: '碎言碎语', link: '/others/'}     
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};