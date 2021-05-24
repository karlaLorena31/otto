<template>
  <div class="container-fluid">
    <h2 class="text-center py-5  ">Autentificación</h2>
    <div class="row justify-content-center ">
      <div class="col-12  col-sm-12 col-md-4 ">
        <form
          class=" m-auto p-5 borde "
          id="signup-form"
          @submit.prevent="login"
        >
          <div class="form-group  ">
            <label for="email">Email </label>
            <input
              type="email"
              class="form-control "
              id="email"
              v-model="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="pass"
            />
          </div>
          <div class="d-flex flex-row justify-content-center  ">
            <button  class="btn btn-primary btn-lg  col-sm-12 ">Login</button>

           <!--  <button  v-if="error"  class="btn btn-primary btn-lg  col-sm-12 ">
              <span class="spinner-border spinner-border-sm"></span>
              wait...
          </button>-->

         
          </div>
          <div class="form-group  text-center">
            <p>
              No tienes una cuenta?
              <router-link class="nav-link " to="/register"
                >Registrate</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      pass: "",
      error: false
    }
  },

  methods: {
    async login() {
      try {
        await auth.login(this.email, this.pass);
        const user = {
          email: this.email
        };
        auth.setUserLogged(user);
        this.$router.push("/listado");
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
.form.group {
  margin: 0 auto;
}
.borde {
  border: 2px solid blueviolet;
}</style
>>
