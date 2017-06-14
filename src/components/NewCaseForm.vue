  <template>
  <div class='new-case-form'>
    <div class="row">
      <div class="col input-group">
        <span class="input-group-addon">Case ID</span>
        <input v-model='caseInfo.caseID' class='form-control' type="text" name="" value="">
      </div>
      <div class="col input-group">
        <span class='input-group-addon'>
          <input v-model='caseInfo.ot' type="checkbox" name="" value="">
        </span>
        <span class='input-group-addon'>OT</span>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col input-group">
        <span class="input-group-addon">Assignee</span>
        <input v-model='caseInfo.assignee' class='form-control' type="text" name="" value="">
      </div>
      <div class="col input-group">
        <span class='input-group-addon'>
          <input v-model='caseInfo.callback' type="checkbox" name="" value="">
        </span>
        <span class='input-group-addon'>Callback</span>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col input-group">
        <span class="input-group-addon">Severity</span>
        <input v-model='caseInfo.severity' class='form-control' type="text" name="" value="">
      </div>
      <div class="col input-group">
        <span class='input-group-addon'>
          <input v-model='caseInfo.elevation' type="checkbox" name="" value="">
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
      caseInfo: {
        caseID: '',
        assignee: '',
        severity: '',
        ot: false,
        callback: false,
        elevation: false
      }
    }
  },
  methods: {
    insertNew: function() {
      this.eventHub.$emit('insertNew', this.caseInfo)
    }
  }
}
</script>

<style lang="css">
</style>
