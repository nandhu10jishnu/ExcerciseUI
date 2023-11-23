<template>
    <div>
            <h1>Student Registeration</h1>
            <div class="mb-3">
                <label>StudentName</label>
                <input type="text" class="form-control form-control-lg"  v-model="register.StudentName"/>
            </div>
            <div class="mb-3">
                <label>FatherName</label>
                <input type="text" class="form-control form-control-lg"  v-model="register.FatherName"/>
            </div>
            <div class="mb-3">
                <label>MotherName</label>
                <input type="text" class="form-control form-control-lg"  v-model="register.MotherName"/>
            </div>
            <span>Gender</span><br>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Male</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Female</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Trans</label>MotherName
  <v-model="register.Gender"/>
</div>
<div class="mb-3">
                <label>Telephone</label>
                <input type="text" class="form-control form-control-lg" v-model="register.Telephone" />
            </div>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    <v-model="register.Email" />
  </div>
            <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
    </b-col>
    <b-col>
      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
    </b-col>
  </b-row>
  <div>
  <b-dropdown id="dropdown-1" text="Level" class="m-md-2">
    <b-dropdown-item>SSLC</b-dropdown-item>
    <b-dropdown-item>PlusTwo</b-dropdown-item>
    <b-dropdown-item>Graduation</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
  </b-dropdown>
  <v-model="register.Level" />
</div>
      
            <button type="submit" class="btn btn-dark btn-lg btn-block">Register</button>
            
            <div class="social-icons">
                
            </div>
       
    </div>
</template>
<script src="../registration/RegistrationPage.js"></script>