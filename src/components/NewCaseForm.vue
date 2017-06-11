<template>
  <form action="index.html" method="post">
    <div class="row">
      <div class="col-md-6 input-group">
        <span class="input-group-addon">Case ID</span>
        <input class='form-control' type="text" name="" value="">
      </div>
      <div class="col-md-6 input-group">
        <span class='input-group-addon'>
          <input type="checkbox" name="" value="">
        </span>
        <span class='input-group-addon'>OT</span>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-6 input-group">
        <span class="input-group-addon">Assignee</span>
        <input class='form-control' type="text" name="" value="">
      </div>
      <div class="col-md-6 input-group">
        <span class='input-group-addon'>
          <input type="checkbox" name="" value="">
        </span>
        <span class='input-group-addon'>Callback</span>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-6 input-group">
        <span class="input-group-addon">Severity</span>
        <input class='form-control' type="text" name="" value="">
      </div>
      <div class="col-md-6 input-group">
        <span class='input-group-addon'>
          <input type="checkbox" name="" value="">
        </span>
        <span class='input-group-addon'>Elevation</span>
      </div>
    </div>
    <br>
    <div>
      <button class='btn btn-primary'>Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'new-case-form',
  data () {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
