// document.getElementById


// let elemento01 = window.document.getElementById('tituloPrincipal');

// elemento01.style.color = 'red'
// elemento01.innerHTML = 'Marcelo'

// let elemento02 = window.document.getElementsByClassName('eleparagrafo');

// elemento02[0].style.color = 'red'

let elemento01 = window.document.getElementById('tituloPrincipal')

elemento01.style.color = 'red'
elemento01.innerHTML = 'Marcelo'

let elemento02 = window.document.getElementsByClassName('eleparagrafo')

for(let contador = 0; contador < elemento02.length; contador++) {
    elemento02[contador].innerHTML = 'Marcelo'
}