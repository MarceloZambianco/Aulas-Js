// function calcularMedia(nota1 = 0 , nota2 = 0) {
//       let media = (nota1 + nota2)/2
//       console.log(`Sua média é: ${media}`);
//       return 
// }

// calcularMedia(10 , 20)



function calcularMedia(nota1 , nota2) {
     nota1 = Number(prompt(`Digite um número:`))
     nota2 = Number(prompt(`Digite outro número:`))
    let media = (nota1 + nota2)/2
    alert(`Sua média é: ${media}`)
    return `Sua média é: ${media}`

}
calcularMedia()