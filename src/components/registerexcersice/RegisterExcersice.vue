<template>
    <div>
            <h1>Registeration</h1>
            <div class="mb-3">
                <label>FirstName</label>
                <input type="text" class="form-control form-control-lg" />
            </div>
            <div class="mb-3">
                <label>MiddelName</label>
                <input type="text" class="form-control form-control-lg" />
            </div>
            <div class="mb-3">
                <label>LastName</label>
                <input type="text" class="form-control form-control-lg" />
            </div>
            <span>Gender</span><br>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Male</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Female</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Trans</label>
</div>
      
      
      
      <div class="mb-3">
                <label>Adress</label>
                <input type="text area" class="form-control form-control-lg" />
            </div>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Register</button>
            
            <div class="social-icons">
                
            </div>
       
    </div>
</template>
<script src="../registerexcersice/RegisterExcersice.js"></script>