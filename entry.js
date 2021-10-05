import Page from './Page'
import store from './store'

window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    store,
    'render': h => h(Page),
  }).$mount('#app')
})
