// function calcularMedia(nota1 , nota2) {
//     nota1 = Number(prompt(`Digite um número:`))
//     nota2 = Number(prompt(`Digite outro número:`))
//    let media = (nota1 + nota2)/2
//    alert(`Sua média é: ${media}`)
//    return `Sua média é: ${media}`

// }
// calcularMedia()

// let notaAluno = 6.9
// if(notaAluno >= 7){
//     console.log("Aluno aprovado");
// }
// else if(notaAluno > 6){
//     console.log("Aluno aprovado por conselho");
// }
// else{
//     console.log("Aluno reprovado");
// }


function calcularImc () {
    let peso = Number(prompt(`Qaul seu peso?`))
    let altura = Number(prompt(`Qual sua altura`))
    let imc = peso / (altura * altura)

    if(imc < 16.9){
        alert(`Muito abaixo do peso`)
    }else if(imc > 17 && imc < 18.4){
        alert(`Abaixo do peso`)
    }
    else if(imc > 18.5 && imc < 24.9){
        alert(`Peso normal`)
    } else if(imc > 25 && imc < 29.9){
        alert(`Acima do peso`)
    } else if(imc > 30 && imc < 34.9){
        alert(`Obesidade grau 1`)
    } else if(imc > 35 && imc < 40){
        alert(`Obesidade grau 2`)
    } else if(imc > 40){
        alert(`Obesidade grau 3`)
    }else(
        alert(`Coloque valores validos`)
    )
}
calcularImc()
