
<template>
  <div class="login-page">
    <br>
    <div class="input-group">
      <span class='input-group-addon'>Username</span>
      <input v-model='username' class='form-control' type="text">
    </div>
    <br>
    <div class="input-group">
      <span class='input-group-addon'>Password</span>
      <input class='form-control' type="password">
    </div>
    <br>
    <button @click='test' v-model='password' class='btn btn-primary' type="button">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  mounted: function() {},
  methods: {
    test: function() {
      console.log(this.username)
      console.log(this.password)
    }
  }
}
</script>

<style lang="css">
</style>
