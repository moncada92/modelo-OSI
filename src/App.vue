<template>
  <div id="app">  
  
    <barramenu></barramenu>
    
    <transition name="fade">
      <router-view ></router-view>
    </transition>

  </div>
</template>

<script>

import barramenu from './components/menu.vue'

export default {
  name: 'app',
  components: {barramenu},
  data () {
    return {
      
    }
  }
}
</script>

<style>
html,body{
  height: 100%;
}
*{margin: 0;padding: 0;border-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgba(0,0,0,0.1);
  position: relative;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  display: block;
  margin-bottom: 10px
}
.fade-enter-active{
  animation:change 1s;
}


@keyframes change {
  0%{opacity: 0}
  100%{opacity: 1}
}


</style>
