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
    /*['script', {}, `
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

      gtag('config', 'UA-166137413-1',{
        'user_id': 'USER_ID_003'
      });`
    ]*/
    /*['script', {}, `
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }
      i[r].l = 1 * new Date()
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
      ga('create', 'UA-166137413-1', 'auto');`
    ]*/
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置google_analytics
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/web/js/' },
          { text: 'VuePress', link: '/web/vuepress/' },
          { text: 'test', link: 'http://192.168.36.1:9527/'}
        ]
      },
      { text: 'GA', link: '/ga/' },
      { text: '碎言碎语', link: '/others/' },
      { text: '测试', link: 'https://www.eufylife.com/de/products/602/haushaltsgerate?utm_source=test&utm_medium=test&utm_campaign=test&utm_content=sparkx_index_ig_dog-image' }    
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};