<template>
  <div class="center-container">
    <div class="container">
      <div class="col-4">
        <input type="text" class="form-control" placeholder="City" />
      </div>
      <div class="col-4">
        <input type="text" class="form-control" placeholder="State" />
      </div>
      <div class="col-4">
        <input type="text" class="form-control" placeholder="Zip" />
      </div>
    </div>
  </div>
</template>
  <script src="../createexcercise/CreateExcercise.js"></script>
  <style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
}

.col-4 {
  flex: 1;
  margin: 5px;
}
</style>