// let estado = false;

// const mudarCor = () => {
//     const elemDiv = document.querySelector('#div1')
//     elemDiv.style.backgroundColor = 'red'
// };

// const corOriginal = () => {
//     const elemDiv = document.querySelector('#div1')
//     elemDiv.style.backgroundColor = 'white'
// };

// const clicar = () => {
//     const elemDiv = document.querySelector('#div1')
//     estado = !estado

//     if (estado) {
//         elemDiv.innerHTML = 'dudu'
//     } else {
//         elemDiv.innerHTML = 'Emerisu'
//     }
// };

// const calcularMedia = (n1 = 10, n2 = 5) => {
//     let media = (n1 + n2)/2
//     console.log(`A média do aluno é: ${media}`);
// }
// calcularMedia()

// const calcularMedia = (n1 = 0, n2 = 0) => {
//     let media = (n1 + n2)/2
//     return media
// }
// console.log(`A média do aluno é: ${calcularMedia (5, 10)}`);



const mudarCor = () => {
    let primeiraDiv = document.querySelector('div');
    primeiraDiv.style.backgroundColor = 'red'
}
const corOriginal = () => {
    let segundaDiv = document.querySelector(`div`)
    segundaDiv.style.backgroundColor = 'white'
}