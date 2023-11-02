<template>
    <div><button class="btn btn-primary">Add</button></div>
    <div class="container mt-4">
            <h1>Designation List</h1>
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
                    <tr v-for="des in designationlist" :key="des.id">
                        <td>{{ des.Name }}</td>
                        <td>{{ des.Description }}</td>
                        <td><button class="btn btn-primary" @click="editEmployee(des.id)">Edit</button></td>
                        <td> <button class="btn btn-danger" @click="deleteEmployee(des.id)">Delete</button></td>
                    </tr>
                </tbody>             
  </table>
</div>
</template>
<script src="../listdesignation/ListDesignation.js"></script>