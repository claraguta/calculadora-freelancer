var valorHora = document.querySelector("#valor-hora")

var horasNoProjeto = document.querySelector("#horas-projeto")

var spanResposta = document.querySelector("#resposta")

function calcular() {
   var qtPagamento = (valorHora.valueAsNumber * horasNoProjeto.valueAsNumber).toFixed(2)
   
    spanResposta.textContent = "Resposta: R$ " + qtPagamento    

}