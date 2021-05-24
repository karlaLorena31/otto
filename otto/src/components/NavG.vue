<template>

<div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-success" >OTTO KLAUSS</a>
  <button class="navbar-toggler bg-success" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
           
      <li class="nav-item">
        <a>
          <router-link class="nav-link text-success" to="/" >HOME</router-link>
        </a>
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0">     
     <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><router-link class="text-white" to="/login"> 🔐</router-link></button>
    </div>
  </div>
</nav>
</div> 
</template>
<script>

export default {
    name: 'NavG',    
}
</script>

<style>

</style>