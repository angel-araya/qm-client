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
  data: function () {
    return {
      date: '',
      caseID: 0,
      qm: '',
      assignee: '',
      ot: false,
      severity: 0,
      callback: false,
      elevation: false
    }
  }
}
</script>

<style lang="css">
</style>
