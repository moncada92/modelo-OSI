<template>
  <div class="container">
    
    

    <div class="contlogo">
      <img src="https://moncada92.github.io/modelo-OSI/dist/logoRedes-02.svg">
    </div>  

    <h1 class="title">{{ msg }}</h1> 

    <h4>
      Aprende a conocer cada una de las capas que conforman el modelo OSI, su funcionalidad y diviértete aprendiendo
    </h4>

    <router-link :to="{name:'servicios'}" v-on:click="show = !show" class="btn-inicio">
          Empezar
    </router-link>




  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
     msg: 'Modelo OSI'
    }
  }
}
</script>

<style>

.container{
  display: flex;
  flex-direction: column;
  justify-content: center; 
  box-sizing: border-box;
  padding-top: 10%;
}

h4{
  text-align: center;
  max-width: 400px;
  box-sizing: border-box;
  width: 100%;
  padding: 1.5em;
  margin: 0 auto 0 auto;

}

.title{
  background: -webkit-linear-gradient(#51AE42,#0098CC);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #51AE42; 
  font-weight: bold;
  padding: 20px 0 0 0;
}

.contlogo{
 /*margin-top: 10%;*/
}
.contlogo img{
    width: 100%;
    max-width: 200px;
}

.btn-inicio{
  padding: 0.5em 0.7em;
  color: white;
  background: #009688;
  display: inline-block;
  text-decoration: none;
  width: 100px;
  font-size: 24px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0em 0em 0.3em rgba(0,0,0,0.5);
}

</style>
