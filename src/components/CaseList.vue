<template>
  <div class="case-list">
    <table class='table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Case ID</th>
          <th>QM</th>
          <th>Assignee</th>
          <th>OT</th>
          <th>Severity</th>
          <th>Callback</th>
          <th>Elevation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='item in cases'>
          <td>{{item.date}}</td>
          <td>{{item.caseID}}</td>
          <td>{{item.qm}}</td>
          <td>{{item.assignee}}</td>
          <td>{{item.ot}}</td>
          <td>{{item.severity}}</td>
          <td>{{item.callback}}</td>
          <td>{{item.elevation}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CaseItem from './CaseItem.vue'
export default {
  name: 'case-list',
  components: {
    caseItem: CaseItem
  },
  data: function() {
    return {
      cases: []
    }
  },
  methods: {},
  created: function() {
    this.eventHub.$on('insertNew', caseInfo => {
      this.cases.push({
        date: caseInfo.date,
        caseID: caseInfo.caseID,
        qm: caseInfo.qm,
        assignee: caseInfo.assignee,
        ot: caseInfo.ot,
        severity: caseInfo.severity,
        callback: caseInfo.callback,
        elevation: caseInfo.elevation
      })
    })
  }
}
</script>

<style lang="css">
</style>
