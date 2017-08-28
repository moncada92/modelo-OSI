<template>

<div>

	<transition name="res">
		<correcto v-show="show"></correcto>
	</transition>

	<transition name="res">
		<incorrecto v-show="error"></incorrecto>
	</transition>	

	<transition name="intro">	
		<div class="modal v" v-show="showVideo">
			<h3>Video introductorio</h3>
			<p>Explicación del modelo OSI nivel de Red</p>
			<div class="contvideo">
				<iframe width="100%" height="100%;"  src="https://www.youtube.com/embed/Y-gMtmXc9bI" frameborder="0" allowfullscreen></iframe>
			</div>
			<div class="contButton">
				<button @click="showVideo = !showVideo" >Hecho</button>
			</div>
		</div>
	</transition>


	<h1 class="titleNivel">Nivel de Red</h1>
	<p class="pregunta"> ¿Cual es la funcion de la capa de red?</p>
	<form v-on:submit.prevent='submit'>
  	<div class="continput">
  		<label for="incorrecto1">
  				<div class="imagen"></div>
  				Conecta dos equipos a una red
  		</label>	
			<input  name="nivel1" type="radio" id="incorrecto1" value="respuesta1" required v-model="res">
		</div>
  	<div class="continput">
  		<label for="incorrecto2">
  				<div class="imagen"></div>
  				Hace la conexion a internet
  		</label>	
			<input  name="nivel1" type="radio" id="incorrecto2" value="respuesta2" required v-model="res">
		</div>
  	<div class="continput">
  		<label for="correcto">
  				<div class="imagen"></div>
  				Agregar la dirección IP y garantizar la entrega en conexiones confiables
  		</label>	
			<input  name="nivel1" type="radio" id="correcto" value="respuesta3" required v-model="res">
		</div>	

	<div class="contButton">
		<input type="submit" class="submit" value="Enviar">
	</div>	
	</form>
</div>
</template>

<script>

import correcto from './correcto.vue'
import incorrecto from './incorrecto.vue'
import estadoNiveles from '../../controlador/'

export default {
	name: 'nivel5',
	components:{correcto,incorrecto},
	data (){
		return {
			res:'',
			show:false,
			error:false,
			showVideo: true,
			nivel: ''
		}
	},
	methods:{
		submit: function(){
			//alert("submit: "+ this.res)
			if (this.res == 'respuesta3') {
					this.show= !this.show
					this.nivel = 'n3'
					estadoNiveles(this.nivel)
			}else{
				this.error = !this.error
				this.nivel = ''
			}
		}
	}
}
</script>

<style>

	.pregunta{
		padding: 0 0.7em;
		box-sizing: border-box;
		font-weight: bold;
	}

	form{
		padding-top: 15px;
	}

	.continput{
		padding: 5% 0;
	}

	.titleNivel{
		padding: 0.5em 0.3em;
		box-sizing: border-box;

	}
	.imagen{
		width: 150px;
		height: 150px;
		background: gray;
		margin: 0 auto;
		margin-bottom: 10px;
	}
	.contButton{
		margin-bottom: 10px;
		padding: 0.8em 0;
	}
	.submit{
		text-align: center;
		padding: 10px 20px;
		width: 160px;
		font-size: 20px;
	}
	.submit:focus{
		outline:0px;
	}

.v{
	position: fixed;
	justify-content: center;
	animation: intro 1s;
	animation-delay: 1s;
	opacity: 0;
	animation-fill-mode: forwards;
	display: flex;
	flex-direction: column;
	background: rgba(0,0,0,0.8);
}
.v h3,.v p{
	color: white;
}
.v p{
	font-weight: 500;
	margin:5px 0 20px 0;
}
@keyframes intro {
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
}
.intro-enter-active{
	animation: introo 0.5s reverse;
	animation-fill-mode: forwards;
}

.intro-leave-active{
	animation: introo 0.5s reverse;
	animation-fill-mode: forwards;
}

@keyframes introo {
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
}

.res-enter-active{
	animation: desplaces 0.3s;
}

.res-leave-active{
	animation: desplaces 0.3s reverse;
}

@keyframes desplaces {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

.contvideo{
	width: 90%;
	max-width: 500px;
	background: #009688;
	border-radius: 20px;
	padding: 4% 0.5em 0.5em 0.5em;
	box-sizing: border-box;
	margin:0 auto;
	transform: scale(0);
	animation: bounce-in .5s;
  animation-delay: 1.3s;
  animation-fill-mode: forwards;
  
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.contvideo iframe{
	border-radius: 20px;
}
.contButton button{
	font-size: 20px;
	background:#FF5200;
	color: white;
	width: 150px;
	padding: 0.5em 0.6em;
	cursor: pointer;
	margin-top: 15px;
	border-radius: 5px;

}
.continput label{
	margin: 0 auto;
	width: 80%;
}

</style>
