<template>
  <div class="center-container">
    <div class="container">
      <div class="col-4">
        <input type="text" class="form-control" placeholder="Name" v-model="country.Name" maxlength="50"/>
      </div>
      <div>
      <input type="text" class="form-control" placeholder="Description" v-model="country.Description" maxlength="50"/>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-primary"  @click.prevent="saveCountry">Create country</button>
      </div>
    </div>
  </div>
</template>
  <script src="../createcountry/CreateCountry.js"></script>
 
    
        
      
