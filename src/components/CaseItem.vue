<template>
    <tr>
      <td>{{date}}</td>
      <td>{{caseID}}</td>
      <td>{{qm}}</td>
      <td>{{assignee}}</td>
      <td>{{ot}}</td>
      <td>{{severity}}</td>
      <td>{{callback}}</td>
      <td>{{elevation}}</td>
      <td>{{fts}}</td>
    </tr>
</template>

<script>
export default {
  name: 'case-item',
  data () {
    return {
      date: new Date(),
      caseID: 5320168498,
      qm: 'Angel Araya',
      assignee: 'Angel Araya',
      ot: 'No',
      severity: 2,
      callback: 'No',
      elevation: 'No',
      fts: 'No'
    }
  }
}
</script>

<style lang="css">
</style>
