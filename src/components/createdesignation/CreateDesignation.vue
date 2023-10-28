<template>
  <div class="center-container">
    <div class="container">
      <div class="col-4">
        <input type="text" class="form-control" placeholder="Name" v-model="createname.Name" maxlength="50"/>
      </div>
      <div>
      <input type="text" class="form-control" placeholder="Description" v-model="createname.Description" maxlength="50"/>
      </div>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" v-model="createname.Active">
  <label class="form-check-label" for="flexCheckIndeterminate">
    Active
  </label>
</div>
     
      <div class="col-4">
        <button type="button" class="btn btn-primary"  @click.prevent="saveUser">Create Designation</button>
      </div>
    </div>
  </div>
</template>
  <script src="../createdesignation/CreateDesignation.js"></script>
  <style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
}

.col-4 {
  flex: 1;
  margin: 5px;
}
</style>