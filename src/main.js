import Vue from 'vue'
import QmClient from './components/QMClient.vue'

const eventHub = new Vue({})

Vue.mixin({
  data: function() {
    return {
      eventHub: eventHub
    }
  }
})

new Vue({
  el: '#qm-client',
  render: h => h(QmClient)
})
