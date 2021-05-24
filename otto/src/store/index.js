import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import auth from "@/logic/auth";
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    juguetes: [
    {"id":1,"cod":"A0001","name": "Figura Cuphead ","stock":100,"price":9990},
    {"id":2,"cod":"A0002","name": "Figura Max Steel","stock":50,"price":8990},
    {"id":3,"cod":"A0003","name": "Auto Hot Wheels","stock":1000,"price":1190},
    {"id":4,"cod":"A0004","name": "Cartas españolas","stock":200,"price":990},
    {"id":5,"cod":"A0005","name": "Cartas inglesas","stock":200,"price":1490},
  { "id": 6, "cod": "A0006", "name": "Furby", "stock": 500, "price": 39990 },
    {"id":7,"cod":"A0007","name": "Figura Cuphead ","stock":100,"price":9990},
    {"id":8,"cod":"A0008","name": "Figura Max Steel","stock":50,"price":8990},
    {"id":9,"cod":"A0009","name": "Auto Hot Wheels","stock":1000,"price":1190},
    {"id":10,"cod":"A0010","name": "Cartas españolas","stock":200,"price":990},
    {"id":11,"cod":"A0011","name": "Cartas inglesas","stock":200,"price":1490},
    {"id":12,"cod":"A0012","name": "Furby","stock":500,"price":39990}  
    ],
      
  },
  getters: {
     productos(state) {
      return state.juguetes
     }
  },

  actions: {
    logout() {
      auth.deleteUserLogged();
    },

    deleteJuguete(state,id) {    
      if (window.confirm("Esta seguro eliminar?")){
             
           console.log(id)     
           this.state.juguetes.splice(id, 1)
          alert("Juguete eliminado!!!!");        
      }
    },
       
  },
  mutations: {
   
  },
   plugins: [new VuexPersistence().plugin]
  
 
})
