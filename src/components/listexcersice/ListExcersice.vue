<template>
    <div><button class="btn btn-primary" @click="createpage()">Add</button></div>
    <div class="container mt-4">
            <h1>Excersice List</h1>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th> Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="exc in excersicelist" :key="exc.id">
                        <td>{{ exc.username }}</td>
                        <td>{{ exc.description }}</td>
                        <td>{{ exc.duration }}</td>
                        <td>{{ exc.date }}</td>
                        <td><button class="btn btn-primary" @click="editExcersice(exc._id)">Edit</button></td>
                        <td> <button class="btn btn-danger" @click="deleteExcersice(exc._id)">Delete</button></td>
                    </tr>
                </tbody>             
  </table>
</div>
</template>
<script src="../listexcersice/ListExcersice.js"></script>