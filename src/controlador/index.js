
const estadoNiveles = [
	{name: 'nivel1', class: 'n1', link: 'nivel1'},
	{name: 'nivel2', class: 'n', link: ''},
	{name: 'nivel3', class: '', link: ''},
	{name: 'nivel4', class: '', link: ''},
	{name: 'nivel5', class: '', link: ''},
	{name: 'nivel6', class: '', link: ''},
	{name: 'nivel7', class: '', link: ''}
]

export default function getNivel (nivel) {
  if (nivel === 'n2') {
    estadoNiveles[1].class = nivel
    // alert(estadoNiveles[1].class)
  }

  return estadoNiveles
}
