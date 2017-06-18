<template>
  <div class='qm-client'>
  	<template v-if="authenticated()">
      <new-case-form></new-case-form>
      <br>
      <case-list></case-list>
    </template>
    <template v-else>
      <login-page></login-page>
    </template>
  </div>
</template>

<script>
import NewCaseForm from './NewCaseForm.vue'
import CaseList from './CaseList.vue'
import LoginPage from './LoginPage.vue'

export default {
  name: 'qm-client',
  components: {
    newCaseForm: NewCaseForm,
    caseList: CaseList,
    loginPage: LoginPage
  },
  data: function() {
    return {}
  },
  methods: {
    authenticated: function() {
      return false
    }
  }
}
</script>

<style lang="css">
.qm-client {
  margin: 30px;
}
</style>
