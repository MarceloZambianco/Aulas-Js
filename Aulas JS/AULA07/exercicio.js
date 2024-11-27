let elemento = window.document.getElementsByTagName('h2')
elemento[0].textContent = 'Lorem 1'
elemento[1].textContent = 'lorem 2'



let elemento02 = window.document.getElementsByTagName('li')
for (let contador = 0; contador < elemento02.length; contador++){
    elemento02[contador].style.backgroundColor = 'red';
    elemento02[contador].textContent = 'Marcelo' + (contador + 1)
}