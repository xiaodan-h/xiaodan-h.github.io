import VueGtm from 'vue-gtm';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({
    Vue,
    router
}) => {
  Vue.use(ElementUI);
  Vue.use(VueGtm, {
    id: 'GTM-WQRGMC6', // Your GTM single container ID or array of container ids ['GTM-xxxxxxx', 'GTM-yyyyyyy']
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional) 
  });
  router.afterEach(function (to) {
    if (gtag) {
      gtag('config', 'UA-166137413-1', {'page_path': to.fullPath});
    }
  })
}


