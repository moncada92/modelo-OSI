<template>
  <div>
    
    <h4 >Hola estos son los niveles que deberas de pasar</h4>
    <p>¡Mucha suerte!</p>
  
    <div v-for="nivel in niveles">
      <router-link :to="{name:nivel.link}" class="niveles" v-bind:class="nivel.clase">
      {{ nivel.name }}
    </router-link>
    </div>



  </div>
</template>

<script>
import estadoNiveles from '../controlador/'



export default {
  name: 'app',
  data () {
    return {
      estilo:'',
     niveles: [
      {name: 'Nivel de aplicación', clase: 'n1', link:'nivel1'},
      {name: 'Nivel de presentación', clase: 'n2' , link:'nivel2'},
      {name: 'Nivel de sesión', clase: 'n3', link:'nivel3'},
      {name: 'Nivel de transporte', clase: 'n4', link:'nivel4'},
      {name: 'Nivel de red', clase: 'n5', link:'nivel5'},
      {name: 'Nivel de enlace de datos', clase: 'n6', link:'nivel6'},
      {name: 'Nivel físico', clase: 'n7', link:'nivel7'},

     ]
    }
  },
  methods:{
    nivelActuales: function (){
      alert("sds")
    }
  }
}
</script>

<style scope>

h4{
  margin-top: 20px;
  padding: 0.5em;
}
h4,p{
  text-align: center;
}
a.niveles{
  display: block;
  text-decoration: none;
  width: 80%;
  max-width: 450px;
  text-align: center;
  margin: 25px auto;
  color: black;
  border-radius: 5px;
  padding: 0.7em;
  box-sizing: border-box;
  background: #E0E0E0;
  box-shadow: 0em 0em 0.3em rgba(0,0,0,0.5);
}

.niveles.n1{background: #4DD0E1}
.niveles.n2{background: #26C6DA}
.niveles.n3{background: #00BCD4}
.niveles.n4{background: #00ACC1}
.niveles.n5{background: #0097A7;color:white;}
.niveles.n6{background: #00838F;color:white;}
.niveles.n7{background: #006064;color:white;}


</style>
