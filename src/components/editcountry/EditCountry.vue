<template>
    <div class="center-container">
      <div class="container">
        <div class="col-4">
          <input type="text" class="form-control" placeholder="Name" v-model="updatecountry.Name" maxlength="50"/>
        </div>
        <div>
        <input type="text" class="form-control" placeholder="Description" v-model="updatecountry.Description" maxlength="50"/>
        </div>
        
       
        <div class="col-4">
          <button type="button" class="btn btn-primary"  @click.prevent="countryupdate">Update Country</button>
        </div>
      </div>
    </div>
  </template>
    <script src="../editcountry/EditCountry.js"></script>