<template>
	<div class="modal res">
		<div class="contres">
			<h2 class="titulores">!!! Correcto !!!</h2>
			<div class="imgres">
				<img src="https://moncada92.github.io/modelo-OSI/dist/true.svg" alt="">
			</div>
			<div class="contButton btn-res">
				<router-link :to="{name:'servicios'}">Siguiente Nivel</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	name: 'correcto',
	data (){
		return {
				
			}
		}
	}
</script>
<style>
	.contButton.btn-res{
	padding: 8px 0 0 0 ;
	text-align: center;
	}

	.contButton.btn-res a{
font-size: 20px;
	background:#FF5200;
	color: white;
	width: 150px;
	padding: 0.5em 0.6em;
	cursor: pointer;
	margin-top: 15px;
	border-radius: 5px;
	text-decoration: none;
	display: block;
	margin: 0 auto;
	}

	.imgres{
		padding-top: 10px;
	}
	.imgres img{
		width: 100px;
		text-align: center;
	}
	h2.titulores{
		font-weight: 600;
	}

	.res{
	position: fixed;
	justify-content: center;
	display: flex;
	flex-direction: column;
	background: rgba(0,0,0,0.8);
	color: white;
}
.contres{
	width: 90%;
	max-width: 500px;
	background: #009688;
	border-radius: 20px;
	padding: 0.5em 0.5em 0.5em 0.5em;
	box-sizing: border-box;
	margin:0 auto;
	transform: scale(0);
	animation: bounce-in .5s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  
}
</style>