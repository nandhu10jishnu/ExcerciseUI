<template>
    <div><button class="btn btn-primary">Add</button></div>
    <div class="container mt-4">
            <h1>Designation List</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee, index) in employees" :key="index">
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.email }}</td>
                        <td><button class="btn btn-primary" @click="editEmployee(index)">Edit</button></td>
                        <td> <button class="btn btn-danger" @click="deleteEmployee(index)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>
<script src="../listdesignation/ListDesignation"></script>