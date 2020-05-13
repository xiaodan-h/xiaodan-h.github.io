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
    });
    //ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad);
    router.afterEach(function (to) {
      console.log(to.path)
      if (gtag) {
        gtag('config','UA-166137413-1', { 'page_path': to.path });
        //ga('set', 'page', to.path)
        //ga('send', 'pageview');

      }
    })*/
  }
}
