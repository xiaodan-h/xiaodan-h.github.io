(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{579:function(e,t,r){"use strict";r.r(t);var a=r(71),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"介绍（copy了官网文档作为测试）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍（copy了官网文档作为测试）"}},[e._v("#")]),e._v(" 介绍（copy了官网文档作为测试）")]),e._v(" "),r("p",[e._v("VuePress 由两部分组成：第一部分是一个 "),r("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core",target:"_blank",rel:"noopener noreferrer"}},[e._v("极简静态网站生成器"),r("OutboundLink")],1),e._v("，w它包含由 Vue 驱动的"),r("RouterLink",{attrs:{to:"/theme/"}},[e._v("主题系统")]),e._v(" and "),r("RouterLink",{attrs:{to:"/plugin/"}},[e._v("插件API")]),e._v(", 另一个部分是为书写技术文档而优化的[d默认主题(../theme/default-theme-config.md)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。")],1),e._v(" "),r("p",[e._v("每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")]),e._v(" "),r("h2",{attrs:{id:"它是如何工作的？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的？"}},[e._v("#")]),e._v(" 它是如何工作的？")]),e._v(" "),r("p",[e._v("事实上，一个 VuePress 网站是一个由 "),r("a",{attrs:{href:"http://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v("、 "),r("a",{attrs:{href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Router"),r("OutboundLink")],1),e._v("和 "),r("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1),e._v("。驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。")]),e._v(" "),r("p",[e._v("在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nuxt"),r("OutboundLink")],1),e._v("的 nuxt generate 命令，以及其他的一些项目，比如 "),r("a",{attrs:{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gatsby"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"为什么不是"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是"}},[e._v("#")]),e._v(" 为什么不是...?")]),e._v(" "),r("h3",{attrs:{id:"nuxt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nuxt"}},[e._v("#")]),e._v(" Nuxt")]),e._v(" "),r("p",[e._v("VuePress 能做的事情，Nuxt 理论上确实能够胜任，但 Nuxt 是为构建应用程序而生的，而 VuePress 则专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性。")]),e._v(" "),r("h3",{attrs:{id:"docsify-docute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docsify-docute"}},[e._v("#")]),e._v(" Docsify / Docute")]),e._v(" "),r("p",[e._v("这两个项目同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好。如果你并不关注 SEO，同时也不想安装大量依赖，它们仍然是非常好的选择！")]),e._v(" "),r("h3",{attrs:{id:"hexo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hexo"}},[e._v("#")]),e._v(" Hexo")]),e._v(" "),r("p",[e._v("Hexo 一直驱动着 Vue 的文档 —— 事实上，在把我们的主站从 Hexo 迁移到 VuePress 之前，我们可能还有很长的路要走。Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串，而我们十分希望能够好好地利用 Vue 来处理我们的布局和交互，同时，Hexo 的 Markdown 渲染的配置也不是最灵活的。")]),e._v(" "),r("h3",{attrs:{id:"gitbook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gitbook"}},[e._v("#")]),e._v(" GitBook")]),e._v(" "),r("p",[e._v("我们的子项目文档一直都在使用 GitBook。GitBook 最大的问题在于当文件很多时，每次编辑后的重新加载时间长得令人无法忍受。它的默认主题导航结构也比较有限制性，并且，主题系统也不是 Vue 驱动的。GitBook 背后的团队如今也更专注于将其打造为一个商业产品而不是开源工具。")])])}),[],!1,null,null,null);t.default=s.exports}}]);