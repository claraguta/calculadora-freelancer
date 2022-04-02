// pegar o valor do input do quanto a pessoa ganha por mês
var inputGanhoMes = document.querySelector("#ganho-mes")

// pegar o valor do input de quantas horas serão trabalhadas
var inputHorasDia = document.querySelector("#horas-dia")

// orientar onde o resultado precisa ser visualizado - html
var spanResposta = document.querySelector("#resposta")

// var spanResposta1 = document.querySelector(".secao__rodape .secao__rodape__valor input")
// console.log(spanResposta1)

//fazer uma função que retorne o resultado e apareça na tela

function calcularValorHora() {
   var qtTotalDeHoras = inputHorasDia.valueAsNumber * 22
   //var qtTotalDeHoras = parseFloat(inputHorasDia.value) * 22
   
// calcular o resultado
    var resultadoValorHora = (inputGanhoMes.valueAsNumber / qtTotalDeHoras).toFixed(2)

    //var resultadoValorHora = parseFloat(inputGanhoMes.value / qtTotalDeHoras).toFixed(2)

    spanResposta.textContent = "R$ " + resultadoValorHora    

}



