<template>
    <div class="jumbotron jumbotron-fluid">
      <div class="login-container">
        <h1>LogIn</h1>
        <div class="col-4">
          <label>Email address</label>
          <input class="form-control" placeholder="Username" v-model="createuser.Username" />
          <span class="errorClass" v-if="errors[0] == true"> {{ errormessage[0] }}</span>
        </div>
        <div class="col-4">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="createuser.Password" />
          <span class="errorClass" v-if="errors[1] == true"> {{ errormessage[1] }}</span>
        </div>
        <button type="submit" class="btn btn-dark" @click.prevent="loginclick">LogIn</button>
        <p class="forgot-password">
          <router-link to="/">Forgot password ?</router-link>
        </p>
        <div class="social-icons"></div>
      </div>
    </div>
  </template>
<script src="../loginexcersice/LoginExcersice.js"></script>
<style scoped>



.errorClass {
  color: red;
}
</style>