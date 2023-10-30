<template>
    <div>
            <h1>LogIn</h1>
            <div class="mb-3">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="mb-3">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block"  @click.prevent="loginclick">LogIn</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/">Forgot password ?</router-link>
            </p>
            <div class="social-icons">
                
            </div>
       
    </div>
</template>
<script src="../loginexcersice/LoginExcersice.js"></script>
