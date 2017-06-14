import Vue from 'vue'
import QmClient from './components/QMClient.vue'
import NewCaseForm from './components/NewCaseForm.vue'
import CaseItem from './components/CaseItem.vue'
import CaseList from './components/CaseList.vue'

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
