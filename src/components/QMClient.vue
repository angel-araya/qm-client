<template>
  <div class='qm-client'>
    <new-case-form v-on:insertNew='insertNew'></new-case-form>
    <br>
    <case-list></case-list>
  </div>
</template>

<script>
export default {
  name: 'qm-client',
  data: function () {
    return {

    }
  },
  methods: {
    insertNew: function() {
      alert('Inseting new from QMClient')
    }
  }
}
</script>

<style lang="css">
.qm-client {
  margin: 30px;
}
</style>
