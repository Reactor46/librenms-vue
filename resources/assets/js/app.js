
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.Vue = require('vue');
import mixin from './Mixin/librenms.js';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('libre-button', require('./components/LibreButton.vue'));
Vue.component('libre-input', require('./components/LibreInput.vue'));
Vue.component('libre-select', require('./components/LibreSelect.vue'));
Vue.component('libre-sidebar', require('./components/Sidebar/LibreSidebar.vue'));
Vue.component('sidebar-item', require('./components/Sidebar/SidebarItem.vue'));
Vue.component('sidebar-group', require('./components/Sidebar/SidebarGroup.vue'));

Vue.directive('click-outside', {
    bind: function (el, binding, vNode) {
        // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
        const compName = vNode.context.name
        let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
        if (compName) { warn += `Found in component '${compName}'` }
  
        console.warn(warn)
      }
      // Define Handler and cache it on the element
      const bubble = binding.modifiers.bubble
      const handler = (e) => {
        if (bubble || (!el.contains(e.target) && el !== e.target)) {
          binding.value(e)
        }
      }
      el.__vueClickOutside__ = handler
  
      // add Event Listeners
      document.addEventListener('click', handler)
      document.addEventListener("touchstart", handler, false);

    },
  
    unbind: function (el, binding) {
      // Remove Event Listeners
      document.removeEventListener('click', el.__vueClickOutside__)
      document.removeEventListener("touchstart", el.__vueClickOutside__);
      el.__vueClickOutside__ = null
  
    }
  });

Vue.mixin(mixin);
const app = new Vue({
    el: '#app',
    data: {
      active: false,
      theme: 'green'
    },
    methods: {
      sidebar(value) {
        
        this.theme = value;
      }
    }
});
