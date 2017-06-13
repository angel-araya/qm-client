<template>
  <div class="case-list">
    <table class='table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Case ID</th>
          <th>QM</th>
          <th>Asignee</th>
          <th>OT</th>
          <th>Severity</th>
          <th>Callback</th>
          <th>Elevation</th>
          <th>FTS</th>
        </tr>
      </thead>
      <case-item></case-item>
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
  data: function () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
