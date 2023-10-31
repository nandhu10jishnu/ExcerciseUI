<template>

<!-- Top Navigation -->

<nav class="navbar navbar-expand-lg navbar-light" :style="{ backgroundColor: getNavbarstatus ? '#273c75' : 'transparent' }" v-if="getNavbarstatus">
    <a class="navbar-brand" href="#" style="color: white;">MEDICITY</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" >
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#" style="color: white;">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style="color: white;">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style="color: white;">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style="color: white;">Logout</a>
            </li>
        </ul>
    </div>
</nav>
<div class="container-fluid">
    <div class="row">
      <!-- Left Sidebar -->
      <nav class="col-md-3 col-lg-2 d-md-block sidebar" v-bind:style="{ backgroundColor: getNavbarstatus ? '#282A35' : 'transparent', height: '100vh' }" v-if="getNavbarstatus">
        <div class="position-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" style="color: white;" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="color: white;" href="#">Designation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="color: white;" href="#">Project</a>
            </li>
            

          </ul>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <!-- Your page content goes here -->
        <router-view />
      </main>
    </div>
  </div>
</template>
<script src="../common/NavigationBar.js"></script>