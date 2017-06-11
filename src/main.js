import Vue from 'vue'
import QmClient from './components/QMClient.vue'
import NewCaseForm from './components/NewCaseForm.vue'
import CaseItem from './components/CaseItem.vue'
import CaseList from './components/CaseList.vue'

Vue.component('new-case-form', {
  render: h => h(NewCaseForm)
})

Vue.component('case-list', {
  render: h => h(CaseList)
})

Vue.component('case-item', {
  render: h => h(CaseItem)
})

new Vue({
  el: '#qm-client',
  render: h => h(QmClient)
})
