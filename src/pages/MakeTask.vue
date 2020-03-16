<template>
  <card>
    <h3 slot="header" class="title">Create Task</h3>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="Task Name"
                  placeholder="Static Routing"
                  v-model="model.company"
                  disabled>
        </base-input>
      </div>
      <div class="col-md-4 pr-md-1">
        <base-input label="Assigne"
                  placeholder="Dilyan Atanasov"
                  v-model="model.company"
                  disabled>
        </base-input>
      </div>
      <div class="col-md-4 pr-md-1">
        <base-input label="Due Date"
                  placeholder="2020-03-31"
                  v-model="model.company"
                  disabled>
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input>
          <label>Description</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="Here can be your description"
                    v-model="model.about">

              </textarea>
        </base-input>
      </div>
    </div>
    <base-button slot="footer" type="primary" fill>Save</base-button>
    <base-button slot="footer" type="warning" class="ml-2">Attach File</base-button>
  </card>
</template>
<script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
</style>
