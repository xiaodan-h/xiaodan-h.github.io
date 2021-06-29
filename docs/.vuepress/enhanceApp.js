import VueGtm from 'vue-gtm';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



export default ({
    Vue,
    router,
    store
}) => {
  Vue.use(ElementUI);
  
  Vue.use(VueGtm, {
    id: 'GTM-WH8HSHK', // Your GTM single container ID or array of container ids ['GTM-xxxxxxx', 'GTM-yyyyyyy']
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional) 
  });
  
  if (window.performance) {
    // Gets the number of milliseconds since page load
    // (and rounds the result since the value must be an integer).
    var timeSincePageLoad = Math.round(performance.now());
  
    // Sends the timing event to Google Analytics.
    /*
    gtag('event', 'timing_complete', {
      'name': 'load',
      'value': timeSincePageLoad,
      'event_category': 'JS Dependencies'
    });*/
    //ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad);
  }

  router.afterEach((to, from) => {
    console.log(to.path)
    /*
    if (ga) {
      // gtag('config','UA-166137413-1', { 'page_path': to.path });
      ga('set', 'page', to.path)
      ga(function(tracker) {
        ga('send', 'pageview', {
          'dimension1': tracker.get('clientId'),
          'dimension2': store.getters.id
        });
      });
    }
    window.dataLayer.push({
      'event': 'Pageview',
      'pagePath': to.path, // 新页面的页面Path
      'pageName': to.name // 新页面的页面Title
    });*/
  });
}
