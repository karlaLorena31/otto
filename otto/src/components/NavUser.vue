<template>
<div >
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-success" >OTTO KLAUSS</a>
  <button class="navbar-toggler bg-success" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
           
      <li class="nav-item">
         <router-link class="nav-link text-success" to="/" >HOME</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link text-success" to="/listado">LISTADO</router-link>
      </li>

       <li class="nav-item">
         <router-link class="nav-link text-success" to="/listadoAxios">LISTADO CON AXIOS</router-link>
      </li>
    </ul>

    <form class="form-inline my-2 my-lg-0">
      <p class=" mr-sm-2 text-success pr-5 pt-2 ">Autorizado....  </p>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="logout" >🔓</button>
    </form>
  </div>
</nav>
</div> 
</template>
<script>
///import auth from "@/logic/auth";
import {mapActions} from 'vuex'
export default {

  name:'NavUser',



methods:{
    ...mapActions(['logout'])
  }

  }

  

</script>



<style>
.navbar{
  width: 100%;
  position: fixed;
  z-index: 100;
  top:0  
}
</style>