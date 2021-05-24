<template>
  <div class="container-fluid ">
    <div class="col-lg-12  ">
      <h5 class="pt-4 ">Listado</h5>
      <hr />
    </div>
    <div class=" m-auto  ">
      <div class="d-flex flex-row justify-content-between">
        <h4>Listado de juguetes Disponibles</h4>
        <router-link to= "/">Volver a Home</router-link>
        <Add />
      </div>
    </div>
    <Tabla />
  </div>
</template>

<script>

import Add from "../components/Add.vue";
import Tabla from "../components/Tabla.vue";

export default {
  name: "List",
  components: {
    Add,
    Tabla,
  },
};
</script>
