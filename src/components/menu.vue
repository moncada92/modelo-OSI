<template>
	<header>
			
			<transition name="bounces">
				<div class="modal" v-show="showModal" @click="showModal = !showModal">
				
					<transition name="desplacesss">
						<div class="submenu" v-show="showModal">
							<img src="../assets/logoRedes-02.svg" alt="">
							<ul>
								<router-link :to="{name:'home'}">
									<li>Regresar</li>
								</router-link>
								<router-link :to="{name:'creditos'}">
									<li>Creditos</li>
								</router-link>
								<router-link :to="{name:'masinfo'}">
									<li>Más informtación</li>
								</router-link>
							</ul>
						</div>
					</transition>
					
				</div>
			</transition>
			<nav>
				<div><i @click="showModal = !showModal" class="fa fa-bars" aria-hidden="true"></i></div>
				<div></div>
			</nav>
	</header>

<!-- 	<div>
		<router-link :to="{name:'home'}" v-on:click="show = !show">
		      Ir al Home
		</router-link>

		<router-link :to="{name:'servicios'}" v-on:click="show = !show">
		      Ir al Servicios
		</router-link>
	</div> -->
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
     	showModal : false
    }
  },
  methods: {

  }
}
</script>
<style scope>

	nav{
		box-sizing: border-box;
		padding: 0.5em;
		background: #00695C;
		box-shadow: 0em 0em 0.5em rgba(0,0,0,0.5);
		display: flex;
		justify-content: space-between;
	}
	nav div i{
		color: white;
		cursor: pointer;
		font-size: 24px;
	}
  .modal{
    position: absolute;
    top: 0;
    bottom:0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
		z-index: 3;


  }
.bounces-enter-active {
  animation: bounces-in .5s;
}
.bounces-leave-active {
  animation: bounces-in .5s reverse;
}
@keyframes bounces-in {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

.submenu{
	width: 65%;
	height: 100%;
	background: white;
	box-shadow: 0em 0em 0.5em rgba(0,0,0,0.5);
	padding: 1em;
	box-sizing: border-box;
	transition: 1;
}

.submenu ul{
	padding: 20px 0;
}
.submenu ul li{
	font-size: 24px;
}

.desplacesss-enter-active{
	animation: desplacesss 0.3s;
}

.desplacesss-leave-active{
	animation: desplacesss 0.3s reverse;
}

@keyframes desplacesss {
  0% {
    transform: translate(-100%,0);
  }
  100% {
    transform: translate(0,0);
  }
}


	
</style>