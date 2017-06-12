<template>
  <div class='new-case-form'>
    <div class="row">
      <div class="col input-group">
        <span class="input-group-addon">Case ID</span>
        <input class='form-control' type="text" name="" value="">
      </div>
      <div class="col input-group">
        <span class='input-group-addon'>
          <input type="checkbox" name="" value="">
        </span>
        <span class='input-group-addon'>OT</span>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col input-group">
        <span class="input-group-addon">Assignee</span>
        <input class='form-control' type="text" name="" value="">
      </div>
      <div class="col input-group">
        <span class='input-group-addon'>
          <input type="checkbox" name="" value="">
        </span>
        <span class='input-group-addon'>Callback</span>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col input-group">
        <span class="input-group-addon">Severity</span>
        <input class='form-control' type="text" name="" value="">
      </div>
      <div class="col input-group">
        <span class='input-group-addon'>
          <input type="checkbox" name="" value="">
        </span>
        <span class='input-group-addon'>Elevation</span>
      </div>
    </div>
    <br>
    <div>
      <button v-on:click='insertNew' class='btn btn-primary'>Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-case-form',
  data: function() {
    return {

    }
  },
  methods: {
    insertNew: function() {
      this.$emit('insertNew')
    }
  }
}
</script>

<style lang="css">
</style>
