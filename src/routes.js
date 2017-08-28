import home from './components/home.vue'
import servicios from './components/servicios.vue'
import nivel1 from './components/niveles/nivel1.vue'
import nivel2 from './components/niveles/nivel2.vue'
import nivel3 from './components/niveles/nivel3.vue'
import nivel4 from './components/niveles/nivel4.vue'
import nivel5 from './components/niveles/nivel5.vue'
import nivel6 from './components/niveles/nivel6.vue'
import nivel7 from './components/niveles/nivel7.vue'
import creditos from './components/creditos.vue'
import masinfo from './components/masinfo.vue'

const routes = [
// es importante definir la ruta(path) y asociarla con un componente(component)
	{ path: '/', component: home, name: 'home'},
	{ path: '/servicios', component: servicios, name: 'servicios'},
	{ path: '/servicios/nivel1', component: nivel1, name: 'nivel1'},
	{ path: '/servicios/nivel2', component: nivel2, name: 'nivel2'},
	{ path: '/servicios/nivel3', component: nivel3, name: 'nivel3'},
	{ path: '/servicios/nivel4', component: nivel4, name: 'nivel4'},
	{ path: '/servicios/nivel5', component: nivel5, name: 'nivel5'},
	{ path: '/servicios/nivel6', component: nivel6, name: 'nivel6'},
	{ path: '/servicios/nivel7', component: nivel7, name: 'nivel7'},
	{ path: '/creditos', component: creditos, name: 'creditos'},
	{ path: '/masinfo', component: masinfo, name: 'masinfo'}

]

export default routes
