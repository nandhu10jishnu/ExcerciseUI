<template>
  <div class="center-container">
    <div class="container">
      <div class="col-4">
        <input type="text" class="form-control" placeholder="UserName" v-model="createUser.username" maxlength="50"/>
      </div>
     
      <div class="col-4">
        <button type="button" class="btn btn-primary"  @click.prevent="saveUser">Add User</button>
      </div>
    </div>
  </div>
</template>
  <script src="../createexcercise/CreateExcercise.js"></script>
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