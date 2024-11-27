let estado = false;

const mudarCor = () => {
    const elemDiv = document.querySelector('#div1')
    elemDiv.style.backgroundColor = 'red'
};

const corOriginal = () => {
    const elemDiv = document.querySelector('#div1')
    elemDiv.style.backgroundColor = 'white'
};

const clicar = () => {
    const elemDiv = document.querySelector('#div1')
    estado = !estado

    if (estado) {
        elemDiv.innerHTML = 'dudu'
    } else {
        elemDiv.innerHTML = 'Emerisu'
    }
};
