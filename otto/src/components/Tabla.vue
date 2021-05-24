<template>
<div class="container">
  <div class="row ">
      <div class="table-responsive">
        <table class=" table table-sm table-hover text-center">
          <thead>
            <tr>
             
              <th>Código</th>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody class="table-success text-center ">
            <tr v-for="(juguete,index) in productos"
              :key="index" >            
               
              <td>
                <b>{{juguete.cod}}</b>
              </td>
              <td>{{juguete.name}}</td>
              <td>{{juguete.stock}}</td>
              <td>${{juguete.price}}</td>
              <td class="text-center">
                     <router-link :to="{name:'UserEdit',params:{id:juguete.id}}" class="btn btn-success boton"> ✔️</router-link>
              </td>
              <td>
                <button
                  @click.prevent="deleteJuguete(index)"
                  class="btn btn-danger boton"
                >
               ❌
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
 
 </div>
    
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: "List",

  computed:{
    ...mapGetters(["productos"])
  },
  
  methods:{
    ...mapActions(["deleteJuguete"]) 
  },
  
  
};
</script>

<style scoped>

</style>