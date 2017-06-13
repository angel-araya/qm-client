<template>
  <div class='qm-client'>
    <new-case-form v-on:insertNew='insertNew'></new-case-form>
    <br>
    <case-list></case-list>
  </div>
</template>

<script>
import NewCaseForm from './NewCaseForm.vue'
import CaseList from './CaseList.vue'
export default {
  name: 'qm-client',
  components: {
    newCaseForm: NewCaseForm,
    caseList: CaseList
  },
  data: function () {
    return {

    }
  },
  methods: {
    insertNew: function() {
    }
  }
}
</script>

<style lang="css">
.qm-client {
  margin: 30px;
}
</style>
