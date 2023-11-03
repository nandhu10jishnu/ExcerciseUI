<template>
    <div class="center-container">
      <div class="container">
        <div class="col-4">
          <input type="text" class="form-control" placeholder="Name" v-model="updatedesignation.Name" maxlength="50"/>
        </div>
        <div>
        <input type="text" class="form-control" placeholder="Description" v-model="updatedesignation.Description" maxlength="50"/>
        </div>
        <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" v-model="updatedesignation.Active">
    <label class="form-check-label" for="flexCheckIndeterminate">
      Active
    </label>
  </div>
       
        <div class="col-4">
          <button type="button" class="btn btn-primary"  @click.prevent="designationupdate">Update Designation</button>
        </div>
      </div>
    </div>
  </template>
    <script src="../editdesignation/EditDesignation.js"></script>
   