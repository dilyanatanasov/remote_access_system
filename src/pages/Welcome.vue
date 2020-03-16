<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card p-3">
        <h1>Welcome, {{loggedUser.name}}</h1>
        <div role="alert" class="alert alert-danger">
          <div class="container">
            <span>
              You have {{loggedUser.unfinishedTasks}} unfinished tasks, please check them out
            </span>
            <button type="button" aria-label="Close" class="close">
              <span aria-hidden="true">
                <i class="tim-icons icon-simple-remove"></i>
              </span>
            </button>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card p-3">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet nibh sed lectus sollicitudin, sit amet rhoncus ligula porta. Proin vestibulum iaculis arcu. Suspendisse nec turpis eu lorem lacinia volutpat ut non justo. Praesent a nibh erat. Donec vitae nisi enim. Etiam consectetur, magna quis faucibus elementum, turpis quam ultricies massa, eu viverra lorem velit quis risus. Nulla et sodales tellus, a bibendum ex. Ut pharetra, lorem vel feugiat maximus, orci ex tempus massa, vitae facilisis risus augue a magna. Pellentesque quis tincidunt leo, quis varius massa.</p>
        <p>Proin ex est, vehicula at tempus sit amet, faucibus eu justo. Praesent sollicitudin ultrices luctus. Donec euismod ipsum eget velit pretium, sit amet accumsan augue tempus. Nullam sed efficitur lectus. Integer dui leo, porttitor nec sem in, malesuada eleifend lacus. Mauris urna lectus, viverra eu aliquet sed, hendrerit eleifend arcu. Ut libero ligula, sollicitudin id libero eget, imperdiet dapibus ipsum. Fusce nunc turpis, elementum eget vulputate sed, faucibus id tortor. Nunc et pulvinar tellus. Donec vestibulum neque nec lectus volutpat, id iaculis est pulvinar. Morbi tincidunt laoreet orci quis auctor. Ut at placerat purus.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loggedUser: {
        name: "Dilyan",
        unfinishedTasks: 3
      }
    };
  }
};
</script>
<style>
</style>
