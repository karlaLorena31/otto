<template>
  <div class="container-fluid ">
    <div class="row justify-content-center ">
      <div class="col-md-6">
        <h3 class="text-left mt-5">Editar</h3>

        <form @submit.prevent="onUpdateForm">
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
            <button class="btn btn-success mr-3">Editar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserEdit",
  data() {
    return {
      juego: {},
    };
  },
  computed: {
    ...mapGetters(["productos"]),
  },

  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      const message = window.confirm("Esta seguro de editar producto?");
      if (message === true) {
        this.$store.getters.productos.map((item) => {
          if (item.id == this.$route.params.id){
              item.cod= this.juego.cod
              item.name= this.juego.name
              item.stock= this.juego.stock
              item.price= this.juego.price
              return item;
            }          
        });
       
        alert("Se actualizó correctamente!!");
        this.$router.push("/listado");
      } else {
        this.$router.push("/listado");
      }
    },
  },
};
</script>
