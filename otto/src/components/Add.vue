<template>

<div>
  
        <!-- Botón en HTML (lanza el modal en Bootstrap) -->
        <button
          type="button"
          class="btn btn-success"
          data-toggle="modal"
          data-target="#abrirModal"
        >
          Agregar Juguetes
        </button>
        <!-- Modal / Ventana / Overlay en HTML -->
        <div
          class="modal fade"
          id="abrirModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Agregar Productos
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="container-fluid ">
                  <div class="row justify-content-center">
                    <div class="col-md-6 justify-content-center">
                      <form @submit.prevent="agregar" >

                        <div class="form-group">
                          <label>Codigo</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="juego.cod"
                            required
                           
                          />
                        </div>
                        <div class="form-group">
                          <label>Nombre Producto</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="juego.name"
                            required
                         
                          />
                        </div>

                        <div class="form-group">
                          <label>Stock</label>
                          <input
                            type="number"
                            class="form-control"
                            v-model="juego.stock"
                            required
                           
                          />
                        </div>
                        <div class="form-group">
                          <label>Precio</label>
                          <input
                            type="number"
                            class="form-control"
                            v-model="juego.price"
                            required
                            
                          />
                        </div>

                        <div class="form-group">
                          <button class="btn btn-success mr-3" >Agregar</button>
                          <button
                            type="button"
                            class="btn btn-success"
                            data-dismiss="modal"
                          >
                            Cerrar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
</template>

<script>

import {   mapGetters } from "vuex";
export default {
  name: "Add", 
  data(){
    return{
      juego:{}
    }
  },

computed:{
  ...mapGetters(["productos"])
},
  methods:{

   agregar(event) {
      event.preventDefault();
      const message = window.confirm("Esta seguro de agregar producto?");
      if (message=== true){
           this.$store.getters.productos.push({       
            cod: this.juego.cod,
            name: this.juego.name,
            stock: this.juego.stock,
            price: this.juego.price,
      })
      alert("Juguete ingresado al listado");
            this.juego.cod= ''
            this.juego.name = "";
            this.juego.stock = "";
            this.juego.price = "";
           
      }     
    }

 
  }

  
 
}
</script>

<style>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;  
}

</style>>


