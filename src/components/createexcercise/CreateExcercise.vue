<template>
  <!-- <div class="center-container"> -->
    <div>
      <div class="col-4">
        <input type="text" class="form-control" placeholder="UserName" v-model="createUser.username" maxlength="50"/>
      </div>
     
      <div class="col-4">
        <button type="button" class="btn btn-primary"  @click.prevent="saveUser">Add User</button>
      </div>
    </div>
  <!-- </div> -->
</template>
  <script src="../createexcercise/CreateExcercise.js"></script>
  