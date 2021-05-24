<template>
<div class="container-fluid">
  <h2 class="text-center py-5 ">Registro</h2>
  <div class="row justify-content-center ">
    <div  class="col-12  col-sm-12 col-md-4 ">
       <form class=" m-auto p-5 borde" id="signup-form" @submit.prevent="register" >             
        <div class="form-group  ">
            <label for="email">Email </label>
            <input type="email" class="form-control " id="email" v-model="email" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
        <input type="password" class="form-control" v-model="pass" id="password"/>
        </div>

        <div class="d-flex flex-row justify-content-center  ">
            <!--<button  type="submit" class="btn btn-primary btn-lg col-sm-12">Registrar</button>-->
              <input class="form-submit" type="submit" value="Sign Up">
         <!--   <button v-if="xhrRequest" type="submit" class="btn btn-primary btn-lg col-sm-12">
              <span class="spinner-border spinner-border-sm"></span>wait...</button>-->
        </div>
        <div class="form-group text-center">
            <p> ya tienes una cuenta?<router-link class="nav-link " to="/login">Entra</router-link></p>
        </div>
      </form>
    </div>
  </div>


</div>
</template>

<script>

import auth from "@/logic/auth";
export default {
  name: "Registro",
  data(){
    return{
      pass:"",
      email:"",
      name:"",
      error: false
    }
  },
  methods: {
    async register() {
      try {
        await auth.register(this.email, this.pass);
       
        console.log(this.email)
        console.log(this.pass)
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>


 <style scoped>
.form.group{
 
  margin:0 auto;
}
 .borde{
   border: 2px solid blueviolet; 
  
  
 }

</style>>