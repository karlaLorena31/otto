<template>
<div class="container">
  <div class="row ">
      <div class="table-responsive">
        <table class=" table table-sm table-hover text-center ">
          <thead>
            <tr >
             
              <th>Código</th>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio</th>
              
            </tr>
          </thead>
          <tbody class="table-success text-center ">
            <tr v-for="(juguete,index) in Juguetes"
              :key="index" class="tabla">            
               
              <td>
                <b>{{juguete.cod}}</b>
              </td>
              <td>{{juguete.name}}</td>
              <td>{{juguete.stock}}</td>
              <td>${{juguete.price}}</td>
              
               
             
            </tr>
          </tbody>
        </table>
      </div>
  </div>
 
 </div>
    
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            Juguetes:{}

        }
    },

    mounted() {
    // ranking vendores
    axios.get("./datos/juguetes.json")
      .then((response) => {
        this.Juguetes = response.data.juguetes;
        console.log(this.Juguetes);
      })
      .catch((error) => {
        console.log(error);
      });
    }
}
</script>

<style scoped>

.tabla{

  height: 50px;
  
}
.tabla >td{

  padding:20px;
}

</style>
