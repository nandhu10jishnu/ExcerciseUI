<template>
    <div><button class="btn btn-primary" @click="createpage()">Add</button></div>
    <div class="container mt-4">
            <h1>Country List</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cou in countrylist" :key="cou.id">
                        <td>{{ cou.Name }}</td>
                        <td>{{ cou.Description }}</td>
                        <td><button class="btn btn-primary" @click="editCountry(cou._id)">Edit</button></td>
                        <td> <button class="btn btn-danger" @click="deleteCountry(cou._id)">Delete</button></td>
                    </tr>
                </tbody>             
  </table>
</div>
</template>
<script src="../listcountry/ListCountry.js"></script>