<template>
  <div id="app">
    <div v-if="userLogged">    
      <NavUser/>     
    </div>
    <div v-else>
      <NavG/>
    </div>

 
<div class="container-fluid">
  <div class="row mt-5">
    <div class=" col-12 col-md-12 col-lg-12" >
  <transition name="fade">
       <router-view> </router-view >
</transition>

    </div>
  </div>
  <div class="row mt-5 ">
      <div class=" col-12 col-md-12 col-lg-12  bg-dark">
       
      <Footer/>
        
      </div>
    </div>
</div>
    
   
  </div>
</template>

<script>

import NavG from "../src/components/NavG";
import NavUser from "../src/components/NavUser";
import Footer from '../src/components/Footer'
import auth from "@/logic/auth";
export default {
  name: "App",
  components: {
    NavG,
    NavUser,
    Footer
  }, 

  computed: {
    userLogged() {     
      return  auth.getUserLogged();
    }   
  }, 
}
</script>







<style>

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .3s;
}
 
.fade-enter-active {
  transition-delay: .25s;
}
 
.fade-enter, .fade-leave-active {
  opacity: 0;
}</style>
