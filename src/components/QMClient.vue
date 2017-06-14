<template>
  <div class='qm-client'>
    <new-case-form></new-case-form>
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
  }
}
</script>

<style lang="css">
.qm-client {
  margin: 30px;
}
</style>
