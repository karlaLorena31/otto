<template>
  <div class="container-fluid ">
    <div class="col-lg-12  ">
      <h5 class="pt-4 ">Listado</h5>
      <hr />
    </div>
    <div class=" m-auto  ">
      <div class="d-flex flex-row justify-content-between">
        <h4>Listado de juguetes </h4>
        <router-link to= "/">Volver a Home</router-link>      
      </div>
    </div>
    <TablaAxios />
  </div>
</template>

<script>

import TablaAxios from "../components/TablaAxios.vue";

export default {
  name: "List",
  components: {
  
    TablaAxios,
  },
};
</script>
